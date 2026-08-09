/* =========================================================
   Eana — routing, état applicatif, interactions.
   ========================================================= */

(() => {
  const PAGE_SIZE = 12;   // 4 colonnes x 3 lignes
  const RECENT_COUNT = 5; // une seule ligne sur l'accueil

  const app = document.getElementById("app");
  const overlayRoot = document.getElementById("overlay-root");
  const masterRoot = document.getElementById("master-root");
  const gateRoot = document.getElementById("gate-root");

  let lastMainRoute = { type: "home" };
  // lastMainRoute vaut "home" dès le départ alors que #app est encore vide :
  // ce drapeau distingue "la vue de fond est rendue" de "on suppose qu'elle
  // l'est", sans quoi arriver directement sur #/article/xxx puis fermer la
  // fiche laisse la page blanche.
  let mainViewRendered = false;
  let homeQuery = "";
  const categoryState = {}; // { [categoryId]: { page, query } }
  let pendingCardOrigin = null;

  function parseHash() {
    const h = window.location.hash || "#/";
    if (h.startsWith("#/article/")) {
      return { type: "article", id: decodeURIComponent(h.slice("#/article/".length)) };
    }
    if (h.startsWith("#/categorie/")) {
      return { type: "category", id: decodeURIComponent(h.slice("#/categorie/".length)) };
    }
    return { type: "home" };
  }

  function navigate(hash) {
    if (window.location.hash === hash) {
      handleRoute();
    } else {
      window.location.hash = hash;
    }
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

  function getCatState(id) {
    if (!categoryState[id]) categoryState[id] = { page: 0, query: "" };
    return categoryState[id];
  }

  // ---------- Rendu : Accueil ----------

  function renderHomeView() {
    const cats = EanaData.getCategories();
    const recent = EanaData.getRecentArticles(RECENT_COUNT);
    const results = homeQuery ? EanaData.searchArticles(null, homeQuery).slice(0, 10) : [];
    // Les compteurs incluent les fiches à venir, pour coller à ce que la
    // grille de catégorie affiche réellement (publiées + verrouillées).
    const counts = {};
    cats.forEach((c) => { counts[c.id] = EanaData.countAllByCategory(c.id); });

    app.innerHTML = EanaRender.renderHome({
      recentArticles: recent,
      categories: cats,
      counts,
      query: homeQuery,
      searchResults: results,
      total: cats.reduce((sum, c) => sum + counts[c.id], 0),
      masterActive: EanaData.isMasterActive(),
    });

    mainViewRendered = true;

    const input = document.getElementById("search-input");
    if (input) {
      input.addEventListener("input", () => {
        homeQuery = input.value;
        const r = homeQuery ? EanaData.searchArticles(null, homeQuery).slice(0, 10) : [];
        const resultsEl = document.getElementById("search-results");
        if (resultsEl) resultsEl.innerHTML = EanaRender.renderSearchResults(r);
      });
    }
  }

  // ---------- Rendu : Catégorie ----------

  // Sans recherche, la grille liste toute la catégorie : les fiches OFF y
  // apparaissent verrouillées. Dès qu'une recherche est saisie, on repasse par
  // le filtre normal — une fiche non publiée ne doit pas pouvoir être trouvée
  // par son nom.
  function gridArticles(categoryId, query) {
    return query.trim()
      ? EanaData.searchArticles(categoryId, query)
      : EanaData.getAllByCategory(categoryId);
  }

  function renderCategoryView(categoryId) {
    const category = EanaData.getCategory(categoryId);
    if (!category) { navigate("#/"); return; }

    const state = getCatState(categoryId);
    state.page = 0;
    const articles = gridArticles(categoryId, state.query);

    app.innerHTML = EanaRender.renderCategory({
      categories: EanaData.getCategories(),
      activeCategory: category,
      articles,
      page: state.page,
      pageSize: PAGE_SIZE,
      query: state.query,
      masterActive: EanaData.isMasterActive(),
    });

    mainViewRendered = true;
    wireCategoryEvents();
  }

  function updateCategoryGrid(categoryId) {
    const state = getCatState(categoryId);
    const articles = gridArticles(categoryId, state.query);
    const wrap = document.getElementById("grid-wrap");
    if (!wrap) return;
    wrap.innerHTML = EanaRender.renderCategoryResults({
      articles, page: state.page, pageSize: PAGE_SIZE, query: state.query,
      masterActive: EanaData.isMasterActive(),
    });
  }

  // Le champ de recherche n'est (re)créé qu'à l'entrée sur la vue catégorie
  // (renderCategoryView) ; passer d'un onglet à l'autre (switchCategory) le
  // laisse en place, donc l'écouteur ci-dessous résout la catégorie active
  // dynamiquement via lastMainRoute plutôt que de capturer un id figé.
  function wireCategoryEvents() {
    const input = document.getElementById("search-input");
    if (input) {
      input.addEventListener("input", () => {
        if (lastMainRoute.type !== "category") return;
        const categoryId = lastMainRoute.id;
        const state = getCatState(categoryId);
        state.query = input.value;
        state.page = 0;
        updateCategoryGrid(categoryId);
      });
    }
  }

  // ---------- Transition accueil -> catégorie ----------

  // N'attend que la transition de "propertyName" : #app anime à la fois
  // "transform" (500ms) et "opacity" (300ms), et "opacity" finit avant —
  // sans ce filtre, le premier transitionend (opacity) déclenchait le
  // nettoyage des styles inline et coupait "transform" en plein vol, d'où
  // le petit saut visible juste avant la fin de l'animation.
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

  async function goHomeToCategory(categoryId) {
    const origin = pendingCardOrigin;
    pendingCardOrigin = null;

    if (!origin || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.classList.remove("view-entering");
      app.classList.add("view-leaving");
      await waitAnimationEnd(app, 340);
      app.classList.remove("view-leaving");

      renderCategoryView(categoryId);

      app.classList.add("view-entering");
      await waitAnimationEnd(app, 420);
      app.classList.remove("view-entering");
      return;
    }

    // Le cartouche cliqué "devient" la vue catégorie : on calcule le
    // déplacement/échelle nécessaires pour que le nouveau contenu démarre
    // exactement où était la carte, puis on relâche vers sa taille normale.
    renderCategoryView(categoryId);

    const finalRect = app.getBoundingClientRect();
    const scaleX = origin.width / finalRect.width;
    const scaleY = origin.height / finalRect.height;
    const dx = (origin.left + origin.width / 2) - (finalRect.left + finalRect.width / 2);
    const dy = (origin.top + origin.height / 2) - (finalRect.top + finalRect.height / 2);

    app.style.transition = "none";
    app.style.transformOrigin = "center center";
    app.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
    app.style.opacity = "0.5";
    app.getBoundingClientRect(); // force le recalcul de mise en page avant l'animation

    requestAnimationFrame(() => {
      app.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease";
      app.style.transform = "translate(0, 0) scale(1, 1)";
      app.style.opacity = "1";
    });

    await waitTransitionEnd(app, "transform", 550);

    app.style.transition = "";
    app.style.transform = "";
    app.style.transformOrigin = "";
    app.style.opacity = "";
  }

  function switchCategory(categoryId) {
    const category = EanaData.getCategory(categoryId);
    if (!category) { navigate("#/"); return; }

    getCatState(categoryId).page = 0;

    // Onglets et cadre déjà en place : on ne touche que ce qui change réellement,
    // pas de re-render complet (sinon tout "pop" d'un coup).
    document.querySelectorAll(".category-tab[data-open-category]").forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-open-category") === categoryId);
    });

    updateCategoryGrid(categoryId);

    const heading = document.querySelector(".section-title h2");
    if (heading) heading.textContent = category.label;
    const meta = document.querySelector(".section-title .meta");
    if (meta) {
      const n = gridArticles(categoryId, getCatState(categoryId).query).length;
      meta.textContent = EanaI18n.plural("category.entryCount", n);
    }

    const input = document.getElementById("search-input");
    if (input) input.placeholder = EanaI18n.t("search.placeholderCategory", { category: category.label.toLowerCase() });
  }

  // Le filtre du mode maître change la liste des fiches visibles : on refait
  // la vue courante quand il change.
  function afterMasterChange() {
    if (lastMainRoute.type === "category") {
      renderCategoryView(lastMainRoute.id);
    } else {
      renderHomeView();
    }
  }

  // ---------- Délégation globale des clics ----------

  document.addEventListener("click", (e) => {
    const mode = e.target.closest("[data-mode]");
    if (mode) {
      const wanted = mode.getAttribute("data-mode");
      if (wanted === "public") {
        if (EanaData.isMasterActive()) { EanaData.deactivateMaster(); EanaMaster.renderIndicator(); afterMasterChange(); }
      } else if (!EanaData.isMasterActive()) {
        EanaMaster.openGate();
      }
      return;
    }

    const openArticle = e.target.closest("[data-open-article]");
    if (openArticle) { navigate(`#/article/${openArticle.getAttribute("data-open-article")}`); return; }

    const openCategory = e.target.closest("[data-open-category]");
    if (openCategory) {
      const id = openCategory.getAttribute("data-open-category");
      if (lastMainRoute.type === "home" && openCategory.classList.contains("category-card")) {
        pendingCardOrigin = openCategory.getBoundingClientRect();
      }
      navigate(`#/categorie/${id}`);
      return;
    }

    const gridPrev = e.target.closest("[data-grid-prev]");
    const gridNext = e.target.closest("[data-grid-next]");
    if ((gridPrev || gridNext) && lastMainRoute.type === "category") {
      const state = getCatState(lastMainRoute.id);
      if (gridPrev) state.page = Math.max(0, state.page - 1);
      if (gridNext) state.page = state.page + 1;
      updateCategoryGrid(lastMainRoute.id);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (EanaMaster.isGateOpen()) { EanaMaster.closeGate(); return; }
    if (EanaOverlay.isOpen()) {
      navigate(lastMainRoute.type === "category" ? `#/categorie/${lastMainRoute.id}` : "#/");
    }
  });

  // ---------- Routing ----------

  async function handleRoute() {
    const route = parseHash();
    const wasArticleOpen = EanaOverlay.isOpen();

    if (route.type === "article") {
      // Lien direct / rechargement sur une fiche : on monte d'abord la vue de
      // fond, sinon elle reste vide derrière l'overlay et à sa fermeture.
      if (!mainViewRendered) {
        renderHomeView();
        lastMainRoute = { type: "home" };
      }
      await EanaOverlay.open(route.id);
      return;
    }

    if (wasArticleOpen && mainViewRendered) {
      const backToSameHome = route.type === "home" && lastMainRoute.type === "home";
      const backToSameCategory = route.type === "category" && lastMainRoute.type === "category" && lastMainRoute.id === route.id;
      if (backToSameHome || backToSameCategory) {
        // On ferme juste l'overlay : la vue en dessous est déjà la bonne.
        await EanaOverlay.close();
        return;
      }
    }

    await EanaOverlay.close();

    if (route.type === "home") {
      renderHomeView();
      lastMainRoute = { type: "home" };
    } else if (route.type === "category") {
      const cameFromHome = lastMainRoute.type === "home";
      lastMainRoute = { type: "category", id: route.id };
      if (cameFromHome) {
        await goHomeToCategory(route.id);
      } else {
        switchCategory(route.id);
      }
    }
  }

  window.addEventListener("hashchange", handleRoute);

  // ---------- Démarrage ----------

  // Dérivé de data/categories.json (champ "icon") plutôt que d'une liste
  // d'identifiants figée ici : reprendre ce site pour un autre univers avec
  // d'autres catégories n'a donc rien à toucher dans ce fichier.
  async function loadIcons() {
    const entries = await Promise.all(EanaData.getCategories().map(async (c) => {
      const res = await fetch(`images/ui/icon-${c.icon}.svg`);
      const text = await res.text();
      return [c.id, text];
    }));
    EanaRender.setIcons(Object.fromEntries(entries));
  }

  function loadCategoryLabels() {
    const map = {};
    EanaData.getCategories().forEach((c) => { map[c.id] = c.shortLabel || c.label; });
    EanaRender.setCategoryLabels(map);
  }

  // Texte statique de index.html (titre, en-tête, bouton de thème…), posé via
  // data-i18n / data-i18n-attr et rempli une fois data/strings.json chargé.
  function applyStaticStrings() {
    document.title = EanaI18n.t("site.title");
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", EanaI18n.t("site.description"));

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

  async function start() {
    if (EanaData.blockIfFileProtocol()) return;
    await EanaData.consumeUrlMasterParam();
    await Promise.all([EanaData.init(), EanaI18n.init()]);
    applyStaticStrings();
    loadCategoryLabels();
    await loadIcons();
    EanaOverlay.init(overlayRoot, () => {
      navigate(lastMainRoute.type === "category" ? `#/categorie/${lastMainRoute.id}` : "#/");
    });
    EanaMaster.init(masterRoot, gateRoot, afterMasterChange);
    EanaTheme.wireToggle();
    EanaMaster.renderIndicator();
    await handleRoute();
  }

  start();
})();
