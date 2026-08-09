/* =========================================================
   Eana — couche de données.
   Charge data/manifest.json + data/categories.json, filtre
   les fiches "public: OFF" et gère le mode maître.
   ========================================================= */

const EanaData = (() => {
  const LS_KEY = "eana_master";

  // Hash SHA-256 de la passphrase du mode maître (la passphrase elle-même
  // n'est stockée nulle part). Attention : la comparaison est sensible à la
  // casse et aux accents.
  // Voir README.md > "Mode maître" pour régénérer ce hash.
  const MASTER_HASH = "ffeb6b95c04554c4cdf2f62313c17af33395bf55447eb82521de24b3a8d272b0";

  let categories = [];
  let manifestArticles = [];
  let banners = [];
  const articleCache = new Map();

  async function fetchJson(path) {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement: ${path} (${res.status})`);
    return res.json();
  }

  async function sha256Hex(text) {
    const enc = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", enc);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function isMasterActive() {
    return localStorage.getItem(LS_KEY) === "1";
  }

  async function tryActivateMaster(passphrase) {
    const hash = await sha256Hex(passphrase);
    if (hash === MASTER_HASH) {
      localStorage.setItem(LS_KEY, "1");
      return true;
    }
    return false;
  }

  function deactivateMaster() {
    localStorage.removeItem(LS_KEY);
  }

  async function consumeUrlMasterParam() {
    const url = new URL(window.location.href);
    const value = url.searchParams.get("maitre");
    if (value === null) return;

    if (value.toLowerCase() === "off") {
      deactivateMaster();
    } else {
      await tryActivateMaster(value);
    }
    url.searchParams.delete("maitre");
    window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  }

  function isVisible(article) {
    return article.public === "ON" || isMasterActive();
  }

  async function init() {
    [categories, manifestArticles, banners] = await Promise.all([
      fetchJson("data/categories.json"),
      fetchJson("data/manifest.json").then((m) => m.articles || []),
      fetchJson("data/banners.json"),
    ]);
  }

  function getCategories() {
    return categories;
  }

  function getCategory(id) {
    return categories.find((c) => c.id === id) || null;
  }

  function getBanner(id) {
    return banners.find((b) => b.id === id) || null;
  }

  function getVisibleArticles() {
    return manifestArticles.filter(isVisible);
  }

  function getArticlesByCategory(categoryId) {
    return getVisibleArticles().filter((a) => a.category === categoryId);
  }

  // Grille de catégorie : les fiches OFF y figurent aussi, mais rendues
  // verrouillées (un "?" sans nom ni lien) pour montrer ce qui est en
  // préparation. Ne jamais utiliser pour la recherche : le
  // titre d'une fiche OFF ne doit apparaître nulle part.
  function getAllByCategory(categoryId) {
    return manifestArticles.filter((a) => a.category === categoryId);
  }

  function countAllByCategory(categoryId) {
    return getAllByCategory(categoryId).length;
  }

  function getRecentArticles(limit = 6) {
    return [...getVisibleArticles()]
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
      .slice(0, limit);
  }

  function searchArticles(categoryId, query) {
    const q = query.trim().toLowerCase();
    const pool = categoryId ? getArticlesByCategory(categoryId) : getVisibleArticles();
    if (!q) return pool;
    return pool.filter((a) => a.title.toLowerCase().includes(q));
  }

  function getManifestEntry(id) {
    return manifestArticles.find((a) => a.id === id) || null;
  }

  async function getArticleFull(id) {
    if (articleCache.has(id)) return articleCache.get(id);
    const entry = getManifestEntry(id);
    const path = entry ? `data/articles/${entry.category}/${id}.json` : `data/articles/${id}.json`;
    const data = await fetchJson(path);
    articleCache.set(id, data);
    return data;
  }

  return {
    init,
    getCategories,
    getCategory,
    getBanner,
    getArticlesByCategory,
    getAllByCategory,
    countAllByCategory,
    getRecentArticles,
    searchArticles,
    getManifestEntry,
    getArticleFull,
    isVisible,
    isMasterActive,
    tryActivateMaster,
    deactivateMaster,
    consumeUrlMasterParam,
  };
})();
