// Route d'écriture de l'outil local de recadrage d'images de fiche
// (outils/recadrage-images.html). Comme claude/map-api.js : n'existe que
// dans claude/dev-server.js, refusée hors machine locale, absente du site
// publié qui ne sert que des fichiers. Sur GitHub Pages ou sans serveur
// local, l'outil bascule sur le téléchargement.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const siteRoot = path.join(root, "site");

// Mêmes catégories que site/data/categories.json — fixes, pas besoin de les
// lire dynamiquement pour un outil qui ne fait que recadrer une image.
const CATEGORIES = ["personnages", "geographie", "monde", "creatures"];
const SAFE_ID = /^[a-z0-9][a-z0-9-]*$/;
const MAX_IMAGE = 20e6; // large marge pour un crop WEBP

function isLocal(req) {
  const remote = req.socket.remoteAddress || "";
  return ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(remote);
}

function send(res, code, payload) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

// Même garde-fou de taille que map-api.js : répondre 413 avant de couper la
// connexion, sinon le client ne voit qu'une « erreur réseau » incompréhensible.
function readBody(req, res, limit) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let refused = false;

    req.on("data", (chunk) => {
      if (refused) return;
      size += chunk.length;
      if (size > limit) {
        refused = true;
        send(res, 413, { error: `Image trop volumineuse (au-delà de ${Math.round(limit / 1e6)} Mo).` });
        req.destroy();
        reject(new Error("__deja_repondu__"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => { if (!refused) resolve(Buffer.concat(chunks)); });
    req.on("error", (err) => { if (!refused) reject(err); });
  });
}

// Écrit images/articles/<categorie>/<id>/<id>-<1|2>.webp. Le nom est toujours
// reconstruit ici à partir de "id" et "slot" (jamais repris tel quel de la
// requête) : un ré-enregistrement remplace donc proprement le fichier
// précédent plutôt que d'en laisser un orphelin sous un autre nom.
function saveImage(body, query) {
  const category = String(query.get("category") || "");
  const id = String(query.get("id") || "");
  const slot = String(query.get("slot") || "");

  if (!CATEGORIES.includes(category)) throw new Error(`catégorie inconnue : "${category}"`);
  if (!SAFE_ID.test(id)) throw new Error(`id refusé : "${id}"`);
  if (slot !== "1" && slot !== "2") throw new Error('"slot" doit valoir 1 (vignette) ou 2 (fiche)');
  if (!body.length) throw new Error("corps vide : aucune donnée d'image reçue");

  const dir = path.join(siteRoot, "images", "articles", category, id);
  fs.mkdirSync(dir, { recursive: true });
  const name = `${id}-${slot}.webp`;
  fs.writeFileSync(path.join(dir, name), body);
  console.log(`site/images/articles/${category}/${id}/${name} écrit (${Math.round(body.length / 1024)} Ko).`);
  return { ok: true, path: `site/images/articles/${category}/${id}/${name}`, bytes: body.length };
}

const ROUTES = {
  "/api/article-image": { limit: MAX_IMAGE, handler: saveImage },
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
  readBody(req, res, route.limit)
    .then((body) => send(res, 200, route.handler(body, query)))
    .catch((err) => {
      if (err.message === "__deja_repondu__") return;
      send(res, 400, { error: String(err.message || err) });
    });
  return true;
}

module.exports = { handle };
