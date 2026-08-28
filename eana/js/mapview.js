/* =========================================================
   Eana — vue de carte : pan, zoom, conversion écran <-> carte.
   Partagé entre la carte publique (map/map.js) et l'éditeur de
   points (map/editor.js), qui ont exactement les mêmes besoins
   de navigation — un seul endroit à corriger.

   Le canvas est transformé via "translate(tx,ty) scale(scale)"
   avec transform-origin 0 0 : un point local (px,py) s'affiche
   à l'écran en (tx + px*scale, ty + py*scale). Zoomer "autour"
   d'un point d'écran revient donc à ajuster tx/ty pour que ce
   point reste fixe pendant que scale change.
   ========================================================= */

const EanaMapView = (() => {
  function create({ viewport, canvas, onScaleChange, onViewChange, onMapClick }) {
    let naturalWidth = 2000, naturalHeight = 1400;
    let scale = 1, minScale = 0.2, maxScale = 6;
    let tx = 0, ty = 0;
    let lastScale = null;

    function apply() {
      canvas.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
      // Ne prévient que si l'échelle a réellement changé : pendant un pan pur,
      // rien ne doit être recalculé côté repères (sinon on réécrit un style
      // par repère à chaque frame, ce qui devient coûteux avec beaucoup de
      // points).
      if (scale !== lastScale) {
        lastScale = scale;
        if (onScaleChange) onScaleChange(scale);
      }
      // Le fond en tuiles, lui, doit être prévenu même d'un pan pur : ce
      // sont d'autres tuiles qui entrent dans le cadre.
      if (onViewChange) onViewChange(getViewportRect(), scale);
    }

    // Zone actuellement visible, en pixels de la carte (repère de l'image,
    // pas de l'écran) : ce qu'il faut pour savoir quelles tuiles charger.
    function getViewportRect() {
      const vw = viewport.clientWidth, vh = viewport.clientHeight;
      return {
        x1: -tx / scale,
        y1: -ty / scale,
        x2: (vw - tx) / scale,
        y2: (vh - ty) / scale,
      };
    }

    function clamp() {
      const vw = viewport.clientWidth, vh = viewport.clientHeight;
      const cw = naturalWidth * scale, ch = naturalHeight * scale;
      tx = cw <= vw ? (vw - cw) / 2 : Math.min(0, Math.max(vw - cw, tx));
      ty = ch <= vh ? (vh - ch) / 2 : Math.min(0, Math.max(vh - ch, ty));
    }

    function setScaleAround(newScale, cx, cy) {
      newScale = Math.min(maxScale, Math.max(minScale, newScale));
      tx = cx - (cx - tx) * (newScale / scale);
      ty = cy - (cy - ty) * (newScale / scale);
      scale = newScale;
      clamp();
      apply();
    }

    function fit() {
      const vw = viewport.clientWidth, vh = viewport.clientHeight;
      if (!vw || !vh) return;
      const fitScale = Math.min(vw / naturalWidth, vh / naturalHeight);
      minScale = fitScale * 0.6;
      maxScale = fitScale * 8;
      scale = fitScale;
      tx = (vw - naturalWidth * scale) / 2;
      ty = (vh - naturalHeight * scale) / 2;
      apply();
    }

    function setSize(w, h) {
      naturalWidth = w || naturalWidth;
      naturalHeight = h || naturalHeight;
      canvas.style.width = `${naturalWidth}px`;
      canvas.style.height = `${naturalHeight}px`;
    }

    // Position d'un point d'écran sur la carte, en pourcentage (0-100) de ses
    // dimensions : c'est le format stocké dans data/map-points.json, donc
    // indépendant de la résolution de l'image.
    function screenToMapPercent(clientX, clientY) {
      const rect = viewport.getBoundingClientRect();
      const localX = (clientX - rect.left - tx) / scale;
      const localY = (clientY - rect.top - ty) / scale;
      return {
        x: (localX / naturalWidth) * 100,
        y: (localY / naturalHeight) * 100,
      };
    }

    function zoomByFactor(factor) {
      const r = viewport.getBoundingClientRect();
      setScaleAround(scale * factor, r.width / 2, r.height / 2);
    }

    function wire({ ignoreSelector } = {}) {
      const pointers = new Map();
      let dragLast = null;
      let pinchStartDist = null;
      let pinchStartScale = null;
      let pressStart = null;
      let moved = false;

      const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
      const mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

      viewport.addEventListener("pointerdown", (e) => {
        if (ignoreSelector && e.target.closest(ignoreSelector)) return;
        // La capture peut échouer (pointeur déjà relâché, événement synthétique) :
        // ce n'est pas une raison d'abandonner le suivi du geste.
        try { viewport.setPointerCapture(e.pointerId); } catch (err) { /* sans capture */ }
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pointers.size === 1) {
          dragLast = { x: e.clientX, y: e.clientY };
          pressStart = { x: e.clientX, y: e.clientY };
          moved = false;
          viewport.classList.add("dragging");
        } else if (pointers.size === 2) {
          const [a, b] = [...pointers.values()];
          pinchStartDist = dist(a, b);
          pinchStartScale = scale;
          dragLast = null;
          moved = true; // un pincement n'est jamais un clic
        }
      });

      viewport.addEventListener("pointermove", (e) => {
        if (!pointers.has(e.pointerId)) return;
        pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (pointers.size === 2 && pinchStartDist) {
          const [a, b] = [...pointers.values()];
          const rect = viewport.getBoundingClientRect();
          const m = mid(a, b);
          setScaleAround(pinchStartScale * (dist(a, b) / pinchStartDist), m.x - rect.left, m.y - rect.top);
          return;
        }

        if (dragLast) {
          if (pressStart && dist(pressStart, { x: e.clientX, y: e.clientY }) > 4) moved = true;
          tx += e.clientX - dragLast.x;
          ty += e.clientY - dragLast.y;
          dragLast = { x: e.clientX, y: e.clientY };
          clamp();
          apply();
        }
      });

      function endPointer(e) {
        const wasTracked = pointers.has(e.pointerId);
        pointers.delete(e.pointerId);
        pinchStartDist = null;
        if (pointers.size === 0) {
          // Clic franc (sans déplacement) : on prévient l'appelant. Sert à
          // l'éditeur pour poser un point sans le faire au moindre pan.
          if (wasTracked && !moved && pressStart && onMapClick) {
            onMapClick(screenToMapPercent(e.clientX, e.clientY), e);
          }
          dragLast = null;
          pressStart = null;
          viewport.classList.remove("dragging");
        } else if (pointers.size === 1) {
          const [p] = [...pointers.values()];
          dragLast = { x: p.x, y: p.y };
        }
      }
      viewport.addEventListener("pointerup", endPointer);
      viewport.addEventListener("pointercancel", endPointer);

      viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const rect = viewport.getBoundingClientRect();
        setScaleAround(scale * Math.exp(-e.deltaY * 0.0012), e.clientX - rect.left, e.clientY - rect.top);
      }, { passive: false });

      viewport.addEventListener("dblclick", (e) => {
        if (ignoreSelector && e.target.closest(ignoreSelector)) return;
        const rect = viewport.getBoundingClientRect();
        setScaleAround(scale * 1.6, e.clientX - rect.left, e.clientY - rect.top);
      });

      // Au redimensionnement, on ne recalcule pas le zoom (agaçant si on a
      // réglé sa vue) : juste de quoi éviter que la carte sorte du cadre.
      window.addEventListener("resize", () => { clamp(); apply(); });
    }

    return {
      wire, fit, setSize, setScaleAround, zoomByFactor, screenToMapPercent,
      getViewportRect,
      getScale: () => scale,
    };
  }

  return { create };
})();
