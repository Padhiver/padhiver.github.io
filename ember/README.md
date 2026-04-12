# Ember — Outil de traduction collaboratif

Page accessible sur : **https://padhiver.github.io/ember/**

## Structure des fichiers

```
ember/
├── index.html          ← Page principale
├── css/
│   └── ember.css       ← Styles (thème sombre accordé au site)
└── js/
    ├── data.js         ← ⭐ FICHIER PRINCIPAL : tous les termes et propositions initiales
    ├── votes.js        ← Logique de vote (localStorage + export/import JSON)
    └── app.js          ← Rendu de l'interface
```

## Ajouter ou modifier un terme

Tout se passe dans **`js/data.js`**.

### Ajouter un terme

Copier ce bloc et l'insérer dans le tableau `EMBER_TERMS` dans la bonne catégorie :

```js
{
  id: "identifiant_unique",       // snake_case, sans espaces ni accents
  en: "Terme anglais",            // Le terme original en anglais
  cat: "Cosmos",                  // Une des catégories de EMBER_CATEGORIES
  desc: "Description du terme.",  // Courte description pour les votants
  proposals: ["Traduction 1", "Traduction 2"]  // Propositions initiales
},
```

### Modifier les propositions initiales

Éditer directement le tableau `proposals` d'un terme existant.

> ⚠️ Si des votes ont déjà été enregistrés sur les propositions, attention à ne pas réordonner le tableau — cela décalerait les indices et corromprait les votes existants. Ajoutez toujours de nouvelles propositions **à la fin** du tableau.

### Ajouter une catégorie

Ajouter la catégorie dans `EMBER_CATEGORIES` en haut de `data.js`.

---

## Fonctionnement des votes

- Les votes sont sauvegardés dans le **localStorage** du navigateur de chaque visiteur.
- Chaque visiteur peut voter **une fois par terme** (vote annulable).
- N'importe qui peut ajouter une nouvelle proposition directement dans l'interface.

### Fusionner les votes de la communauté

Puisque chaque navigateur a son propre localStorage, pour consolider les votes :

1. Chaque membre clique sur **"↓ Exporter"** et envoie son fichier `ember-votes.json` dans le Discord.
2. Le MJ (ou un admin) fusionne les fichiers manuellement (additionner les `votes`) et remet le fichier consolidé en partage.
3. Chaque membre peut alors cliquer sur **"↑ Importer"** pour charger la version consolidée.

---

## Déploiement

Copier le dossier `ember/` à la racine du repo `padhiver.github.io`.

La page sera accessible à : `https://padhiver.github.io/ember/`
