// ============================================================
//  EMBER — Rendu de l'interface
// ============================================================

(function () {
  let activeCategory = "Toutes";
  let searchQuery    = "";

  // ── Init ──────────────────────────────────────────────────

  function init() {
    buildCategoryFilters();
    bindSearch();
    bindImportExport();
    render();
  }

  // ── Filtres de catégorie ──────────────────────────────────

  function buildCategoryFilters() {
    const bar = document.getElementById("category-filters");
    const all = ["Toutes", ...EMBER_CATEGORIES];
    bar.innerHTML = all.map(cat =>
      `<button class="filter-btn${cat === activeCategory ? " active" : ""}"
               data-cat="${cat}">${cat}</button>`
    ).join("");

    bar.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      render();
    });
  }

  function updateCategoryFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.cat === activeCategory);
    });
  }

  // ── Recherche ─────────────────────────────────────────────

  function bindSearch() {
    document.getElementById("search-input").addEventListener("input", function () {
      searchQuery = this.value.toLowerCase();
      render();
    });
  }

  // ── Export / Import ───────────────────────────────────────

  function bindImportExport() {
    document.getElementById("btn-export").addEventListener("click", exportData);

    document.getElementById("btn-import").addEventListener("click", () => {
      document.getElementById("import-file").click();
    });

    document.getElementById("import-file").addEventListener("change", function () {
      const file = this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        if (importData(e.target.result)) {
          render();
          alert("Données importées avec succès !");
        }
        this.value = "";
      };
      reader.readAsText(file);
    });
  }

  // ── Rendu principal ───────────────────────────────────────

  function render() {
    updateCategoryFilters();
    renderStats();
    renderTerms();
  }

  function renderStats() {
    const s = getStats();
    document.getElementById("stat-total").textContent    = s.total;
    document.getElementById("stat-votes").textContent    = s.totalVotes;
    document.getElementById("stat-myvotes").textContent  = s.myVoteCount;
    document.getElementById("stat-decided").textContent  = s.decided;
  }

  function renderTerms() {
    const terms = buildTermsWithVotes().filter(t => {
      const catOk    = activeCategory === "Toutes" || t.cat === activeCategory;
      const searchOk = !searchQuery ||
        t.en.toLowerCase().includes(searchQuery) ||
        t.desc.toLowerCase().includes(searchQuery) ||
        t.proposals.some(p => p.text.toLowerCase().includes(searchQuery));
      return catOk && searchOk;
    });

    const container = document.getElementById("terms-list");

    if (!terms.length) {
      container.innerHTML = `<p class="no-results">Aucun terme trouvé.</p>`;
      return;
    }

    let html     = "";
    let lastCat  = null;

    terms.forEach(term => {
      if (activeCategory === "Toutes" && term.cat !== lastCat) {
        html += `<h2 class="section-label">${term.cat}</h2>`;
        lastCat = term.cat;
      }
      html += renderTermCard(term);
    });

    container.innerHTML = html;

    // Événements après injection
    container.querySelectorAll(".vote-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        castVote(btn.dataset.term, parseInt(btn.dataset.idx));
        render();
      });
    });

    container.querySelectorAll(".add-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const input = document.getElementById(`input-${btn.dataset.term}`);
        if (addCustomProposal(btn.dataset.term, input.value)) {
          input.value = "";
          render();
        } else {
          input.classList.add("error");
          setTimeout(() => input.classList.remove("error"), 800);
        }
      });
    });

    container.querySelectorAll(".add-input").forEach(input => {
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          const btn = container.querySelector(`.add-btn[data-term="${input.dataset.term}"]`);
          if (btn) btn.click();
        }
      });
    });
  }

  function renderTermCard(term) {
    const sorted    = [...term.proposals]
      .map((p, i) => ({ ...p, origIdx: i }))
      .sort((a, b) => b.votes - a.votes);

    const topVotes  = sorted[0]?.votes || 0;

    const proposalsHtml = sorted.map(p => {
      const voted   = hasVoted(term.id, p.origIdx);
      const isWin   = p.votes > 0 && p.votes === topVotes && sorted.indexOf(p) === 0;
      return `
        <div class="proposal${isWin ? " proposal--top" : ""}${voted ? " proposal--voted" : ""}">
          <button class="vote-btn${voted ? " voted" : ""}"
                  data-term="${term.id}" data-idx="${p.origIdx}"
                  title="${voted ? "Retirer mon vote" : "Voter pour cette traduction"}">
            ${voted ? "✓" : "↑"}
          </button>
          <span class="vote-count">${p.votes}</span>
          <span class="proposal-text">
            ${p.text}
            ${isWin ? '<span class="crown">★</span>' : ""}
            ${p.isCustom ? '<span class="badge-custom">proposé</span>' : ""}
          </span>
        </div>`;
    }).join("");

    return `
      <div class="term-card" id="card-${term.id}">
        <div class="term-header">
          <span class="term-en">${term.en}</span>
          <span class="term-cat">${term.cat}</span>
        </div>
        <p class="term-desc">${term.desc}</p>
        <div class="proposals">${proposalsHtml}</div>
        <div class="add-proposal">
          <input class="add-input"
                 id="input-${term.id}"
                 data-term="${term.id}"
                 type="text"
                 placeholder="Proposer une traduction..." />
          <button class="add-btn" data-term="${term.id}">+ Proposer</button>
        </div>
      </div>`;
  }

  // ── Start ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);
})();
