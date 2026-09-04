#!/usr/bin/env node
// Petit serveur statique sans dépendance, pour prévisualiser le site en local.
// Usage : node claude/dev-server.js [port]

const http = require("http");
const fs = require("fs");
const path = require("path");
const { build: buildManifest } = require("./build-manifest.js");
const mapApi = require("./map-api.js");
const articleImageApi = require("./article-image-api.js");

const root = path.join(__dirname, "..");
const port = Number(process.argv[2]) || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

// GitHub Pages sert index.html pour un dossier, avec ou sans "/" final
// (ex. /map ou /map/) : on reproduit ce comportement ici pour que la
// prévisualisation locale corresponde à ce que verra un vrai visiteur.
function resolveFile(reqPath, cb) {
  const direct = path.join(root, reqPath);
  fs.stat(direct, (err, stats) => {
    if (!err && stats.isDirectory()) {
      cb(path.join(direct, "index.html"));
      return;
    }
    if (!err) {
      cb(direct);
      return;
    }
    // Pas de fichier/dossier à ce chemin exact : essaie "<chemin>/index.html"
    // (cas d'une URL sans "/" final, ex. /map).
    fs.stat(path.join(direct, "index.html"), (err2) => {
      cb(err2 ? direct : path.join(direct, "index.html"));
    });
  });
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/") reqPath = "/index.html";

  // Écritures des outils locaux (repères, tuiles, configuration des cartes,
  // images de fiche). Voir claude/map-api.js et claude/article-image-api.js :
  // refusées hors machine locale, absentes du site publié, qui ne sert que
  // des fichiers.
  if (mapApi.handle(req, res, reqPath)) return;
  if (articleImageApi.handle(req, res, reqPath)) return;

  if (!path.join(root, reqPath).startsWith(root)) {
    res.writeHead(403);
    res.end("Interdit");
    return;
  }

  if (reqPath === "/site/data/manifest.json") {
    try {
      buildManifest();
    } catch (err) {
      console.error("Échec de régénération du manifest :", err.message);
    }
  }

  resolveFile(reqPath, (filePath) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("404 — introuvable : " + reqPath);
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      res.end(data);
    });
  });
});

server.listen(port, () => {
  console.log(`Valisthéa en prévisualisation : http://localhost:${port}`);
});
