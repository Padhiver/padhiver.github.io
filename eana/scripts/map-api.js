// Routes d'écriture des outils locaux de carte (map/editor.html et
// map/tiles.html). Elles n'existent que dans scripts/dev-server.js : sur
// GitHub Pages, qui ne sert que des fichiers, les outils basculent d'eux-mêmes
// sur le téléchargement.
//
// Garde-fous communs à toutes : uniquement en POST, uniquement depuis la
// machine locale, et le contenu est validé avant écriture. Les chemins
// écrits sont construits ici à partir de noms validés, jamais repris tels
// quels de la requête.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const SAFE_NAME = /^[a-z0-9][a-z0-9-]*$/;           // dossier de tuiles, id de carte
const SAFE_FILE = /^[a-z0-9][a-z0-9.-]*\.(webp|png|jpg|jpeg)$/;
const MAX_JSON = 2e6;     // repères et configuration : quelques Ko en pratique
const MAX_IMAGE = 64e6;   // une tuile, en octets bruts

function isLocal(req) {
  const remote = req.socket.remoteAddress || "";
  return ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(remote);
}

function send(res, code, payload) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

// Lit le corps de la requête. Au-delà de la limite, on répond 413 AVANT de
// couper : sans cette réponse, le client ne voit qu'une connexion fermée et
// signale une « erreur réseau », ce qui laisse croire que le serveur local
// n'est pas là alors que le fichier est simplement trop gros.
function readBody(req, res, limit, asBuffer) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let refused = false;

    req.on("data", (chunk) => {
      if (refused) return;
      size += chunk.length;
      if (size > limit) {
        refused = true;
        send(res, 413, {
          error: `Contenu trop volumineux : au-delà de ${Math.round(limit / 1e6)} Mo. `
            + "Découpe la carte en plus de tuiles, ou réduis sa largeur maximale.",
        });
        req.destroy();
        reject(new Error("__deja_repondu__"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (refused) return;
      const buf = Buffer.concat(chunks);
      resolve(asBuffer ? buf : buf.toString("utf8"));
    });
    req.on("error", (err) => { if (!refused) reject(err); });
  });
}

// ---------- Repères ----------

function savePoints(body) {
  const parsed = JSON.parse(body);
  if (!parsed || !Array.isArray(parsed.points)) {
    throw new Error('le corps doit être un objet { "points": [...] }');
  }
  parsed.points.forEach((p, i) => {
    if (!p || typeof p.id !== "string" || !p.id.trim()) throw new Error(`point ${i} : "id" manquant`);
    if (typeof p.x !== "number" || typeof p.y !== "number") throw new Error(`point ${i} : "x"/"y" doivent être des nombres`);
    if (p.map !== undefined && (typeof p.map !== "string" || !p.map.trim())) {
      throw new Error(`point ${i} : "map" doit être l'identifiant d'une carte`);
    }
  });

  // Conserve le commentaire d'entête du fichier existant : il documente le
  // format et n'a pas à être réécrit par l'éditeur.
  const target = path.join(root, "data", "map-points.json");
  let comment;
  try {
    comment = JSON.parse(fs.readFileSync(target, "utf8"))._comment;
  } catch (e) { /* premier enregistrement ou fichier illisible */ }

  const out = comment ? { _comment: comment, points: parsed.points } : { points: parsed.points };
  fs.writeFileSync(target, JSON.stringify(out, null, 2) + "\n", "utf8");
  console.log(`data/map-points.json enregistré (${parsed.points.length} repère(s)).`);
  return { ok: true, count: parsed.points.length };
}

// ---------- Tuiles ----------

// Écrit une tuile (ou un aperçu) dans images/map/<dir>/. Un fichier par
// requête, en octets bruts : découper une carte produit des dizaines de Mo,
// que ni un corps JSON unique ni un encodage base64 (+33 %) n'aideraient à
// transporter. Le dossier et le nom voyagent en paramètres d'URL.
function saveTile(body, query) {
  const dir = String(query.get("dir") || "");
  const name = String(query.get("name") || "");
  if (!SAFE_NAME.test(dir)) throw new Error(`nom de dossier refusé : "${dir}"`);
  if (!SAFE_FILE.test(name)) throw new Error(`nom de fichier refusé : "${name}"`);
  if (!body.length) throw new Error("corps vide : aucune donnée d'image reçue");

  const outDir = path.join(root, "images", "map", dir);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, name), body);
  console.log(`images/map/${dir}/${name} écrit (${Math.round(body.length / 1024)} Ko).`);
  return { ok: true, path: `images/map/${dir}/${name}`, bytes: body.length };
}

// ---------- Configuration des cartes ----------

// Remplace la définition d'image d'UNE carte (son "image" devient un bloc
// "tiles", ou l'inverse) sans toucher au reste du fichier : les autres
// cartes, les libellés, la carte par défaut et le commentaire d'entête sont
// préservés. C'est l'étape que l'on oubliait le plus facilement à la main
// après un découpage.
function saveMapSource(body) {
  const parsed = JSON.parse(body);
  const mapId = String(parsed.mapId || "");
  if (!SAFE_NAME.test(mapId)) throw new Error(`identifiant de carte refusé : "${mapId}"`);

  const target = path.join(root, "data", "map-config.json");
  const config = JSON.parse(fs.readFileSync(target, "utf8"));
  if (!Array.isArray(config.maps)) throw new Error('data/map-config.json ne contient pas de liste "maps"');

  const entry = config.maps.find((m) => m && m.id === mapId);
  if (!entry) throw new Error(`carte inconnue dans data/map-config.json : "${mapId}"`);

  if (parsed.tiles) {
    const t = parsed.tiles;
    ["cols", "rows", "width", "height"].forEach((k) => {
      if (!Number.isFinite(t[k]) || t[k] <= 0) throw new Error(`"tiles.${k}" doit être un nombre positif`);
    });
    if (typeof t.pattern !== "string" || !t.pattern.includes("{col}") || !t.pattern.includes("{row}")) {
      throw new Error('"tiles.pattern" doit contenir {col} et {row}');
    }
    delete entry.image;
    entry.tiles = t;
  } else if (typeof parsed.image === "string" && parsed.image) {
    delete entry.tiles;
    entry.image = parsed.image;
  } else {
    throw new Error('le corps doit contenir "tiles" ou "image"');
  }

  fs.writeFileSync(target, JSON.stringify(config, null, 2) + "\n", "utf8");
  console.log(`data/map-config.json mis à jour pour la carte "${mapId}".`);
  return { ok: true, map: mapId };
}

// ---------- Aiguillage ----------

const ROUTES = {
  "/api/map-points": { limit: MAX_JSON, handler: savePoints },
  "/api/map-tile": { limit: MAX_IMAGE, binary: true, handler: saveTile },
  "/api/map-source": { limit: MAX_JSON, handler: saveMapSource },
};

// Renvoie true si la requête a été prise en charge.
function handle(req, res, reqPath) {
  const route = ROUTES[reqPath];
  if (!route) return false;

  if (req.method !== "POST") {
    send(res, 405, { error: "POST attendu." });
    return true;
  }
  if (!isLocal(req)) {
    send(res, 403, { error: "Écriture autorisée depuis la machine locale seulement." });
    return true;
  }

  const query = new URL(req.url, "http://localhost").searchParams;
  readBody(req, res, route.limit, route.binary)
    .then((body) => send(res, 200, route.handler(body, query)))
    .catch((err) => {
      // readBody a déjà répondu 413 : ne pas écrire deux fois dans la réponse.
      if (err.message === "__deja_repondu__") return;
      send(res, 400, { error: String(err.message || err) });
    });
  return true;
}

module.exports = { handle, MAX_IMAGE };
