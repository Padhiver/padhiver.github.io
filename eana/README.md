# Eana — Encyclopédie

Site statique (HTML/CSS/JS vanilla, sans framework ni build) pour le codex de l'univers d'Eana. Vit en tant que sous-dossier `eana/` du dépôt `padhiver.github.io` (dépôt utilisateur GitHub Pages, qui peut héberger d'autres sites dans d'autres sous-dossiers), publié à `https://padhiver.github.io/eana`.

Toutes les commandes ci-dessous (`node scripts/...`) s'exécutent **depuis ce dossier `eana/`**, pas depuis la racine du dépôt.

## Structure

```
index.html            Page unique (accueil / catégorie / fiche article)
css/style.css          Système visuel (cadre doré, cartes, typographie…)
js/data.js              Chargement des données + filtrage public/OFF + mode maître
js/render.js             Construction du HTML des vues
js/app.js                 Routing (#/…), interactions, animations
data/categories.json    Les 4 catégories fixes
data/manifest.json      Index généré des fiches (NE PAS éditer à la main)
data/banners.json       Config des bannières disponibles (id, label, image)
data/articles/<categorie>/*.json    Une fiche = un fichier JSON, rangé dans le dossier de sa catégorie
images/ui/               Icônes de catégories (SVG)
images/placeholders/     Emblèmes de remplacement par catégorie
scripts/build-manifest.js  Régénère data/manifest.json
scripts/dev-server.js     Petit serveur statique pour prévisualiser en local
```

## Ajouter / modifier une fiche

Créer un fichier `data/articles/<categorie>/<id>.json` (le nom de fichier = l'`id`, le dossier = la `category`) :

```json
{
  "id": "mon-article",
  "title": "Mon article",
  "category": "geographie",
  "public": "ON",
  "date": "2026-08-04",
  "order": 30,
  "cardImage": "images/articles/mon-article/card.jpg",
  "pages": [
    {
      "text": "Texte de la fiche. Les sauts de ligne (\\n\\n) créent des paragraphes.",
      "contextImage": "images/articles/mon-article/context.png",
      "caption": "Légende optionnelle sous l'image"
    }
  ],
  "related": ["autre-fiche-1", "autre-fiche-2"],
  "banner": { "id": null, "on": "OFF" }
}
```

- `category` : un des id de `data/categories.json` (`personnages`, `geographie`, `monde`, `primordiaux`).
- `public` : `"ON"` (visible par tout le monde) ou `"OFF"` (visible uniquement en mode maître — voir plus bas).
- `order` : entier, plus petit = affiché en premier dans la catégorie. Numérotation continue par catégorie (1, 2, 3… jusqu'au nombre de fiches de cette catégorie) — pas de paliers. Pour insérer une fiche entre deux autres, il faut donc décaler manuellement les `order` suivants dans le dossier de la catégorie. Sans `order`, tri par date puis par titre.
- `pages` : un tableau. Une seule entrée = pas de pagination. Plusieurs entrées = la fiche affiche des points de pagination (comme dans le jeu de référence), chacune avec son propre texte/image/légende.
- `contextImage` : idéalement un PNG à fond transparent (silhouette, illustration détourée). L'interface applique automatiquement un fondu sur les bords pour l'intégrer au panneau, mais une vraie transparence donne un meilleur résultat.
- `related` : ids d'autres fiches, affichées en bas sous "Articles liés". Un lien vers une fiche `OFF` n'apparaît jamais pour un visiteur normal (même en tant que "related" d'une fiche publique).
- `banner` : optionnel, affiche un blason/ruban en haut à droite de la fiche. `id` référence une entrée de `data/banners.json` ; `on` doit valoir `"ON"` pour l'afficher (sinon `"OFF"` ou absent = rien ne s'affiche, même si `id` est renseigné — pratique pour préparer une bannière sans l'activer tout de suite).
- Place les images dans `images/articles/<id>/` (dossier libre, à créer).

## Bannières (`data/banners.json`)

Liste libre, sans nombre fixe — ajoute/retire des entrées selon ton lore :

```json
[
  {
    "id": "sangbreque",
    "label": "Bannière du Saint-Empire de Sangbrèque",
    "image": "images/banners/sangbreque.png"
  }
]
```

- `id` : identifiant utilisé dans le champ `banner.id` des fiches.
- `label` : texte alternatif / infobulle.
- `image` : idéalement un PNG à fond transparent (la forme du ruban vient de l'image elle-même, l'interface ne la découpe pas). Suggestion : la ranger dans `images/banners/`.

**`data/manifest.json` se régénère automatiquement en local**, pas besoin de lancer `build-manifest.js` à la main pendant que tu travailles : `scripts/dev-server.js` le régénère à chaque requête sur `data/manifest.json` — crée/modifie une fiche, rafraîchis la page, c'est à jour.

Il n'y a **pas** de régénération côté GitHub (plus de workflow qui committe après coup — ça causait des divergences entre le dépôt local et distant). À la place, la régénération se fait avant l'envoi, via `publier.bat` (voir ci-dessous).

Le script (`node scripts/build-manifest.js`) valide aussi que chaque fiche a bien `title`, `category`, un `public` correct (`ON`/`OFF`), et que son dossier correspond à sa `category` ; il s'arrête avec un message clair si une fiche est mal formée.

## Publier les modifications

Une fois tes modifications faites (fiches, images, CSS...), double-clique sur `publier.bat` à la racine de ce dossier. Il régénère le manifest, puis committe et pousse tout vers GitHub, en une seule fois. Rien d'autre à faire — pas de commande à taper, pas de `git add`/`commit`/`push` manuel.

## Prévisualiser en local

```bash
node scripts/dev-server.js 8080
```

puis ouvrir `http://localhost:8080`.

## Mode maître (fiches `OFF`)

⚠️ Le site est 100% statique et public (GitHub Pages) : marquer une fiche `OFF` la cache de l'interface pour les visiteurs normaux, mais **ce n'est pas une vraie sécurité serveur**. Le fichier JSON de la fiche reste techniquement présent dans le dépôt public et quelqu'un de suffisamment curieux pourrait le retrouver en explorant `data/articles/`. À réserver à du contenu que tu veux juste garder hors de l'expérience de lecture normale (spoilers, brouillons), pas à de vrais secrets.

Pour activer le mode maître : ouvrir le site avec `?maitre=<ta-passphrase>` dans l'URL, par exemple :

```
https://padhiver.github.io/eana/?maitre=ta-passphrase
```

Le mode reste actif ensuite (stocké dans le navigateur) jusqu'à désactivation via `?maitre=off` ou en cliquant sur l'indicateur "Mode maître" affiché en haut à droite quand il est actif.

**Changer la passphrase par défaut** (`changeme`, à ne surtout pas garder) :

```bash
node -e "console.log(require('crypto').createHash('sha256').update('TA-NOUVELLE-PASSPHRASE').digest('hex'))"
```

Copier le résultat dans `js/data.js`, constante `MASTER_HASH`. La passphrase elle-même n'a pas besoin d'être stockée nulle part — seul son empreinte (hash) est présente dans le code.

## Déploiement sur GitHub Pages

Ce dossier fait partie du dépôt `padhiver.github.io` (dépôt utilisateur GitHub Pages existant, remote déjà configuré, branche `main`) — pas besoin de créer un dépôt séparé ni de `git remote add`.

1. Première fois : `Settings → Pages → Source → Deploy from a branch`, choisir la branche `main` et le dossier `/ (root)` (si pas déjà fait).
2. À chaque mise à jour : lancer `publier.bat` (voir "Publier les modifications" plus haut).
3. Le site est disponible à `https://padhiver.github.io/eana` (le reste du dépôt peut héberger d'autres sites dans d'autres sous-dossiers, ex. `padhiver.github.io/autre-site`, sans interférer avec celui-ci).

GitHub Pages republie automatiquement à chaque `push`, quelques minutes après.
