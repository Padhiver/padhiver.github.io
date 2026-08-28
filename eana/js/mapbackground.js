/* =========================================================
   Eana — fond de carte : image unique ou tuiles réassemblées.
   Partagé entre la carte publique (map/map.js), l'éditeur de
   repères (map/editor.js) et l'outil de découpe (map/tiles.js),
   qui doivent tous s'accorder sur la même géométrie.

   Une carte se déclare dans data/map-config.json soit avec
   "image" (un fichier), soit avec "tiles" (une grille de
   fichiers). Le reste du code n'a pas à savoir laquelle : il
   appelle load() et reçoit les dimensions de la carte entière.

   Pour les tuiles, deux économies :
   - "preview", une version réduite de la carte entière, est
     affichée tout de suite et sert de fond tant que le zoom ne
     dépasse pas sa finesse — c'est elle qu'on voit au cadrage
     initial, pas la grille en pleine résolution ;
   - au-delà, seules les tuiles qui touchent la zone visible
     sont chargées, et elles le restent une fois chargées.
   ========================================================= */

const EanaMapBackground = (() => {
  const FALLBACK = "images/map/placeholder-map.svg";

  // Découpage de la grille, en pixels de la carte complète. Utilisé à
  // l'affichage ici ET à la découpe dans map/tiles.js : les deux doivent
  // tomber sur les mêmes bornes, sinon l'assemblage laisse des liserés ou
  // des décalages visibles.
  //
  // Chaque case intérieure déborde d'un pixel à droite et en bas. Comme la
  // découpe applique la même règle, ce recouvrement est du vrai contenu
  // d'image et non un étirement : il masque le liseré qu'un zoom
  // fractionnaire ferait apparaître entre deux cases.
  function tileRects(width, height, cols, rows) {
    const rects = [];
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const x = Math.round((col * width) / cols);
        const y = Math.round((row * height) / rows);
        const x2 = Math.round(((col + 1) * width) / cols);
        const y2 = Math.round(((row + 1) * height) / rows);
        rects.push({
          col, row, x, y,
          w: x2 - x + (col < cols - 1 ? 1 : 0),
          h: y2 - y + (row < rows - 1 ? 1 : 0),
        });
      }
    }
    return rects;
  }

  function tilePath(pattern, col, row) {
    return String(pattern).split("{col}").join(col).split("{row}").join(row);
  }

  function create({ root }) {
    let width = 2000, height = 1400;
    let tiles = [];
    let previewWidth = 0;   // largeur réelle de l'aperçu, 0 si aucun

    function clear() {
      root.innerHTML = "";
      tiles = [];
      previewWidth = 0;
    }

    function addImage(src, className, styles) {
      const img = document.createElement("img");
      img.className = className;
      img.alt = "";
      Object.assign(img.style, styles || {});
      root.appendChild(img);
      img.src = src;
      return img;
    }

    // ---------- Image unique ----------

    function loadSingle(src) {
      return new Promise((resolve, reject) => {
        const img = addImage(src, "map-image", { width: "100%", height: "100%" });
        img.addEventListener("load", () => {
          width = img.naturalWidth || width;
          height = img.naturalHeight || height;
          resolve({ width, height });
        });
        img.addEventListener("error", () => reject(new Error(`Image de carte illisible : ${src}`)));
      });
    }

    // ---------- Tuiles ----------

    function loadTiles(cfg) {
      const cols = Number(cfg.cols) || 0;
      const rows = Number(cfg.rows) || 0;
      const w = Number(cfg.width) || 0;
      const h = Number(cfg.height) || 0;
      if (!cols || !rows || !w || !h || !cfg.pattern) {
        return Promise.reject(new Error(
          'Configuration "tiles" incomplète : "cols", "rows", "width", "height" et "pattern" sont requis.'
        ));
      }
      width = w;
      height = h;
      tiles = tileRects(width, height, cols, rows).map((r) => ({
        ...r,
        src: tilePath(cfg.pattern, r.col, r.row),
        img: null,
      }));

      if (!cfg.preview) return Promise.resolve({ width, height });

      // L'aperçu ne bloque pas : s'il manque, les tuiles prennent le relais.
      return new Promise((resolve) => {
        const img = addImage(cfg.preview, "map-image map-preview", { width: "100%", height: "100%" });
        img.addEventListener("load", () => { previewWidth = img.naturalWidth || 0; resolve({ width, height }); });
        img.addEventListener("error", () => {
          console.warn(`Aperçu de carte illisible (${cfg.preview}) : les tuiles seront chargées directement.`);
          img.remove();
          resolve({ width, height });
        });
      });
    }

    function showTile(tile) {
      if (tile.img) return;
      tile.img = addImage(tile.src, "map-image map-tile", {
        left: `${tile.x}px`,
        top: `${tile.y}px`,
        width: `${tile.w}px`,
        height: `${tile.h}px`,
      });
      tile.img.addEventListener("error", () => {
        console.warn(`Tuile de carte illisible : ${tile.src}`);
      });
    }

    // ---------- API ----------

    async function load(mapDef) {
      clear();
      const def = mapDef || {};
      if (def.tiles) return loadTiles(def.tiles);
      return loadSingle(def.image || FALLBACK);
    }

    // Appelé à chaque pan/zoom. rect est la zone visible en pixels de carte.
    function update(rect, scale) {
      if (!tiles.length || !rect) return;

      // Tant que l'aperçu offre autant de détail que l'écran en réclame,
      // inutile de charger quoi que ce soit de plus.
      if (previewWidth && scale * width <= previewWidth * 1.15) return;

      // Marge de préchargement : la tuile voisine est prête avant d'entrer
      // dans le cadre, ce qui évite de la voir apparaître en cours de
      // déplacement.
      const mx = (rect.x2 - rect.x1) * 0.15;
      const my = (rect.y2 - rect.y1) * 0.15;
      tiles.forEach((t) => {
        if (t.img) return;
        const outside = t.x + t.w < rect.x1 - mx || t.x > rect.x2 + mx
                     || t.y + t.h < rect.y1 - my || t.y > rect.y2 + my;
        if (!outside) showTile(t);
      });
    }

    return { load, update, getSize: () => ({ width, height }) };
  }

  return { create, tileRects, tilePath };
})();
