/* =========================================================
   Valisthéa — panneau de fiche : ouverture, fermeture, changement de
   chapitre, mise en colonnes du texte. Extrait de js/app.js pour
   être partagé avec map/map.js — la fiche doit se comporter et
   ressembler à l'identique aux deux endroits, avec un seul
   endroit à corriger si son comportement change.

   Usage : EanaOverlay.init(root, onRequestClose) une fois au
   démarrage, puis EanaOverlay.open(id) / .close() / .isOpen().
   "onRequestClose" ne doit que déclarer l'intention de fermer
   (typiquement changer le hash) — c'est à l'appelant de décider
   ce que "fermé" veut dire chez lui (retour à l'accueil, à une
   catégorie, ou simplement plus de fiche affichée sur la carte).
   ========================================================= */

const EanaOverlay = (() => {
  let overlayRoot = null;
  let requestClose = () => {};
  let overlayPageIndex = 0;

  function init(root, onRequestClose) {
    overlayRoot = root;
    requestClose = onRequestClose || (() => {});
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function waitAnimationEnd(el, fallbackMs) {
    return new Promise((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        el.removeEventListener("animationend", finish);
        resolve();
      };
      el.addEventListener("animationend", finish, { once: true });
      setTimeout(finish, fallbackMs);
    });
  }

  // N'attend que la transition de "propertyName" : un panneau anime plusieurs
  // propriétés à durées différentes, et il ne faut nettoyer les styles inline
  // qu'une fois la plus longue terminée (sinon on coupe l'animation en vol).
  function waitTransitionEnd(el, propertyName, fallbackMs) {
    return new Promise((resolve) => {
      let done = false;
      const finish = (e) => {
        if (done) return;
        if (e && propertyName && e.propertyName !== propertyName) return;
        done = true;
        el.removeEventListener("transitionend", finish);
        resolve();
      };
      el.addEventListener("transitionend", finish);
      setTimeout(finish, fallbackMs);
    });
  }

  // CSS colonnes équilibre le texte entre les deux colonnes par défaut
  // (moitié-moitié). Pour remplir la première avant de déborder dans la
  // seconde, "column-fill: auto" a besoin d'une hauteur explicite. On mesure
  // d'abord, dans une copie hors écran à la largeur d'UNE colonne (pas celle
  // du conteneur entier, sinon le texte ne s'enroule pas pareil), la hauteur
  // que prendrait tout le texte empilé ; puis on compare à la hauteur
  // disponible, donnée par la colonne visuelle d'à côté (visuel + chapitres).
  function fillColumnsSequentially(container) {
    if (!container) return;
    container.style.height = "";
    container.classList.remove("body-text--single");

    const twoColumns = window.matchMedia("(min-width: 981px)").matches;
    if (!twoColumns) return;

    const rect = container.getBoundingClientRect();
    if (!rect.width) return;
    const gap = parseFloat(getComputedStyle(container).columnGap) || 0;
    const columnWidth = (rect.width - gap) / 2;

    function measureAt(width) {
      const probe = document.createElement("div");
      probe.className = container.className;
      probe.style.cssText = "position:fixed; visibility:hidden; pointer-events:none; left:-99999px; top:0;";
      probe.style.width = `${width}px`;
      probe.style.columnCount = "1";
      probe.style.height = "auto";
      probe.innerHTML = container.innerHTML;
      document.body.appendChild(probe);
      const h = probe.scrollHeight;
      probe.remove();
      return h;
    }

    const aside = container.parentElement ? container.parentElement.querySelector("aside") : null;
    const available = aside ? Math.round(aside.getBoundingClientRect().height) : 0;

    // Si le texte tient en une seule colonne sur toute la largeur disponible,
    // on ne le coupe pas en deux : il occupe le bloc entier, sans laisser un
    // grand vide entre une colonne étroite et le visuel.
    const fullWidthHeight = measureAt(rect.width);
    if (available && fullWidthHeight <= available) {
      container.classList.add("body-text--single");
      return;
    }

    // Sinon deux colonnes : la première se remplit sur toute la hauteur
    // disponible, le reste passe en seconde. Au-delà de deux colonnes pleines,
    // on retombe sur la moitié pour ne pas ouvrir une 3e colonne.
    const naturalHeight = measureAt(columnWidth);
    if (!naturalHeight) return;
    let height = Math.max(available, Math.ceil(naturalHeight / 2));

    container.style.height = `${height}px`;

    // Un arrondi du point de coupure peut encore ouvrir une colonne implicite
    // hors cadre : on le détecte via scrollWidth et on ajoute quelques pixels.
    let guard = 0;
    while (container.scrollWidth > container.clientWidth + 2 && guard < 40) {
      height += 8;
      container.style.height = `${height}px`;
      guard += 1;
    }
  }

  let columnResizeRaf = null;
  window.addEventListener("resize", () => {
    if (columnResizeRaf) return;
    columnResizeRaf = requestAnimationFrame(() => {
      columnResizeRaf = null;
      if (overlayRoot) fillColumnsSequentially(overlayRoot.querySelector(".body-text"));
    });
  });

  function isOpen() {
    return !!(overlayRoot && overlayRoot.querySelector("#article-overlay"));
  }

  async function open(id, { resetPage = true } = {}) {
    if (!overlayRoot) return;
    const entry = EanaData.getManifestEntry(id);
    if (!entry || !EanaData.isVisible(entry)) {
      requestClose();
      return;
    }

    let article;
    try {
      article = await EanaData.getArticleFull(id);
    } catch (err) {
      console.error(err);
      return;
    }

    if (resetPage) overlayPageIndex = 0;

    // Pages masquées ("public": "OFF") retirées ici : la navigation par
    // chapitres et l'affichage travaillent sur la même liste filtrée, donc
    // l'index d'un bouton de chapitre pointe toujours la bonne page.
    const pages = (article.pages || []).filter(EanaData.isPageVisible);
    if (overlayPageIndex >= pages.length) overlayPageIndex = 0;

    const category = EanaData.getCategory(article.category);
    const related = (article.related || [])
      .map((rid) => EanaData.getManifestEntry(rid))
      .filter((r) => r && EanaData.isVisible(r));
    const banner = article.banner && article.banner.on === "ON" && article.banner.id
      ? EanaData.getBanner(article.banner.id)
      : null;

    const renderOpts = { article, category, page: overlayPageIndex, related, banner, pages, image: entry.image };
    const openPanel = overlayRoot.querySelector("#article-overlay .article-panel");

    // Un panneau est déjà ouvert (article lié cliqué depuis une fiche, ou
    // changement de chapitre) : on le garde en place et on n'échange que son
    // contenu, plutôt que de le détruire et le reconstruire.
    if (openPanel) {
      await swapPanelContent(openPanel, EanaRender.articlePanelInner(renderOpts), id);
      return;
    }

    overlayRoot.innerHTML = `<div class="article-overlay overlay-entering" id="article-overlay">${
      EanaRender.renderArticleOverlay(renderOpts)
    }</div>`;

    wireEvents(id);
    document.body.style.overflow = "hidden";

    const bodyTextEl = overlayRoot.querySelector(".body-text");
    fillColumnsSequentially(bodyTextEl);
    if (document.fonts && document.fonts.ready) {
      // Recorrige une fois les polices chargées (première ouverture avant cache).
      document.fonts.ready.then(() => fillColumnsSequentially(overlayRoot.querySelector(".body-text")));
    }
  }

  // Échange le contenu d'un panneau déjà à l'écran : fondu sortant, remplacement
  // du contenu, puis la hauteur du cartouche glisse de l'ancienne à la nouvelle
  // pendant que le nouveau contenu apparaît.
  async function swapPanelContent(panel, innerHtml, id) {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const overlay = overlayRoot.querySelector("#article-overlay");

    const applyContent = () => {
      panel.innerHTML = innerHtml;
      wireEvents(id);
      // La mise en colonnes doit être calculée avant de mesurer la hauteur finale.
      fillColumnsSequentially(panel.querySelector(".body-text"));
    };

    if (reduced) {
      applyContent();
      if (overlay) overlay.scrollTop = 0;
      return;
    }

    const startHeight = panel.getBoundingClientRect().height;

    panel.classList.add("panel-fading");
    await wait(180);

    // Le contenu est invisible : on peut remonter en haut sans que ça saute.
    if (overlay) overlay.scrollTop = 0;
    panel.style.height = "";
    applyContent();
    const endHeight = panel.getBoundingClientRect().height;

    if (Math.abs(endHeight - startHeight) > 2) {
      panel.style.height = `${startHeight}px`;
      panel.getBoundingClientRect(); // force le recalcul avant d'animer
      panel.classList.add("panel-resizing");
      panel.style.height = `${endHeight}px`;
      panel.classList.remove("panel-fading");
      await waitTransitionEnd(panel, "height", 520);
      panel.classList.remove("panel-resizing");
      panel.style.height = "";
    } else {
      panel.classList.remove("panel-fading");
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => fillColumnsSequentially(panel.querySelector(".body-text")));
    }
  }

  async function close() {
    if (!overlayRoot) return;
    const overlay = overlayRoot.querySelector("#article-overlay");
    if (!overlay) {
      overlayRoot.innerHTML = "";
      document.body.style.overflow = "";
      return;
    }
    overlay.classList.add("overlay-leaving");
    await waitAnimationEnd(overlay, 280);
    overlayRoot.innerHTML = "";
    document.body.style.overflow = "";
  }

  function wireEvents(id) {
    const overlay = overlayRoot.querySelector("#article-overlay");
    if (!overlay) return;

    overlay.querySelectorAll("[data-close-overlay]").forEach((elm) => {
      elm.addEventListener("click", () => requestClose());
    });

    overlay.querySelectorAll("[data-article-page]").forEach((elm) => {
      elm.addEventListener("click", () => {
        overlayPageIndex = Number(elm.getAttribute("data-article-page"));
        open(id, { resetPage: false });
      });
    });
  }

  return { init, open, close, isOpen };
})();
