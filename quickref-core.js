/**
 * Crucible Quick Reference — quickref-core.js
 * Cœur logique et graphique unique (Partagé à 100% entre Foundry et le Site Web)
 */

function _t(key, fallback = "") {
  return (typeof game !== "undefined" && game.i18n?.localize) ? game.i18n.localize(key) : (fallback || key);
}

export class QuickRefCore {
  constructor(options = {}) {
    this.container = options.container; // Élément HTML où s'injecter
    this.onLinkClickCallback = options.onLinkClick; // Pour l'API de Foundry si besoin
    this.basePath = options.basePath || "./data";

    this.categories = [];
    this.ruleMap = new Map();
    this.activeRuleId = null;
    this.activeCatId = "all";
    this.searchQuery = "";
  }

  /** Chargement des données universel */
  async loadData() {
    const index = await fetch(`${this.basePath}/index.json`).then(r => r.json());
    this.categories = [];
    this.ruleMap.clear();

    for (const catId of index.categories) {
      try {
        const cat = await fetch(`${this.basePath}/rules/${catId}.json`).then(r => r.json());
        this.categories.push(cat);
        for (const rule of cat.rules) {
          this.ruleMap.set(rule.id, {
            ...rule,
            _isSeparator: rule.type === "separator",
            _categoryId: cat.id,
            _categoryColor: cat.color,
            _categoryLabel: cat.label,
            _categoryIcon: cat.icon,
          });
        }
      } catch (e) {
        console.warn(`[QuickRef] Erreur de chargement : ${catId}`, e);
      }
    }
  }

  /** Filtrage des règles */
  getFilteredRules() {
    const q = this.searchQuery.toLowerCase().trim();
    let rules = [...this.ruleMap.values()];
    if (this.activeCatId !== "all") rules = rules.filter(r => r._categoryId === this.activeCatId);
    if (q) {
      rules = rules.filter(r =>
        !r._isSeparator && (
          r.title.toLowerCase().includes(q) ||
          (r.subtitle || "").toLowerCase().includes(q) ||
          (r.summary || "").toLowerCase().includes(q) ||
          (r.tags || []).some(t => t.toLowerCase().includes(q))
        )
      );
    }
    return rules;
  }

  /** Génération des moteurs de rendu HTML */
  render() {
    if (!this.container) return;
    const rules = this.getFilteredRules();
    const activeRule = this.activeRuleId ? this.ruleMap.get(this.activeRuleId) : null;
    const activeCat = this.categories.find(c => c.id === this.activeCatId);
    const catColor = activeCat?.color ?? "#e94560";

    // Build sub-elements
    const tabsHTML = this._buildTabsHTML();
    const listHTML = this._buildListHTML(rules);
    const detailHTML = this._buildDetailHTML(activeRule);

    // Injection principale
    this.container.innerHTML = `
      <div id="crucible-quickref-app" style="--cqr-cat-color:${catColor}">
        <div class="cqr-header">
          <h1 class="cqr-header-title">
            <i class="fa-solid fa-scroll" style="color:var(--cqr-gold);margin-right:6px"></i>
            ${_t("QUICKREF.Title", "Crucible QuickRef")}
          </h1>
          <div class="cqr-search-wrap">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input class="cqr-search" type="text" placeholder="${_t("QUICKREF.Search", "Rechercher...")}" value="${this.searchQuery}" autocomplete="off">
          </div>
        </div>
        <div class="cqr-tabs">${tabsHTML}</div>
        <div class="cqr-body">
          <div class="cqr-list"><div class="cqr-list-inner">${listHTML}</div></div>
          <div class="cqr-detail">${detailHTML}</div>
        </div>
      </div>`;

    this._bindEvents();
  }

  _buildTabsHTML() {
    const allActive = this.activeCatId === "all" ? "active" : "";
    let html = `<button class="cqr-tab ${allActive}" data-cat-id="all"><i class="fa-solid fa-list"></i>${_t("QUICKREF.AllCategories", "Toutes les catégories")}</button>`;
    html += this.categories.map(cat => `
      <button class="cqr-tab ${this.activeCatId === cat.id ? "active" : ""}" data-cat-id="${cat.id}" style="--cqr-cat-color:${cat.color}">
        <i class="${cat.icon}"></i>${cat.label}
      </button>`).join("");
    return html;
  }

  _buildListHTML(rules) {
    if (!rules.length) return `<div class="cqr-no-results">${_t("QUICKREF.NoResults", "Aucun résultat")}</div>`;
    const grouped = new Map();
    for (const r of rules) {
      if (!grouped.has(r._categoryId)) grouped.set(r._categoryId, []);
      grouped.get(r._categoryId).push(r);
    }
    const catMap = Object.fromEntries(this.categories.map(c => [c.id, c]));
    let html = "";

    for (const [catId, catRules] of grouped) {
      const cat = catMap[catId] ?? { color: "#e94560", label: catId };
      if (!this.searchQuery.trim()) {
        html += `<div class="cqr-category-header" style="--cqr-cat-color:${cat.color}">${cat.label}</div>`;
      }
      for (const rule of catRules) {
        if (rule._isSeparator) {
          html += `<div class="cqr-list-separator"><span class="cqr-list-separator-line"></span><span class="cqr-list-separator-label">${rule.title}</span><span class="cqr-list-separator-line"></span></div>`;
          continue;
        }
        html += `
          <div class="cqr-rule-item ${rule.id === this.activeRuleId ? "active" : ""}" data-rule-id="${rule.id}" style="--cqr-cat-color:${cat.color}">
            <div class="cqr-rule-icon"><i class="${rule.icon}"></i></div>
            <div class="cqr-rule-meta">
              <div class="cqr-rule-title">${rule.title}</div>
              <div class="cqr-rule-subtitle">${rule.subtitle ?? ""}</div>
            </div>
          </div>`;
      }
    }
    return html;
  }

  _buildDetailHTML(rule) {
    if (!rule) return `<div class="cqr-detail-empty"><i class="fa-solid fa-book-open"></i><span>Sélectionnez une règle</span></div>`;
    const seeAlso = rule.links?.map(id => this.ruleMap.get(id)).filter(Boolean) ?? [];
    const bulletsHTML = (rule.bullets ?? []).map(b => this._buildBlockHTML(b)).join("");

    const seeAlsoHTML = seeAlso.length ? `
      <div class="cqr-see-also">
        <div class="cqr-see-also-title">${_t("QUICKREF.SeeAlso", "Voir aussi")}</div>
        <div class="cqr-see-also-links">
          ${seeAlso.map(r => `<span class="cqr-see-also-link" data-rule-id="${r.id}"><i class="${r.icon}"></i>${r.title}</span>`).join("")}
        </div>
      </div>` : "";

    return `
      <div class="cqr-detail-content">
        <div class="cqr-detail-hero" style="--cqr-cat-color:${rule._categoryColor}">
          <div class="cqr-detail-hero-icon"><i class="${rule.icon}"></i></div>
          <div class="cqr-detail-hero-text">
            <h2 class="cqr-detail-name">${rule.title}</h2>
            <div class="cqr-detail-subtitle">${rule.subtitle ?? ""}</div>
          </div>
          <span class="cqr-category-badge" style="--cqr-cat-color:${rule._categoryColor}"><i class="${rule._categoryIcon}"></i>${rule._categoryLabel}</span>
        </div>
        <div class="cqr-detail-desc">${rule.description ?? ""}</div>
        <div class="cqr-bullets">${bulletsHTML}</div>
        ${seeAlsoHTML}
        <div class="cqr-reference"><i class="fa-solid fa-book"></i>${_t("QUICKREF.Reference", "Référence")} : ${rule.reference ?? "—"}</div>
      </div>`;
  }

  _buildBlockHTML(block) {
    const parsedTitle = block.title ? this._parseLinks(block.title) : "";
    let parsedContent = "";

    if (block.type === "list") {
      parsedContent = `<ul>${(block.items ?? []).map(i => `<li>${this._parseLinks(i)}</li>`).join("")}</ul>`;
    } else if (block.type === "table") {
      parsedContent = `<div class="cqr-table-wrap"><table class="cqr-table"><thead><tr>${block.headers.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${(block.rows ?? []).map(row => `<tr>${row.map(cell => `<td>${this._parseLinks(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    } else if (block.type === "callout") {
      parsedContent = `<div class="cqr-callout ${block.icon?.includes("triangle-exclamation") ? "danger" : ""}"><i class="${block.icon ?? "fa-solid fa-circle-info"}"></i><span>${this._parseLinks(block.content ?? "")}</span></div>`;
    } else {
      parsedContent = `<p>${this._parseLinks(block.content ?? "")}</p>`;
    }

    return `<div class="cqr-block">${parsedTitle ? `<div class="cqr-block-title">${parsedTitle}</div>` : ""}${parsedContent}</div>`;
  }

  _parseLinks(text) {
    if (!text) return "";
    return text.replace(/@\[([^\]]+)\](?:\{([^}]*)\})?/g, (_, ruleId, label) => {
      const rule = this.ruleMap.get(ruleId);
      return `<a class="rule-link" data-rule-id="${ruleId}">${label || rule?.title || ruleId}</a>`;
    });
  }

/** Gestion unifiée des événements */
  _bindEvents() {
    // 1. Gestion de la recherche
    const search = this.container.querySelector(".cqr-search");
    if (search) {
      search.addEventListener("input", e => {
        this.searchQuery = e.target.value;
        const innerList = this.container.querySelector(".cqr-list-inner");
        if (innerList) innerList.innerHTML = this._buildListHTML(this.getFilteredRules());
        this._bindSelectionEvents();
      });
    }

    // 2. Gestion du scroll horizontal et des fondus (Fades) sur les onglets
    const tabsContainer = this.container.querySelector(".cqr-tabs");
    if (tabsContainer) {
      const updateFadeEdges = () => {
        const scrollLeft = tabsContainer.scrollLeft;
        const maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;
        const showLeftFade = scrollLeft > 5;
        const showRightFade = scrollLeft < maxScroll - 5;
        tabsContainer.style.setProperty("--cqr-fade-left", showLeftFade ? "20%" : "0%");
        tabsContainer.style.setProperty("--cqr-fade-right", showRightFade ? "20%" : "0%");
      };

      // Scroll horizontal avec la molette de la souris
      tabsContainer.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          tabsContainer.scrollLeft += e.deltaY;
          updateFadeEdges();
        }
      }, { passive: false });

      tabsContainer.addEventListener("scroll", updateFadeEdges);
      
      // Petit hack temporel pour appliquer le fondu dès l'affichage initial
      updateFadeEdges();
      setTimeout(updateFadeEdges, 50);
    }

    // 3. Changement de catégorie au clic sur un onglet
    this.container.querySelectorAll(".cqr-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        this.activeCatId = btn.dataset.catId;
        this.activeRuleId = null;
        this.render();
      });
    });

    this._bindSelectionEvents();
  }

  _bindSelectionEvents() {
    this.container.querySelectorAll(".cqr-rule-item").forEach(item => {
      item.addEventListener("click", () => {
        this.activeRuleId = item.dataset.ruleId;
        this.render();
      });
    });

    this.container.querySelectorAll(".cqr-see-also-link, .rule-link").forEach(link => {
      link.addEventListener("click", e => {
        const id = link.dataset.ruleId;
        if (id) this.openRule(id);
      });
    });
  }

  /** Navigation API publique externe */
  openRule(ruleId) {
    const rule = this.ruleMap.get(ruleId);
    if (!rule) return;
    this.activeCatId = rule._categoryId;
    this.activeRuleId = ruleId;
    this.render();
    
    setTimeout(() => {
      this.container.querySelector(`.cqr-rule-item[data-rule-id="${ruleId}"]`)?.scrollIntoView({ block: "nearest" });
    }, 50);

    if (this.onLinkClickCallback) this.onLinkClickCallback(ruleId);
  }
}