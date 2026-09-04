/* =========================================================
   Valisthéa — découpe d'une carte en tuiles (outil local).

   Une carte du monde en un seul fichier devient vite trop
   lourde à charger. Cet outil la coupe en une grille de tuiles
   plus un aperçu réduit, écrit le tout dans images/map/ et met
   à jour data/map-config.json — après quoi il n'y a plus qu'à
   publier sur git.

   Il coupe aux mêmes bornes que l'affichage (voir
   EanaMapBackground.tileRects) : c'est la seule façon d'être sûr
   que les tuiles se réassemblent sans liseré.

   Comme map/editor.html, c'est un outil de dépôt : ses textes
   restent en dur ici plutôt que dans data/strings.json, qui
   décrit le site publié.
   ========================================================= */

(() => {
  const mapSelect = document.getElementById("map-select");
  const sourceFile = document.getElementById("source-file");
  const sourceState = document.getElementById("source-state");
  const forecast = document.getElementById("grid-forecast");
  const cutBtn = document.getElementById("cut-btn");
  const saveBtn = document.getElementById("save-btn");
  const cutState = document.getElementById("cut-state");
  const logRoot = document.getElementById("tiles-log");
  const previewRoot = document.getElementById("tiles-preview");

  // Repères de dimensionnement. Ce ne sont pas des limites dures : l'outil
  // découpe quand même, mais il le dit — une carte trop lourde ne se voit
  // sinon qu'au moment de publier, quand il est tard.
  const CIBLE_TUILE_PX = 2200;      // côté visé pour une tuile
  const ALERTE_TUILE_PX = 4500;     // au-delà, une tuile est pénible à décoder
  const ALERTE_TUILE_OCTETS = 8e6;
  const ALERTE_TOTAL_OCTETS = 60e6;
  const LIMITE_ENVOI_OCTETS = 64e6; // aligné sur MAX_IMAGE (scripts/map-api.js)

  let sourceImage = null;   // HTMLImageElement chargée, prête à découper
  let sourceLabel = "";
  let result = null;        // { dir, tiles: [{name, blob}], preview, config }

  // ---------- Journal ----------

  function log(text, kind) {
    const li = document.createElement("li");
    li.className = kind ? `tiles-log-${kind}` : "";
    li.textContent = text;
    logRoot.appendChild(li);
    logRoot.scrollTop = logRoot.scrollHeight;
  }

  function setState(text, kind) {
    cutState.textContent = text;
    cutState.className = "save-state" + (kind ? ` ${kind}` : "");
  }

  const ko = (bytes) => (bytes >= 1e6
    ? `${(bytes / 1e6).toFixed(1)} Mo`
    : `${(bytes / 1024).toFixed(0)} Ko`);

  // ---------- Dimensionnement ----------

  function readIntField(id, fallback) {
    const n = Number(document.getElementById(id).value);
    return Number.isFinite(n) ? n : fallback;
  }

  // Dimensions de la carte une fois réduite. "ratio" est le facteur appliqué
  // à la source : il sert à retrouver, pour chaque case, la zone d'origine à
  // y dessiner.
  function effectiveSize() {
    const sw = sourceImage.naturalWidth;
    const sh = sourceImage.naturalHeight;
    const maxW = Math.max(0, readIntField("max-width", 0));
    if (!maxW || sw <= maxW) return { width: sw, height: sh, ratio: 1 };
    return { width: maxW, height: Math.round((sh * maxW) / sw), ratio: maxW / sw };
  }

  // Grille conseillée : des tuiles d'environ CIBLE_TUILE_PX de côté.
  function suggestGrid(width, height) {
    const clamp = (n) => Math.max(1, Math.min(16, Math.round(n)));
    return { cols: clamp(width / CIBLE_TUILE_PX), rows: clamp(height / CIBLE_TUILE_PX) };
  }

  // Annonce le résultat AVANT de lancer l'encodage : sur une source de
  // plusieurs centaines de mégapixels, découper prend des minutes, et
  // découvrir après coup que les tuiles font 9 000 px de côté oblige à tout
  // recommencer.
  function updateForecast() {
    if (!sourceImage) { forecast.textContent = "—"; forecast.className = "editor-hint"; return; }

    const { width, height, ratio } = effectiveSize();
    const cols = Math.max(1, Math.min(16, readIntField("cols", 3)));
    const rows = Math.max(1, Math.min(16, readIntField("rows", 3)));
    const tw = Math.round(width / cols);
    const th = Math.round(height / rows);

    const parts = [ratio < 1
      ? `Carte réduite à ${width} × ${height} px (${(ratio * 100).toFixed(0)} % de la source).`
      : `Carte à ${width} × ${height} px (pleine résolution).`];
    parts.push(`${cols * rows} tuiles d'environ ${tw} × ${th} px.`);

    const trop = Math.max(tw, th) > ALERTE_TUILE_PX;
    if (trop) {
      const s = suggestGrid(width, height);
      parts.push(`Tuiles trop grandes : vise ${s.cols} × ${s.rows}, ou baisse la largeur maximale.`);
    }
    forecast.textContent = parts.join(" ");
    forecast.className = "editor-hint" + (trop ? " editor-hint-warn" : "");
  }

  ["cols", "rows", "max-width"].forEach((id) => {
    document.getElementById(id).addEventListener("input", updateForecast);
  });

  // ---------- Chargement de l'image source ----------

  function loadImage(src, label) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener("load", () => resolve(img));
      img.addEventListener("error", () => reject(new Error(`Image illisible : ${label}`)));
      img.src = src;
    });
  }

  function describeSource() {
    if (!sourceImage) {
      sourceState.textContent = "Aucune image chargée.";
      cutBtn.disabled = true;
      updateForecast();
      return;
    }
    const w = sourceImage.naturalWidth;
    const h = sourceImage.naturalHeight;
    sourceState.textContent = `${sourceLabel} — ${w} × ${h} px (${((w * h) / 1e6).toFixed(0)} Mpx)`;
    cutBtn.disabled = false;

    // Grille pré-remplie d'après la taille réelle : 3 × 3 ne convient qu'à
    // une carte de quelques milliers de pixels.
    const { width, height } = effectiveSize();
    const s = suggestGrid(width, height);
    document.getElementById("cols").value = s.cols;
    document.getElementById("rows").value = s.rows;
    updateForecast();
  }

  async function useConfiguredImage() {
    sourceImage = null;
    result = null;
    saveBtn.disabled = true;
    const map = EanaMapPoints.getMap(mapSelect.value);

    if (!map || (!map.image && !map.tiles)) {
      sourceState.textContent = "Cette carte n'a pas d'image déclarée. Choisis un fichier.";
      cutBtn.disabled = true;
      return;
    }
    if (map.tiles) {
      // Déjà découpée : les tuiles ne se recollent pas d'elles-mêmes, il faut
      // repartir de l'image d'origine.
      sourceState.textContent = "Carte déjà en tuiles. Choisis le fichier d'origine pour la recouper.";
      cutBtn.disabled = true;
      return;
    }

    sourceState.textContent = "Chargement de l'image…";
    try {
      sourceImage = await loadImage(map.image, map.image);
      sourceLabel = map.image;
      describeSource();
    } catch (err) {
      sourceState.textContent = err.message;
      cutBtn.disabled = true;
    }
  }

  mapSelect.addEventListener("change", useConfiguredImage);

  sourceFile.addEventListener("change", async () => {
    const file = sourceFile.files && sourceFile.files[0];
    if (!file) return;
    result = null;
    saveBtn.disabled = true;
    sourceState.textContent = "Chargement de l'image…";
    const url = URL.createObjectURL(file);
    try {
      sourceImage = await loadImage(url, file.name);
      sourceLabel = file.name;
      describeSource();
    } catch (err) {
      sourceState.textContent = err.message;
      cutBtn.disabled = true;
    } finally {
      URL.revokeObjectURL(url);
    }
  });

  // ---------- Découpe ----------

  // Extrait une zone de l'image source vers un WEBP. On ne dessine jamais la
  // carte entière sur un canvas : à 26 000 × 19 000 px cela ferait deux
  // gigaoctets de pixels d'un coup. Chaque case est tirée directement de
  // l'image, et réduite au passage si la carte publiée est plus petite.
  function cropToBlob(sx, sy, sw, sh, dw, dh, quality) {
    const canvas = document.createElement("canvas");
    canvas.width = dw;
    canvas.height = dh;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, dw, dh);
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("Encodage WEBP refusé par le navigateur."))),
        "image/webp",
        quality
      );
    });
  }

  async function cut() {
    const cols = Math.max(1, Math.min(16, readIntField("cols", 3)));
    const rows = Math.max(1, Math.min(16, readIntField("rows", 3)));
    const quality = Math.max(0.5, Math.min(1, readIntField("quality", 0.85)));
    const previewWidth = Math.max(0, Math.min(4000, readIntField("preview-width", 1600)));

    // La carte publiée peut être plus petite que la source : les cases sont
    // calculées sur les dimensions réduites, et chaque case va chercher dans
    // la source la zone correspondante.
    const { width, height, ratio } = effectiveSize();
    const dir = mapSelect.value;

    cutBtn.disabled = true;
    saveBtn.disabled = true;
    logRoot.innerHTML = "";
    previewRoot.innerHTML = "";
    setState("Découpe en cours…");
    log(`Source : ${sourceLabel} (${sourceImage.naturalWidth} × ${sourceImage.naturalHeight} px)`);
    if (ratio < 1) log(`Carte réduite à ${width} × ${height} px (${(ratio * 100).toFixed(0)} % de la source).`);

    const rects = EanaMapBackground.tileRects(width, height, cols, rows);
    const tiles = [];
    let total = 0;
    let done = 0;

    for (const r of rects) {
      // eslint-disable-next-line no-await-in-loop -- une case à la fois, pour
      // ne pas garder plusieurs canvas pleine résolution en mémoire.
      const blob = await cropToBlob(
        r.x / ratio, r.y / ratio, r.w / ratio, r.h / ratio,
        r.w, r.h, quality
      );
      const name = `tuile-${r.col}-${r.row}.webp`;
      tiles.push({ name, blob, rect: r });
      total += blob.size;
      done += 1;
      setState(`Découpe… ${done}/${rects.length}`);
      log(`${name} — ${r.w} × ${r.h} px, ${ko(blob.size)}`);
    }

    let preview = null;
    if (previewWidth) {
      const ph = Math.max(1, Math.round((previewWidth * height) / width));
      const blob = await cropToBlob(
        0, 0, sourceImage.naturalWidth, sourceImage.naturalHeight,
        previewWidth, ph, quality
      );
      preview = { name: "apercu.webp", blob };
      total += blob.size;
      log(`apercu.webp — ${previewWidth} × ${ph} px, ${ko(blob.size)}`);
    }

    result = {
      dir,
      tiles,
      preview,
      config: {
        cols, rows, width, height,
        pattern: `images/map/${dir}/tuile-{col}-{row}.webp`,
        ...(preview ? { preview: `images/map/${dir}/apercu.webp` } : {}),
      },
    };

    renderPreview();
    log(`Total : ${tiles.length} tuile(s)${preview ? " + aperçu" : ""}, ${ko(total)}.`, "ok");
    const bloquant = avertirSurLePoids(tiles, total);

    setState(bloquant ? "Découpé — trop gros pour être écrit" : "Découpé — reste à écrire", "dirty");
    cutBtn.disabled = false;
    saveBtn.disabled = bloquant;
  }

  // Rien n'est interdit, mais mieux vaut le dire ici qu'au moment où git
  // refuse le fichier ou que la page rame chez un lecteur.
  function avertirSurLePoids(tiles, total) {
    const impossible = tiles.filter((t) => t.blob.size > LIMITE_ENVOI_OCTETS);
    const lourdes = tiles.filter((t) => t.blob.size > ALERTE_TUILE_OCTETS);

    if (impossible.length) {
      log(
        `${impossible.length} tuile(s) dépassent ${ko(LIMITE_ENVOI_OCTETS)} et ne peuvent pas être écrites. `
        + "Redécoupe en plus de cases, ou baisse la largeur maximale.",
        "error"
      );
    } else if (lourdes.length) {
      log(
        `${lourdes.length} tuile(s) dépassent ${ko(ALERTE_TUILE_OCTETS)} : longues à charger pour un lecteur. `
        + "Plus de cases, ou une largeur maximale plus basse, les allégeraient.",
        "warn"
      );
    }
    if (total > ALERTE_TOTAL_OCTETS) {
      log(
        `${ko(total)} au total à ajouter au dépôt. GitHub refuse tout fichier au-delà de 100 Mo, `
        + "et un dépôt de cette taille devient long à cloner. La largeur maximale est le réglage qui pèse le plus.",
        "warn"
      );
    }
    return impossible.length > 0;
  }

  // Aperçu de l'assemblage : les tuiles telles qu'elles seront recollées,
  // pour voir tout de suite un décalage ou une case manquante.
  function renderPreview() {
    previewRoot.style.setProperty("--cols", result.config.cols);
    previewRoot.innerHTML = "";
    result.tiles.forEach((t) => {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(t.blob);
      img.alt = t.name;
      img.title = `${t.name} — ${t.rect.w} × ${t.rect.h} px`;
      img.addEventListener("load", () => URL.revokeObjectURL(img.src));
      previewRoot.appendChild(img);
    });
  }

  cutBtn.addEventListener("click", () => {
    cut().catch((err) => {
      console.error(err);
      log(err.message, "error");
      setState("Échec de la découpe", "dirty");
      cutBtn.disabled = false;
    });
  });

  // ---------- Écriture dans le dépôt ----------

  // Distingue les deux échecs possibles, qui appellent des gestes opposés :
  // le serveur qui ne répond pas, et le serveur qui refuse le contenu.
  async function post(url, options) {
    let res;
    try {
      res = await fetch(url, { method: "POST", ...options });
    } catch (err) {
      throw new Error(
        `Le serveur local n'a pas répondu (${err.message}). `
        + "Vérifie que « node scripts/dev-server.js » tourne toujours dans son terminal."
      );
    }
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Refusé par le serveur (HTTP ${res.status}).`);
    }
    return res.json();
  }

  // Les octets partent tels quels : passer par du base64 dans du JSON gonfle
  // le corps d'un tiers et oblige à construire en mémoire une chaîne aussi
  // grosse que le fichier.
  function postTile(dir, name, blob) {
    const q = `dir=${encodeURIComponent(dir)}&name=${encodeURIComponent(name)}`;
    return post(`api/map-tile?${q}`, {
      headers: { "Content-Type": "application/octet-stream" },
      body: blob,
    });
  }

  async function saveToRepo() {
    saveBtn.disabled = true;
    setState("Écriture…");

    const files = result.tiles.concat(result.preview ? [result.preview] : []);

    // Vérifié avant d'envoyer quoi que ce soit : mieux vaut refuser tout de
    // suite que d'écrire la moitié des tuiles puis échouer au milieu.
    const trop = files.filter((f) => f.blob.size > LIMITE_ENVOI_OCTETS);
    if (trop.length) {
      throw new Error(
        `${trop.length} fichier(s) dépassent la limite d'envoi de ${ko(LIMITE_ENVOI_OCTETS)} `
        + `(le plus gros : ${trop[0].name}, ${ko(trop[0].blob.size)}). `
        + "Redécoupe en plus de cases ou avec une largeur maximale plus basse."
      );
    }

    let done = 0;
    for (const f of files) {
      // eslint-disable-next-line no-await-in-loop -- un fichier par requête,
      // pour ne pas garder toutes les tuiles en vol simultanément.
      await postTile(result.dir, f.name, f.blob);
      done += 1;
      setState(`Écriture… ${done}/${files.length}`);
      log(`écrit : images/map/${result.dir}/${f.name} (${ko(f.blob.size)})`, "ok");
    }

    await post("api/map-source", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mapId: result.dir, tiles: result.config }),
    });
    log(`data/map-config.json : la carte « ${result.dir} » utilise désormais ses tuiles.`, "ok");
    setState("Écrit — pense à publier sur git", "saved");
  }

  saveBtn.addEventListener("click", () => {
    saveToRepo().catch((err) => {
      console.error(err);
      log(err.message, "error");
      setState("Échec de l'écriture", "dirty");
      saveBtn.disabled = false;
    });
  });

  // ---------- Démarrage ----------

  // Même raison que pour l'éditeur : cet outil écrit dans le dépôt et n'a de
  // sens que servi depuis la machine locale.
  function blockIfNotLocal() {
    const h = window.location.hostname;
    if (h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1") return false;

    document.body.innerHTML = `
      <div class="served-warning">
        <h1>Outil local uniquement</h1>
        <p>La découpe en tuiles écrit des fichiers dans le dépôt : elle ne
        fonctionne que depuis ta machine.</p>
        <p>Depuis le dossier <code>valisthea/</code>, lance :</p>
        <pre>node scripts/dev-server.js 8080</pre>
        <p>puis ouvre <a href="http://localhost:8080/map/tiles.html">http://localhost:8080/map/tiles.html</a></p>
        <p><a href="map/">← Voir la carte</a></p>
      </div>`;
    return true;
  }

  async function start() {
    if (EanaData.blockIfFileProtocol()) return;
    if (blockIfNotLocal()) return;

    // EanaTheme lit ses libellés dans data/strings.json : i18n d'abord.
    const [, { defaultMapId }] = await Promise.all([
      EanaI18n.init(),
      EanaMapPoints.loadConfig(),
    ]);
    EanaTheme.wireToggle();

    // Les libellés viennent d'un fichier que l'on édite à la main : on les
    // échappe plutôt que de supposer qu'ils sont sans surprise.
    const esc = (v) => String(v).replace(/[&<>"]/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]
    ));
    mapSelect.innerHTML = EanaMapPoints.getMaps()
      .map((m) => `<option value="${esc(m.id)}">${esc(m.label || m.id)}</option>`).join("");
    mapSelect.value = defaultMapId;

    setState("Prêt");
    await useConfiguredImage();
  }

  start();
})();
