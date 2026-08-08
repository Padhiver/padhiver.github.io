# Eana — Encyclopédie

Site statique (HTML/CSS/JS vanilla, sans framework ni build) pour le codex de l'univers d'Eana. Vit en tant que sous-dossier `eana/` du dépôt `padhiver.github.io` (dépôt utilisateur GitHub Pages, qui peut héberger d'autres sites dans d'autres sous-dossiers), publié à `https://padhiver.github.io/eana`.

Toutes les commandes ci-dessous (`node scripts/...`) s'exécutent **depuis ce dossier `eana/`**, pas depuis la racine du dépôt.

## Structure

```
index.html            Page unique (accueil / catégorie / fiche article)
css/style.css          Système visuel (papier quadrillé, cartouches, typographie…)
js/data.js              Chargement des données + filtrage public/OFF + mode maître
js/render.js             Construction du HTML des vues
js/app.js                 Routing (#/…), interactions, animations
data/categories.json    Les 4 catégories fixes
data/manifest.json      Index généré des fiches (NE PAS éditer à la main)
data/banners.json       Config des bannières disponibles (id, label, image)
data/articles/<categorie>/*.json    Une fiche = un fichier JSON, rangé dans le dossier de sa catégorie
images/ui/               Icônes de catégories (SVG)
images/placeholders/     Visuels de repli : carte-<categorie>.svg (16:9) et portrait-defaut.svg (9:10)
mockups/                 Pistes de design explorées avant la refonte (non utilisées par le site)
scripts/build-manifest.js  Régénère data/manifest.json
scripts/dev-server.js     Petit serveur statique pour prévisualiser en local
```

## Mode sombre

Un bouton en bas à gauche bascule entre parchemin clair et parchemin de nuit. Le mode **clair est celui par défaut** ; le choix est mémorisé dans le navigateur (`localStorage`, clé `eana_theme`) et réappliqué avant le premier rendu pour éviter tout flash au chargement.

Toutes les couleurs viennent de variables CSS définies dans `:root`, et le mode sombre se contente de les redéfinir sous `:root[data-theme="dark"]`. Pour ajuster une teinte, il suffit donc de modifier la variable dans les deux blocs — rien à chercher ailleurs dans la feuille de style.

Les gabarits de `images/placeholders/` ont un **fond transparent** : c'est la vignette qui donne sa couleur, donc ils suivent le thème sans avoir à maintenir deux jeux d'images. Si tu ajoutes tes propres gabarits, garde ce principe.

## Formats d'image

Les emplacements reprennent les ratios du codex du jeu de référence. Les images sont recadrées en `cover`, donc c'est le ratio qui compte, pas la taille exacte.

| Champ | Ratio | Où ça s'affiche |
|---|---|---|
| `cardImage` | **16:9** | vignette d'article (accueil + grille de catégorie) |
| `contextImage` | **9:10** | visuel de la fiche, colonne de droite |
| bannière (`data/banners.json`) | **3:5** | pennon accroché en haut du visuel de fiche |

Sans `cardImage` (ou avec l'ancienne valeur `images/placeholders/emblem-*.svg`), la vignette retombe automatiquement sur `images/placeholders/carte-<categorie>.svg`. Sans `contextImage`, la fiche affiche `images/placeholders/portrait-defaut.svg`. Aucune fiche n'est donc jamais cassée faute d'illustration.

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

- `category` : un des id de `data/categories.json` (`personnages`, `geographie`, `monde`, `creatures`).
- `public` : `"ON"` (visible par tout le monde) ou `"OFF"` (visible uniquement en mode maître — voir plus bas).
- `order` : entier, plus petit = affiché en premier dans la catégorie. Numérotation continue par catégorie (1, 2, 3… jusqu'au nombre de fiches de cette catégorie) — pas de paliers. Pour insérer une fiche entre deux autres, il faut donc décaler manuellement les `order` suivants dans le dossier de la catégorie. Sans `order`, tri par date puis par titre.
- `pages` : un tableau. Une seule entrée = pas de liste de chapitres. Plusieurs entrées = la fiche affiche un cadre "Chapitres" dans la colonne de droite, une entrée par page.
- `caption` : sert de **nom de chapitre** dans cette liste. Sans `caption`, la page s'appelle "Page 1", "Page 2"…
- `text` : si la première ligne est courte (≤ 120 signes) et suivie d'une ligne vide, elle est automatiquement remontée en sous-titre italique sous le nom de la fiche. Le reste devient le corps, affiché en deux colonnes justifiées avec une lettrine.
- `contextImage` : idéalement un PNG à fond transparent (silhouette, illustration détourée). L'interface applique un fondu dans le coin haut-droit pour l'intégrer au papier, mais une vraie transparence donne un meilleur résultat.
- `related` : ids d'autres fiches, affichées en bas de la fiche sous "Articles liés". Un lien vers une fiche `OFF` n'apparaît jamais pour un visiteur normal (même en tant que "related" d'une fiche publique).
- `banner` : optionnel, affiche un pennon en haut à droite **du visuel** de la fiche. `id` référence une entrée de `data/banners.json` ; `on` doit valoir `"ON"` pour l'afficher (sinon `"OFF"` ou absent = rien ne s'affiche, même si `id` est renseigné — pratique pour préparer une bannière sans l'activer tout de suite).
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

Deux façons d'activer le mode maître :

1. **Le bouton "Maître"**, à droite de la barre de recherche : il ouvre une petite fenêtre qui demande la passphrase. C'est la voie normale.
2. **L'URL** `?maitre=<ta-passphrase>`, pratique pour un marque-page :

```
https://padhiver.github.io/eana/?maitre=ta-passphrase
```

Le mode reste actif ensuite (stocké dans le navigateur). Pour le quitter : cliquer sur "Public", cliquer sur l'indicateur "Mode maître" en bas à droite, ou ouvrir `?maitre=off`.

En mode maître, les fiches `OFF` réapparaissent partout (accueil, grilles, registre, recherche, articles liés) et portent une étiquette rouge "Privé" sur leur vignette.

### Ce que voit un visiteur d'une fiche `OFF`

Une fiche `OFF` n'est pas cachée : elle occupe sa place dans la grille de sa catégorie sous forme d'une **vignette verrouillée** — bordure pointillée, gros `?` en filigrane, sans nom, non cliquable. Pratique pour préparer des fiches à l'avance et montrer qu'il y a de la suite.

Son titre n'apparaît nulle part côté visiteur : ni le nom ni l'identifiant (qui dérive du titre) ne sont écrits dans la page. Elle est donc absente :

- des articles récents de l'accueil,
- du registre alphabétique,
- des résultats de recherche (chercher son nom exact ne la fait pas apparaître — la grille repasse en mode filtré dès qu'une recherche est saisie),
- des "articles liés" des autres fiches.

L'ouvrir par son URL directe (`#/article/mon-id`) renvoie à la vue précédente.

Les compteurs (`100 articles` sur une catégorie) incluent les fiches à venir, pour rester cohérents avec le nombre de vignettes réellement affichées.

⚠️ Rappel : tout cela concerne l'interface. Le JSON de la fiche reste présent dans le dépôt public, et la vignette `?` signale désormais explicitement qu'il existe quelque chose à cet endroit. Toujours pas de secrets réels, donc.

**Changer la passphrase** (la comparaison est sensible à la casse et aux accents) :

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
