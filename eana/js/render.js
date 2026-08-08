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
  const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l5 5" stroke-linecap="round"/></svg>`;
  const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`;
  const KEY_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="3.2"/><path d="M10.3 12.7L19 4M15 8l2.5 2.5M18 5l2.5 2.5"/></svg>`;

  // Libellés courts affichés sur les vignettes et dans le registre.
  const SHORT_LABEL = {
    personnages: "Personnages",
    geographie: "Géographie",
    monde: "Monde",
    creatures: "Créatures",
  };

  const CORNERS_TOP = `<i class="corner c1"></i><i class="corner c4"></i>`;
  const CORNERS_ALL = `<i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i>`;

  // Les anciens emblèmes de remplacement sont sombres : sur le papier clair on
  // leur substitue les gabarits « carte-* », au ratio 16:9.
  function cardImage(article) {
    const src = article.cardImage || "";
    if (!src || src.includes("placeholders/emblem-")) {
      return `images/placeholders/carte-${article.category}.svg`;
    }
    return src;
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
      <button class="chip ${masterActive ? "" : "active"}" data-mode="public">Public</button>
      <button class="chip ${masterActive ? "active" : ""}" data-mode="master">${KEY_ICON}Maître</button>
    </div>`;
  }

  function articleCard(article, { showKind = false, index = 0, locked = false } = {}) {
    const delay = `style="animation-delay:${index * 35}ms"`;

    // Fiche non publiée vue par un visiteur : on n'émet ni l'id (qui dérive du
    // titre), ni le titre, ni l'image — rien qui puisse trahir son contenu.
    // Sans data-open-article, la délégation de clic l'ignore aussi.
    if (locked) {
      return `<div class="card card-locked card-in" ${delay} aria-label="Fiche à venir">
        ${CORNERS_TOP}
        <span class="card-lock" aria-hidden="true">?</span>
      </div>`;
    }

    const off = article.public === "OFF" ? `<span class="badge-off">Privé</span>` : "";
    const kind = showKind
      ? `<span class="card-kind">${escapeHtml(SHORT_LABEL[article.category] || "")}</span>`
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
      <h3>${escapeHtml(SHORT_LABEL[cat.id] || cat.label)}</h3>
      <p>${escapeHtml(cat.description || "")}</p>
      <span class="count">${count} article${count > 1 ? "s" : ""}</span>
    </div>`;
  }

  // ---------- Accueil ----------

  function renderRegister(items) {
    if (!items.length) return `<div class="empty-state">Aucune fiche à cette lettre.</div>`;
    return items
      .map((a) => `<a href="#/article/${escapeHtml(a.id)}"><span>${escapeHtml(a.title)}</span><i class="dots"></i><span class="kind">${escapeHtml(SHORT_LABEL[a.category] || "")}</span></a>`)
      .join("");
  }

  function renderHome({ recentArticles, categories, counts, query, searchResults, letters, activeLetter, letterArticles, total, masterActive }) {
    const recentHtml = recentArticles.length
      ? recentArticles.map((a, i) => articleCard(a, { showKind: true, index: i })).join("")
      : `<div class="empty-state">Aucune fiche publiée pour le moment.</div>`;

    const categoriesHtml = categories.map((c) => categoryCard(c, counts[c.id] || 0)).join("");

    const lettersHtml = letters
      .map((l) => `<button class="letter ${l.letter === activeLetter ? "active" : ""}" data-letter="${escapeHtml(l.letter)}" ${l.count ? "" : "disabled"}>${escapeHtml(l.letter)}</button>`)
      .join("");

    const registerHtml = renderRegister(letterArticles);

    return `
      ${tools(query, "Nom d'un lieu, d'une personne, d'un phénomène…", masterActive)}
      <div class="search-results" id="search-results">${renderSearchResults(searchResults)}</div>
      ${sectionTitle("Articles récents")}
      <div class="card-row recent">${recentHtml}</div>
      ${sectionTitle("Les quatre registres", `${total} entrées`)}
      <div class="category-grid">${categoriesHtml}</div>
      ${sectionTitle("Registre général")}
      <div class="register-letters">${lettersHtml}</div>
      <div class="register" id="register">${registerHtml}</div>
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
      <button class="arrow" data-grid-prev ${current === 0 ? "disabled" : ""} aria-label="Feuillet précédent">${CHEVRON_LEFT}</button>
      <span>Feuillet ${current + 1} / ${total}</span>
      <button class="arrow" data-grid-next ${current === total - 1 ? "disabled" : ""} aria-label="Feuillet suivant">${CHEVRON_RIGHT}</button>
    </div>`;
  }

  function renderCategoryResults({ articles, page, pageSize, query, masterActive }) {
    const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
    const currentPage = Math.min(page, totalPages - 1);
    const pageItems = articles.slice(currentPage * pageSize, currentPage * pageSize + pageSize);

    const gridHtml = pageItems.length
      ? pageItems.map((a, i) => articleCard(a, { index: i, locked: !masterActive && a.public === "OFF" })).join("")
      : `<div class="empty-state">Aucun article ${query ? "ne correspond à ta recherche" : "dans cette catégorie pour le moment"}.</div>`;

    return `
      <div class="card-row grid">${gridHtml}</div>
      ${pagination(currentPage, totalPages)}
    `;
  }

  function renderCategory({ categories, activeCategory, articles, page, pageSize, query, masterActive }) {
    const tabsHtml = categories
      .map((c) => `<button class="category-tab ${c.id === activeCategory.id ? "active" : ""}" data-open-category="${escapeHtml(c.id)}">${icon(c.id)}<span>${escapeHtml(SHORT_LABEL[c.id] || c.label)}</span></button>`)
      .join("");

    return `
      <div class="category-tabs">${tabsHtml}</div>
      ${tools(query, `Chercher dans ${activeCategory.label.toLowerCase()}`, masterActive)}
      ${sectionTitle(activeCategory.label, `${articles.length} entrée${articles.length > 1 ? "s" : ""}`)}
      <div id="grid-wrap">${renderCategoryResults({ articles, page, pageSize, query, masterActive })}</div>
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

  function renderArticleOverlay({ article, category, page, related, banner, pageSwap = false }) {
    const pages = article.pages || [];
    const total = pages.length;
    const current = Math.min(page, Math.max(0, total - 1));
    const pageData = pages[current] || {};
    const swapClass = pageSwap ? " page-swap" : "";

    const { kicker, body } = splitKicker(pageData.text);
    const bodyHtml = body.length
      ? body.map((p) => `<p>${escapeHtml(p)}</p>`).join("")
      : `<p class="empty-state">Fiche sans texte.</p>`;

    const pennonHtml = banner
      ? `<span class="pennon"><img src="${escapeHtml(banner.image)}" alt="${escapeHtml(banner.label || "")}" title="${escapeHtml(banner.label || "")}"></span>`
      : "";

    const portraitSrc = pageData.contextImage || "images/placeholders/portrait-defaut.svg";

    const chaptersHtml = total > 1
      ? `<div class="chapters">
          <h5>Chapitres</h5>
          ${pages.map((p, i) => `<button class="${i === current ? "active" : ""}" data-article-page="${i}">${escapeHtml(p.caption || `Page ${i + 1}`)}</button>`).join("")}
        </div>`
      : "";

    const relatedHtml = related.length
      ? `<div class="related">
          <h5>Articles liés</h5>
          <div class="related-list">
            ${related.map((r) => `<div class="related-pill" data-open-article="${escapeHtml(r.id)}">${icon(r.category)}<span>${escapeHtml(r.title)}</span></div>`).join("")}
          </div>
        </div>`
      : "";

    return `
      <div class="backdrop" data-close-overlay></div>
      <div class="overlay-inner">
        <article class="article-panel">
          <button class="article-close" data-close-overlay aria-label="Fermer">${CLOSE_ICON}</button>
          <div class="article-breadcrumb">${escapeHtml(category ? category.label : "")}</div>
          <h2>${escapeHtml(article.title)}</h2>
          ${kicker ? `<p class="article-kicker">${escapeHtml(kicker)}</p>` : ""}
          <div class="article-rule"></div>
          <div class="article-body">
            <div class="body-text${swapClass}">${bodyHtml}</div>
            <aside>
              <figure class="article-figure${swapClass}">
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
        </article>
      </div>
    `;
  }

  // ---------- Mode maître ----------

  function masterIndicator() {
    return `<div class="master-indicator" id="master-indicator" title="Cliquer pour désactiver le mode maître">${KEY_ICON}<span>Mode maître</span></div>`;
  }

  function gate() {
    return `<div class="gate" id="gate">
      <div class="gate-backdrop" data-gate-close></div>
      <div class="gate-box">
        <h5>Mode maître</h5>
        <p>Saisis la passphrase pour afficher aussi les fiches privées.</p>
        <input type="password" id="gate-pass" placeholder="Passphrase" autocomplete="off">
        <p class="gate-error" id="gate-error" hidden>Passphrase incorrecte.</p>
        <div class="gate-actions">
          <button data-gate-close>Annuler</button>
          <button class="gate-ok" id="gate-ok">Ouvrir</button>
        </div>
      </div>
    </div>`;
  }

  return {
    setIcons,
    renderHome,
    renderCategory,
    renderCategoryResults,
    renderSearchResults,
    renderRegister,
    renderArticleOverlay,
    masterIndicator,
    gate,
    escapeHtml,
  };
})();
