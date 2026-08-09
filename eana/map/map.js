/* =========================================================
   Eana — carte interactive : repères cliquables.
   Le pan/zoom vit dans js/mapview.js et le dessin des repères
   dans js/mappoints.js (partagés avec l'éditeur) ; ce fichier
   n'a que le câblage propre à la page publique et un routage
   minimal (un seul hash possible : #/article/<id>).
   ========================================================= */

(() => {
  const viewport = document.getElementById("map-viewport");
  const canvas = document.getElementById("map-canvas");
  const image = document.getElementById("map-image");
  const pinsRoot = document.getElementById("map-pins");
  const overlayRoot = document.getElementById("overlay-root");

  let pointsData = [];
  let mapConfig = {};
  let view = null;

  // ---------- Repères ----------

  function renderPins() {
    const visible = pointsData.filter((p) => {
      if (!p.article) return true;
      const entry = EanaData.getManifestEntry(p.article);
      return entry && EanaData.isVisible(entry);
    });

    pinsRoot.innerHTML = visible.map((p) => {
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

  function onImageReady() {
    view.setSize(image.naturalWidth, image.naturalHeight);
    view.fit();
    renderPins();
  }

  function onImageError() {
    // Sans ce garde-fou, une image absente ou invalide laissait la carte
    // vide et muette : aucun repère, aucune explication.
    viewport.classList.add("map-viewport--error");
    pinsRoot.innerHTML = "";
    const msg = document.createElement("p");
    msg.className = "map-error";
    msg.textContent = EanaI18n.t("map.imageError");
    viewport.appendChild(msg);
  }

  async function loadIcons() {
    const entries = await Promise.all(EanaData.getCategories().map(async (c) => {
      const res = await fetch(`images/ui/icon-${c.icon}.svg`);
      const text = await res.text();
      return [c.id, text];
    }));
    EanaRender.setIcons(Object.fromEntries(entries));
  }

  // ---------- Ouverture de fiche (routage minimal) ----------
  // Le clic sur un repère ou sur le bouton de fermeture ne fait que changer
  // le hash (déclarer l'intention) ; c'est l'écouteur hashchange qui ouvre ou
  // ferme réellement le panneau.

  function currentArticleId() {
    const h = window.location.hash || "";
    return h.startsWith("#/article/") ? decodeURIComponent(h.slice("#/article/".length)) : null;
  }

  function setArticleHash(id) {
    const target = `#/article/${encodeURIComponent(id)}`;
    if (window.location.hash === target) syncOverlay();
    else window.location.hash = target;
  }

  async function syncOverlay() {
    const id = currentArticleId();
    if (id) await EanaOverlay.open(id);
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
    renderPins(); // change quels repères liés à une fiche OFF sont visibles
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
    if (EanaOverlay.isOpen()) window.location.hash = "";
  });

  // ---------- Texte statique (voir js/app.js > applyStaticStrings) ----------

  function applyStaticStrings() {
    document.title = EanaI18n.t("map.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", EanaI18n.t("map.description"));

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
    [pointsData, mapConfig] = await Promise.all([
      EanaMapPoints.loadPoints(),
      EanaMapPoints.loadConfig(),
    ]);

    applyStaticStrings();
    await loadIcons();

    EanaTheme.wireToggle();
    EanaMaster.init(document.getElementById("master-root"), document.getElementById("gate-root"), afterMasterChange);
    EanaMaster.renderIndicator();
    updateModeChips();

    EanaOverlay.init(overlayRoot, () => { window.location.hash = ""; });

    view = EanaMapView.create({
      viewport,
      canvas,
      // Une seule écriture de variable CSS par changement d'échelle, au lieu
      // d'un style par repère à chaque frame de déplacement.
      onScaleChange: (s) => pinsRoot.style.setProperty("--pin-scale", 1 / s),
    });
    view.wire({ ignoreSelector: ".map-pin" });

    document.getElementById("zoom-in").addEventListener("click", () => view.zoomByFactor(1.4));
    document.getElementById("zoom-out").addEventListener("click", () => view.zoomByFactor(1 / 1.4));
    document.getElementById("zoom-reset").addEventListener("click", () => view.fit());

    // Le chemin vient de data/map-config.json (voir README) : c'est le seul
    // endroit à changer pour remplacer la carte.
    image.addEventListener("load", onImageReady);
    image.addEventListener("error", onImageError);
    image.src = mapConfig.image || "images/map/placeholder-map.svg";

    window.addEventListener("hashchange", syncOverlay);
    await syncOverlay();
  }

  start();
})();
