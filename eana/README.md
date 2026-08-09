# Eana — Encyclopédie

Site statique (HTML/CSS/JS vanilla, sans framework ni build) pour le codex de l'univers d'Eana. Vit en tant que sous-dossier `eana/` du dépôt `padhiver.github.io` (dépôt utilisateur GitHub Pages, qui peut héberger d'autres sites dans d'autres sous-dossiers), publié à `https://padhiver.github.io/eana`.

Toutes les commandes ci-dessous (`node scripts/...`) s'exécutent **depuis ce dossier `eana/`**, pas depuis la racine du dépôt.

## Structure

```
index.html            Page principale (accueil / catégorie / fiche article)
map/index.html         Carte interactive — voir "Carte interactive" plus bas
map/map.css             Styles propres à la carte (viewport, repères, outils)
map/map.js               Repères et routage minimal de la carte
map/editor.html          Éditeur de repères (outil local, voir plus bas)
map/editor.css           Styles de l'éditeur
map/editor.js            Logique de l'éditeur
js/mapview.js            Pan/zoom, partagé entre la carte et l'éditeur
js/mappoints.js          Chargement des points/types et dessin d'un repère, partagés
css/style.css          Système visuel partagé (papier quadrillé, cartouches, typographie…)
js/data.js              Chargement des données + filtrage public/OFF + mode maître
js/render.js             Construction du HTML des vues
js/i18n.js               Lit data/strings.json, expose EanaI18n.t()/plural()
js/overlay.js            Panneau de fiche, partagé entre la page principale et la carte
js/theme.js              Bascule clair/sombre, partagée
js/master.js             Indicateur + fenêtre de passphrase du mode maître, partagés
js/app.js                 Routing (#/…) et vues de la page principale
data/categories.json    Les catégories (une fiche = une catégorie d'univers, pas un texte d'interface)
data/strings.json       Tout le texte d'interface (titres, boutons, messages) — voir "Réutiliser ce site" plus bas
data/manifest.json      Index généré des fiches (NE PAS éditer à la main)
data/banners.json       Config des bannières disponibles (id, label, image)
data/map-points.json    Repères de la carte interactive (édités via map/editor.html)
data/map-point-types.json  Types de repères (cité, forteresse, port…)
data/map-config.json    Chemin de l'image de la carte — seul endroit à changer pour la remplacer
data/articles/<categorie>/*.json    Une fiche = un fichier JSON, rangé dans le dossier de sa catégorie
images/ui/               Icônes de catégories (SVG)
images/placeholders/     Visuels de repli : carte-<categorie>.svg (16:9) et portrait-defaut.svg (9:10)
images/map/              Image(s) de la carte interactive
mockups/                 Pistes de design explorées avant la refonte (non utilisées par le site)
scripts/build-manifest.js  Régénère data/manifest.json
scripts/dev-server.js     Petit serveur statique pour prévisualiser en local
```

## Réutiliser ce site pour un autre univers

Le code (`js/`, `css/`, `index.html`) ne contient plus aucun texte propre à Eana — tout est dans trois fichiers de données :

| Fichier | Ce qu'il contrôle |
|---|---|
| `data/strings.json` | Tout le texte d'interface : titre du site, boutons ("Public", "Maître"…), messages vides, libellés de pagination, textes de la fenêtre de passphrase. Sur le modèle d'un fichier de langue `fr.json`. |
| `data/categories.json` | Les catégories elles-mêmes : `label` (nom complet, affiché en titre de page), `shortLabel` (nom court, affiché sur les onglets et vignettes — optionnel, retombe sur `label` si absent), `description`, `icon`. |
| `data/articles/` | Le contenu — géré fiche par fiche, sans rapport avec ce point. |

Pour un nouvel univers : vide `data/articles/`, réécris `data/categories.json` avec tes propres catégories (les icônes dans `images/ui/icon-<icon>.svg` et gabarits dans `images/placeholders/carte-<id>.svg` doivent suivre les nouveaux identifiants), et adapte `data/strings.json` — en particulier `site.title`, `site.eyebrow`, `site.subtitle`. Aucun fichier `.js` n'a besoin d'être touché.

Dans `data/strings.json`, une valeur peut être soit une phrase simple, soit un objet `{ "one": "...", "other": "..." }` pour accorder correctement le singulier/pluriel (ex. "1 article" / "3 articles"). Les `{variable}` entre accolades sont remplacées à l'affichage (ex. `"Chercher dans {category}"`).

Si tu casses une clé (faute de frappe, clé supprimée), le site ne plante pas : il affiche la clé elle-même à l'écran et un avertissement dans la console, pour que l'erreur soit visible sans bloquer la navigation.

## Mode sombre

Un bouton en bas à gauche bascule entre parchemin clair et parchemin de nuit. Le mode **clair est celui par défaut** ; le choix est mémorisé dans le navigateur (`localStorage`, clé `eana_theme`) et réappliqué avant le premier rendu pour éviter tout flash au chargement.

Toutes les couleurs viennent de variables CSS définies dans `:root`, et le mode sombre se contente de les redéfinir sous `:root[data-theme="dark"]`. Pour ajuster une teinte, il suffit donc de modifier la variable dans les deux blocs — rien à chercher ailleurs dans la feuille de style.

Les gabarits de `images/placeholders/` ont un **fond transparent** : c'est la vignette qui donne sa couleur, donc ils suivent le thème sans avoir à maintenir deux jeux d'images. Si tu ajoutes tes propres gabarits, garde ce principe.

## Carte interactive (`/map`)

Une carte pannable/zoomable à `eana/map/`, avec des repères cliquables qui ouvrent une fiche du codex — même panneau, même animation qu'ailleurs sur le site (voir "Architecture partagée" plus bas).

**Pas encore de vraie carte** : `images/map/placeholder-map.svg` est un gabarit en attendant, dans les tons parchemin fixes (comme une bannière, une carte dessinée dans l'univers ne suit pas le thème du lecteur).

### Remplacer la carte

1. Dépose ton image dans `images/map/` (PNG, JPG, WEBP ou SVG).
2. Change la ligne `"image"` de **`data/map-config.json`**. C'est le seul endroit : la page publique et l'éditeur lisent tous les deux ce fichier.
3. **Si c'est un SVG**, mets des attributs `width`/`height` explicites sur la balise `<svg>` racine (en plus du `viewBox`) — sans ça, certains navigateurs rapportent une taille naturelle instable et dépendante de la mise en page CSS du moment, ce qui fausse le calcul du zoom.
4. Les coordonnées des repères étant en pourcentage, elles restent valables si le **ratio** de la nouvelle image est proche de l'ancien. Sinon, repositionne-les dans `map/editor.html`.

### Éditeur de repères (`map/editor.html`)

**Le plus simple : ne pas éditer `data/map-points.json` à la main.** Lance le serveur local et ouvre l'éditeur :

```bash
node scripts/dev-server.js 8080
```

puis `http://localhost:8080/map/editor.html`.

Le fonctionnement : tu choisis un type dans la palette, tu cliques sur la carte pour poser un repère, une fenêtre te demande la fiche à lier (recherche par titre, **fiches privées comprises** — c'est un outil de maître), tu valides, puis **Enregistrer** écrit directement dans `data/map-points.json`. Il ne reste qu'à publier.

- **Déplacer** un repère : le glisser sur la carte.
- **Modifier / supprimer** : cliquer dessus, ou le choisir dans la liste de gauche.
- La liste signale en rouge un repère dont la fiche liée n'existe plus.
- L'identifiant du repère est dérivé du titre de la fiche (`Port-Gémeau` → `port-gemeau`), pour que le JSON reste lisible.

L'écriture directe passe par `POST /api/map-points`, une route servie **uniquement par `scripts/dev-server.js`** et refusée hors machine locale.

⚠️ **L'éditeur ne s'exécute que depuis `localhost`.** Il est publié avec le site (c'est un fichier statique de plus), mais s'y affiche seulement comme un message renvoyant vers le serveur local. La raison n'est pas l'écriture — qu'il ne peut de toute façon pas faire sans le serveur — mais la **lecture** : sa recherche de fiches liste aussi les fiches `OFF`, donc laissé actif en ligne il aurait révélé les titres de tes brouillons et spoilers à quiconque connaît l'URL.

### Types de repères (`data/map-point-types.json`)

Neuf types par défaut (cité, forteresse, ruine, sanctuaire, relief, forêt, port, bataille, repère). Chacun a un `id`, un `label`, un `path` SVG (dessiné sur un viewBox 24×24, en trait) et un `accent` optionnel — `sea` pour les lieux naturels, cinabre par défaut. Ajoute ou modifie librement : la palette de l'éditeur et la carte suivent le fichier.

### Points de repère (`data/map-points.json`)

```json
{ "id": "rosalith", "type": "cite", "article": "rosalith", "x": 27, "y": 46 }
```

- `x`/`y` : pourcentage (0-100) de la largeur/hauteur de l'image de la carte. Mesure-les par rapport à l'image *finale*, pas au placeholder — ou laisse l'éditeur les poser.
- `type` : optionnel, un `id` de `data/map-point-types.json`. Sans type, le repère retombe sur l'icône de la catégorie de sa fiche liée (comportement des points créés avant les types).
- `article` : optionnel, l'id d'une fiche du codex (n'importe quelle catégorie — personnage, lieu, créature...).
- `label` : optionnel. Sans `article`, affiché dans une bulle au clic (le repère n'ouvre alors aucune fiche). Avec `article`, surcharge le titre de la fiche pour l'étiquette du repère.
- Un point lié à une fiche `OFF` est **invisible** en mode public, y compris sa position — contrairement aux grilles du codex (qui affichent un `?` verrouillé), une carte peut spoiler par le simple emplacement d'un repère. Il réapparaît normalement en mode maître.

### Architecture partagée

La carte réutilise le même code que la page principale plutôt que de dupliquer la fiche/le thème/le mode maître :

| Fichier | Rôle |
|---|---|
| `js/overlay.js` | Ouverture/fermeture de la fiche, changement de chapitre, mise en colonnes. |
| `js/theme.js` | Bascule clair/sombre. |
| `js/master.js` | Indicateur et fenêtre de passphrase du mode maître. |

`js/app.js` (page principale) et `map/map.js` (carte) ne contiennent plus que ce qui leur est propre : le routage par onglets/catégories pour l'un, le pan/zoom et les repères pour l'autre.

`map/index.html` déclare `<base href="../">` : le HTML/JS partagé écrit ses chemins (`data/...`, `images/...`) comme si la page était à la racine du site, ce qui est vrai pour `index.html` mais pas pour une page à `map/`. Le `<base>` corrige ça pour toute URL relative de la page, y compris celles injectées dynamiquement (fiche, bannière) — sans lui, il aurait fallu faire porter un préfixe à travers tout le code partagé.

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

Il n'y a **pas** de régénération côté GitHub (plus de workflow qui committe après coup — ça causait des divergences entre le dépôt local et distant). À la place, la régénération se fait en local avant l'envoi, via `publier.bat` (voir ci-dessous).

Le script (`node scripts/build-manifest.js`) valide aussi que chaque fiche a bien `title`, `category`, un `public` correct (`ON`/`OFF`), et que son dossier correspond à sa `category` ; il s'arrête avec un message clair si une fiche est mal formée.

## Publier les modifications

Une fois tes modifications faites (fiches, images, CSS...), double-clique sur `publier.bat` à la racine de ce dossier. Il régénère `data/manifest.json` et s'arrête là — **il n'envoie rien sur GitHub**. L'envoi se fait ensuite à la main via GitHub Desktop (ou `git add`/`commit`/`push` en ligne de commande, au choix).

## Prévisualiser en local

```bash
node scripts/dev-server.js 8080
```

puis ouvrir `http://localhost:8080`.

⚠️ **Toujours passer par cette adresse**, jamais en double-cliquant sur `index.html`. Ouvert directement depuis le disque (`file://`), le navigateur interdit à la page de lire ses propres fichiers de données : le site reste vide et la console se remplit d'erreurs CORS. Le cas est détecté et affiche un message explicite, mais autant l'éviter.

## Mode maître (fiches `OFF`)

⚠️ Le site est 100% statique et public (GitHub Pages) : marquer une fiche `OFF` la cache de l'interface pour les visiteurs normaux, mais **ce n'est pas une vraie sécurité serveur**. Le fichier JSON de la fiche reste techniquement présent dans le dépôt public et quelqu'un de suffisamment curieux pourrait le retrouver en explorant `data/articles/`. À réserver à du contenu que tu veux juste garder hors de l'expérience de lecture normale (spoilers, brouillons), pas à de vrais secrets.

Deux façons d'activer le mode maître :

1. **Le bouton "Maître"**, à droite de la barre de recherche : il ouvre une petite fenêtre qui demande la passphrase. C'est la voie normale.
2. **L'URL** `?maitre=<ta-passphrase>`, pratique pour un marque-page :

```
https://padhiver.github.io/eana/?maitre=ta-passphrase
```

Le mode reste actif ensuite (stocké dans le navigateur). Pour le quitter : cliquer sur "Public", cliquer sur l'indicateur "Mode maître" en bas à droite, ou ouvrir `?maitre=off`.

En mode maître, les fiches `OFF` réapparaissent partout (accueil, grilles, recherche, articles liés) et portent une étiquette rouge "Privé" sur leur vignette.

### Ce que voit un visiteur d'une fiche `OFF`

Une fiche `OFF` n'est pas cachée : elle occupe sa place dans la grille de sa catégorie sous forme d'une **vignette verrouillée** — bordure pointillée, gros `?` en filigrane, sans nom, non cliquable. Pratique pour préparer des fiches à l'avance et montrer qu'il y a de la suite.

Son titre n'apparaît nulle part côté visiteur : ni le nom ni l'identifiant (qui dérive du titre) ne sont écrits dans la page. Elle est donc absente :

- des articles récents de l'accueil,
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
2. À chaque mise à jour : lancer `publier.bat` (voir "Publier les modifications" plus haut), puis pousser le commit vers GitHub via GitHub Desktop.
3. Le site est disponible à `https://padhiver.github.io/eana` (le reste du dépôt peut héberger d'autres sites dans d'autres sous-dossiers, ex. `padhiver.github.io/autre-site`, sans interférer avec celui-ci).

GitHub Pages republie automatiquement à chaque `push`, quelques minutes après.
