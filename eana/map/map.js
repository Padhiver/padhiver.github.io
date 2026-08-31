/* =========================================================
   Eana — carte interactive : repères cliquables.
   Le pan/zoom vit dans js/mapview.js, le fond (image ou tuiles)
   dans js/mapbackground.js et le dessin des repères dans
   js/mappoints.js — tous partagés avec l'éditeur ; ce fichier
   n'a que le câblage propre à la page publique et son routage.

   Hash : #/carte/<carte>, éventuellement suivi de
   /article/<fiche>. L'ancienne forme #/article/<fiche>, sans
   carte, reste comprise (elle ouvre la carte par défaut).
   ========================================================= */

(() => {
  const viewport = document.getElementById("map-viewport");
  const canvas = document.getElementById("map-canvas");
  const bgRoot = document.getElementById("map-bg");
  const pinsRoot = document.getElementById("map-pins");
  const zonesRoot = document.getElementById("map-zones");
  const overlayRoot = document.getElementById("overlay-root");
  const pickerRoot = document.getElementById("map-picker");

  let allPoints = [];
  let currentMapId = "";
  let view = null;
  let background = null;
  let currentSize = null;   // dimensions de la carte affichée, en pixels
  // Un changement de carte est asynchrone (chargement d'image) : ce jeton
  // permet d'ignorer une réponse arrivée après qu'on a changé d'avis.
  let loadToken = 0;

  // ---------- Sélecteur de cartes ----------

  function renderPicker() {
    const maps = EanaMapPoints.getMaps();
    // Un sélecteur d'un seul élément n'apprend rien et mange de la hauteur.
    pickerRoot.hidden = maps.length < 2;
    if (maps.length < 2) return;

    pickerRoot.innerHTML = maps.map((m) => `
      <button type="button" class="chip map-chip${m.id === currentMapId ? " active" : ""}"
        data-map="${EanaRender.escapeHtml(m.id)}"
        aria-current="${m.id === currentMapId ? "page" : "false"}">
        ${EanaRender.escapeHtml(m.label || m.id)}
      </button>`).join("");
  }

  pickerRoot.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-map]");
    if (!chip) return;
    const id = chip.getAttribute("data-map");
    if (id === currentMapId) return;
    // Changer de carte ferme la fiche ouverte : elle appartenait à l'autre.
    window.location.hash = buildHash(id, null);
  });

  // ---------- Repères ----------

  function visiblePoints() {
    return EanaMapPoints.pointsForMap(allPoints, currentMapId).filter((p) => {
      if (!p.article) return true;
      const entry = EanaData.getManifestEntry(p.article);
      return entry && EanaData.isVisible(entry);
    });
  }

  // ---------- Zones peintes ----------

  // Une zone ne dessine rien : elle rend cliquable ce que le cartographe a
  // déjà porté sur la carte. Son étiquette est un cartouche HTML posé au
  // milieu du tracé, montré au survol.
  function renderZones(size) {
    const zones = visiblePoints().filter(EanaMapZones.isZone);
    pinsRoot.querySelectorAll(".map-zone-label").forEach((el) => el.remove());
    EanaMapZones.render(zonesRoot, zones, size.width, size.height);

    zones.forEach((z) => {
      const el = zonesRoot.querySelector(`[data-point-id="${CSS.escape(z.id)}"]`);
      if (!el) return;
      const entry = z.article ? EanaData.getManifestEntry(z.article) : null;
      const text = EanaMapPoints.labelFor(z, entry, EanaI18n.t("map.untitledPoint"));

      const anchor = EanaMapZones.anchorOf(el);
      const label = document.createElement("span");
      label.className = "map-zone-label";
      label.textContent = text;
      label.style.left = `${(anchor.x / size.width) * 100}%`;
      label.style.top = `${(anchor.y / size.height) * 100}%`;
      pinsRoot.appendChild(label);

      el.setAttribute("aria-label", text);
      el.addEventListener("pointerenter", () => label.classList.add("visible"));
      el.addEventListener("pointerleave", () => label.classList.remove("visible"));
    });
  }

  // ---------- Pastilles ----------

  function renderPins() {
    pinsRoot.innerHTML = visiblePoints().filter((p) => !EanaMapZones.isZone(p)).map((p) => {
      const entry = p.article ? EanaData.getManifestEntry(p.article) : null;
      const label = EanaRender.escapeHtml(
        EanaMapPoints.labelFor(p, entry, EanaI18n.t("map.untitledPoint"))
      );
      const iconSvg = EanaMapPoints.iconFor(p, entry);
      const plainClass = iconSvg ? "" : " map-pin-plain";
      const accent = EanaMapPoints.accentFor(p);
      const articleAttr = p.article ? ` data-article="${EanaRender.escapeHtml(p.article)}"` : "";
      return `<button type="button" class="map-pin" style="left:${p.x}%;top:${p.y}%"
          data-point-id="${EanaRender.escapeHtml(p.id)}" data-accent="${accent}"${articleAttr}
          aria-label="${label}">
        <span class="map-pin-scale${plainClass}">${iconSvg}</span>
        <span class="map-pin-label">${label}</span>
      </button>`;
    }).join("");
  }

  // Les deux couches se redessinent ensemble : elles lisent la même liste,
  // filtrée par le mode maître.
  function renderMarkers() {
    if (!currentSize) return;
    renderPins();
    renderZones(currentSize);
  }

  pinsRoot.addEventListener("click", (e) => {
    const pin = e.target.closest(".map-pin");
    if (!pin) return;
    const articleId = pin.getAttribute("data-article");
    if (articleId) {
      setArticleHash(articleId);
    } else {
      // Pas de fiche liée : juste basculer l'affichage de son étiquette
      // (utile au clavier/tactile, la souris l'a déjà au survol).
      pin.classList.toggle("show-label");
    }
  });

  // ---------- Chargement d'une carte ----------

  function showMapError() {
    // Sans ce garde-fou, une image absente ou invalide laissait la carte
    // vide et muette : aucun repère, aucune explication.
    viewport.classList.add("map-viewport--error");
    pinsRoot.innerHTML = "";
    zonesRoot.innerHTML = "";
    if (viewport.querySelector(".map-error")) return;
    const msg = document.createElement("p");
    msg.className = "map-error";
    msg.textContent = EanaI18n.t("map.imageError");
    viewport.appendChild(msg);
  }

  function clearMapError() {
    viewport.classList.remove("map-viewport--error");
    const msg = viewport.querySelector(".map-error");
    if (msg) msg.remove();
  }

  async function showMap(mapId) {
    currentMapId = EanaMapPoints.resolveMapId(mapId);
    renderPicker();

    const token = ++loadToken;
    clearMapError();
    pinsRoot.innerHTML = "";
    zonesRoot.innerHTML = "";
    currentSize = null;

    try {
      const size = await background.load(EanaMapPoints.getMap(currentMapId));
      if (token !== loadToken) return; // une autre carte a été demandée entre-temps
      currentSize = size;
      view.setSize(size.width, size.height);
      view.fit();
      renderMarkers();
    } catch (err) {
      if (token !== loadToken) return;
      console.error(err);
      showMapError();
    }
  }

  async function loadIcons() {
    const entries = await Promise.all(EanaData.getCategories().map(async (c) => {
      const res = await fetch(`images/ui/icon-${c.icon}.svg`);
      const text = await res.text();
      return [c.id, text];
    }));
    EanaRender.setIcons(Object.fromEntries(entries));
  }

  // ---------- Routage ----------
  // Un clic (repère, onglet de carte, fermeture) ne fait que changer le hash,
  // c'est-à-dire déclarer l'intention ; c'est l'écouteur hashchange qui
  // applique réellement le changement.

  function parseHash() {
    const raw = (window.location.hash || "").replace(/^#\/?/, "");
    const parts = raw.split("/").filter(Boolean).map((s) => {
      try { return decodeURIComponent(s); } catch (e) { return s; }
    });

    if (parts[0] === "carte" && parts[1]) {
      return {
        mapId: parts[1],
        articleId: parts[2] === "article" && parts[3] ? parts[3] : null,
      };
    }
    // Forme historique, sans carte : #/article/<fiche>
    if (parts[0] === "article" && parts[1]) return { mapId: null, articleId: parts[1] };
    return { mapId: null, articleId: null };
  }

  function buildHash(mapId, articleId) {
    const base = `#/carte/${encodeURIComponent(mapId)}`;
    return articleId ? `${base}/article/${encodeURIComponent(articleId)}` : base;
  }

  function setArticleHash(id) {
    const target = buildHash(currentMapId, id);
    if (window.location.hash === target) syncRoute();
    else window.location.hash = target;
  }

  async function syncRoute() {
    const { mapId, articleId } = parseHash();
    const wanted = EanaMapPoints.resolveMapId(mapId || currentMapId);
    if (wanted !== currentMapId) await showMap(wanted);
    if (articleId) await EanaOverlay.open(articleId);
    else await EanaOverlay.close();
  }

  // ---------- Mode maître ----------

  function updateModeChips() {
    const active = EanaData.isMasterActive();
    const pub = document.querySelector('.map-tools [data-mode="public"]');
    const master = document.querySelector('.map-tools [data-mode="master"]');
    if (pub) pub.classList.toggle("active", !active);
    if (master) master.classList.toggle("active", active);
  }

  function afterMasterChange() {
    updateModeChips();
    renderMarkers(); // change quels repères liés à une fiche OFF sont visibles
  }

  document.addEventListener("click", (e) => {
    const mode = e.target.closest("[data-mode]");
    if (!mode) return;
    const wanted = mode.getAttribute("data-mode");
    if (wanted === "public") {
      if (EanaData.isMasterActive()) { EanaData.deactivateMaster(); EanaMaster.renderIndicator(); afterMasterChange(); }
    } else if (!EanaData.isMasterActive()) {
      EanaMaster.openGate();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (EanaMaster.isGateOpen()) { EanaMaster.closeGate(); return; }
    if (EanaOverlay.isOpen()) window.location.hash = buildHash(currentMapId, null);
  });

  // ---------- Texte statique (voir js/app.js > applyStaticStrings) ----------

  function applyStaticStrings() {
    document.title = EanaI18n.t("map.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", EanaI18n.t("map.description"));
    pickerRoot.setAttribute("aria-label", EanaI18n.t("map.pickerLabel"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = EanaI18n.t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        el.setAttribute(attr.trim(), EanaI18n.t(key.trim()));
      });
    });
  }

  // ---------- Démarrage ----------

  async function start() {
    if (EanaData.blockIfFileProtocol()) return;
    await EanaData.consumeUrlMasterParam();
    await Promise.all([EanaData.init(), EanaI18n.init(), EanaMapPoints.initTypes()]);
    const [points] = await Promise.all([
      EanaMapPoints.loadPoints(),
      EanaMapPoints.loadConfig(),
    ]);
    allPoints = points;

    applyStaticStrings();
    await loadIcons();

    EanaTheme.wireToggle();
    EanaMaster.init(document.getElementById("master-root"), document.getElementById("gate-root"), afterMasterChange);
    EanaMaster.renderIndicator();
    updateModeChips();

    EanaOverlay.init(overlayRoot, () => { window.location.hash = buildHash(currentMapId, null); });

    background = EanaMapBackground.create({ root: bgRoot });

    view = EanaMapView.create({
      viewport,
      canvas,
      // Une seule écriture de variable CSS par changement d'échelle, au lieu
      // d'un style par repère à chaque frame de déplacement.
      onScaleChange: (s) => pinsRoot.style.setProperty("--pin-scale", 1 / s),
      // Le fond en tuiles a besoin de savoir ce qui est visible, pan compris.
      onViewChange: (rect, scale) => background.update(rect, scale),
      // Un clic franc seulement : sans ça, faire glisser la carte en partant
      // d'une zone ouvrirait sa fiche à chaque fois.
      onMapClick: (pos) => {
        const el = EanaMapZones.hitTest(zonesRoot, pos.x, pos.y);
        const article = el && el.dataset.article;
        if (article) setArticleHash(article);
      },
    });
    view.wire({ ignoreSelector: ".map-pin" });

    document.getElementById("zoom-in").addEventListener("click", () => view.zoomByFactor(1.4));
    document.getElementById("zoom-out").addEventListener("click", () => view.zoomByFactor(1 / 1.4));
    document.getElementById("zoom-reset").addEventListener("click", () => view.fit());

    await showMap(parseHash().mapId || EanaMapPoints.getDefaultMapId());

    window.addEventListener("hashchange", syncRoute);
    await syncRoute();
  }

  start();
})();
