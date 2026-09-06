#!/usr/bin/env node
// Scanne site/data/articles/<categorie>/*.json et régénère
// site/data/manifest.json.
// Usage : node claude/build-manifest.js
// À relancer après chaque ajout/modification/suppression de fiche.

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const siteRoot = path.join(root, "site");
const articlesDir = path.join(siteRoot, "data", "articles");
const imagesDir = path.join(siteRoot, "images", "articles");
const manifestPath = path.join(siteRoot, "data", "manifest.json");

// Convention : images/articles/<categorie>/<id>/*-1.webp (vignette) et
// *-2.webp (visuel de fiche ouverte) — produits par outils/recadrage-images.html.
// Aucune fiche ne déclare son image, elle est détectée ici au moment de
// générer le manifest. S'il y a plusieurs candidats pour un même slot, le
// premier par ordre alphabétique est utilisé. Le chemin stocké reste relatif
// à site/ (pas de préfixe "site/") : c'est ce que le client résout via <base>.
function findArticleAsset(category, id, slot) {
  const dir = path.join(imagesDir, category, id);
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return null;
  const re = new RegExp(`-${slot}\\.webp$`, "i");
  const file = fs.readdirSync(dir).filter((f) => re.test(f)).sort()[0];
  return file ? `images/articles/${category}/${id}/${file}` : null;
}

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
        throw new Error(`JSON invalide dans site/data/articles/${relFile} : ${err.message}`);
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
        // "portrait" (fiche ouverte) retombe sur la vignette tant que le
        // -2.webp n'existe pas encore : mieux vaut la même image aux deux
        // endroits qu'un portrait générique le temps de recadrer les deux.
        image: findArticleAsset(data.category, id, 1),
        portrait: findArticleAsset(data.category, id, 2) || findArticleAsset(data.category, id, 1)
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
  console.log(`site/data/manifest.json régénéré (${manifest.articles.length} fiche(s)).`);
}

module.exports = { build };
