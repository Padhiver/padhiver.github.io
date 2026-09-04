/* =========================================================
   Valisthéa — construction du HTML des vues.
   Fonctions pures : (données) -> chaîne HTML. Le montage DOM
   et les événements sont gérés par app.js.
   ========================================================= */

const EanaRender = (() => {
  let icons = {}; // { categoryId: "<svg ...>" }
  let categoryLabels = {}; // { categoryId: libellé court } — vient de categories.json

  function setIcons(map) {
    icons = map;
  }

  function setCategoryLabels(map) {
    categoryLabels = map;
  }

  function icon(categoryId) {
    return icons[categoryId] || "";
  }

  // Accès en lecture depuis l'extérieur (ex. map/map.js, qui dessine ses
  // propres repères avec l'icône de la catégorie de l'article visé).
  function getIcon(categoryId) {
    return icon(categoryId);
  }

  function shortLabel(categoryId) {
    return categoryLabels[categoryId] || "";
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  const CHEVRON_LEFT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>`;
  const CHEVRON_RIGHT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>`;
  const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l5 5" stroke-linecap="round"/></svg>`;
  const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
  const KEY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="3.2"/><path d="M10.3 12.7L19 4M15 8l2.5 2.5M18 5l2.5 2.5"/></svg>`;

  const CORNERS_TOP = `<i class="corner c1"></i><i class="corner c4"></i>`;
  const CORNERS_ALL = `<i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i>`;

  // "image" vient du manifest : build-manifest.js la détecte automatiquement
  // (un .png dans images/articles/<categorie>/<id>/, s'il existe). Aucune
  // fiche n'a besoin de déclarer de champ image elle-même.
  function cardImage(article) {
    return article.image || `images/placeholders/carte-${article.category}.svg`;
  }

  function sectionTitle(label, meta) {
    return `<div class="section-title">
      <h2>${escapeHtml(label)}</h2>
      <span class="line"></span>
      ${meta ? `<span class="meta">${escapeHtml(meta)}</span>` : ""}
    </div>`;
  }

  function tools(query, placeholder, masterActive) {
    return `<div class="tools">
      <div class="search-bar">
        ${SEARCH_ICON}
        <input type="text" id="search-input" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(query || "")}" autocomplete="off">
      </div>
      <button class="chip ${masterActive ? "" : "active"}" data-mode="public">${escapeHtml(EanaI18n.t("mode.public"))}</button>
      <button class="chip ${masterActive ? "active" : ""}" data-mode="master">${KEY_ICON}${escapeHtml(EanaI18n.t("mode.master"))}</button>
    </div>`;
  }

  function articleCard(article, { showKind = false, index = 0 } = {}) {
    const delay = `style="animation-delay:${index * 35}ms"`;

    const off = article.public === "OFF" ? `<span class="badge-off">${escapeHtml(EanaI18n.t("card.off"))}</span>` : "";
    const kind = showKind
      ? `<span class="card-kind">${escapeHtml(shortLabel(article.category))}</span>`
      : "";
    return `<div class="card card-in" ${delay} data-open-article="${escapeHtml(article.id)}">
      <img src="${escapeHtml(cardImage(article))}" alt="" loading="lazy">
      ${CORNERS_TOP}
      ${kind}
      ${off}
      <span class="card-title">${escapeHtml(article.title)}</span>
    </div>`;
  }

  function categoryCard(cat, count) {
    return `<div class="category-card" data-open-category="${escapeHtml(cat.id)}">
      ${CORNERS_ALL}
      ${icon(cat.id)}
      <h3>${escapeHtml(cat.shortLabel || cat.label)}</h3>
      <p>${escapeHtml(cat.description || "")}</p>
      <span class="count">${escapeHtml(EanaI18n.plural("category.cardCount", count))}</span>
    </div>`;
  }

  // ---------- Accueil ----------

  function renderHome({ recentArticles, categories, counts, query, searchResults, total, masterActive }) {
    const recentHtml = recentArticles.length
      ? recentArticles.map((a, i) => articleCard(a, { showKind: true, index: i })).join("")
      : `<div class="empty-state">${escapeHtml(EanaI18n.t("home.emptyRecent"))}</div>`;

    const categoriesHtml = categories.map((c) => categoryCard(c, counts[c.id] || 0)).join("");

    return `
      ${tools(query, EanaI18n.t("search.placeholderHome"), masterActive)}
      <div class="search-results" id="search-results">${renderSearchResults(searchResults)}</div>
      ${sectionTitle(EanaI18n.t("home.recentTitle"))}
      <div class="card-row recent">${recentHtml}</div>
      ${sectionTitle(EanaI18n.t("home.registriesTitle"), EanaI18n.plural("home.registriesTotal", total))}
      <div class="category-grid">${categoriesHtml}</div>
    `;
  }

  function renderSearchResults(results) {
    if (!results || results.length === 0) return "";
    return `<div class="related-list">
      ${results.map((a) => `<div class="related-pill" data-open-article="${escapeHtml(a.id)}">${icon(a.category)}<span>${escapeHtml(a.title)}</span></div>`).join("")}
    </div>`;
  }

  // ---------- Catégorie ----------

  function pagination(current, total) {
    if (total <= 1) return "";
    return `<div class="pagination">
      <button class="arrow" data-grid-prev ${current === 0 ? "disabled" : ""} aria-label="${escapeHtml(EanaI18n.t("category.feuilletPrev"))}">${CHEVRON_LEFT}</button>
      <span>${escapeHtml(EanaI18n.t("category.feuilletLabel", { current: current + 1, total }))}</span>
      <button class="arrow" data-grid-next ${current === total - 1 ? "disabled" : ""} aria-label="${escapeHtml(EanaI18n.t("category.feuilletNext"))}">${CHEVRON_RIGHT}</button>
    </div>`;
  }

  function renderCategoryResults({ articles, page, pageSize, query }) {
    const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
    const currentPage = Math.min(page, totalPages - 1);
    const pageItems = articles.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

    const gridHtml = pageItems.length
      ? pageItems.map((a, i) => articleCard(a, { index: i })).join("")
      : `<div class="empty-state">${escapeHtml(EanaI18n.t(query ? "category.emptySearch" : "category.emptyDefault"))}</div>`;

    return `
      <div class="card-row grid">${gridHtml}</div>
      ${pagination(currentPage, totalPages)}
    `;
  }

  function renderCategory({ categories, activeCategory, articles, page, pageSize, query, masterActive }) {
    const tabsHtml = categories
      .map((c) => `<button class="category-tab ${c.id === activeCategory.id ? "active" : ""}" data-open-category="${escapeHtml(c.id)}">${icon(c.id)}<span>${escapeHtml(c.shortLabel || c.label)}</span></button>`)
      .join("");

    return `
      <div class="category-tabs">${tabsHtml}</div>
      ${tools(query, EanaI18n.t("search.placeholderCategory", { category: activeCategory.label.toLowerCase() }), masterActive)}
      ${sectionTitle(activeCategory.label, EanaI18n.plural("category.entryCount", articles.length))}
      <div id="grid-wrap">${renderCategoryResults({ articles, page, pageSize, query })}</div>
    `;
  }

  // ---------- Fiche (overlay) ----------

  // Les textes de fiche commencent souvent par une courte ligne d'accroche
  // suivie d'une ligne vide : on la remonte en sous-titre.
  function splitKicker(text) {
    const blocks = String(text || "").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
    if (blocks.length > 1 && blocks[0].length <= 120) {
      return { kicker: blocks[0], body: blocks.slice(1) };
    }
    return { kicker: "", body: blocks };
  }

  // Contenu du panneau, sans son enveloppe. Isolé pour que app.js puisse
  // n'échanger que l'intérieur du cartouche d'une fiche à l'autre, en le
  // laissant en place plutôt que de le détruire et le reconstruire.
  function articlePanelInner({ article, category, page, related, banner, pages, portrait }) {
    // "pages" est déjà filtré des pages masquées par overlay.js ; on retombe
    // sur article.pages si l'appelant ne le fournit pas.
    pages = pages || article.pages || [];
    const total = pages.length;
    const current = Math.min(page, Math.max(0, total - 1));
    const pageData = pages[current] || {};

    const { kicker, body } = splitKicker(pageData.text);
    const bodyHtml = body.length
      ? body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")
      : `<p class="empty-state">${escapeHtml(EanaI18n.t("article.emptyText"))}</p>`;

    const pennonHtml = banner
      ? `<span class="pennon"><img src="${escapeHtml(banner.image)}" alt="${escapeHtml(banner.label || "")}" title="${escapeHtml(banner.label || "")}"></span>`
      : "";

    // Une seule image par fiche (pas par page) : le crop "-2.webp", détecté
    // par build-manifest.js et transmis via overlay.js (repli sur "-1.webp"
    // puis sur le placeholder générique — voir findArticleAsset()).
    const portraitSrc = portrait || "images/placeholders/portrait-defaut.svg";

    const chaptersHtml = total > 1
      ? `<div class="chapters">
          <h5>${escapeHtml(EanaI18n.t("article.chaptersTitle"))}</h5>
          ${pages.map((p, i) => `<button class="${i === current ? "active" : ""}" data-article-page="${i}">${escapeHtml(p.caption || EanaI18n.t("article.chapterDefault", { n: i + 1 }))}</button>`).join("")}
        </div>`
      : "";

    const relatedHtml = related.length
      ? `<div class="related">
          <h5>${escapeHtml(EanaI18n.t("article.relatedTitle"))}</h5>
          <div class="related-list">
            ${related.map((r) => `<div class="related-pill" data-open-article="${escapeHtml(r.id)}">${icon(r.category)}<span>${escapeHtml(r.title)}</span></div>`).join("")}
          </div>
        </div>`
      : "";

    return `
      <button class="article-close" data-close-overlay aria-label="${escapeHtml(EanaI18n.t("common.close"))}">${CLOSE_ICON}</button>
      <div class="article-breadcrumb">${escapeHtml(category ? category.label : "")}</div>
      <h2>${escapeHtml(article.title)}</h2>
      ${kicker ? `<p class="article-kicker">${escapeHtml(kicker)}</p>` : ""}
      <div class="article-rule"></div>
      <div class="article-body">
        <div class="body-text">${bodyHtml}</div>
        <aside>
          <figure class="article-figure">
            <div class="portrait">
              <img src="${escapeHtml(portraitSrc)}" alt="">
              ${CORNERS_ALL}
              ${pennonHtml}
            </div>
          </figure>
          ${chaptersHtml}
        </aside>
      </div>
      ${relatedHtml}
    `;
  }

  function renderArticleOverlay(opts) {
    return `
      <div class="backdrop" data-close-overlay></div>
      <div class="overlay-inner">
        <article class="article-panel">${articlePanelInner(opts)}</article>
      </div>
    `;
  }

  // ---------- Mode maître ----------

  function masterIndicator() {
    return `<div class="master-indicator" id="master-indicator" title="${escapeHtml(EanaI18n.t("master.indicatorHint"))}">${KEY_ICON}<span>${escapeHtml(EanaI18n.t("master.title"))}</span></div>`;
  }

  function gate() {
    return `<div class="gate" id="gate">
      <div class="gate-backdrop" data-gate-close></div>
      <div class="gate-box">
        <h5>${escapeHtml(EanaI18n.t("master.title"))}</h5>
        <p>${escapeHtml(EanaI18n.t("master.gateDescription"))}</p>
        <input type="password" id="gate-pass" placeholder="${escapeHtml(EanaI18n.t("master.gatePlaceholder"))}" autocomplete="off">
        <p class="gate-error" id="gate-error" hidden>${escapeHtml(EanaI18n.t("master.gateError"))}</p>
        <div class="gate-actions">
          <button data-gate-close>${escapeHtml(EanaI18n.t("master.gateCancel"))}</button>
          <button class="gate-ok" id="gate-ok">${escapeHtml(EanaI18n.t("master.gateOpen"))}</button>
        </div>
      </div>
    </div>`;
  }

  return {
    setIcons,
    getIcon,
    setCategoryLabels,
    renderHome,
    renderCategory,
    renderCategoryResults,
    renderSearchResults,
    renderArticleOverlay,
    articlePanelInner,
    masterIndicator,
    gate,
    escapeHtml,
  };
})();
