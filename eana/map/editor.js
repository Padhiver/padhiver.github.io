/* =========================================================
   Eana — éditeur de repères de carte.

   Outil local, pas une page destinée aux visiteurs : ses textes
   restent en dur ici plutôt que dans data/strings.json, qui décrit
   le site publié.

   Enregistrement : POST vers /api/map-points, servi uniquement par
   scripts/dev-server.js (voir README). Sur GitHub Pages, qui ne
   sert que des fichiers, l'éditeur bascule sur le téléchargement
   du JSON à replacer à la main.
   ========================================================= */

(() => {
  const viewport = document.getElementById("map-viewport");
  const canvas = document.getElementById("map-canvas");
  const bgRoot = document.getElementById("map-bg");
  const pinsRoot = document.getElementById("map-pins");

  const dialog = document.getElementById("point-dialog");
  const dlgType = document.getElementById("dialog-type");
  const dlgArticle = document.getElementById("dialog-article");
  const dlgResults = document.getElementById("article-results");
  const dlgChosen = document.getElementById("article-chosen");
  const dlgLabel = document.getElementById("dialog-label");
  const dlgCoords = document.getElementById("dialog-coords");
  const dlgTitle = document.getElementById("dialog-title");
  const dlgDelete = document.getElementById("dialog-delete");

  const saveBtn = document.getElementById("save-btn");
  const saveState = document.getElementById("save-state");

  let view = null;
  let background = null;
  // "points" contient les repères de TOUTES les cartes : on n'édite que ceux
  // de la carte courante, mais l'enregistrement réécrit le fichier entier —
  // les autres cartes ne doivent pas disparaître au passage.
  let points = [];
  let currentMapId = "";
  let activeType = null;
  let selectedId = null;
  let dirty = false;
  let draft = null;       // point en cours d'édition dans la fenêtre
  let draftIsNew = false;
  let draftArticle = null;

  const esc = (s) => EanaRender.escapeHtml(s);

  // ---------- État d'enregistrement ----------

  function setDirty(v) {
    dirty = v;
    saveBtn.disabled = !v;
    saveState.textContent = v ? "Modifications non enregistrées" : "À jour";
    saveState.className = "save-state " + (v ? "dirty" : "saved");
  }

  window.addEventListener("beforeunload", (e) => {
    if (!dirty) return;
    e.preventDefault();
    e.returnValue = "";
  });

  // ---------- Identifiants ----------

  // Un id lisible dérivé du nom, suffixé si besoin pour rester unique.
  function makeId(base) {
    const slug = (base || "repere")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[ŒœÆæ]/g, (c) => ({ "Œ": "oe", "œ": "oe", "Æ": "ae", "æ": "ae" }[c]))
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "repere";
    if (!points.some((p) => p.id === slug)) return slug;
    let n = 2;
    while (points.some((p) => p.id === `${slug}-${n}`)) n += 1;
    return `${slug}-${n}`;
  }

  // ---------- Rendu des repères ----------

  function currentPoints() {
    return EanaMapPoints.pointsForMap(points, currentMapId);
  }

  function renderPins() {
    pinsRoot.innerHTML = currentPoints().map((p) => {
      const entry = p.article ? EanaData.getManifestEntry(p.article) : null;
      const label = esc(EanaMapPoints.labelFor(p, entry, "Lieu sans nom"));
      const iconSvg = EanaMapPoints.iconFor(p, entry);
      const plainClass = iconSvg ? "" : " map-pin-plain";
      const accent = EanaMapPoints.accentFor(p);
      const sel = p.id === selectedId ? " selected" : "";
      return `<button type="button" class="map-pin${sel}" style="left:${p.x}%;top:${p.y}%"
          data-point-id="${esc(p.id)}" data-accent="${accent}" aria-label="${label}">
        <span class="map-pin-scale${plainClass}">${iconSvg}</span>
        <span class="map-pin-label">${label}</span>
      </button>`;
    }).join("");
  }

  function renderList() {
    const filter = document.getElementById("point-filter").value.trim().toLowerCase();
    const list = document.getElementById("point-list");
    const onThisMap = currentPoints();
    document.getElementById("point-count").textContent = onThisMap.length;

    const shown = onThisMap.filter((p) => {
      if (!filter) return true;
      const entry = p.article ? EanaData.getManifestEntry(p.article) : null;
      return EanaMapPoints.labelFor(p, entry, "").toLowerCase().includes(filter);
    });

    if (!shown.length) {
      list.innerHTML = `<li class="point-list-empty">${onThisMap.length ? "Aucun repère ne correspond." : "Aucun repère sur cette carte. Choisis un type puis clique sur la carte."}</li>`;
      return;
    }

    list.innerHTML = shown.map((p) => {
      const entry = p.article ? EanaData.getManifestEntry(p.article) : null;
      const label = esc(EanaMapPoints.labelFor(p, entry, "Lieu sans nom"));
      const icon = EanaMapPoints.iconFor(p, entry) || EanaMapPoints.typeIconSvg("repere");
      // Un article renseigné mais introuvable = lien mort à signaler.
      const orphan = p.article && !entry;
      const meta = orphan
        ? `<span class="pl-meta pl-orphan">fiche introuvable</span>`
        : (p.article ? "" : `<span class="pl-meta">sans fiche</span>`);
      return `<li data-point-id="${esc(p.id)}" class="${p.id === selectedId ? "selected" : ""}">
        ${icon}<span class="pl-name">${label}</span>${meta}
      </li>`;
    }).join("");
  }

  function refresh() { renderPins(); renderList(); renderMapPicker(); }

  // ---------- Palette de types ----------

  function renderPalette() {
    const palette = document.getElementById("type-palette");
    palette.innerHTML = EanaMapPoints.getTypes().map((t) => `
      <button type="button" class="type-chip${t.id === activeType ? " active" : ""}" data-type="${esc(t.id)}">
        ${EanaMapPoints.typeIconSvg(t.id)}<span>${esc(t.label)}</span>
      </button>`).join("");

    dlgType.innerHTML = EanaMapPoints.getTypes()
      .map((t) => `<option value="${esc(t.id)}">${esc(t.label)}</option>`).join("");
  }

  // ---------- Sélecteur de cartes ----------

  function renderMapPicker() {
    const maps = EanaMapPoints.getMaps();
    document.getElementById("map-picker-section").hidden = maps.length < 2;
    if (maps.length < 2) return;

    document.getElementById("map-picker").innerHTML = maps.map((m) => {
      const n = EanaMapPoints.pointsForMap(points, m.id).length;
      return `<button type="button" class="type-chip${m.id === currentMapId ? " active" : ""}" data-map="${esc(m.id)}">
        ${EanaMapPoints.typeIconSvg("repere")}<span>${esc(m.label || m.id)}</span><span class="editor-count">${n}</span>
      </button>`;
    }).join("");
  }

  document.getElementById("map-picker").addEventListener("click", async (e) => {
    const chip = e.target.closest("[data-map]");
    if (!chip || chip.getAttribute("data-map") === currentMapId) return;
    selectedId = null;
    await showMap(chip.getAttribute("data-map"));
  });

  document.getElementById("type-palette").addEventListener("click", (e) => {
    const chip = e.target.closest(".type-chip");
    if (!chip) return;
    activeType = chip.getAttribute("data-type");
    renderPalette();
  });

  // ---------- Sélection d'une fiche ----------

  function searchArticles(query) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    // Recherche sur toutes les fiches, y compris OFF : l'éditeur est un outil
    // de maître, il doit pouvoir poser un repère sur une fiche en préparation.
    return EanaData.getAllArticles()
      .filter((a) => a.title.toLowerCase().includes(q))
      .slice(0, 12);
  }

  function renderResults(results) {
    if (!results.length) { dlgResults.hidden = true; return; }
    dlgResults.hidden = false;
    dlgResults.innerHTML = results.map((a) => `
      <li data-article-id="${esc(a.id)}">
        <span>${esc(a.title)}</span>
        <span class="ar-cat${a.public === "OFF" ? " ar-off" : ""}">${a.public === "OFF" ? "privée · " : ""}${esc(a.category)}</span>
      </li>`).join("");
  }

  function setDraftArticle(id) {
    draftArticle = id || null;
    const entry = id ? EanaData.getManifestEntry(id) : null;
    dlgChosen.textContent = entry ? `Fiche liée : ${entry.title}` : "Aucune fiche liée";
    dlgChosen.className = "article-chosen" + (entry ? " has-article" : "");
  }

  dlgArticle.addEventListener("input", () => renderResults(searchArticles(dlgArticle.value)));
  dlgResults.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-article-id]");
    if (!li) return;
    setDraftArticle(li.getAttribute("data-article-id"));
    dlgArticle.value = "";
    dlgResults.hidden = true;
  });

  // ---------- Fenêtre d'édition ----------

  function openDialog(point, isNew) {
    draft = point;
    draftIsNew = isNew;
    dlgTitle.textContent = isNew ? "Nouveau repère" : "Modifier le repère";
    dlgType.value = point.type || activeType || (EanaMapPoints.getTypes()[0] || {}).id || "";
    dlgLabel.value = point.label || "";
    dlgArticle.value = "";
    dlgResults.hidden = true;
    setDraftArticle(point.article || null);
    dlgCoords.textContent = `Position : ${point.x.toFixed(1)} % / ${point.y.toFixed(1)} %`;
    dlgDelete.hidden = isNew;
    dialog.hidden = false;
    dlgArticle.focus();
  }

  function closeDialog() {
    dialog.hidden = true;
    draft = null;
    draftArticle = null;
  }

  document.querySelectorAll("[data-dialog-close]").forEach((b) => b.addEventListener("click", () => {
    // Annuler la création d'un repère doit le retirer de la carte.
    if (draftIsNew && draft) points = points.filter((p) => p.id !== draft.id);
    closeDialog();
    refresh();
  }));

  document.getElementById("dialog-ok").addEventListener("click", () => {
    if (!draft) return;
    const target = points.find((p) => p.id === draft.id);
    if (!target) return;

    target.type = dlgType.value || undefined;
    target.article = draftArticle || undefined;
    const label = dlgLabel.value.trim();
    if (label) target.label = label; else delete target.label;
    if (!target.article) delete target.article;

    // Renomme l'id d'un repère neuf d'après son contenu, pour un JSON lisible.
    if (draftIsNew) {
      const entry = target.article ? EanaData.getManifestEntry(target.article) : null;
      const base = target.label || (entry ? entry.title : target.type);
      const newId = makeId(base);
      if (newId !== target.id) target.id = newId;
    }

    selectedId = target.id;
    closeDialog();
    setDirty(true);
    refresh();
  });

  dlgDelete.addEventListener("click", () => {
    if (!draft) return;
    points = points.filter((p) => p.id !== draft.id);
    selectedId = null;
    closeDialog();
    setDirty(true);
    refresh();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dialog.hidden) {
      if (draftIsNew && draft) points = points.filter((p) => p.id !== draft.id);
      closeDialog();
      refresh();
    }
  });

  // ---------- Interaction carte ----------

  function onMapClick(pos) {
    if (pos.x < 0 || pos.x > 100 || pos.y < 0 || pos.y > 100) return; // hors carte
    const type = activeType || (EanaMapPoints.getTypes()[0] || {}).id;
    const point = { id: makeId("repere"), map: currentMapId, type, x: +pos.x.toFixed(2), y: +pos.y.toFixed(2) };
    points.push(point);
    selectedId = point.id;
    refresh();
    openDialog(point, true);
  }

  // Déplacement d'un repère existant : glisser depuis le repère lui-même.
  let dragPin = null;
  pinsRoot.addEventListener("pointerdown", (e) => {
    const pin = e.target.closest(".map-pin");
    if (!pin) return;
    e.stopPropagation(); // ne pas déclencher le pan de la carte
    const id = pin.getAttribute("data-point-id");
    dragPin = { id, moved: false, startX: e.clientX, startY: e.clientY };
    pin.setPointerCapture(e.pointerId);
  });

  pinsRoot.addEventListener("pointermove", (e) => {
    if (!dragPin) return;
    if (Math.hypot(e.clientX - dragPin.startX, e.clientY - dragPin.startY) > 4) dragPin.moved = true;
    if (!dragPin.moved) return;
    const pos = view.screenToMapPercent(e.clientX, e.clientY);
    const p = points.find((x) => x.id === dragPin.id);
    if (!p) return;
    p.x = +Math.min(100, Math.max(0, pos.x)).toFixed(2);
    p.y = +Math.min(100, Math.max(0, pos.y)).toFixed(2);
    const el = pinsRoot.querySelector(`[data-point-id="${CSS.escape(dragPin.id)}"]`);
    if (el) { el.style.left = `${p.x}%`; el.style.top = `${p.y}%`; }
  });

  pinsRoot.addEventListener("pointerup", (e) => {
    if (!dragPin) return;
    const { id, moved } = dragPin;
    dragPin = null;
    const p = points.find((x) => x.id === id);
    if (!p) return;
    selectedId = id;
    if (moved) { setDirty(true); refresh(); }
    else { refresh(); openDialog(p, false); }
  });

  document.getElementById("point-list").addEventListener("click", (e) => {
    const li = e.target.closest("li[data-point-id]");
    if (!li) return;
    const p = points.find((x) => x.id === li.getAttribute("data-point-id"));
    if (!p) return;
    selectedId = p.id;
    refresh();
    openDialog(p, false);
  });

  document.getElementById("point-filter").addEventListener("input", renderList);

  // ---------- Enregistrement ----------

  function pointsPayload() {
    // Ordre de clés stable, repères groupés par carte (dans l'ordre de
    // data/map-config.json) et champs vides omis : le fichier reste lisible
    // à la main et les diffs git restent courts.
    const order = EanaMapPoints.getMaps().map((m) => m.id);
    const sorted = points.slice().sort((a, b) => {
      const d = order.indexOf(EanaMapPoints.mapIdOf(a)) - order.indexOf(EanaMapPoints.mapIdOf(b));
      return d;
    });
    return {
      points: sorted.map((p) => {
        const out = { id: p.id };
        out.map = EanaMapPoints.mapIdOf(p);
        if (p.type) out.type = p.type;
        if (p.article) out.article = p.article;
        if (p.label) out.label = p.label;
        out.x = p.x;
        out.y = p.y;
        return out;
      }),
    };
  }

  saveBtn.addEventListener("click", async () => {
    saveBtn.disabled = true;
    saveState.textContent = "Enregistrement…";
    try {
      const res = await fetch("api/map-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pointsPayload()),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `HTTP ${res.status}`);
      }
      setDirty(false);
    } catch (err) {
      setDirty(true);
      saveState.textContent = "Échec — utilise Télécharger";
      saveState.className = "save-state dirty";
      console.error("Enregistrement impossible :", err);
      alert(
        "Enregistrement direct impossible.\n\n" +
        "L'écriture n'est possible que via le serveur local " +
        "(node scripts/dev-server.js). Utilise le bouton « Télécharger » " +
        "et remplace data/map-points.json à la main.\n\nDétail : " + err.message
      );
    }
  });

  document.getElementById("download-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(pointsPayload(), null, 2) + "\n"], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "map-points.json";
    a.click();
    URL.revokeObjectURL(a.href);
  });

  // ---------- Démarrage ----------

  async function loadIcons() {
    const entries = await Promise.all(EanaData.getCategories().map(async (c) => {
      const res = await fetch(`images/ui/icon-${c.icon}.svg`);
      return [c.id, await res.text()];
    }));
    EanaRender.setIcons(Object.fromEntries(entries));
  }

  async function showMap(mapId) {
    currentMapId = EanaMapPoints.resolveMapId(mapId);
    try { localStorage.setItem("eana_editor_map", currentMapId); } catch (e) { /* sans mémoire */ }
    pinsRoot.innerHTML = "";
    try {
      const size = await background.load(EanaMapPoints.getMap(currentMapId));
      view.setSize(size.width, size.height);
      view.fit();
    } catch (err) {
      console.error(err);
      alert("Image de carte illisible pour « " + currentMapId + " » : " + err.message);
    }
    refresh();
  }

  // L'éditeur est publié avec le site (c'est un fichier statique de plus),
  // mais sa recherche liste TOUTES les fiches, y compris les "OFF" — ce qui
  // révélerait leurs titres à quiconque connaît l'URL. Il ne s'exécute donc
  // que servi depuis la machine locale, où il a de toute façon besoin du
  // serveur de développement pour enregistrer.
  function blockIfNotLocal() {
    const h = window.location.hostname;
    if (h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1") return false;

    document.body.innerHTML = `
      <div class="served-warning">
        <h1>Outil local uniquement</h1>
        <p>L'éditeur de repères ne fonctionne que depuis ta machine : il
        travaille sur les fichiers du dépôt et liste aussi les fiches privées.</p>
        <p>Depuis le dossier <code>eana/</code>, lance :</p>
        <pre>node scripts/dev-server.js 8080</pre>
        <p>puis ouvre <a href="http://localhost:8080/map/editor.html">http://localhost:8080/map/editor.html</a></p>
        <p><a href="map/">← Voir la carte</a></p>
      </div>`;
    return true;
  }

  async function start() {
    if (EanaData.blockIfFileProtocol()) return;
    if (blockIfNotLocal()) return;
    await Promise.all([EanaData.init(), EanaI18n.init(), EanaMapPoints.initTypes()]);
    let mapConfig;
    [points, mapConfig] = await Promise.all([
      EanaMapPoints.loadPoints(),
      EanaMapPoints.loadConfig(),
    ]);
    await loadIcons();

    EanaTheme.wireToggle();
    activeType = (EanaMapPoints.getTypes()[0] || {}).id || null;
    renderPalette();

    background = EanaMapBackground.create({ root: bgRoot });

    view = EanaMapView.create({
      viewport,
      canvas,
      onScaleChange: (s) => pinsRoot.style.setProperty("--pin-scale", 1 / s),
      onViewChange: (rect, scale) => background.update(rect, scale),
      onMapClick,
    });
    view.wire({ ignoreSelector: ".map-pin" });

    document.getElementById("zoom-in").addEventListener("click", () => view.zoomByFactor(1.4));
    document.getElementById("zoom-out").addEventListener("click", () => view.zoomByFactor(1 / 1.4));
    document.getElementById("zoom-reset").addEventListener("click", () => view.fit());

    // Même source que la carte publique (data/map-config.json), pour que
    // l'éditeur ne puisse pas travailler sur une image différente. On rouvre
    // la carte de la dernière session : on édite rarement les deux à la fois.
    let remembered = null;
    try { remembered = localStorage.getItem("eana_editor_map"); } catch (e) { /* sans mémoire */ }
    setDirty(false);
    await showMap(remembered || mapConfig.defaultMapId);
  }

  start();
})();
