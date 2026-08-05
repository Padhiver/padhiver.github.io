/* =========================================================
   Eana — construction du HTML des vues.
   Fonctions pures : (données) -> chaîne HTML. Le montage DOM
   et les événements sont gérés par app.js.
   ========================================================= */

const EanaRender = (() => {
  let icons = {}; // { categoryId: "<svg ...>" }

  function setIcons(map) {
    icons = map;
  }

  function icon(categoryId) {
    return icons[categoryId] || "";
  }

  function escapeHtml(str) {
    return String(str ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  const CHEVRON_LEFT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>`;
  const CHEVRON_RIGHT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>`;
  const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l5 5" stroke-linecap="round"/></svg>`;
  const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
  const PIN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="10" r="2.6"/><path d="M12 21s7-7.5 7-12.5A7 7 0 0 0 5 8.5C5 13.5 12 21 12 21z"/></svg>`;
  const KEY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="3.2"/><path d="M10.3 12.7L19 4M15 8l2.5 2.5M18 5l2.5 2.5"/></svg>`;

  function sectionTitle(label) {
    return `<div class="section-title"><span class="line"></span><span class="diamond">◆</span><span>${escapeHtml(label)}</span><span class="diamond">◆</span><span class="line right"></span></div>`;
  }

  function searchBar(query, placeholder = "Chercher dans une liste") {
    return `<div class="search-bar-wrap">
      <div class="search-bar">
        ${SEARCH_ICON}
        <input type="text" id="search-input" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(query || "")}" autocomplete="off">
      </div>
    </div>
    <div class="search-results" id="search-results"></div>`;
  }

  function articleCard(article, index, { big = false } = {}) {
    const badgeOff = article.public === "OFF"
      ? `<span class="badge-off">Privé</span>`
      : "";
    return `<div class="card ${big ? "card-big" : ""} card-in" style="animation-delay:${index * 45}ms" data-open-article="${article.id}">
      <img src="${escapeHtml(article.cardImage || "")}" alt="">
      <div class="card-shade"></div>
      ${badgeOff}
      <div class="card-title">${escapeHtml(article.title)}</div>
    </div>`;
  }

  function categoryCard(cat, index) {
    return `<div class="card category-card card-in" style="animation-delay:${index * 60}ms" data-open-category="${cat.id}">
      <img src="images/placeholders/emblem-${cat.id}.svg" alt="">
      <div class="card-shade"></div>
      <div class="card-body">
        <div class="card-heading">${icon(cat.id)}<span class="card-title">${escapeHtml(cat.label)}</span></div>
      </div>
    </div>`;
  }

  function renderHome({ recentArticles, categories, query, searchResults }) {
    const recentHtml = recentArticles.length
      ? recentArticles.map((a, i) => articleCard(a, i)).join("")
      : `<div class="empty-state">Aucune fiche publiée pour le moment.</div>`;

    const categoriesHtml = categories
      .map((c, i) => categoryCard(c, i))
      .join("");

    return `
      ${sectionTitle("Articles récents")}
      <div class="recent-row">${recentHtml}</div>
      ${sectionTitle("Tous les articles")}
      <div class="category-grid">${categoriesHtml}</div>
      ${searchBar(query)}
      ${renderSearchResults(searchResults)}
    `;
  }

  function renderSearchResults(results) {
    if (!results || results.length === 0) return "";
    return `<div class="related-list" style="max-width:640px;margin:14px auto 0;justify-content:flex-start;">
      ${results.map((a) => `<div class="related-pill" data-open-article="${a.id}">${icon(a.category)}<span>${escapeHtml(a.title)}</span><span class="chevron">▸</span></div>`).join("")}
    </div>`;
  }

  function pagination(current, total, prevAttr, nextAttr, dotAttr) {
    if (total <= 1) return "";
    const dots = Array.from({ length: total }, (_, i) => `<button class="dot ${i === current ? "active" : ""}" data-${dotAttr}="${i}" aria-label="Page ${i + 1}"></button>`).join("");
    return `<div class="pagination">
      <button class="arrow" data-${prevAttr} ${current === 0 ? "disabled" : ""} aria-label="Précédent">${CHEVRON_LEFT}</button>
      <div class="dots">${dots}</div>
      <button class="arrow" data-${nextAttr} ${current === total - 1 ? "disabled" : ""} aria-label="Suivant">${CHEVRON_RIGHT}</button>
    </div>`;
  }

  function renderCategoryResults({ articles, page, pageSize, query }) {
    const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
    const currentPage = Math.min(page, totalPages - 1);
    const pageItems = articles.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

    let gridHtml;
    if (pageItems.length) {
      const cards = pageItems.map((a, i) => articleCard(a, i, { big: true }));
      const fillerCount = pageSize - pageItems.length;
      for (let i = 0; i < fillerCount; i += 1) {
        cards.push(`<div class="card card-placeholder" aria-hidden="true"></div>`);
      }
      gridHtml = cards.join("");
    } else {
      gridHtml = `<div class="empty-state">Aucun article ${query ? "ne correspond à ta recherche" : "dans cette catégorie pour le moment"}.</div>`;
    }

    return `
      <div class="article-grid page-swap">${gridHtml}</div>
      ${pagination(currentPage, totalPages, "grid-prev", "grid-next", "grid-page")}
    `;
  }

  function renderCategory({ categories, activeCategory, articles, page, pageSize, query }) {
    const tabsHtml = categories
      .map((c) => `<div class="category-tab ${c.id === activeCategory.id ? "active" : ""}" data-open-category="${c.id}">${icon(c.id)}<span>${escapeHtml(c.label)}</span></div>`)
      .join("");

    return `
      <div class="category-tabs">
        <div class="tab-arrow" data-tab-prev aria-label="Catégorie précédente">${CHEVRON_LEFT}</div>
        ${tabsHtml}
        <div class="tab-arrow" data-tab-next aria-label="Catégorie suivante">${CHEVRON_RIGHT}</div>
      </div>
      <div id="grid-wrap">${renderCategoryResults({ articles, page, pageSize, query })}</div>
      ${searchBar(query, `Chercher dans ${activeCategory.label.toLowerCase()}`)}
    `;
  }

  function renderArticleOverlay({ article, manifestEntry, category, page, related, banner, pageSwap = false }) {
    const pages = article.pages || [];
    const total = pages.length;
    const current = Math.min(page, total - 1);
    const pageData = pages[current] || {};
    const swapClass = pageSwap ? " page-swap" : "";

    const bannerHtml = banner
      ? `<img class="article-banner" src="${escapeHtml(banner.image)}" alt="${escapeHtml(banner.label || "")}" title="${escapeHtml(banner.label || "")}">`
      : "";

    const relatedHtml = related.length
      ? related.map((r) => `<div class="related-pill" data-open-article="${r.id}">${icon(r.category)}<span>${escapeHtml(r.title)}</span><span class="chevron">▸</span></div>`).join("")
      : `<div class="empty-state" style="padding:20px;">Aucun article lié.</div>`;

    return `
      <div class="backdrop" data-close-overlay></div>
      <div class="overlay-inner">
        <div class="article-breadcrumb">${PIN_ICON}<span>${escapeHtml(category ? category.label : "")}</span></div>
        <div class="article-panel">
          <button class="article-close" data-close-overlay aria-label="Fermer">${CLOSE_ICON}</button>
          ${bannerHtml}
          <div class="text-col${swapClass}">
            <button class="back-btn" data-close-overlay>${CHEVRON_LEFT} Retour</button>
            <h2>${escapeHtml(article.title)}</h2>
            <div class="rule"></div>
            <div class="body-text">${escapeHtml(pageData.text || "")}</div>
          </div>
          <div class="image-col${swapClass}">
            <img src="${escapeHtml(pageData.contextImage || "")}" alt="">
            <div class="image-fade"></div>
          </div>
        </div>
        ${pageData.caption ? `<div class="article-caption">${escapeHtml(pageData.caption)}</div>` : ""}
        ${pagination(current, total, "article-prev", "article-next", "article-page")}
        <div class="related">
          ${sectionTitle("Articles liés")}
          <div class="related-list">${relatedHtml}</div>
        </div>
      </div>
    `;
  }

  function masterIndicator() {
    return `<div class="master-indicator" id="master-indicator" title="Cliquer pour désactiver le mode maître">${KEY_ICON}<span>Mode maître</span></div>`;
  }

  return {
    setIcons,
    renderHome,
    renderCategory,
    renderCategoryResults,
    renderSearchResults,
    renderArticleOverlay,
    masterIndicator,
    escapeHtml,
  };
})();
