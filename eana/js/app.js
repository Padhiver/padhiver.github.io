/* =========================================================
   Eana — routing, état applicatif, interactions.
   ========================================================= */

(() => {
  const PAGE_SIZE = 15; // 5 colonnes x 3 lignes
  const app = document.getElementById("app");
  const overlayRoot = document.getElementById("overlay-root");
  const masterRoot = document.getElementById("master-root");

  let lastMainRoute = { type: "home" };
  let homeQuery = "";
  const categoryState = {}; // { [categoryId]: { page, query } }
  let overlayPageIndex = 0;

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
    const recent = EanaData.getRecentArticles(6);
    const results = homeQuery ? EanaData.searchArticles(null, homeQuery).slice(0, 8) : [];

    app.innerHTML = EanaRender.renderHome({
      recentArticles: recent,
      categories: cats,
      query: homeQuery,
      searchResults: results,
    });

    const input = document.getElementById("search-input");
    if (input) {
      input.addEventListener("input", () => {
        homeQuery = input.value;
        const r = homeQuery ? EanaData.searchArticles(null, homeQuery).slice(0, 8) : [];
        const resultsEl = document.getElementById("search-results");
        if (resultsEl) resultsEl.outerHTML = EanaRender.renderSearchResults ? EanaRender.renderSearchResults(r) : "";
      });
    }
  }

  // ---------- Rendu : Catégorie ----------

  function renderCategoryView(categoryId) {
    const category = EanaData.getCategory(categoryId);
    if (!category) { navigate("#/"); return; }

    const state = getCatState(categoryId);
    const articles = EanaData.searchArticles(categoryId, state.query);

    app.innerHTML = EanaRender.renderCategory({
      categories: EanaData.getCategories(),
      activeCategory: category,
      articles,
      page: state.page,
      pageSize: PAGE_SIZE,
      query: state.query,
    });

    wireCategoryEvents();
  }

  function updateCategoryGrid(categoryId) {
    const state = getCatState(categoryId);
    const articles = EanaData.searchArticles(categoryId, state.query);
    const wrap = document.getElementById("grid-wrap");
    if (!wrap) return;
    wrap.innerHTML = EanaRender.renderCategoryResults({
      articles, page: state.page, pageSize: PAGE_SIZE, query: state.query,
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

  // ---------- Transition accueil -> catégorie (animation demandée) ----------

  async function goHomeToCategory(categoryId) {
    app.classList.remove("view-entering");
    app.classList.add("view-leaving");
    await waitAnimationEnd(app, 340);
    app.classList.remove("view-leaving");

    renderCategoryView(categoryId);

    app.classList.add("view-entering");
    await waitAnimationEnd(app, 420);
    app.classList.remove("view-entering");
  }

  function switchCategory(categoryId) {
    const category = EanaData.getCategory(categoryId);
    if (!category) { navigate("#/"); return; }

    // Onglets et cadre déjà en place : on ne touche que ce qui change réellement,
    // pas de re-render complet (sinon tout "pop" d'un coup).
    document.querySelectorAll(".category-tab[data-open-category]").forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-open-category") === categoryId);
    });

    updateCategoryGrid(categoryId);

    const input = document.getElementById("search-input");
    if (input) input.placeholder = `Chercher dans ${category.label.toLowerCase()}`;
  }

  // ---------- Rendu : Fiche article (overlay) ----------

  async function openArticleOverlay(id, { resetPage = true } = {}) {
    const entry = EanaData.getManifestEntry(id);
    if (!entry || !EanaData.isVisible(entry)) {
      navigate(lastMainRoute.type === "category" ? `#/categorie/${lastMainRoute.id}` : "#/");
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

    const category = EanaData.getCategory(article.category);
    const related = (article.related || [])
      .map((rid) => EanaData.getManifestEntry(rid))
      .filter((r) => r && EanaData.isVisible(r));
    const banner = article.banner && article.banner.on === "ON" && article.banner.id
      ? EanaData.getBanner(article.banner.id)
      : null;

    const isFreshOpen = resetPage;
    const overlayClass = isFreshOpen ? "article-overlay overlay-entering" : "article-overlay";

    overlayRoot.innerHTML = `<div class="${overlayClass}" id="article-overlay">${EanaRender.renderArticleOverlay({
      article, manifestEntry: entry, category, page: overlayPageIndex, related, banner, pageSwap: !isFreshOpen,
    })}</div>`;

    wireOverlayEvents(id, article);
    document.body.style.overflow = "hidden";
  }

  async function closeArticleOverlay() {
    const overlay = document.getElementById("article-overlay");
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

  function wireOverlayEvents(id, article) {
    const overlay = document.getElementById("article-overlay");
    if (!overlay) return;

    overlay.querySelectorAll("[data-close-overlay]").forEach((elm) => {
      elm.addEventListener("click", () => {
        navigate(lastMainRoute.type === "category" ? `#/categorie/${lastMainRoute.id}` : "#/");
      });
    });

    overlay.querySelectorAll("[data-open-article]").forEach((elm) => {
      elm.addEventListener("click", () => navigate(`#/article/${elm.getAttribute("data-open-article")}`));
    });

    const total = (article.pages || []).length;
    overlay.querySelectorAll("[data-article-page]").forEach((elm) => {
      elm.addEventListener("click", () => {
        overlayPageIndex = Number(elm.getAttribute("data-article-page"));
        openArticleOverlay(id, { resetPage: false });
      });
    });
    const prevBtn = overlay.querySelector("[data-article-prev]");
    if (prevBtn) prevBtn.addEventListener("click", () => {
      if (overlayPageIndex > 0) { overlayPageIndex -= 1; openArticleOverlay(id, { resetPage: false }); }
    });
    const nextBtn = overlay.querySelector("[data-article-next]");
    if (nextBtn) nextBtn.addEventListener("click", () => {
      if (overlayPageIndex < total - 1) { overlayPageIndex += 1; openArticleOverlay(id, { resetPage: false }); }
    });
  }

  // ---------- Mode maître ----------

  function renderMasterIndicator() {
    masterRoot.innerHTML = EanaData.isMasterActive() ? EanaRender.masterIndicator() : "";
    const indicator = document.getElementById("master-indicator");
    if (indicator) {
      indicator.addEventListener("click", () => {
        if (confirm("Désactiver le mode maître ?")) {
          EanaData.deactivateMaster();
          renderMasterIndicator();
          handleRoute();
        }
      });
    }
  }

  // ---------- Délégation globale des clics (cartes, catégories, pagination grille) ----------

  document.addEventListener("click", (e) => {
    const openArticle = e.target.closest("[data-open-article]");
    if (openArticle) { navigate(`#/article/${openArticle.getAttribute("data-open-article")}`); return; }

    const openCategory = e.target.closest("[data-open-category]");
    if (openCategory) {
      const id = openCategory.getAttribute("data-open-category");
      if (lastMainRoute.type === "home") navigate(`#/categorie/${id}`);
      else { navigate(`#/categorie/${id}`); }
      return;
    }

    const tabPrev = e.target.closest("[data-tab-prev]");
    const tabNext = e.target.closest("[data-tab-next]");
    if (tabPrev || tabNext) {
      const cats = EanaData.getCategories();
      const currentId = lastMainRoute.type === "category" ? lastMainRoute.id : cats[0].id;
      const idx = cats.findIndex((c) => c.id === currentId);
      const nextIdx = tabPrev ? (idx - 1 + cats.length) % cats.length : (idx + 1) % cats.length;
      navigate(`#/categorie/${cats[nextIdx].id}`);
      return;
    }

    const gridPrev = e.target.closest("[data-grid-prev]");
    const gridNext = e.target.closest("[data-grid-next]");
    const gridDot = e.target.closest("[data-grid-page]");
    if ((gridPrev || gridNext || gridDot) && lastMainRoute.type === "category") {
      const state = getCatState(lastMainRoute.id);
      if (gridDot) state.page = Number(gridDot.getAttribute("data-grid-page"));
      if (gridPrev) state.page = Math.max(0, state.page - 1);
      if (gridNext) state.page = state.page + 1;
      updateCategoryGrid(lastMainRoute.id);
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.getElementById("article-overlay")) {
      navigate(lastMainRoute.type === "category" ? `#/categorie/${lastMainRoute.id}` : "#/");
    }
  });

  // ---------- Routing ----------

  async function handleRoute() {
    const route = parseHash();
    const wasArticleOpen = !!document.getElementById("article-overlay");

    if (route.type === "article") {
      await openArticleOverlay(route.id);
      return;
    }

    if (wasArticleOpen) {
      const backToSameHome = route.type === "home" && lastMainRoute.type === "home";
      const backToSameCategory = route.type === "category" && lastMainRoute.type === "category" && lastMainRoute.id === route.id;
      if (backToSameHome || backToSameCategory) {
        // On ferme juste l'overlay : la vue en dessous est déjà la bonne, pas besoin de la re-rendre.
        await closeArticleOverlay();
        return;
      }
    }

    await closeArticleOverlay();

    if (route.type === "home") {
      if (lastMainRoute.type === "category") {
        renderHomeView();
      } else {
        renderHomeView();
      }
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

  async function loadIcons() {
    const ids = ["personnages", "geographie", "monde", "primordiaux"];
    const entries = await Promise.all(ids.map(async (id) => {
      const res = await fetch(`images/ui/icon-${id}.svg`);
      const text = await res.text();
      return [id, text];
    }));
    EanaRender.setIcons(Object.fromEntries(entries));
  }

  async function start() {
    await EanaData.consumeUrlMasterParam();
    await Promise.all([EanaData.init(), loadIcons()]);
    renderMasterIndicator();
    await handleRoute();
  }

  start();
})();
