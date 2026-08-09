/* =========================================================
   Eana — textes d'interface.
   Charge data/strings.json et expose t()/plural() pour les lire.
   Sépare l'habillage du site (boutons, titres, messages) du code,
   sur le modèle d'un fichier de langue fr.json : pour réutiliser
   ce site pour un autre univers, on édite ce fichier, pas le JS.
   ========================================================= */

const EanaI18n = (() => {
  let strings = {};

  function get(path) {
    return path.split(".").reduce((node, key) => (node && key in node ? node[key] : undefined), strings);
  }

  function format(str, vars) {
    if (!vars) return str;
    return str.replace(/\{(\w+)\}/g, (match, key) => (key in vars ? vars[key] : match));
  }

  function t(path, vars) {
    const value = get(path);
    if (typeof value !== "string") {
      console.warn(`[i18n] Clé de texte manquante : "${path}"`);
      return path;
    }
    return format(value, vars);
  }

  // Choisit la forme "one" (n === 1) ou "other", et injecte n dans les variables.
  function plural(path, n, vars) {
    const value = get(path);
    if (!value || typeof value !== "object") {
      console.warn(`[i18n] Clé de pluriel manquante : "${path}"`);
      return String(n);
    }
    const form = n === 1 ? (value.one || value.other) : (value.other || value.one);
    return format(form, { n, ...vars });
  }

  async function init(path = "data/strings.json") {
    const res = await fetch(path, { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement des textes : ${path} (${res.status})`);
    strings = await res.json();
  }

  return { init, t, plural };
})();
