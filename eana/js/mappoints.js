/* =========================================================
   Eana — points de carte : chargement, types, rendu d'un repère.
   Partagé entre la carte publique et l'éditeur pour que les deux
   dessinent exactement le même repère (sinon l'éditeur mentirait
   sur le rendu final).
   ========================================================= */

const EanaMapPoints = (() => {
  let types = [];
  let typeById = {};
  let maps = [];
  let mapById = {};
  let defaultMapId = "";

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

  // Liste des cartes : un seul endroit à modifier pour en ajouter une ou
  // remplacer une image, lu aussi bien par la page publique que par l'éditeur.
  async function loadConfig() {
    const res = await fetch("data/map-config.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Échec de chargement de la configuration de carte (${res.status})`);
    const raw = await res.json();

    // Ancien format (une seule carte décrite par un "image" à la racine) :
    // accepté tel quel et présenté comme une liste d'une carte, pour qu'une
    // configuration écrite avant le sélecteur continue de fonctionner.
    maps = Array.isArray(raw.maps) && raw.maps.length
      ? raw.maps
      : [{ id: "monde", label: "Carte", image: raw.image }];

    maps = maps.filter((m) => m && typeof m.id === "string" && m.id);
    if (!maps.length) throw new Error("Aucune carte déclarée dans data/map-config.json.");

    mapById = Object.fromEntries(maps.map((m) => [m.id, m]));
    defaultMapId = mapById[raw.defaultMap] ? raw.defaultMap : maps[0].id;
    return { maps, defaultMapId };
  }

  function getMaps() { return maps; }
  function getMap(id) { return mapById[id] || null; }
  function getDefaultMapId() { return defaultMapId; }

  // Retombe sur la carte par défaut plutôt que de ne rien afficher : un id
  // inconnu vient d'un lien périmé ou d'une carte retirée de la configuration.
  function resolveMapId(id) { return mapById[id] ? id : defaultMapId; }

  // Un repère sans "map" appartient à la carte par défaut : c'était le cas
  // de tous les repères avant qu'il y ait plusieurs cartes.
  function mapIdOf(point) { return point.map || defaultMapId; }
  function pointsForMap(points, mapId) { return points.filter((p) => mapIdOf(p) === mapId); }

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

  return {
    initTypes, loadPoints, loadConfig,
    getTypes, getType, typeIconSvg, iconFor, accentFor, labelFor,
    getMaps, getMap, getDefaultMapId, resolveMapId, mapIdOf, pointsForMap,
  };
})();
