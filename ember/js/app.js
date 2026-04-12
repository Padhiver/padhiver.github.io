// ============================================================
//  EMBER — Rendu de l'interface (async, données Supabase)
// ============================================================

(function () {
  let activeCategory  = "Toutes";
  let searchQuery     = "";
  let showUnvotedOnly = false;
  let isVoting        = false;

  // ── Init ──────────────────────────────────────────────────

  async function init() {
    buildCategoryFilters();
    buildUnvotedToggle();
    bindSearch();
    await render();

    // Realtime : écoute les changements des autres utilisateurs.
    // On ne re-render PAS si c'est notre propre action (isVoting)
    // pour éviter un double rendu saccadé — on gère déjà render() après castVote.
    subscribeToVotes(() => {
      if (!isVoting) render();
    });
  }

  // ── Filtres de catégorie ──────────────────────────────────

  function buildCategoryFilters() {
    const bar = document.getElementById("category-filters");
    const all = ["Toutes", ...EMBER_CATEGORIES];
    bar.innerHTML = all.map(cat =>
      `<button class="filter-btn${cat === activeCategory ? " active" : ""}"
               data-cat="${cat}">${cat}</button>`
    ).join("");

    bar.addEventListener("click", async e => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      activeCategory = btn.dataset.cat;
      await render();
    });
  }

  function updateCategoryFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.cat === activeCategory);
    });
  }

  // ── Filtre "non votés" ────────────────────────────────────

  function buildUnvotedToggle() {
    const toolbar = document.getElementById("toolbar");
    const btn = document.createElement("button");
    btn.id        = "unvoted-toggle";
    btn.className = "filter-toggle";
    btn.textContent = "☐  Cacher mes votes";
    btn.title     = "N'afficher que les termes sur lesquels je n'ai pas encore voté";

    btn.addEventListener("click", async () => {
      showUnvotedOnly = !showUnvotedOnly;
      btn.textContent = showUnvotedOnly ? "☑  Cacher mes votes" : "☐  Cacher mes votes";
      btn.classList.toggle("active", showUnvotedOnly);
      await render();
    });

    toolbar.appendChild(btn);
  }

  // ── Recherche ─────────────────────────────────────────────

  function bindSearch() {
    document.getElementById("search-input").addEventListener("input", async function () {
      searchQuery = this.value.toLowerCase();
      await render();
    });
  }

  // ── Rendu principal ───────────────────────────────────────

  async function render() {
    setLoading(true);
    try {
      const data  = await loadAllData();
      const terms = buildTermsWithData(data);
      updateCategoryFilters();
      renderStats(terms, data.myVotes);
      renderTerms(terms);
    } catch (err) {
      console.error("Erreur Supabase :", err);
      document.getElementById("terms-list").innerHTML =
        `<p class="no-results">⚠️ Impossible de charger les données. Vérifie ta connexion.<br><small>${err.message || ""}</small></p>`;
    } finally {
      setLoading(false);
    }
  }

  function setLoading(on) {
    const list = document.getElementById("terms-list");
    list.style.opacity       = on ? "0.5" : "1";
    list.style.pointerEvents = on ? "none" : "";
  }

  // ── Stats ─────────────────────────────────────────────────

  function renderStats(terms, myVotes) {
    const s = getStats(terms, myVotes);
    document.getElementById("stat-total").textContent   = s.total;
    document.getElementById("stat-votes").textContent   = s.totalVotes;
    document.getElementById("stat-myvotes").textContent = s.myVoteCount;
    document.getElementById("stat-decided").textContent = s.decided;
  }

  // ── Liste des termes ──────────────────────────────────────

  function renderTerms(terms) {
    const filtered = terms.filter(t => {
      const catOk      = activeCategory === "Toutes" || t.cat === activeCategory;
      const searchOk   = !searchQuery ||
        t.en.toLowerCase().includes(searchQuery) ||
        t.desc.toLowerCase().includes(searchQuery) ||
        t.proposals.some(p => p.text.toLowerCase().includes(searchQuery));
      const unvotedOk  = !showUnvotedOnly || !t.proposals.some(p => p.voted);
      return catOk && searchOk && unvotedOk;
    });

    const container = document.getElementById("terms-list");

    if (!filtered.length) {
      container.innerHTML = showUnvotedOnly
        ? `<p class="no-results">🎉 Tu as voté sur tous les termes visibles !</p>`
        : `<p class="no-results">Aucun terme trouvé.</p>`;
      return;
    }

    let html    = "";
    let lastCat = null;

    filtered.forEach(term => {
      if (activeCategory === "Toutes" && term.cat !== lastCat) {
        html += `<h2 class="section-label">${esc(term.cat)}</h2>`;
        lastCat = term.cat;
      }
      html += renderTermCard(term);
    });

    container.innerHTML = html;

    // ── Événements ────────────────────────────────────────

    container.querySelectorAll(".vote-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        btn.disabled = true;
        isVoting = true;
        await castVote(btn.dataset.term, btn.dataset.proposal);
        isVoting = false;
        await render();
      });
    });

    container.querySelectorAll(".add-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        const input = document.getElementById(`input-${btn.dataset.term}`);
        btn.disabled = true;
        isVoting = true;
        const result = await addCustomProposal(btn.dataset.term, input.value);
        isVoting = false;
        if (result.ok) {
          input.value = "";
          await render();
        } else {
          input.classList.add("error");
          setTimeout(() => input.classList.remove("error"), 800);
          btn.disabled = false;
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

  // ── Carte d'un terme ──────────────────────────────────────

  function renderTermCard(term) {
    const sorted   = [...term.proposals].sort((a, b) => b.votes - a.votes);
    const topVotes = sorted[0]?.votes || 0;

    const proposalsHtml = sorted.map(p => {
      const isWin = p.votes > 0 && p.votes === topVotes && sorted[0] === p;
      return `
        <div class="proposal${isWin ? " proposal--top" : ""}${p.voted ? " proposal--voted" : ""}">
          <button class="vote-btn${p.voted ? " voted" : ""}"
                  data-term="${esc(term.id)}"
                  data-proposal="${esc(p.text)}"
                  title="${p.voted ? "Retirer mon vote" : "Voter pour cette traduction"}">
            ${p.voted ? "✓" : "↑"}
          </button>
          <span class="vote-count">${p.votes}</span>
          <span class="proposal-text">
            ${esc(p.text)}
            ${isWin ? '<span class="crown">★</span>' : ""}
            ${p.isCustom ? '<span class="badge-custom">proposé</span>' : ""}
          </span>
        </div>`;
    }).join("");

    return `
      <div class="term-card" id="card-${esc(term.id)}">
        <div class="term-header">
          <span class="term-en">${esc(term.en)}</span>
          <span class="term-cat">${esc(term.cat)}</span>
        </div>
        <p class="term-desc">${esc(term.desc)}</p>
        <div class="proposals">${proposalsHtml}</div>
        <div class="add-proposal">
          <input class="add-input"
                 id="input-${esc(term.id)}"
                 data-term="${esc(term.id)}"
                 type="text"
                 placeholder="Proposer une traduction..." />
          <button class="add-btn" data-term="${esc(term.id)}">+ Proposer</button>
        </div>
      </div>`;
  }

  // ── Utilitaire ────────────────────────────────────────────

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Start ─────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", init);
})();
