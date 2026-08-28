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
map/editor.css           Styles de l'éditeur et de la découpe en tuiles
map/editor.js            Logique de l'éditeur
map/tiles.html           Découpe d'une carte en tuiles (outil local, voir plus bas)
map/tiles.js             Logique de la découpe
js/mapview.js            Pan/zoom, partagé entre la carte et les outils
js/mapbackground.js      Fond de carte : image unique ou tuiles réassemblées, partagé
js/mappoints.js          Cartes, points/types et dessin d'un repère, partagés
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
data/map-config.json    Liste des cartes et de leurs images — seul endroit à changer pour en ajouter/remplacer une
data/articles/<categorie>/*.json    Une fiche = un fichier JSON, rangé dans le dossier de sa catégorie
images/ui/               Icônes de catégories (SVG)
images/placeholders/     Visuels de repli : carte-<categorie>.svg (16:9) et portrait-defaut.svg (9:10)
images/map/              Images des cartes ; une carte découpée a son sous-dossier (images/map/monde/)
images/map/sources/      Images sources en pleine résolution — ignorées par git, voir .gitignore
scripts/build-manifest.js  Régénère data/manifest.json
scripts/dev-server.js     Petit serveur statique pour prévisualiser en local
scripts/map-api.js        Routes d'écriture des outils locaux de carte (jamais publiées)
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

Une ou plusieurs cartes pannables/zoomables à `eana/map/`, avec des repères cliquables qui ouvrent une fiche du codex — même panneau, même animation qu'ailleurs sur le site (voir "Architecture partagée" plus bas).

Quand il y a plus d'une carte, une rangée d'onglets apparaît au-dessus du cadre. Chaque repère appartient à une carte et n'apparaît que sur la sienne.

### Les cartes (`data/map-config.json`)

```json
{
  "defaultMap": "monde",
  "maps": [
    { "id": "monde",   "label": "Le monde",  "tiles": { "...": "voir plus bas" } },
    { "id": "rosalia", "label": "Rosalia",   "image": "images/map/rosalia.webp" }
  ]
}
```

- `id` : minuscules, chiffres et tirets. Il sert d'ancre d'URL (`#/carte/rosalia`), de clé dans `data/map-points.json` et de nom de sous-dossier pour les tuiles.
- `label` : le nom affiché sur l'onglet.
- `defaultMap` : la carte ouverte à l'arrivée. À défaut, la première de la liste.
- Une carte se déclare **soit** avec `image` (un fichier), **soit** avec `tiles` (une grille — voir "Cartes en tuiles").

C'est le seul endroit à changer : la page publique et les deux outils locaux lisent tous ce fichier.

**Si c'est un SVG**, mets des attributs `width`/`height` explicites sur la balise `<svg>` racine (en plus du `viewBox`) — sans ça, certains navigateurs rapportent une taille naturelle instable et dépendante de la mise en page CSS du moment, ce qui fausse le calcul du zoom.

Les coordonnées des repères étant en pourcentage, elles restent valables si le **ratio** de la nouvelle image est proche de l'ancien. Sinon, repositionne-les dans `map/editor.html`.

### Cartes en tuiles

Une carte du monde en pleine résolution devient vite trop lourde : un seul fichier de plusieurs Mo, décodé d'un bloc par le navigateur. On peut la découper en une grille de tuiles que la page réassemble.

**C'est réservé à la carte du monde** : une carte de région tient sans mal dans un seul fichier, et le découpage n'apporterait rien.

```json
{
  "id": "monde",
  "label": "Le monde",
  "tiles": {
    "cols": 5, "rows": 4,
    "width": 12000, "height": 8519,
    "pattern": "images/map/monde/tuile-{col}-{row}.webp",
    "preview": "images/map/monde/apercu.webp"
  }
}
```

- `cols`/`rows` : la grille. 3 × 3 = 9 tuiles.
- `width`/`height` : dimensions de la carte **complète**, pas d'une tuile. Elles servent à placer les cases avant même que les images arrivent.
- `pattern` : chemin d'une tuile, `{col}` et `{row}` numérotés à partir de 0.
- `preview` : facultatif mais recommandé — la carte entière en réduit.

Ce que ça change à l'affichage :

1. L'aperçu s'affiche immédiatement et sert de fond tant que le zoom ne dépasse pas sa finesse. Au cadrage initial, on ne charge donc **que lui**.
2. Au-delà, seules les tuiles qui touchent la zone visible sont chargées (avec une marge de préchargement), et elles le restent ensuite.

Mesuré sur la carte d'Eana, source de 26808 × 19032 px (397 Mo en PNG), ramenée à 12000 × 8519 et découpée en 5 × 4 avec un aperçu de 1600 px : **7,1 Mo de tuiles en tout, et 273 Ko au chargement de la page**. Une lecture zoomée sur une région tire une dizaine de tuiles, jamais les vingt.

Les cases se recouvrent d'un pixel — du vrai contenu d'image, pas un étirement — pour qu'aucun liseré n'apparaisse entre deux tuiles à un zoom fractionnaire. `EanaMapBackground.tileRects()` calcule cette géométrie, et **c'est la même fonction qui sert à découper et à réassembler** : les deux ne peuvent pas diverger.

### Découper une carte (`map/tiles.html`)

Outil local, comme l'éditeur. Serveur lancé, ouvre `http://localhost:8080/map/tiles.html` :

1. Choisis la carte, ou dépose une autre image (c'est aussi comme ça qu'on recoupe une carte déjà en tuiles : elles ne se recollent pas d'elles-mêmes, il faut le fichier d'origine).
2. Règle la **largeur maximale**, la grille, la qualité WEBP et la largeur de l'aperçu. La ligne sous la grille annonce le résultat — dimensions de la carte, nombre et taille des tuiles — **avant** de lancer l'encodage, qui prend des minutes sur une grosse source. Elle passe au rouge et propose une meilleure grille si les tuiles dépassent 4500 px de côté.
3. **Découper** : les tuiles sont encodées dans le navigateur et l'assemblage s'affiche pour contrôle. Le journal signale les tuiles trop lourdes et un total qui poserait problème à git.
4. **Écrire dans le dépôt** : les fichiers sont écrits dans `images/map/<id>/` et `data/map-config.json` passe de `image` à `tiles` pour cette carte — le reste du fichier (autres cartes, libellés, carte par défaut) est préservé.

Il ne reste qu'à publier sur git.

#### Choisir la largeur maximale

C'est le réglage qui pèse le plus lourd, et de loin. Une carte exportée pour l'impression a une résolution qui n'a aucun sens sur un écran : au-delà d'un certain point, chaque pixel de plus ne fait qu'ajouter du bruit à encoder.

La source d'Eana fait 26808 px de large. Réduite à 12000, l'écart moyen avec la pleine résolution est de **0,3 à 1,2 sur 255** selon la zone mesurée — autant dire rien, alors que le poids passe de 272 Mo à 7,1 Mo. Tout ce qu'il y avait au-dessus de 12000 px était du bruit de rééchantillonnage.

Repères : 12000 px permettent déjà de zoomer une dizaine de fois plus que le cadrage initial. Si tu hésites, découpe à deux largeurs et compare — c'est deux minutes.

Sur la qualité WEBP : ré-encoder perd toujours un peu. À 0,85, l'écart moyen mesuré est de 0,6 sur 255 — invisible. Monte-la si ta carte a du texte fin, baisse-la si les tuiles pèsent trop.

#### Où ranger l'image source

Dans `images/map/sources/`, **ignoré par git** (voir `.gitignore`). Une source en pleine résolution pèse souvent des centaines de mégaoctets : GitHub refuse tout fichier au-delà de 100 Mo, et un dépôt de cette taille devient long à cloner. Seules les tuiles sont publiées.

Garde-la quand même en local : c'est elle qu'il faut rouvrir pour recouper une carte, puisque les tuiles ne se recollent pas d'elles-mêmes.

### Éditeur de repères (`map/editor.html`)

**Le plus simple : ne pas éditer `data/map-points.json` à la main.** Lance le serveur local et ouvre l'éditeur :

```bash
node scripts/dev-server.js 8080
```

puis `http://localhost:8080/map/editor.html`.

Le fonctionnement : tu choisis un type dans la palette, tu cliques sur la carte pour poser un repère, une fenêtre te demande la fiche à lier (recherche par titre, **fiches privées comprises** — c'est un outil de maître), tu valides, puis **Enregistrer** écrit directement dans `data/map-points.json`. Il ne reste qu'à publier.

S'il y a plusieurs cartes, une section **Carte** apparaît en haut du panneau, avec le nombre de repères de chacune. Tu n'édites que la carte affichée, mais **Enregistrer réécrit le fichier entier** : les repères des autres cartes sont conservés tels quels. La carte ouverte est mémorisée d'une session à l'autre.

- **Déplacer** un repère : le glisser sur la carte.
- **Modifier / supprimer** : cliquer dessus, ou le choisir dans la liste de gauche.
- La liste signale en rouge un repère dont la fiche liée n'existe plus.
- L'identifiant du repère est dérivé du titre de la fiche (`Port-Gémeau` → `port-gemeau`), pour que le JSON reste lisible.

L'écriture directe passe par `POST /api/map-points`, une route servie **uniquement par `scripts/dev-server.js`** (voir `scripts/map-api.js`) et refusée hors machine locale. Les deux autres routes d'écriture, `/api/map-tile` et `/api/map-source`, servent à la découpe en tuiles et suivent les mêmes règles. Aucune n'existe sur GitHub Pages, qui ne sert que des fichiers.

`/api/map-tile` reçoit les octets bruts de la tuile, un fichier par requête, le dossier et le nom en paramètres d'URL (tous deux validés avant écriture). Passer par du base64 dans du JSON gonflerait le corps d'un tiers et obligerait à construire en mémoire une chaîne aussi grosse que le fichier. Au-delà de 64 Mo, la route répond **413 avec un message explicite** plutôt que de couper la connexion — sinon le navigateur ne rapporte qu'une « erreur réseau », ce qui laisse croire à tort que le serveur local n'est pas lancé.

⚠️ **L'éditeur et la découpe ne s'exécutent que depuis `localhost`.** Il est publié avec le site (c'est un fichier statique de plus), mais s'y affiche seulement comme un message renvoyant vers le serveur local. La raison n'est pas l'écriture — qu'il ne peut de toute façon pas faire sans le serveur — mais la **lecture** : sa recherche de fiches liste aussi les fiches `OFF`, donc laissé actif en ligne il aurait révélé les titres de tes brouillons et spoilers à quiconque connaît l'URL.

### Types de repères (`data/map-point-types.json`)

Neuf types par défaut (cité, forteresse, ruine, sanctuaire, relief, forêt, port, bataille, repère). Chacun a un `id`, un `label`, un `path` SVG (dessiné sur un viewBox 24×24, en trait) et un `accent` optionnel — `sea` pour les lieux naturels, cinabre par défaut. Ajoute ou modifie librement : la palette de l'éditeur et la carte suivent le fichier.

### Points de repère (`data/map-points.json`)

```json
{ "id": "rosalith", "map": "monde", "type": "cite", "article": "rosalith", "x": 27, "y": 46 }
```

- `map` : l'`id` d'une carte de `data/map-config.json`. Omis, le repère appartient à la carte par défaut — c'était le cas de tous les repères avant qu'il y en ait plusieurs.
- `x`/`y` : pourcentage (0-100) de la largeur/hauteur de **sa** carte. Mesure-les par rapport à l'image finale — ou laisse l'éditeur les poser.
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

Sans `cardImage`, la vignette retombe automatiquement sur `images/placeholders/carte-<categorie>.svg`. Sans `contextImage`, la fiche affiche `images/placeholders/portrait-defaut.svg`. Aucune fiche n'est donc jamais cassée faute d'illustration.

⚠️ Les 442 fiches actuelles ont encore `"cardImage": "images/placeholders/emblem-<categorie>.svg"`, un chemin hérité dont **les fichiers ont été supprimés**. Ce n'est pas un problème : `render.js` reconnaît ce chemin et le remplace par le gabarit `carte-*` avant tout affichage, donc l'image n'est jamais demandée. En revanche, **ne retire pas ce test dans `cardImage()`** (`js/render.js`) sans avoir d'abord vidé le champ dans les fiches, sinon les 442 vignettes pointeraient vers un fichier inexistant.

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
