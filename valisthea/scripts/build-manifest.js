#!/usr/bin/env node
// Scanne data/articles/<categorie>/*.json et régénère data/manifest.json.
// Usage : node scripts/build-manifest.js
// À relancer après chaque ajout/modification/suppression de fiche.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const articlesDir = path.join(root, "data", "articles");
const manifestPath = path.join(root, "data", "manifest.json");

function readArticles() {
  const categoryDirs = fs.readdirSync(articlesDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  const results = [];
  for (const categoryDir of categoryDirs) {
    const dirPath = path.join(articlesDir, categoryDir);
    const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
    for (const file of files) {
      const relFile = `${categoryDir}/${file}`;
      const raw = fs.readFileSync(path.join(dirPath, file), "utf8");
      let data;
      try {
        data = JSON.parse(raw);
      } catch (err) {
        throw new Error(`JSON invalide dans data/articles/${relFile} : ${err.message}`);
      }

      const id = data.id || file.replace(/\.json$/, "");
      if (id !== file.replace(/\.json$/, "")) {
        throw new Error(`L'id "${data.id}" ne correspond pas au nom de fichier "${relFile}".`);
      }
      if (!data.title) throw new Error(`Fiche "${relFile}" : champ "title" manquant.`);
      if (!data.category) throw new Error(`Fiche "${relFile}" : champ "category" manquant.`);
      if (data.category !== categoryDir) {
        throw new Error(`Fiche "${relFile}" : catégorie "${data.category}" ne correspond pas au dossier "${categoryDir}".`);
      }
      if (data.public !== "ON" && data.public !== "OFF") {
        throw new Error(`Fiche "${relFile}" : "public" doit valoir "ON" ou "OFF" (trouvé: ${JSON.stringify(data.public)}).`);
      }
      if (Array.isArray(data.pages)) {
        data.pages.forEach((pg, i) => {
          if (pg && pg.public !== undefined && pg.public !== "ON" && pg.public !== "OFF") {
            throw new Error(`Fiche "${relFile}", page ${i + 1} : "public" doit valoir "ON" ou "OFF" (trouvé: ${JSON.stringify(pg.public)}).`);
          }
        });
      }

      results.push({
        id,
        title: data.title,
        category: data.category,
        public: data.public,
        date: data.date || "1970-01-01",
        order: typeof data.order === "number" ? data.order : null,
        cardImage: data.cardImage || null
      });
    }
  }
  return results;
}

function compare(a, b) {
  const orderA = a.order === null ? Infinity : a.order;
  const orderB = b.order === null ? Infinity : b.order;
  if (orderA !== orderB) return orderA - orderB;
  if (a.date !== b.date) return a.date < b.date ? 1 : -1; // plus récent d'abord si égalité d'ordre
  return a.title.localeCompare(b.title, "fr");
}

function build() {
  const articles = readArticles();
  const categories = {};
  for (const a of articles) {
    if (!categories[a.category]) categories[a.category] = [];
    categories[a.category].push(a);
  }
  for (const cat of Object.keys(categories)) {
    categories[cat].sort(compare);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    articles: Object.values(categories).flat()
  };

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  return manifest;
}

if (require.main === module) {
  const manifest = build();
  console.log(`data/manifest.json régénéré (${manifest.articles.length} fiche(s)).`);
}

module.exports = { build };
