/* =========================================================
   Valisthéa — zones peintes au pinceau.

   Un repère classique pose une pastille à icône. Sur une carte
   déjà dessinée, ça ne convient pas partout : une ville a
   souvent son propre point rouge, et une chaîne de montagnes
   n'a pas de "position" — elle a une étendue. Une zone est donc
   un trait peint sur la carte, invisible à la lecture, qui rend
   cliquable ce que le cartographe a déjà dessiné.

   Représentation : le tracé du pinceau, et son rayon. Une
   polyligne SVG aux bouts et aux coudes arrondis dessine
   exactement l'union des disques posés le long du trait — le
   rendu ET la détection du survol viennent de là, sans calcul
   de géométrie à la main (isPointInStroke fait le travail).

   Coordonnées : le tracé est en pourcentage (x de la largeur,
   y de la hauteur), comme les repères, donc indépendant de la
   résolution. Le rayon est en pourcentage de la LARGEUR seule,
   pour qu'un coup de pinceau reste rond quel que soit le format
   de la carte.
   ========================================================= */

const EanaMapZones = (() => {
  const NS = "http://www.w3.org/2000/svg";
  const RAYON_DEFAUT = 1.5;

  function isZone(point) {
    return !!(point && point.forme === "trace" && Array.isArray(point.trace) && point.trace.length);
  }

  function radiusOf(point) {
    const r = Number(point.pinceau);
    return Number.isFinite(r) && r > 0 ? r : RAYON_DEFAUT;
  }

  // Prépare la couche : le viewBox est en pixels de carte, donc les mêmes
  // unités que le rayon converti — sans quoi un pinceau rond deviendrait
  // ovale sur une carte qui n'est pas carrée.
  function prepareLayer(svg, width, height) {
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.setAttribute("preserveAspectRatio", "none");
    svg.dataset.mapWidth = width;
    svg.dataset.mapHeight = height;
  }

  function toMapPixels(trace, width, height) {
    return trace.map(([x, y]) => [(x / 100) * width, (y / 100) * height]);
  }

  // Crée l'élément d'une zone. Le style (invisible en lecture, teinté dans
  // l'éditeur) vient des feuilles CSS, pas d'ici.
  function createElement(point, width, height) {
    const el = document.createElementNS(NS, "polyline");
    el.setAttribute("points", toMapPixels(point.trace, width, height)
      .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" "));
    el.setAttribute("stroke-width", ((radiusOf(point) * 2) / 100) * width);
    el.setAttribute("class", "map-zone");
    el.dataset.pointId = point.id;
    if (point.article) el.dataset.article = point.article;
    return el;
  }

  function render(svg, points, width, height) {
    prepareLayer(svg, width, height);
    svg.innerHTML = "";
    points.forEach((p) => svg.appendChild(createElement(p, width, height)));
  }

  // Point d'ancrage d'une étiquette : le milieu du tracé, donc toujours SUR
  // la zone — le centre de sa boîte englobante, lui, tombe volontiers en
  // dehors d'un trait en arc ou en fer à cheval.
  function anchorOf(el) {
    try {
      const p = el.getPointAtLength(el.getTotalLength() / 2);
      return { x: p.x, y: p.y };
    } catch (e) {
      const b = el.getBBox();
      return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
    }
  }

  // Zone sous un point donné (en pourcentage), la plus haute d'abord : c'est
  // celle que le lecteur croit viser quand deux zones se recouvrent.
  function hitTest(svg, xPercent, yPercent) {
    const width = Number(svg.dataset.mapWidth) || 0;
    const height = Number(svg.dataset.mapHeight) || 0;
    if (!width || !height) return null;

    const pt = svg.createSVGPoint();
    pt.x = (xPercent / 100) * width;
    pt.y = (yPercent / 100) * height;

    const els = [...svg.querySelectorAll(".map-zone")];
    for (let i = els.length - 1; i >= 0; i -= 1) {
      if (els[i].isPointInStroke(pt)) return els[i];
    }
    return null;
  }

  return { isZone, radiusOf, render, createElement, prepareLayer, anchorOf, hitTest, RAYON_DEFAUT };
})();
