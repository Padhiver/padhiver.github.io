#!/usr/bin/env node
// Petit serveur statique sans dépendance, pour prévisualiser le site en local.
// Usage : node scripts/dev-server.js [port]

const http = require("http");
const fs = require("fs");
const path = require("path");
const { build: buildManifest } = require("./build-manifest.js");

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

// Enregistrement des repères depuis l'éditeur (map/editor.html). N'existe
// que dans ce serveur de développement : sur GitHub Pages, qui ne sert que
// des fichiers, l'éditeur bascule tout seul sur le téléchargement du JSON.
// Garde-fous : uniquement en POST, uniquement sur ce chemin, uniquement
// depuis la machine locale, et le contenu est validé avant écriture.
function handleSavePoints(req, res) {
  const remote = req.socket.remoteAddress || "";
  const isLocal = ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(remote);
  if (!isLocal) {
    res.writeHead(403, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Écriture autorisée depuis la machine locale seulement." }));
    return;
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
    if (body.length > 2e6) req.destroy(); // garde-fou taille
  });
  req.on("end", () => {
    try {
      const parsed = JSON.parse(body);
      if (!parsed || !Array.isArray(parsed.points)) {
        throw new Error('le corps doit être un objet { "points": [...] }');
      }
      parsed.points.forEach((p, i) => {
        if (!p || typeof p.id !== "string" || !p.id.trim()) throw new Error(`point ${i} : "id" manquant`);
        if (typeof p.x !== "number" || typeof p.y !== "number") throw new Error(`point ${i} : "x"/"y" doivent être des nombres`);
      });

      // Conserve le commentaire d'entête du fichier existant : il documente
      // le format et n'a pas à être réécrit par l'éditeur.
      const target = path.join(root, "data", "map-points.json");
      let comment;
      try {
        comment = JSON.parse(fs.readFileSync(target, "utf8"))._comment;
      } catch (e) { /* premier enregistrement ou fichier illisible */ }

      const out = comment ? { _comment: comment, points: parsed.points } : { points: parsed.points };
      fs.writeFileSync(target, JSON.stringify(out, null, 2) + "\n", "utf8");

      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ ok: true, count: parsed.points.length }));
      console.log(`data/map-points.json enregistré (${parsed.points.length} repère(s)).`);
    } catch (err) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: String(err.message || err) }));
    }
  });
}

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath === "/") reqPath = "/index.html";

  if (reqPath === "/api/map-points" && req.method === "POST") {
    handleSavePoints(req, res);
    return;
  }

  if (!path.join(root, reqPath).startsWith(root)) {
    res.writeHead(403);
    res.end("Interdit");
    return;
  }

  if (reqPath === "/data/manifest.json") {
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
  console.log(`Eana en prévisualisation : http://localhost:${port}`);
});
