// ============================================================
//  EMBER — Données des termes à traduire
//  Pour ajouter un terme : copier un bloc et l'ajouter à la liste.
//  proposals : tableau de traductions proposées (votes démarrés à 0)
// ============================================================

const EMBER_CATEGORIES = [
  "Cosmos",
  "Divinités",
  "Histoire",
  "Lieux & Culture",
  "Ancestries",
  "Saisons"
];

const EMBER_TERMS = [
  // ── COSMOS ──────────────────────────────────────────────
  {
    id: "weave",
    en: "The Weave",
    cat: "Cosmos",
    desc: "Barrière protectrice autour du cosmos d'Ember, qui la protège des Abysses.",
    proposals: ["La Trame", "Le Voile", "Le Tissage"]
  },
  {
    id: "abyss",
    en: "The Abyss",
    cat: "Cosmos",
    desc: "Force destructrice venant d'au-delà de la Weave.",
    proposals: ["L'Abîme", "Le Néant", "Les Abysses"]
  },
  {
    id: "heart_of_ember",
    en: "The Heart of Ember",
    cat: "Cosmos",
    desc: "Force créatrice du monde d'Ember.",
    proposals: ["Le Cœur d'Ember"]
  },
  {
    id: "sea_of_stars",
    en: "Sea of Stars",
    cat: "Cosmos",
    desc: "Étendue de vide entre les astres.",
    proposals: ["La Mer des Étoiles", "L'Océan Céleste"]
  },
  {
    id: "inner_realms",
    en: "Inner Realms",
    cat: "Cosmos",
    desc: "3 mondes flottant aux abords de la Weave (Fielons, Fée, Célestes).",
    proposals: ["Royaumes Intérieurs", "Plans Intérieurs", "Sphères Intérieures"]
  },
  {
    id: "ascendancy",
    en: "Ascendancy",
    cat: "Cosmos",
    desc: "Processus par lequel un mortel devient un Shard God.",
    proposals: ["L'Ascendance", "L'Élévation", "L'Apothéose"]
  },
  {
    id: "attunement",
    en: "Attunement",
    cat: "Cosmos",
    desc: "Résonance entre une âme et un des astres d'Ember.",
    proposals: ["Résonance", "Accord", "Syntonisation", "Affinité"]
  },
  {
    id: "soul_cycle",
    en: "Soul Cycle",
    cat: "Cosmos",
    desc: "Le chemin que suit une âme après sa mort.",
    proposals: ["Cycle des Âmes", "Roue des Âmes"]
  },
  {
    id: "soul_transference",
    en: "Soul Transference",
    cat: "Cosmos",
    desc: "Croyance : l'âme rejoint le Spiritland après la mort pour être réabsorbée par le Cœur d'Ember.",
    proposals: ["Transfert d'Âme", "Transit de l'Âme"]
  },
  {
    id: "eternal_soul",
    en: "Eternal Soul",
    cat: "Cosmos",
    desc: "Croyance : l'âme continue de vivre en se réincarnant dans un Inner Realm.",
    proposals: ["Âme Éternelle", "Âme Immortelle"]
  },
  {
    id: "soulbound",
    en: "Soulbound",
    cat: "Cosmos",
    desc: "Anomalie : l'âme reste accrochée au corps après la mort pour accomplir un but.",
    proposals: ["Lié à l'Âme", "Entravé", "Âme-Enchaînée", "Lié-Fantôme"]
  },
  {
    id: "chronal_resonance",
    en: "Chronal Resonance",
    cat: "Cosmos",
    desc: "Écho d'événements historiques extrêmes qui distord les lieux où ils ont eu lieu.",
    proposals: ["Résonance Chronale", "Écho Temporel", "Résidu Historique"]
  },
  {
    id: "wildsong",
    en: "Wildsong",
    cat: "Cosmos",
    desc: "L'énergie du Cœur utilisée par la nature et les Wild Gods.",
    proposals: ["Chant Sauvage", "Chant du Monde", "Chant de la Nature"]
  },
  {
    id: "pathways",
    en: "Pathways",
    cat: "Cosmos",
    desc: "Gigantesque réseau de grottes souterraines traversant tout Eiru jusqu'au Cœur d'Ember.",
    proposals: ["Les Voies", "Les Passages", "Les Chemins Anciens", "Les Couloirs"]
  },

  // ── DIVINITÉS ───────────────────────────────────────────
  {
    id: "elder_gods",
    en: "Elder Gods",
    cat: "Divinités",
    desc: "Divinités créées lors de la formation du monde, maintenant les principes fondateurs de la réalité.",
    proposals: ["Dieux Primordiaux", "Anciens Dieux", "Dieux Fondateurs"]
  },
  {
    id: "shard_gods",
    en: "Shard Gods",
    cat: "Divinités",
    desc: "Mortels ayant atteint la divinité via l'Ascendancy en absorbant l'énergie d'un cristal du Cœur d'Ember.",
    proposals: ["Dieux-Éclats", "Dieux Cristallins", "Dieux Mortels"]
  },
  {
    id: "wild_gods",
    en: "Wild Gods",
    cat: "Divinités",
    desc: "Entités élémentaires et naturelles maniant la Lifeforce du monde, liées aux différentes lunes.",
    proposals: ["Dieux Sauvages", "Esprits Sauvages", "Dieux Naturels"]
  },
  {
    id: "outer_gods",
    en: "Outer Gods",
    cat: "Divinités",
    desc: "Entités extérieures incompréhensibles souhaitant engloutir toute création et vie.",
    proposals: ["Dieux Extérieurs", "Dieux du Dehors", "Dieux Abyssaux", "Dieux du Vide"]
  },
  {
    id: "the_veil",
    en: "The Veil",
    cat: "Divinités",
    desc: "Terme utilisé pour désigner l'Abysse sans le nommer directement — prononcer son vrai nom met l'esprit en danger.",
    proposals: ["Le Voile", "L'Indicible", "L'Innommable", "Le Nom Caché"]
  },
  {
    id: "malvorn",
    en: "Malvorn",
    cat: "Divinités",
    desc: "Surnom donné aux créatures de l'Abysse.",
    proposals: ["Malvorn (inchangé)", "Maudits", "Corrompus", "Abyssaux"]
  },

  // ── HISTOIRE ────────────────────────────────────────────
  {
    id: "first_dawn",
    en: "The First Dawn",
    cat: "Histoire",
    desc: "Création du monde d'Ember.",
    proposals: ["La Première Aube", "L'Aube des Temps"]
  },
  {
    id: "age_of_beasts",
    en: "Age of Beasts",
    cat: "Histoire",
    desc: "Ère où les Léviathans dominaient le monde.",
    proposals: ["Âge des Bêtes", "Ère des Bêtes", "Âge des Léviathans"]
  },
  {
    id: "unveiling",
    en: "The Unveiling",
    cat: "Histoire",
    desc: "Événement ayant mis fin à l'Âge des Bêtes — les géants ont touché l'Abysse et certains ont fui à la surface.",
    proposals: ["Le Dévoilement", "La Révélation", "L'Émergence"]
  },
  {
    id: "age_of_tower",
    en: "Age of the Tower",
    cat: "Histoire",
    desc: "Ère de l'Empire Aedir.",
    proposals: ["Âge de la Tour", "Ère de la Tour"]
  },
  {
    id: "forsaken_war",
    en: "Forsaken War",
    cat: "Histoire",
    desc: "Guerre contre les Theroch ayant mené à leur éradication.",
    proposals: ["Guerre des Bannis", "Guerre Maudite", "Guerre des Oubliés", "Guerre des Reniés"]
  },
  {
    id: "shattering",
    en: "The Shattering",
    cat: "Histoire",
    desc: "Explosion de la Sun Tower, fin de l'Empire Aedir et déclenchement de la fissure abyssale.",
    proposals: ["Le Fracas", "L'Effondrement", "La Brisure", "La Grande Fracture"]
  },
  {
    id: "abyssal_shear",
    en: "Abyssal Shear",
    cat: "Histoire",
    desc: "Invasion de l'Abysse par la brèche créée lors du Shattering.",
    proposals: ["Déchirure Abyssale", "Fissure de l'Abîme", "Brèche Abyssale"]
  },
  {
    id: "age_of_rediscovery",
    en: "Age of Rediscovery",
    cat: "Histoire",
    desc: "Ère actuelle.",
    proposals: ["Âge de la Redécouverte", "Ère du Renouveau", "Âge du Réveil"]
  },
  {
    id: "virulent_plague",
    en: "Virulent Plague",
    cat: "Histoire",
    desc: "Peste magique qui a touché un sous-continent d'Aran.",
    proposals: ["Peste Virulente", "La Grande Peste", "Fléau Magique"]
  },
  {
    id: "evernight",
    en: "The Evernight",
    cat: "Histoire",
    desc: "Destruction de la nation de Moiran lors d'un rituel raté, transformée en royaume de morts-vivants.",
    proposals: ["La Nuit Éternelle", "L'Obscurcissement", "La Nuit Sans Fin"]
  },
  {
    id: "night_of_swords",
    en: "Night of Swords",
    cat: "Histoire",
    desc: "Coup d'état ayant mené à la création de l'Empire Tayan et des Drakon.",
    proposals: ["Nuit des Épées", "Nuit des Lames", "La Nuit Sanglante"]
  },
  {
    id: "troll_invasions",
    en: "Troll Invasions",
    cat: "Histoire",
    desc: "Migrations des Trolls dont l'habitat naturel a été perturbé par les Géants.",
    proposals: ["Invasions de Trolls", "Migrations des Trolls", "Grande Migration"]
  },

  // ── LIEUX & CULTURE ─────────────────────────────────────
  {
    id: "dusktide_festival",
    en: "Dusktide Festival",
    cat: "Lieux & Culture",
    desc: "Événement de la ville d'Helka lors du Zénith de Mayis.",
    proposals: ["Festival du Crépuscule", "Fête du Zénith", "Fête Crépusculaire"]
  },
  {
    id: "spiritlands",
    en: "The Spiritlands / Mort'Oliss",
    cat: "Lieux & Culture",
    desc: "Domaine du dieu Sockets, où les âmes attendent.",
    proposals: ["Les Terres des Esprits", "Le Pays des Âmes", "Mort'Oliss (inchangé)"]
  },
  {
    id: "starshield",
    en: "The Starshield",
    cat: "Lieux & Culture",
    desc: "Continent au centre d'Ember en forme d'étoile.",
    proposals: ["L'Écu des Étoiles", "Le Bouclier Stellaire", "L'Astécu"]
  },
  {
    id: "corebright_forest",
    en: "Corebright Forest",
    cat: "Lieux & Culture",
    desc: "Forêt colossale.",
    proposals: ["Forêt du Cœur-Vif", "Forêt Lumineuse", "Forêt Corebright (inchangé)"]
  },
  {
    id: "dead_mire",
    en: "Dead Mire",
    cat: "Lieux & Culture",
    desc: "Région marécageuse.",
    proposals: ["Marais Mort", "La Fange Morte", "Les Marécages Morts"]
  },
  {
    id: "sun_tower",
    en: "The Sun Tower / The Broken Tower",
    cat: "Lieux & Culture",
    desc: "Ancienne tour au centre du Shattering, aujourd'hui en ruines.",
    proposals: ["La Tour du Soleil / La Tour Brisée", "Tour Solaire / Tour Brisée"]
  },
  {
    id: "duskflare_jungles",
    en: "Duskflare Jungles",
    cat: "Lieux & Culture",
    desc: "Jungles des Lowlands.",
    proposals: ["Jungles du Crépuscule-Ardent", "Jungles Duskflare (inchangé)"]
  },
  {
    id: "burial_plains",
    en: "Burial Plains / The Dustlands",
    cat: "Lieux & Culture",
    desc: "Plaines funéraires, terres poussiéreuses.",
    proposals: ["Plaines Funèbres / Les Terres Poussiéreuses", "Plaines des Morts"]
  },

  // ── ANCESTRIES ──────────────────────────────────────────
  {
    id: "signborn",
    en: "Signborn",
    cat: "Ancestries",
    desc: "Créés par les Deamos (Inner Realm de la curiosité), avec une affinité pour les Glyphes.",
    proposals: ["Né-des-Signes", "Porteur-de-Signe", "Signé", "Marque-Née"]
  },
  {
    id: "thornling",
    en: "Thornling",
    cat: "Ancestries",
    desc: "Analogue au Tiefling / Tieffelin.",
    proposals: ["Épineux", "Épinelin", "Thornelin", "Épineling"]
  },
  {
    id: "aster",
    en: "Aster",
    cat: "Ancestries",
    desc: "Individu aux caractéristiques physiques uniques à la naissance, causées par l'énergie du Cœur d'Ember.",
    proposals: ["Aster (inchangé)", "Astral", "Lumineux"]
  },
  {
    id: "carrow",
    en: "Carrow",
    cat: "Ancestries",
    desc: "Ancestry mystérieuse vivant au fond des océans.",
    proposals: ["Carrow (inchangé)", "Abyssaux"]
  },

  // ── SAISONS ─────────────────────────────────────────────
  {
    id: "seeding",
    en: "Seeding",
    cat: "Saisons",
    desc: "Première saison du Printemps.",
    proposals: ["Ensemencement", "Semailles", "Le Semis"]
  },
  {
    id: "blooming",
    en: "Blooming",
    cat: "Saisons",
    desc: "Deuxième saison du Printemps.",
    proposals: ["Floraison", "L'Éclosion"]
  },
  {
    id: "steading",
    en: "Steading",
    cat: "Saisons",
    desc: "Première saison de l'Été.",
    proposals: ["Moisson", "Établissement", "La Tenure"]
  },
  {
    id: "gleaning",
    en: "Gleaning",
    cat: "Saisons",
    desc: "Deuxième saison de l'Été.",
    proposals: ["Glanage", "Le Glane", "La Récolte"]
  },
  {
    id: "withering",
    en: "Withering",
    cat: "Saisons",
    desc: "Première saison de l'Hiver.",
    proposals: ["Flétrissement", "Déclin", "Le Dépérissement"]
  },
  {
    id: "stilling",
    en: "Stilling",
    cat: "Saisons",
    desc: "Deuxième saison de l'Hiver.",
    proposals: ["Gel", "Apaisement", "L'Immobilité"]
  }
];
