/* =========================================================
   Eana — points de carte : chargement, types, rendu d'un repère.
   Partagé entre la carte publique et l'éditeur pour que les deux
   dessinent exactement le même repère (sinon l'éditeur mentirait
   sur le rendu final).
   ========================================================= */

const EanaMapPoints = (() => {
  let types = [];
  let typeById = {};

  async function initTypes() {
    const res = await fetch("data/map-point-types.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement des types de repères (${res.status})`);
    const data = await res.json();
    types = data.types || [];
    typeById = Object.fromEntries(types.map((t) => [t.id, t]));
  }

  async function loadPoints() {
    const res = await fetch("data/map-points.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement des points de carte (${res.status})`);
    const data = await res.json();
    return data.points || [];
  }

  // Chemin de l'image de fond : un seul endroit à modifier pour remplacer la
  // carte, lu aussi bien par la page publique que par l'éditeur.
  async function loadConfig() {
    const res = await fetch("data/map-config.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement de la configuration de carte (${res.status})`);
    return res.json();
  }

  function getTypes() { return types; }
  function getType(id) { return typeById[id] || null; }

  function typeIconSvg(typeId) {
    const t = getType(typeId);
    if (!t) return "";
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
      stroke-linecap="round" stroke-linejoin="round"><path d="${t.path}"/></svg>`;
  }

  // Icône d'un repère : son type d'abord, sinon celle de la catégorie de la
  // fiche liée (compatibilité avec les points créés avant les types).
  function iconFor(point, articleEntry) {
    if (point.type && getType(point.type)) return typeIconSvg(point.type);
    if (articleEntry && typeof EanaRender !== "undefined") return EanaRender.getIcon(articleEntry.category);
    return "";
  }

  function accentFor(point) {
    const t = getType(point.type);
    return t && t.accent === "sea" ? "sea" : "cinabre";
  }

  // Nom affiché : le label explicite prime, sinon le titre de la fiche liée.
  function labelFor(point, articleEntry, fallback) {
    return point.label || (articleEntry ? articleEntry.title : (fallback || ""));
  }

  return { initTypes, loadPoints, loadConfig, getTypes, getType, typeIconSvg, iconFor, accentFor, labelFor };
})();
