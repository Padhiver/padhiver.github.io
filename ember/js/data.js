// ============================================================
//  EMBER — Données des termes à traduire
//  Sources : messages Discord + biome_et_location.json
//            actors_output.json + pnj_output.json
// ============================================================

const EMBER_CATEGORIES = [
  "Cosmos",
  "Divinités",
  "Histoire",
  "Lieux & Culture",
  "Saisons",
  "Ancestries",
  "Enrichisseurs",
  "Biomes",
  "Lieux",
  "Factions",
  "Bestiaire",
  "PNJ"
];

const EMBER_TERMS = [

  // ══════════════════════════════════════════════════════════
  //  COSMOS
  // ══════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════
  //  DIVINITÉS
  // ══════════════════════════════════════════════════════════
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
  {
    id: "spinning_spear",
    en: "The Spinning Spear",
    cat: "Divinités",
    desc: "Épithète de Lanespear, Shard God de la Guerre.",
    proposals: ["La Lance Tournoyante", "La Lame Tourbillonnante", "La Lance Virevoltante"]
  },
  {
    id: "hearthfires_roar",
    en: "The Hearthfire's Roar",
    cat: "Divinités",
    desc: "Épithète de Steelsong, Shard God associé aux forgerons.",
    proposals: ["Le Rugissement du Foyer", "Le Grondement du Feu de l'Âtre", "La Voix du Feu Sacré"]
  },
  {
    id: "soul_of_fashion",
    en: "Soul of Fashion",
    cat: "Divinités",
    desc: "Superstition : force créative de la mode de la ville d'Ordain.",
    proposals: ["Âme de la Mode", "Esprit de la Mode", "L'Âme Fashionista"]
  },
  {
    id: "silent_pack",
    en: "The Silent Pack",
    cat: "Divinités",
    desc: "Entité liée au Casia, les habitants de Primordis, l'Inner Realm lié aux Fées.",
    proposals: ["La Meute Silencieuse", "Le Pacte du Silence", "La Horde Muette"]
  },
  {
    id: "shattered_one",
    en: "The Shattered One",
    cat: "Divinités",
    desc: "Entité mystérieuse — lore encore inconnu.",
    proposals: ["Le Brisé", "Le Fracturé", "L'Éclat"]
  },
  {
    id: "herald_whispering_choir",
    en: "Herald of the Whispering Choir",
    cat: "Divinités",
    desc: "Entité de l'Abysse au centre de l'attaque qu'a subie le monde d'Ember par le passé.",
    proposals: ["Héraut du Chœur Murmurant", "Messager du Chœur Chuchotant", "Héraut des Voix Abyssales"]
  },
  {
    id: "pathwalker",
    en: "Pathwalker",
    cat: "Divinités",
    desc: "Elder God oublié, chargé des Pathways.",
    proposals: ["L'Arpenteur des Voies", "Le Marcheur des Passages", "Gardien des Chemins"]
  },

  // ══════════════════════════════════════════════════════════
  //  HISTOIRE
  // ══════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════
  //  LIEUX & CULTURE
  // ══════════════════════════════════════════════════════════
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
  {
    id: "strider",
    en: "Strider",
    cat: "Lieux & Culture",
    desc: "Culture vivant en harmonie avec la nature.",
    proposals: ["Marcheur", "Rôdeur", "Arpenteur", "Vagabond"]
  },
  {
    id: "wardcall",
    en: "Wardcall",
    cat: "Lieux & Culture",
    desc: "Alliance de 3 royaumes.",
    proposals: ["Wardcall (inchangé)", "Appel-aux-Armes", "Pacte de Garde", "Coalition Défensive"]
  },

  // ══════════════════════════════════════════════════════════
  //  SAISONS
  // ══════════════════════════════════════════════════════════
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
  },

  // ══════════════════════════════════════════════════════════
  //  ANCESTRIES
  // ══════════════════════════════════════════════════════════
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

  // ══════════════════════════════════════════════════════════
  //  ENRICHISSEURS — Catégories de Connaissance
  // ══════════════════════════════════════════════════════════
  {
    id: "enrich_abyssals",
    en: "Knowledge: Abyssals",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les créatures et entités de l'Abysse.",
    proposals: ["Abyssaux", "Créatures Abyssales"]
  },
  {
    id: "enrich_aedir",
    en: "Knowledge: Aedir",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur l'Empire Aedir.",
    proposals: ["Aedir (inchangé)", "Empire Aedir"]
  },
  {
    id: "enrich_alchemy",
    en: "Knowledge: Alchemy",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur l'alchimie.",
    proposals: ["Alchimie"]
  },
  {
    id: "enrich_ancients",
    en: "Knowledge: Ancients",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les êtres et civilisations anciennes.",
    proposals: ["Anciens", "Êtres Primordiaux", "Civilisations Anciennes"]
  },
  {
    id: "enrich_artifacts",
    en: "Knowledge: Artifacts",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les artefacts magiques.",
    proposals: ["Artefacts"]
  },
  {
    id: "enrich_arts",
    en: "Knowledge: Arts",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les arts.",
    proposals: ["Arts"]
  },
  {
    id: "enrich_beasts",
    en: "Knowledge: Beasts",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les bêtes et la faune.",
    proposals: ["Bêtes", "Faune", "Bestiaire"]
  },
  {
    id: "enrich_celestials",
    en: "Knowledge: Celestials",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les créatures célestes.",
    proposals: ["Célestes"]
  },
  {
    id: "enrich_cosmology",
    en: "Knowledge: Cosmology",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la cosmologie d'Ember.",
    proposals: ["Cosmologie"]
  },
  {
    id: "enrich_crafts",
    en: "Knowledge: Crafts",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur l'artisanat.",
    proposals: ["Artisanat", "Métiers", "Savoir-Faire"]
  },
  {
    id: "enrich_crime",
    en: "Knowledge: Crime",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la criminalité et le milieu.",
    proposals: ["Crime", "Criminalité", "Milieu Criminel"]
  },
  {
    id: "enrich_dragons",
    en: "Knowledge: Dragons",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les dragons.",
    proposals: ["Dragons"]
  },
  {
    id: "enrich_elementals",
    en: "Knowledge: Elementals",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les élémentaires.",
    proposals: ["Élémentaires"]
  },
  {
    id: "enrich_fey",
    en: "Knowledge: Fey",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les Fées.",
    proposals: ["Fées", "Fée", "Créatures Féeriques"]
  },
  {
    id: "enrich_fiends",
    en: "Knowledge: Fiends",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les Fielons.",
    proposals: ["Fielons", "Fiends (inchangé)"]
  },
  {
    id: "enrich_forensics",
    en: "Knowledge: Forensics",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la médecine légale et les sciences forensiques.",
    proposals: ["Médecine Légale", "Sciences Forensiques", "Investigation"]
  },
  {
    id: "enrich_gods",
    en: "Knowledge: Gods",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les dieux et divinités.",
    proposals: ["Dieux", "Divinités", "Théologie"]
  },
  {
    id: "enrich_intrigue",
    en: "Knowledge: Intrigue",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la politique et les complots.",
    proposals: ["Intrigue", "Complots"]
  },
  {
    id: "enrich_legends",
    en: "Knowledge: Legends",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les légendes et mythes.",
    proposals: ["Légendes", "Mythes et Légendes"]
  },
  {
    id: "enrich_leviathans",
    en: "Knowledge: Leviathans",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les Léviathans.",
    proposals: ["Léviathans"]
  },
  {
    id: "enrich_machines",
    en: "Knowledge: Machines",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les machines et mécanismes.",
    proposals: ["Machines", "Mécanismes", "Mécanique"]
  },
  {
    id: "enrich_monsters",
    en: "Knowledge: Monsters",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les monstres.",
    proposals: ["Monstres", "Créatures"]
  },
  {
    id: "enrich_plants",
    en: "Knowledge: Plants",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les plantes.",
    proposals: ["Plantes", "Flore", "Botanique"]
  },
  {
    id: "enrich_politics",
    en: "Knowledge: Politics",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la politique.",
    proposals: ["Politique", "Politiques"]
  },
  {
    id: "enrich_rituals",
    en: "Knowledge: Rituals",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les rituels.",
    proposals: ["Rituels", "Magie Rituelle"]
  },
  {
    id: "enrich_seafaring",
    en: "Knowledge: Seafaring",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la navigation et la mer.",
    proposals: ["Navigation", "Art de la Mer", "Matelotage"]
  },
  {
    id: "enrich_shent",
    en: "Knowledge: Shent",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur le peuple/culture Shent.",
    proposals: ["Shent (inchangé)", "Culture Shent"]
  },
  {
    id: "enrich_souls",
    en: "Knowledge: Souls",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les âmes.",
    proposals: ["Âmes", "Magie des Âmes"]
  },
  {
    id: "enrich_stars",
    en: "Knowledge: Stars",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les astres d'Ember.",
    proposals: ["Étoiles", "Astres", "Astronomie"]
  },
  {
    id: "enrich_subterranea",
    en: "Knowledge: Subterranea",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur le monde souterrain et les Pathways.",
    proposals: ["Souterrain", "Monde Souterrain", "Sous-Monde"]
  },
  {
    id: "enrich_tracking",
    en: "Knowledge: Tracking",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur le pistage.",
    proposals: ["Pistage", "Traque", "Survie"]
  },
  {
    id: "enrich_trade",
    en: "Knowledge: Trade",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur le commerce.",
    proposals: ["Commerce", "Négoce", "Marchandise"]
  },
  {
    id: "enrich_undeath",
    en: "Knowledge: Undeath",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur les morts-vivants.",
    proposals: ["Mort-Vivant", "Nécromancie", "Non-Mort"]
  },
  {
    id: "enrich_warfare",
    en: "Knowledge: Warfare",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la guerre et la tactique.",
    proposals: ["Guerre", "Tactique Militaire", "Art de la Guerre"]
  },
  {
    id: "enrich_weather",
    en: "Knowledge: Weather",
    cat: "Enrichisseurs",
    desc: "Catégorie de connaissance sur la météorologie.",
    proposals: ["Météorologie", "Météo", "Phénomènes Météorologiques"]
  },

  // ── Langues ───────────────────────────────────────────────
  {
    id: "lang_common",
    en: "Language: Common (Coin)",
    cat: "Enrichisseurs",
    desc: "Langue commune, originaire d'Ordain.",
    proposals: ["Commun", "Coin (inchangé)", "Langue Commune"]
  },
  {
    id: "lang_imperial",
    en: "Language: Imperial",
    cat: "Enrichisseurs",
    desc: "Langue impériale.",
    proposals: ["Impérial", "Langue Impériale"]
  },
  {
    id: "lang_scripta",
    en: "Language: Scripta",
    cat: "Enrichisseurs",
    desc: "Langue écrite/académique.",
    proposals: ["Scripta (inchangé)", "Scriptien", "Langue des Érudits"]
  },
  {
    id: "lang_forest",
    en: "Language: Forest Speech",
    cat: "Enrichisseurs",
    desc: "Langue des forêts.",
    proposals: ["Langue des Forêts", "Sylvain", "Forestier", "Parler des Bois"]
  },
  {
    id: "lang_towyr",
    en: "Language: Towyr",
    cat: "Enrichisseurs",
    desc: "Langue ancienne de l'Empire Aedir.",
    proposals: ["Towyr (inchangé)", "Aedirien Ancien", "Langue Aedir"]
  },
  {
    id: "lang_pathward",
    en: "Language: Pathward",
    cat: "Enrichisseurs",
    desc: "Langue des Géants.",
    proposals: ["Pathward (inchangé)", "Langue des Géants", "Patois des Géants"]
  },
  {
    id: "lang_arcden",
    en: "Language: Arcden",
    cat: "Enrichisseurs",
    desc: "Langue standard.",
    proposals: ["Arcden (inchangé)", "Arcdenien"]
  },
  {
    id: "lang_cascal",
    en: "Language: Cascal",
    cat: "Enrichisseurs",
    desc: "Langue standard.",
    proposals: ["Cascal (inchangé)", "Cascalien"]
  },
  {
    id: "lang_draconic",
    en: "Language: Draconic",
    cat: "Enrichisseurs",
    desc: "Langue des dragons.",
    proposals: ["Draconique", "Langue des Dragons"]
  },
  {
    id: "lang_druidic",
    en: "Language: Druidic",
    cat: "Enrichisseurs",
    desc: "Langue secrète des druides.",
    proposals: ["Druidique", "Langue des Druides"]
  },
  {
    id: "lang_abyssal",
    en: "Language: Abyssal",
    cat: "Enrichisseurs",
    desc: "Langue des entités abyssales.",
    proposals: ["Abyssal", "Langue Abyssale"]
  },
  {
    id: "lang_cant",
    en: "Language: Cant",
    cat: "Enrichisseurs",
    desc: "Argot des voleurs et criminels.",
    proposals: ["Argot", "Langue des Voleurs", "Cant (inchangé)"]
  },

  // ── Préfixes ─────────────────────────────────────────────
  {
    id: "prefix_knowledge",
    en: "Prefix: Knowledge",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Connaissance.",
    proposals: ["Connaissance", "Savoir"]
  },
  {
    id: "prefix_language",
    en: "Prefix: Language",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Langue.",
    proposals: ["Langue", "Langage"]
  },
  {
    id: "prefix_ancestry",
    en: "Prefix: Ancestry",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Ascendance.",
    proposals: ["Ascendance", "Lignée", "Ancestry (inchangé)"]
  },
  {
    id: "prefix_culture",
    en: "Prefix: Culture",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Culture.",
    proposals: ["Culture"]
  },
  {
    id: "prefix_path",
    en: "Prefix: Path",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Voie/Chemin.",
    proposals: ["Voie", "Chemin", "Path (inchangé)"]
  },
  {
    id: "prefix_attunement",
    en: "Prefix: Attunement",
    cat: "Enrichisseurs",
    desc: "Préfixe d'enrichisseur pour la catégorie Accord/Résonance.",
    proposals: ["Résonance", "Accord", "Affinité", "Syntonisation"]
  },

  // ── Groupes de langues ────────────────────────────────────
  {
    id: "lang_group_standard",
    en: "Standard Languages",
    cat: "Enrichisseurs",
    desc: "Groupe des langues standards accessibles.",
    proposals: ["Langues Standards", "Langues Courantes", "Langues Communes"]
  },
  {
    id: "lang_group_ancient",
    en: "Ancient Languages",
    cat: "Enrichisseurs",
    desc: "Groupe des langues anciennes.",
    proposals: ["Langues Anciennes", "Langues Mortes"]
  },
  {
    id: "lang_group_obscure",
    en: "Obscure Languages",
    cat: "Enrichisseurs",
    desc: "Groupe des langues rares ou exotiques.",
    proposals: ["Langues Obscures", "Langues Rares", "Langues Ésotériques"]
  },

  // ══════════════════════════════════════════════════════════
  //  BIOMES
  // ══════════════════════════════════════════════════════════
  {
    id: "biome_barrows",
    en: "Barrows",
    cat: "Biomes",
    desc: "Terres maussades de collines et de tumuli géants, recouvertes d'un épais brouillard.",
    proposals: ["Les Tumuli", "Les Tertres", "Les Tumulus"]
  },
  {
    id: "biome_bloodwoods",
    en: "Bloodwoods",
    cat: "Biomes",
    desc: "Forêts à la végétation rougeâtre.",
    proposals: ["Bois de Sang", "Forêt de Sang", "Bois Sanglants"]
  },
  {
    id: "biome_caryx_savanna",
    en: "Caryx Savanna",
    cat: "Biomes",
    desc: "Savane de la région de Caryx.",
    proposals: ["Savane de Caryx", "Savane Caryx"]
  },
  {
    id: "biome_clouded_jungle",
    en: "Clouded Jungle",
    cat: "Biomes",
    desc: "Jungle perpétuellement couverte de nuages.",
    proposals: ["Jungle Nuageuse", "Jungle Brumeuse", "Jungle des Nuages"]
  },
  {
    id: "biome_dripstones",
    en: "Dripstones",
    cat: "Biomes",
    desc: "Zone de stalactites et stalagmites suintantes.",
    proposals: ["Les Concrétions", "Les Stalactites", "Les Pierres Suintantes"]
  },
  {
    id: "biome_elenain_delta",
    en: "Elenain Delta",
    cat: "Biomes",
    desc: "Delta du fleuve Elenain.",
    proposals: ["Delta d'Elenain", "Delta Elenain"]
  },
  {
    id: "biome_fogbound_caverns",
    en: "Fogbound Caverns",
    cat: "Biomes",
    desc: "Cavernes emprisonnées dans un épais brouillard.",
    proposals: ["Grottes Brumeuses", "Cavernes de Brouillard", "Cavernes Enchaînées par le Brouillard"]
  },
  {
    id: "biome_golden_flats",
    en: "Golden Flats",
    cat: "Biomes",
    desc: "Plaines dorées et arides.",
    proposals: ["Plaines Dorées", "Les Terres Dorées", "Flats Dorés"]
  },
  {
    id: "biome_jade_mountains",
    en: "Jade Mountains",
    cat: "Biomes",
    desc: "Chaîne montagneuse aux teintes verdâtres.",
    proposals: ["Montagnes de Jade", "Monts de Jade", "Montagnes Jade"]
  },
  {
    id: "biome_kaleidoscope_caverns",
    en: "Kaleidoscope Caverns",
    cat: "Biomes",
    desc: "Cavernes aux reflets colorés kaléidoscopiques.",
    proposals: ["Grottes Kaléidoscopiques", "Cavernes Kaléidoscopes", "Grottes aux Mille Couleurs"]
  },
  {
    id: "biome_mycelian_expanse",
    en: "Mycelian Expanse",
    cat: "Biomes",
    desc: "Vaste étendue souterraine dominée par les champignons et le mycélium.",
    proposals: ["L'Étendue Mycélienne", "Étendues Mycéliennes", "Les Plaines de Mycèles"]
  },
  {
    id: "biome_ordain_flats",
    en: "Ordain Flats",
    cat: "Biomes",
    desc: "Plaines autour d'Ordain.",
    proposals: ["Plaines d'Ordain", "Terres Plates d'Ordain"]
  },
  {
    id: "biome_ordain_spires",
    en: "Ordain Spires",
    cat: "Biomes",
    desc: "Flèches rocheuses aux alentours d'Ordain.",
    proposals: ["Flèches d'Ordain", "Clochers d'Ordain", "Pics d'Ordain"]
  },
  {
    id: "biome_ordain_waterfront",
    en: "Ordain Waterfront",
    cat: "Biomes",
    desc: "Le bord de l'eau de la cité d'Ordain.",
    proposals: ["Quais d'Ordain", "Front de Mer d'Ordain", "Bord de l'Eau d'Ordain"]
  },
  {
    id: "biome_reaver_ocean",
    en: "Reaver Ocean",
    cat: "Biomes",
    desc: "Océan vers Mort'Oliss (aussi connu sous Revis).",
    proposals: ["Océan du Pillard", "Mer des Pillards", "Revis (inchangé)"]
  },
  {
    id: "biome_redrak_fields",
    en: "Redrak Fields",
    cat: "Biomes",
    desc: "Champs de la région Redrak.",
    proposals: ["Champs de Redrak", "Plaines de Redrak"]
  },
  {
    id: "biome_rustvar_valleys",
    en: "Rustvar Valleys",
    cat: "Biomes",
    desc: "Vallées de Rustvar.",
    proposals: ["Vallées de Rustvar", "Vallons de Rustvar"]
  },
  {
    id: "biome_salt_flats",
    en: "Salt Flats",
    cat: "Biomes",
    desc: "Étendues de sel arides.",
    proposals: ["Marais Salants", "Salines", "Plaines Salées", "Désert de Sel"]
  },
  {
    id: "biome_sarin_strand",
    en: "Sarin Strand",
    cat: "Biomes",
    desc: "Rivage de Sarin.",
    proposals: ["Rivage de Sarin", "La Plage de Sarin", "Côte de Sarin"]
  },
  {
    id: "biome_sinkhole_depths",
    en: "Sinkhole Depths",
    cat: "Biomes",
    desc: "Profondeurs accessibles par les gouffres et effondrements vers les Pathways.",
    proposals: ["Profondeurs des Gouffres", "Abysses des Effondrements", "Les Gouffres Profonds"]
  },
  {
    id: "biome_splinter_canyons",
    en: "Splinter Canyons",
    cat: "Biomes",
    desc: "Canyons aux parois fracturées.",
    proposals: ["Canyons des Échardes", "Gorges Brisées", "Canyons Fracturés"]
  },
  {
    id: "biome_the_cauldron",
    en: "The Cauldron",
    cat: "Biomes",
    desc: "Zone volcanique en forme de chaudron.",
    proposals: ["Le Chaudron", "La Marmite"]
  },
  {
    id: "biome_the_teeth",
    en: "The Teeth",
    cat: "Biomes",
    desc: "Formation rocheuse acérée évoquant des dents.",
    proposals: ["Les Dents", "Les Crocs", "Les Pointes"]
  },
  {
    id: "biome_tidal_pools",
    en: "Tidal Pools",
    cat: "Biomes",
    desc: "Mares côtières formées par la marée.",
    proposals: ["Mares de Marée", "Piscines Côtières", "Flaques de Marée"]
  },
  {
    id: "biome_verdant_paths",
    en: "Verdant Paths",
    cat: "Biomes",
    desc: "Sentiers luxuriants et verdoyants.",
    proposals: ["Sentiers Verdoyants", "Chemins Verts", "Voies Luxuriantes"]
  },
  {
    id: "biome_volcanic_bluffs",
    en: "Volcanic Bluffs",
    cat: "Biomes",
    desc: "Falaises et caps d'origine volcanique.",
    proposals: ["Falaises Volcaniques", "Caps Volcaniques", "Escarpements Volcaniques"]
  },
  {
    id: "biome_wedgelands",
    en: "Wedgelands",
    cat: "Biomes",
    desc: "Terres en forme de coin ou biseau.",
    proposals: ["Terres en Coin", "Les Cales", "Terres du Biseau", "Le Biseau"]
  },

  // ══════════════════════════════════════════════════════════
  //  LIEUX (locations avec noms descriptifs)
  // ══════════════════════════════════════════════════════════
  {
    id: "loc_all_fable_keep",
    en: "All-Fable Keep",
    cat: "Lieux",
    desc: "Forteresse liée aux fables et légendes.",
    proposals: ["Forteresse des Mille Fables", "Donjon de Toutes-Fables", "Fort des Légendes"]
  },
  {
    id: "loc_ancient_door",
    en: "Ancient Door",
    cat: "Lieux",
    desc: "Porte d'origine ancienne et mystérieuse.",
    proposals: ["La Porte Ancienne", "La Vieille Porte", "La Porte Primordiale"]
  },
  {
    id: "loc_arena_ridge",
    en: "Arena Ridge",
    cat: "Lieux",
    desc: "Crête utilisée comme arène.",
    proposals: ["Crête de l'Arène", "La Crête-Arène", "Pic de l'Arène"]
  },
  {
    id: "loc_assembly_hills",
    en: "Assembly Hills",
    cat: "Lieux",
    desc: "Collines servant de lieu de rassemblement.",
    proposals: ["Collines de l'Assemblée", "Hauteurs de l'Assemblée", "Collines du Conseil"]
  },
  {
    id: "loc_bramble_gully",
    en: "Bramble Gully",
    cat: "Lieux",
    desc: "Ravine envahie de ronces.",
    proposals: ["Ravine aux Ronces", "Le Ravin des Ronces", "Combe des Ronces"]
  },
  {
    id: "loc_bramble_maze",
    en: "Bramble Maze",
    cat: "Lieux",
    desc: "Labyrinthe naturel formé de ronces et d'épines.",
    proposals: ["Labyrinthe d'Épines", "Le Dédale des Ronces", "Le Labyrinthe de Ronces"]
  },
  {
    id: "loc_burial_grounds",
    en: "Burial Grounds",
    cat: "Lieux",
    desc: "Terres funéraires et lieux de sépulture.",
    proposals: ["Terres Funéraires", "Champs des Morts", "Les Sépultures", "Terres des Défunts"]
  },
  {
    id: "loc_crystal_carving_cavern",
    en: "Crystal Carving Cavern",
    cat: "Lieux",
    desc: "Caverne ornée de sculptures en cristal.",
    proposals: ["Caverne des Sculptures de Cristal", "Grotte Gravée de Cristal", "Caverne du Cristal Taillé"]
  },
  {
    id: "loc_dragon_skin",
    en: "Dragon Skin",
    cat: "Lieux",
    desc: "Lieu à la texture évoquant la peau d'un dragon.",
    proposals: ["La Peau de Dragon", "La Peau du Dragon", "Cuir de Dragon"]
  },
  {
    id: "loc_dry_outpost",
    en: "Dry Outpost",
    cat: "Lieux",
    desc: "Avant-poste situé dans une zone aride.",
    proposals: ["L'Avant-Poste Aride", "Le Poste Aride", "Fort du Désert"]
  },
  {
    id: "loc_exiles_landing",
    en: "Exile's Landing",
    cat: "Lieux",
    desc: "Point d'accostage des exilés.",
    proposals: ["Le Débarquement des Exilés", "L'Accostage des Bannis", "Quai des Exilés"]
  },
  {
    id: "loc_foxlairs",
    en: "Foxlairs",
    cat: "Lieux",
    desc: "Réseau de tanières de renards.",
    proposals: ["Les Tanières aux Renards", "Les Bauges des Renards", "Le Terrier des Renards"]
  },
  {
    id: "loc_giants_moonstone",
    en: "Giant's Moonstone",
    cat: "Lieux",
    desc: "Pierre de lune gigantesque liée aux Géants.",
    proposals: ["Pierre de Lune du Géant", "La Pierre Lunaire du Géant", "Roc-de-Lune du Géant"]
  },
  {
    id: "loc_grand_meadows",
    en: "Grand Meadows",
    cat: "Lieux",
    desc: "Vastes prairies.",
    proposals: ["Les Grands Prés", "Les Grandes Prairies", "Les Mégaprairies"]
  },
  {
    id: "loc_highgate",
    en: "Highgate",
    cat: "Lieux",
    desc: "Haute porte / quartier de la haute ville.",
    proposals: ["La Haute Porte", "Hauteporte", "La Grande Porte"]
  },
  {
    id: "loc_hunters_wood",
    en: "Hunter's Wood",
    cat: "Lieux",
    desc: "Forêt de chasse.",
    proposals: ["Bois du Chasseur", "Forêt du Chasseur", "Bois de Chasse"]
  },
  {
    id: "loc_keepers_crossing",
    en: "Keeper's Crossing",
    cat: "Lieux",
    desc: "Carrefour ou gué du Gardien.",
    proposals: ["Le Passage du Gardien", "Le Gué du Gardien", "La Croisée du Gardien"]
  },
  {
    id: "loc_lake_of_whispers",
    en: "Lake of Whispers",
    cat: "Lieux",
    desc: "Lac aux murmures mystérieux.",
    proposals: ["Lac des Chuchotements", "Lac des Murmures", "Le Lac Murmurant"]
  },
  {
    id: "loc_lantern_roads",
    en: "Lantern Roads",
    cat: "Lieux",
    desc: "Routes éclairées aux lanternes.",
    proposals: ["Les Routes aux Lanternes", "Les Voies Lanternées", "Les Chemins des Lanternes"]
  },
  {
    id: "loc_lastgate",
    en: "Lastgate",
    cat: "Lieux",
    desc: "Dernière porte avant la frontière.",
    proposals: ["La Dernière Porte", "La Porte du Bout", "Portedernière"]
  },
  {
    id: "loc_lower_ashvale",
    en: "Lower Ashvale",
    cat: "Lieux",
    desc: "Quartier ou zone inférieure de la vallée des Cendres.",
    proposals: ["Bas Ashvale", "Le Val des Cendres Inférieur", "Basse Cendrevale"]
  },
  {
    id: "loc_numinous_shrines",
    en: "Numinous Shrines",
    cat: "Lieux",
    desc: "Sanctuaires d'un sacré puissant et mystérieux.",
    proposals: ["Sanctuaires Numineux", "Autels Sacrés", "Autels du Numineux", "Oratoires Divins"]
  },
  {
    id: "loc_oldcraft_lodge",
    en: "Oldcraft Lodge",
    cat: "Lieux",
    desc: "Loge pratiquant les vieux métiers artisanaux.",
    proposals: ["Loge du Vieux Métier", "Loge de l'Ancien Artisan", "Loge des Vieux Maîtres"]
  },
  {
    id: "loc_ooze_island",
    en: "Ooze Island",
    cat: "Lieux",
    desc: "Île infestée de vases.",
    proposals: ["Île de la Vase", "L'Île Visqueuse", "Île des Oozes"]
  },
  {
    id: "loc_orchard_lanes",
    en: "Orchard Lanes",
    cat: "Lieux",
    desc: "Allées bordées de vergers.",
    proposals: ["Les Allées du Verger", "Ruelles du Verger", "Voies du Verger"]
  },
  {
    id: "loc_overgrown_sunwell",
    en: "Overgrown Sunwell",
    cat: "Lieux",
    desc: "Puits solaire envahi par la végétation.",
    proposals: ["Le Puits Solaire Envahi", "La Fontaine Solaire Envahie", "L'Antre Solaire Recouvert"]
  },
  {
    id: "loc_palisade_cross",
    en: "Palisade Cross",
    cat: "Lieux",
    desc: "Carrefour fortifié de palissades.",
    proposals: ["La Croix de Palissade", "La Croisée des Palissades", "Le Carrefour des Palissades"]
  },
  {
    id: "loc_performers_plaza",
    en: "Performer's Plaza",
    cat: "Lieux",
    desc: "Place dédiée aux artistes et spectacles.",
    proposals: ["La Place des Artistes", "L'Esplanade des Artistes", "La Place du Spectacle"]
  },
  {
    id: "loc_pine_harbor",
    en: "Pine Harbor",
    cat: "Lieux",
    desc: "Port entouré de pins.",
    proposals: ["Port des Pins", "Le Havre des Pins", "Havre-des-Pins"]
  },
  {
    id: "loc_primordial_bastion",
    en: "Primordial Bastion",
    cat: "Lieux",
    desc: "Forteresse d'origine primordiale.",
    proposals: ["Le Bastion Primordial", "La Forteresse Primordiale", "Le Fort Originel"]
  },
  {
    id: "loc_repurposed_quarry",
    en: "Repurposed Quarry",
    cat: "Lieux",
    desc: "Ancienne carrière reconvertie.",
    proposals: ["La Carrière Reconvertie", "L'Ancienne Carrière", "La Carrière Réaménagée"]
  },
  {
    id: "loc_restaurant_row",
    en: "Restaurant Row",
    cat: "Lieux",
    desc: "Rue ou quartier concentrant les tavernes et restaurants.",
    proposals: ["La Rue des Restaurants", "L'Allée des Tavernes", "Le Quartier des Auberges"]
  },
  {
    id: "loc_scholars_nook",
    en: "Scholar's Nook",
    cat: "Lieux",
    desc: "Recoin réservé aux érudits et savants.",
    proposals: ["Le Coin des Érudits", "Le Recoin des Savants", "L'Antre des Lettrés"]
  },
  {
    id: "loc_seawall",
    en: "Seawall",
    cat: "Lieux",
    desc: "Mur ou digue faisant face à la mer.",
    proposals: ["Le Mur de la Mer", "La Digue", "La Muraille Maritime"]
  },
  {
    id: "loc_shard_of_akon",
    en: "Shard of Akon",
    cat: "Lieux",
    desc: "Fragment ou éclat d'Akon.",
    proposals: ["Le Fragment d'Akon", "L'Éclat d'Akon", "La Shard d'Akon"]
  },
  {
    id: "loc_shent_moon_temple",
    en: "Shent Moon Temple",
    cat: "Lieux",
    desc: "Temple lunaire du peuple Shent.",
    proposals: ["Temple Lunaire de Shent", "Sanctuaire de la Lune Shent", "Temple de la Lune Shent"]
  },
  {
    id: "loc_shrouded_borehole",
    en: "Shrouded Borehole",
    cat: "Lieux",
    desc: "Forage ou puits voilé et mystérieux.",
    proposals: ["Le Puits Voilé", "Le Forage Obscur", "L'Orifice Enveloppé"]
  },
  {
    id: "loc_silent_ossuaries",
    en: "Silent Ossuaries",
    cat: "Lieux",
    desc: "Ossuaires plongés dans un silence total.",
    proposals: ["Les Ossuaires Silencieux", "Les Catacombes du Silence", "Les Charniers Muets"]
  },
  {
    id: "loc_skycrest",
    en: "Skycrest",
    cat: "Lieux",
    desc: "Sommet ou crête s'élevant vers le ciel.",
    proposals: ["La Crête Céleste", "Le Faîte des Cieux", "Cîme-du-Ciel"]
  },
  {
    id: "loc_spellbreaker_tower",
    en: "Spellbreaker Tower",
    cat: "Lieux",
    desc: "Tour associée au premier Shard God d'Ordain, le Briseur de Sort.",
    proposals: ["La Tour du Briseur de Sort", "Tour Brise-Magie", "La Tour du Brise-Sort"]
  },
  {
    id: "loc_stonework_hollow",
    en: "Stonework Hollow",
    cat: "Lieux",
    desc: "Creux ou grotte aux ouvrages de pierre.",
    proposals: ["Creux de Pierres Ouvragées", "La Combe des Maçonneries", "Grotte des Tailleurs de Pierre"]
  },
  {
    id: "loc_sunhaven",
    en: "Sunhaven",
    cat: "Lieux",
    desc: "Havre ou refuge ensoleillé.",
    proposals: ["Havre de Soleil", "Le Refuge Ensoleillé", "Le Havre Solaire"]
  },
  {
    id: "loc_temple_ward",
    en: "Temple Ward",
    cat: "Lieux",
    desc: "Quartier des temples.",
    proposals: ["Le Quartier du Temple", "Le District du Temple", "Le Faubourg des Temples"]
  },
  {
    id: "loc_the_bleak_archive",
    en: "The Bleak Archive",
    cat: "Lieux",
    desc: "Archives désolées et lugubres.",
    proposals: ["Les Archives Désolées", "L'Archive Morne", "L'Archive Lugubre"]
  },
  {
    id: "loc_the_burns",
    en: "The Burns",
    cat: "Lieux",
    desc: "Terres brûlées.",
    proposals: ["Les Brûlis", "Les Terres Brûlées", "Les Cendres"]
  },
  {
    id: "loc_the_concourse",
    en: "The Concourse",
    cat: "Lieux",
    desc: "Grande salle ou galerie de passage.",
    proposals: ["La Grande Galerie", "La Galerie", "Le Passage Central", "La Coursive"]
  },
  {
    id: "loc_the_hallows",
    en: "The Hallows",
    cat: "Lieux",
    desc: "Terres sacrées ou consacrées.",
    proposals: ["Les Terres Saintes", "Les Lieux Consacrés", "Les Hallows (inchangé)"]
  },
  {
    id: "loc_the_harborage",
    en: "The Harborage",
    cat: "Lieux",
    desc: "Abri ou havre sûr.",
    proposals: ["L'Abri", "Le Havre", "Le Refuge", "L'Antre"]
  },
  {
    id: "loc_the_scrapyard",
    en: "The Scrapyard",
    cat: "Lieux",
    desc: "Chantier de ferraille et déchetterie.",
    proposals: ["La Déchetterie", "Le Chantier de Ferraille", "Le Dépôt de Ferraille"]
  },
  {
    id: "loc_the_trawl",
    en: "The Trawl",
    cat: "Lieux",
    desc: "Zone de pêche ou de chalutage.",
    proposals: ["Le Chalut", "La Drague", "La Zone de Pêche"]
  },
  {
    id: "loc_throughway",
    en: "Throughway",
    cat: "Lieux",
    desc: "Voie de passage ou de transit.",
    proposals: ["La Voie de Passage", "Le Passage", "La Traversée"]
  },
  {
    id: "loc_traders_corner",
    en: "Trader's Corner",
    cat: "Lieux",
    desc: "Carrefour ou coin des marchands.",
    proposals: ["Le Coin des Marchands", "L'Angle des Marchands", "La Placette des Marchands"]
  },
  {
    id: "loc_tridents_point",
    en: "Trident's Point",
    cat: "Lieux",
    desc: "Cap ou pointe en forme de trident.",
    proposals: ["La Pointe du Trident", "Le Cap du Trident", "Cap-Trident"]
  },
  {
    id: "loc_voidspan_bridge",
    en: "Voidspan Bridge",
    cat: "Lieux",
    desc: "Pont enjambant le vide.",
    proposals: ["Le Pont du Vide", "Le Pont du Néant", "Le Pont sur le Vide"]
  },
  {
    id: "loc_westgate",
    en: "Westgate",
    cat: "Lieux",
    desc: "Porte de l'Ouest.",
    proposals: ["La Porte de l'Ouest", "La Porte Ouest", "Porteouest"]
  },
  {
    id: "loc_writhing_grave",
    en: "Writhing Grave",
    cat: "Lieux",
    desc: "Sépulture grouillante et agitée.",
    proposals: ["La Tombe Torturée", "Le Tombeau Frémissant", "La Fosse Grouillante"]
  },

  // ══════════════════════════════════════════════════════════
  //  FACTIONS
  // ══════════════════════════════════════════════════════════
  {
    id: "faction_burnished_hand",
    en: "Burnished Hand",
    cat: "Factions",
    desc: "Faction mystérieuse à la main dorée/polie comme emblème.",
    proposals: ["La Main Dorée", "La Main Polie", "La Main Astiquée"]
  },
  {
    id: "faction_cindaric_sages",
    en: "Cindaric Sages",
    cat: "Factions",
    desc: "Groupe de sages de Cindar.",
    proposals: ["Les Sages Cindariques", "Les Sages de Cindar", "Les Érudits Cindariques"]
  },
  {
    id: "faction_flameguard",
    en: "Flameguard",
    cat: "Factions",
    desc: "Garde ou chevalerie liée au feu.",
    proposals: ["Garde de la Flamme", "Les Gardiens de Flamme", "La Flamme-Garde"]
  },
  {
    id: "faction_fulgurite_blades",
    en: "Fulgurite Blades",
    cat: "Factions",
    desc: "Ordre de combattants armés de lames de fulgurite.",
    proposals: ["Les Lames de Fulgurite", "Les Épées de Fulgurite", "Les Fulgurites"]
  },
  {
    id: "faction_mutagists",
    en: "Mutagists",
    cat: "Factions",
    desc: "Faction utilisant la mutagenèse et les transformations biologiques.",
    proposals: ["Les Mutagistes", "Les Transformistes", "Les Mutateurs"]
  },
  {
    id: "faction_otherhood",
    en: "Otherhood of Fortune",
    cat: "Factions",
    desc: "Fraternité de fortune — probable guilde de voleurs ou d'aventuriers.",
    proposals: ["La Confrérie de la Fortune", "La Fraternité de la Fortune", "La Guilde de Fortune"]
  },
  {
    id: "faction_sanguinaries",
    en: "Sanguinaries",
    cat: "Factions",
    desc: "Faction aux pratiques sanguinaires.",
    proposals: ["Les Sanguinaires", "Les Sang-Rouges"]
  },
  {
    id: "faction_silver_beam",
    en: "Silver Beam",
    cat: "Factions",
    desc: "Organisation liée au faisceau d'argent.",
    proposals: ["Le Faisceau d'Argent", "Le Rayon d'Argent", "Les Lames d'Argent"]
  },
  {
    id: "faction_star_mages",
    en: "Star Mages",
    cat: "Factions",
    desc: "Ordre de mages liés aux étoiles.",
    proposals: ["Les Mages des Étoiles", "Les Mages Stellaires", "Les Astromages"]
  },
  {
    id: "faction_toothbreakers",
    en: "Toothbreakers",
    cat: "Factions",
    desc: "Gang ou bande violente.",
    proposals: ["Les Briseurs de Dents", "Les Casse-Dents", "Les Brisseurs-de-Crocs"]
  },
  {
    id: "faction_veiled_chain",
    en: "Veiled Chain",
    cat: "Factions",
    desc: "Organisation secrète à la chaîne voilée.",
    proposals: ["La Chaîne Voilée", "La Chaîne du Voile", "L'Ordre du Voile"]
  },
  {
    id: "faction_wind_raiders",
    en: "Wind Raiders",
    cat: "Factions",
    desc: "Pillards du vent — probablement aériens ou nomades.",
    proposals: ["Les Pillards du Vent", "Les Raides du Vent", "Les Raiders des Vents"]
  },
  {
    id: "faction_house_bastilla",
    en: "House Bastilla",
    cat: "Factions",
    desc: "Maison noble Bastilla.",
    proposals: ["Maison Bastilla", "La Maison Bastilla"]
  },
  {
    id: "faction_house_wandren",
    en: "House Wandren",
    cat: "Factions",
    desc: "Maison noble Wandren.",
    proposals: ["Maison Wandren", "La Maison Wandren"]
  },
  {
    id: "faction_tayan_empire",
    en: "Tayan Empire",
    cat: "Factions",
    desc: "Empire Tayan, créé après la Nuit des Épées.",
    proposals: ["L'Empire Tayan", "Empire Tayan (inchangé)"]
  },
  {
    id: "faction_strayharth",
    en: "Strayharth Caravan",
    cat: "Factions",
    desc: "Caravane itinérante de Strayharth.",
    proposals: ["La Caravane de Strayharth", "La Caravane Strayharth"]
  },

  // ══════════════════════════════════════════════════════════
  //  BESTIAIRE — Types de créatures
  // ══════════════════════════════════════════════════════════
  {
    id: "beast_type_aberration",
    en: "Aberration",
    cat: "Bestiaire",
    desc: "Type de créature : entités étrangères à la réalité normale d'Ember.",
    proposals: ["Aberration", "Anomalie"]
  },
  {
    id: "beast_type_artificiel",
    en: "Artificiel",
    cat: "Bestiaire",
    desc: "Type de créature : constructs et entités artificielles.",
    proposals: ["Artificiel", "Construit", "Automate"]
  },
  {
    id: "beast_type_leviathan",
    en: "Leviathan",
    cat: "Bestiaire",
    desc: "Type de créature : créatures colossales de l'Âge des Bêtes.",
    proposals: ["Léviathan", "Titan", "Colosse Primordial"]
  },
  {
    id: "beast_type_spirit_beast",
    en: "Spirit Beast",
    cat: "Bestiaire",
    desc: "Type de créature : bêtes d'essence spirituelle.",
    proposals: ["Bête Spirituelle", "Bête-Esprit", "Esprit Animal"]
  },
  {
    id: "beast_type_abyssal_horror",
    en: "Abyssal Horror",
    cat: "Bestiaire",
    desc: "Type de créature : horreurs venues de l'Abysse.",
    proposals: ["Horreur Abyssale", "Terreur de l'Abîme", "Cauchemar Abyssal"]
  },
  {
    id: "beast_type_carnal_dragon",
    en: "Carnal Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon.",
    proposals: ["Dragon Charnel", "Dragon Carnal (inchangé)", "Dragon de Chair"]
  },
  {
    id: "beast_type_cruel_dragon",
    en: "Cruel Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon.",
    proposals: ["Dragon Cruel", "Dragon de Cruauté"]
  },
  {
    id: "beast_type_vile_dragon",
    en: "Vile Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon.",
    proposals: ["Dragon Vil", "Dragon Abject", "Dragon Infâme"]
  },
  {
    id: "beast_type_delver",
    en: "Delver",
    cat: "Bestiaire",
    desc: "Petites créatures vivant dans les Pathways.",
    proposals: ["Fouisseur", "Terrassier", "Tunnelier", "Creuseur"]
  },
  {
    id: "beast_type_skum",
    en: "Skum",
    cat: "Bestiaire",
    desc: "Monstre mêlant humanoïde et poisson, créé par l'Abysse.",
    proposals: ["Skum (inchangé)", "Poisson-Homme", "Impur", "Misérable"]
  },
  {
    id: "beast_type_wyrm",
    en: "Wyrm",
    cat: "Bestiaire",
    desc: "Gigantesque serpent, ancêtre des Dragons.",
    proposals: ["Wyrm (inchangé)", "Guivre", "Serpent Primordial", "Dragon Serpent"]
  },
  {
    id: "beast_type_vampyre",
    en: "Vampyre",
    cat: "Bestiaire",
    desc: "Mort-vivant suceur de sang.",
    proposals: ["Vampyre (inchangé)", "Vampire", "Vampyr"]
  },
  {
    id: "beast_type_wight",
    en: "Wight",
    cat: "Bestiaire",
    desc: "Guerrier mort-vivant.",
    proposals: ["Wight (inchangé)", "Spectre-Guerrier", "Mort-Marchant", "Soldats Morts"]
  },

  // ── Créatures notables ────────────────────────────────────
  {
    id: "beast_abyssal_echo",
    en: "Abyssal Echo",
    cat: "Bestiaire",
    desc: "Écho ou reflet d'une entité abyssale.",
    proposals: ["Écho Abyssal", "Résonance Abyssale", "Reflet de l'Abîme"]
  },
  {
    id: "beast_abyssal_eel",
    en: "Abyssal Eel",
    cat: "Bestiaire",
    desc: "Anguille venue des profondeurs abyssales.",
    proposals: ["Anguille Abyssale", "Anguille de l'Abîme", "Murène Abyssale"]
  },
  {
    id: "beast_abyssal_eye",
    en: "Abyssal Eye",
    cat: "Bestiaire",
    desc: "Œil flottant d'origine abyssale.",
    proposals: ["Œil Abyssal", "Œil de l'Abîme", "Regard Abyssal"]
  },
  {
    id: "beast_abyss_warped",
    en: "Abyss-Warped Undaunted",
    cat: "Bestiaire",
    desc: "Intrépide/Brave corrompu et déformé par l'Abysse.",
    proposals: ["Intrépide Tordu par l'Abîme", "Courageux Corrompu par l'Abysse", "Audacieux Abyssalisé"]
  },
  {
    id: "beast_grim_assembly",
    en: "Grim Assembly",
    cat: "Bestiaire",
    desc: "Sombre assemblée de créatures.",
    proposals: ["La Sombre Assemblée", "L'Assemblée Sinistre", "Le Conclave Morbide"]
  },
  {
    id: "beast_writhing_whisperer",
    en: "Writhing Whisperer",
    cat: "Bestiaire",
    desc: "Chuchoteur agité ou frémissant.",
    proposals: ["Le Chuchoteur Frémissant", "Le Murmureur Agité", "L'Agité Murmurant"]
  },
  {
    id: "beast_fire_sprite",
    en: "Fire Sprite",
    cat: "Bestiaire",
    desc: "Petit esprit élémentaire du feu.",
    proposals: ["Esprit du Feu", "Lutin de Feu", "Feu-Follet Élémentaire"]
  },
  {
    id: "beast_water_sprite",
    en: "Water Sprite",
    cat: "Bestiaire",
    desc: "Petit esprit élémentaire de l'eau.",
    proposals: ["Esprit de l'Eau", "Lutin des Eaux", "Ondine"]
  },
  {
    id: "beast_chiaroscuran",
    en: "Chiaroscuran Beast",
    cat: "Bestiaire",
    desc: "Créature jouant sur les contrastes lumière/ombre.",
    proposals: ["Bête du Clair-Obscur", "Bête Chiaroscuro", "Créature des Ombres et Lumières"]
  },
  {
    id: "beast_pallid_drake",
    en: "Pallid Drake",
    cat: "Bestiaire",
    desc: "Drake d'une pâleur maladive.",
    proposals: ["Drake Blafard", "Drake Pâle", "Drake Livide"]
  },
  {
    id: "beast_pallid_drakeling",
    en: "Pallid Drakeling",
    cat: "Bestiaire",
    desc: "Jeune drake pâle.",
    proposals: ["Dragonnet Blafard", "Petit Drake Pâle", "Jeune Drake Livide"]
  },
  {
    id: "beast_radiant_ultra_drake",
    en: "Radiant Ultra Drake",
    cat: "Bestiaire",
    desc: "Drake géant et rayonnant.",
    proposals: ["Ultra Drake Rayonnant", "Grand Drake Radieux", "Drake Solaire Géant"]
  },
  {
    id: "beast_animated_rune_tome",
    en: "Animated Rune Tome",
    cat: "Bestiaire",
    desc: "Grimoire de runes animé et autonome.",
    proposals: ["Tome de Runes Animé", "Grimoire de Runes Vivant", "Livre-Rune Animé"]
  },
  {
    id: "beast_woven_construct",
    en: "Woven Construct",
    cat: "Bestiaire",
    desc: "Construct tissé à partir de la Weave ou de magie.",
    proposals: ["Construit Tissé", "Entité Tissée", "Construct de la Trame"]
  },
  {
    id: "beast_surge_walker",
    en: "Surge Walker",
    cat: "Bestiaire",
    desc: "Entité se déplaçant à travers les courants d'énergie.",
    proposals: ["Marcheur des Courants", "Marcheur des Décharges", "Itinérant d'Énergie"]
  },
  {
    id: "beast_harrower",
    en: "Harrower",
    cat: "Bestiaire",
    desc: "Mort-vivant harceleur et dévastateur.",
    proposals: ["Le Ravageur", "Le Déchireur", "Le Tourmenteur"]
  },
  {
    id: "beast_sodden_corpse",
    en: "Sodden Corpse",
    cat: "Bestiaire",
    desc: "Cadavre mort-vivant détrempé.",
    proposals: ["Cadavre Détrempé", "Corps Putréfié", "Dépouille Gorgée d'Eau"]
  },
  {
    id: "beast_sporix_host",
    en: "Sporix Host",
    cat: "Bestiaire",
    desc: "Organisme hôte de spores parasitaires.",
    proposals: ["Hôte Sporix", "Porteur de Spores", "Corps-Spores"]
  },
  {
    id: "beast_temple_invader",
    en: "Temple Invader",
    cat: "Bestiaire",
    desc: "Créature ou entité ayant envahi un temple.",
    proposals: ["Envahisseur du Temple", "Profanateur de Temple", "Intrus du Sanctuaire"]
  },
  {
    id: "beast_cave_wasps",
    en: "Swarm of Cave Wasps",
    cat: "Bestiaire",
    desc: "Nuée de guêpes caverneuses.",
    proposals: ["Nuée de Guêpes des Cavernes", "Essaim de Guêpes Caverneuses", "Colonie de Guêpes Souterraines"]
  },

  // ══════════════════════════════════════════════════════════
  //  PNJ — Personnages non-joueurs
  // ══════════════════════════════════════════════════════════
  {
    id: "pnj_anachraenum_adelyne_goss",
    en: "Adelyne Goss",
    cat: "PNJ",
    group: "Anachraenum",
    desc: "A dour elderly woman sits before you, clad in a mixture of pale blue and green clothing accented by rich brown leather. She appraises you with a deep frown on her face, as if you have already been…",
    proposals: ["Adelyne Goss"]
  },
  {
    id: "pnj_anachraenum_arcos_sarinland",
    en: "Arcos Sarinland",
    cat: "PNJ",
    group: "Anachraenum",
    desc: "The small figure before you has a rugged and weathered appearance that reflects his years of experience. His once luxurious Keth hair has long since disappeared, leaving a bald head covered in thin…",
    proposals: ["Arcos Sarinland"]
  },
  {
    id: "pnj_anachraenum_fernis_ossa",
    en: "Fernis Ossa",
    cat: "PNJ",
    group: "Anachraenum",
    desc: "A thin Ashka with scales that range in hue from hunter green to a shade of tea green stands before you. Her expression is a mix of curiosity and open friendliness that gives her a warm, likable…",
    proposals: ["Fernis Ossa"]
  },
  {
    id: "pnj_ancients_ix_erax",
    en: "Ix'erax",
    cat: "PNJ",
    group: "Ancients",
    desc: "At first, the green glow floating in the air before you resembles many of the candles scattered around the room, however, these lights grow larger, and emerging from the darkness is a creature of…",
    proposals: ["Ix'erax"]
  },
  {
    id: "pnj_ancients_kern",
    en: "Kern",
    cat: "PNJ",
    group: "Ancients",
    desc: "This ancient, wizened Thornling leans upon a small, stout branch of fossiled wood, with a crooked grin barely visible beneath a bushy, exuberant beard of leaves. Thorny gnarled limbs and spindly legs…",
    proposals: ["Kern"]
  },
  {
    id: "pnj_ancients_mioroth",
    en: "Mioroth",
    cat: "PNJ",
    group: "Ancients",
    desc: "Appearing as if from legends, a ghostly, semi-transparent, colossal figure looms over you even as he sits with his legs crossed. He is serene, calm, and intangible, as if made of pure energy and…",
    proposals: ["Mioroth"]
  },
  {
    id: "pnj_arcturel_zodi_trask",
    en: "Zodi Trask",
    cat: "PNJ",
    group: "Arcturel",
    desc: "You regard a burly Kiska male whose corded muscles suggest a life of strenuous labor, a detail readily confirmed by the timeworn pickaxe at his side and the simplicity of his loose-hanging garb.…",
    proposals: ["Zodi Trask"]
  },
  {
    id: "pnj_brevin_edivel_sprout",
    en: "Edivel Sprout",
    cat: "PNJ",
    group: "Brevin",
    desc: "The young thornling's body is reminiscent of the trunk of a sturdy sapling, but they are full of motion, darting from place to place with a smile on their face and a wand in their hand. Their frayed…",
    proposals: ["Edivel Sprout"]
  },
  {
    id: "pnj_brevin_triss_carpel",
    en: "Triss Carpel",
    cat: "PNJ",
    group: "Brevin",
    desc: "The thornling before you doesn't seem to ever stop moving, whether she's crouching down to look at the height of the grass, scanning the landscape around them, or walking softly but determinedly to…",
    proposals: ["Triss Carpel"]
  },
  {
    id: "pnj_burnished_hand_steros_kraver",
    en: "Steros Kraver",
    cat: "PNJ",
    group: "Burnished Hand",
    desc: "This remarkably spruce warrior is clad in an impressive suit of aged bronze armor. The etching of a symmetrical crimson hand with roots like an ancient oak is emblazoned on the breast piece, and a…",
    proposals: ["Steros Kraver"]
  },
  {
    id: "pnj_cindaric_sages_evesso",
    en: "Evesso",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "This tall Ashka scholar is draped in the burgundy robes of a Cindaric Sage. His viridian-scaled form is lean and austere, and his countenance betrays an erudite contrition. Surely, this scholar is an…",
    proposals: ["Evesso"]
  },
  {
    id: "pnj_cindaric_sages_jon_vastil",
    en: "Jon Vastil",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "The Holy Speaker of the Cindaric Sages appears fragile and haggard, burdened by the weight of countless years. His skin has a parchment-like texture, stretched tight over protruding bones. Deep lines…",
    proposals: ["Jon Vastil"]
  },
  {
    id: "pnj_cindaric_sages_jonico_daridane",
    en: "Jonico Daridane",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "A lean, man in the red and gold robes of a Cindaric, though styled far more plainly than most. Crow's feet, laugh lines and silver-streaked hair betray the years he's lived. Despite his age he moves…",
    proposals: ["Jonico Daridane"]
  },
  {
    id: "pnj_cindaric_sages_lilla_arien",
    en: "Lilla Arien",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "A signborn woman with a round, friendly face that belies the stress she carries. Her gray skin contrasts with her bright blue eyes, rosy cheese, and messy head of white hair. Short, pale blue horns…",
    proposals: ["Lilla Arien"]
  },
  {
    id: "pnj_cindaric_sages_mira_wavehorn",
    en: "Mira Wavehorn",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "The aloof countenance of this Kiska femme is belied by her jocular smile, a disarming grin on the edge of inquisitiveness. Clad in the red robes of a Cindaric Sage and a light Cascilian breastplate,…",
    proposals: ["Mira Wavehorn"]
  },
  {
    id: "pnj_cindaric_sages_vinarith",
    en: "Vinarith",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "A tall, middle-aged male human with gray-bronzed skin and a strong, muscular figure reveals a distant Kivahr ancestry. His once-rich brown hair is greying at the roots, and he has a variety of…",
    proposals: ["Vinarith"]
  },
  {
    id: "pnj_deities_aythorn",
    en: "Aythorn",
    cat: "PNJ",
    group: "Deities",
    desc: "The shard god Aythorn is seen more often than most other Ember deities, but they never arrive quite the same way twice. A tree becomes a god becomes a drift of petals on the wind. A trail of blossoms…",
    proposals: ["Aythorn"]
  },
  {
    id: "pnj_deities_sigil",
    en: "Sigil",
    cat: "PNJ",
    group: "Deities",
    desc: "The old man is small, dwarfed by his large cloak, a long winding beard that gains a deep gleam of magic where it curls around his waist, and the sheer number of papers around him. And yet he is…",
    proposals: ["Sigil"]
  },
  {
    id: "pnj_deities_sionia",
    en: "Sionia",
    cat: "PNJ",
    group: "Deities",
    desc: "Clad in shining silver armor and exquisite argentine garments, this alluring woman is shrouded in an otherworldly gown of pale and ghostly light. Her breathtaking beauty is weighted by a troubled…",
    proposals: ["Sionia"]
  },
  {
    id: "pnj_fey_meri",
    en: "Meri",
    cat: "PNJ",
    group: "Fey",
    desc: "A small, flower-like creature with large petals for wings floats before you. Her body seems to be made of rich, black velvet, creating a stunning contrast with the vibrant, glowing red and pink…",
    proposals: ["Meri"]
  },
  {
    id: "pnj_fulgurite_blades_kazra_steelshift",
    en: "Kazra Steelshift",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "Hooded and wrapped in a vibrant, shimmering shawl, this young Kivahr woman is initially slightly imposing, but her bookish demeanor and obvious curiosity about your presence reveal a true scholar at…",
    proposals: ["Kazra Steelshift"]
  },
  {
    id: "pnj_fulgurite_blades_leeph",
    en: "Leeph",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "A fidgety little radish-looking Thornling with eyes of shimmering pearlescence looks up at you with an unreadable expression. Their overly large leaves like fronds of hair, sweep back from their…",
    proposals: ["Leeph"]
  },
  {
    id: "pnj_fulgurite_blades_rorhim_iron_cask",
    en: "Rorhim Iron-Cask",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "A burly figure, tall even for Cor'ak, with a thick hornplate above his head and skin in varying shades of tan and brown. His bright blue eyes take in his surroundings with a noticeable lack of…",
    proposals: ["Rorhim Iron-Cask"]
  },
  {
    id: "pnj_fulgurite_blades_sajor_velex",
    en: "Sajor Velex",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "A bright-eyed woman stands before you with a curious expression, yet the corners of her mouth are turned downwards, as if she is slightly displeased with your presence. She has short black hair with…",
    proposals: ["Sajor Velex"]
  },
  {
    id: "pnj_helkas_sadri_zhalimorne",
    en: "Sadri Zhalimorne",
    cat: "PNJ",
    group: "Helkas",
    desc: "You regard a steel-skinned woman with luminous golden eyes and side-parted bob of short-cropped silver hair. Adorned in a brown sleeveless tunic with leather shorts and boots, her countenance is…",
    proposals: ["Sadri Zhalimorne"]
  },
  {
    id: "pnj_house_bastilla_katerin_bastilla",
    en: "Katerin Bastilla",
    cat: "PNJ",
    group: "House Bastilla",
    desc: "A mountain of a woman, this towering Kivahr is covered in an array of scars and tattoos that speak of deeds, battles and glory only she truly knows. Her garb is fine and sturdy, accented with a great…",
    proposals: ["Katerin Bastilla"]
  },
  {
    id: "pnj_house_wandren_hephiss_wandren",
    en: "Hephiss Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "The fej woman in front of you is dressed in sumptuous apparel and moves with a steady grace, but her eyes are steely and appraising, looking anyone she encounters up and down as if trying to gauge…",
    proposals: ["Hephiss Wandren"]
  },
  {
    id: "pnj_house_wandren_juro_wandren",
    en: "Juro Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "Though he maintains a pleasant smile, with an expression that appears calculated to seem warm, the tall lanky wirrun is unmistakeably sizing up everyone and everything nearby, letting his gaze brush…",
    proposals: ["Juro Wandren"]
  },
  {
    id: "pnj_house_wandren_vitt_wandren",
    en: "Vitt Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "Though they have an easy smile and immediately extend a hand in greeting, there is a glint in the eyes of the Ordani in front of you, as if they know exactly what you're worth and will take it from…",
    proposals: ["Vitt Wandren"]
  },
  {
    id: "pnj_humanoids_ifton_shepp",
    en: "Ifton Shepp",
    cat: "PNJ",
    group: "Humanoids",
    desc: "Wearing a dark apron over grease stained tunic and pants, this technician looks ready to tackle any technical issues put in front of him. Not outwardly armed or armored, he has a pack of tools…",
    proposals: ["Ifton Shepp"]
  },
  {
    id: "pnj_humanoids_undaunted_trainee",
    en: "Undaunted Trainee",
    cat: "PNJ",
    group: "Humanoids",
    desc: "Dressed in the short-sleeved robes of a martial artist, this scrappy young athlete looks like they're ready to take on the whole world. A silver-stitched crimson sash is tied around their waist, and…",
    proposals: ["Undaunted Trainee"]
  },
  {
    id: "pnj_humanoids_vartholomew_chess",
    en: "Vartholomew Chess",
    cat: "PNJ",
    group: "Humanoids",
    desc: "This bright-eyed Hulg'run is hewn from golden-brown marble, and wears the trademark work apron and mechanical accoutrements of an inventor. All manner of esoteric tools dangle from his belt, and a…",
    proposals: ["Vartholomew Chess"]
  },
  {
    id: "pnj_kessian_issa_sunsword",
    en: "Issa Sunsword",
    cat: "PNJ",
    group: "Kessian",
    desc: "At first glance, the gleam of golden armor is almost the only thing visible, catching even the faintest nearby rays and seemingly multiplying them. The woman beneath the armor is less ostentatious,…",
    proposals: ["Issa Sunsword"]
  },
  {
    id: "pnj_lumek_luna_karrowrath",
    en: "Luna Karrowrath",
    cat: "PNJ",
    group: "Lumek",
    desc: "Clad in battle scarred Lunaran steel armor covered in the symbols of the Flameguard and the goddess Lumé, this Fej warrior has been through countless battles, and her intense, haunted gaze only…",
    proposals: ["Luna Karrowrath"]
  },
  {
    id: "pnj_mutagists_kaftor_brenk",
    en: "Kaftor Brenk",
    cat: "PNJ",
    group: "Mutagists",
    desc: "This Fej man's bare, muscular arms are inscribed with elaborate, glowing green tattoos and fissures that glow with green light. The markings extend up their neck to across their face and bald head…",
    proposals: ["Kaftor Brenk"]
  },
  {
    id: "pnj_nain_amalthea_stonecraft",
    en: "Amalthea Stonecraft",
    cat: "PNJ",
    group: "Nain",
    desc: "A wizened woman dressed in loose-fitting Arcturian garb stands before you, her elderly hands perched upon a knotted walking stick. You spy a pair of feathered wings on her stooped back, as brilliant…",
    proposals: ["Amalthea Stonecraft"]
  },
  {
    id: "pnj_nain_svala_bronwen",
    en: "Svala Bronwen",
    cat: "PNJ",
    group: "Nain",
    desc: "The vrjnhar woman is broad shouldered and intensely muscled, carrying herself with a fearless confidence. She sports pale white fur that pours off her chin and turns into a lengthy beard which is…",
    proposals: ["Svala Bronwen"]
  },
  {
    id: "pnj_ordain_brackus_von_tet",
    en: "Brackus von Tet",
    cat: "PNJ",
    group: "Ordain",
    desc: "This ruggedly handsome Altyra wears the trademark tools of a blacksmith upon his belt, and is clad in stylish-but-practical Ordani garb, with the slightest nod to western methods in the way he ties…",
    proposals: ["Brackus von Tet"]
  },
  {
    id: "pnj_ordain_cherish_ellerie",
    en: "Cherish Ellerie",
    cat: "PNJ",
    group: "Ordain",
    desc: "Covered head to toe in detailed ink, this tattooed Ordani woman is a walking art piece, a living mural of red, black and blue designs crawling across her skin in intricate, interlocking patterns.…",
    proposals: ["Cherish Ellerie"]
  },
  {
    id: "pnj_ordain_conaris_haid",
    en: "Conaris Haid",
    cat: "PNJ",
    group: "Ordain",
    desc: "If his tattered robes are any indication, the short, bald man before you is a priest of high station — an occupation at odds with the somewhat deranged look on his wizened face. This wild-eyed…",
    proposals: ["Conaris Haid"]
  },
  {
    id: "pnj_ordain_falar",
    en: "Falar",
    cat: "PNJ",
    group: "Ordain",
    desc: "Clad in well-tailored vintage clothing marked with intermittent paint stains, this gray-haired Ordani merchant has a world-weary look about him, accented by the wry look on his handsomely wrinkled…",
    proposals: ["Falar"]
  },
  {
    id: "pnj_ordain_helice_korsos",
    en: "Helice Korsos",
    cat: "PNJ",
    group: "Ordain",
    desc: "Shrouded in occult mystique and the sweet aroma of fresh lavender, this alluring woman of mixed ancestry is a breathtaking display of self-confidence on legs. With skin the color of ashen mauve and a…",
    proposals: ["Helice Korsos"]
  },
  {
    id: "pnj_ordain_janix_mance",
    en: "Janix Mance",
    cat: "PNJ",
    group: "Ordain",
    desc: "The kivahr has metal and heated fluid on one side of their body, and flesh and blood on the other, but both move as one, with a fluidity and precision that give the sense that each move they make is…",
    proposals: ["Janix Mance"]
  },
  {
    id: "pnj_ordain_jorey_swift",
    en: "Jorey Swift",
    cat: "PNJ",
    group: "Ordain",
    desc: "You regard an agile Ordani teenager, no more than the age of sixteen, with a western-worn topknot of auburn hair. Dressed in the short-sleeved robes of a martial artist, the scrappy young athlete…",
    proposals: ["Jorey Swift"]
  },
  {
    id: "pnj_ordain_mistress_caberi",
    en: "Mistress Caberi",
    cat: "PNJ",
    group: "Ordain",
    desc: "This gorgeous human woman wears an impossible gown made from arches of vibrant fabric that defy gravity, layers of shimmering cloth seemingly made from woven metal, and layers of lace that seem to…",
    proposals: ["Mistress Caberi"]
  },
  {
    id: "pnj_ordain_zira_hestidero",
    en: "Zira Hestidero",
    cat: "PNJ",
    group: "Ordain",
    desc: "The lean and muscular woman that stands before you is a paragon of physical acuity and raw charisma. Captivating from buzzed head to sandaled toe, this chiseled bruiser could easily handle herself in…",
    proposals: ["Zira Hestidero"]
  },
  {
    id: "pnj_otherhood_of_fortune_salara__queen_of_scales",
    en: "Salara, Queen of Scales",
    cat: "PNJ",
    group: "Otherhood Of Fortune",
    desc: "A tall, imperious Ashka woman, Salara is of middle age with gray-blue scales and icy eyes that can cut like daggers if properly directed. She dresses in fine clothing, with little accents of gold and…",
    proposals: ["Salara, Queen of Scales"]
  },
  {
    id: "pnj_otherhood_of_fortune_sticks",
    en: "Sticks",
    cat: "PNJ",
    group: "Otherhood Of Fortune",
    desc: "You hear the retired pirate before you see him. As he talks, he throws his shoulders back, voice roaring and white fur gleaming underneath a uniform that is both casually rumpled and meticulously…",
    proposals: ["Sticks"]
  },
  {
    id: "pnj_redrak_eamon_mariflor",
    en: "Eamon Mariflor",
    cat: "PNJ",
    group: "Redrak",
    desc: "Before you stands a short figure with dusky, gray hair shimmering with tiny magical stars and crescent moons. Glowing orange lines coil up his arms and over his face, making his skin look like a bed…",
    proposals: ["Eamon Mariflor"]
  },
  {
    id: "pnj_sanguinaries_avwynn_taol",
    en: "Avwynn Taol",
    cat: "PNJ",
    group: "Sanguinaries",
    desc: "Tall, regal, and confident, this human woman carries herself with certainty and exudes a powerful confidence back with a steely, unwavering calm. Her icy blue eyes glimmer sharply against black…",
    proposals: ["Avwynn Taol"]
  },
  {
    id: "pnj_signarans_corvana_vortest",
    en: "Corvana Vortest",
    cat: "PNJ",
    group: "Signarans",
    desc: "You regard a lithe woman with pale blue skin clad in the esoteric robes of a scholar. Her bald head is crowned with a pair of tall, curving horns that betray her Signborn heritage, as do the two…",
    proposals: ["Corvana Vortest"]
  },
  {
    id: "pnj_silver_beam_larissa_toth",
    en: "Larissa Toth",
    cat: "PNJ",
    group: "Silver Beam",
    desc: "You regard a tall Altyra woman dressed in Railen fineries, her porcelain-colored skin marked with silver hexagonal lattices. Her long silver hair is worn in a braided low bun, and her attentive eyes…",
    proposals: ["Larissa Toth"]
  },
  {
    id: "pnj_skybrush_liestra_grann",
    en: "Liestra Grann",
    cat: "PNJ",
    group: "Skybrush",
    desc: "A muscular Kivahr femme clad in in loose layers of cloth and leather leans upon the wall with casual composure. A side-parted bob of tawny hair hangs just below her chin as she scrutinizes some…",
    proposals: ["Liestra Grann"]
  },
  {
    id: "pnj_skybrush_mica_valaston",
    en: "Mica Valaston",
    cat: "PNJ",
    group: "Skybrush",
    desc: "You behold the skeptical countenance of a thirty-something Hulg'run warrior clad in studded leather armor, a ring of keys around their belt. Their hand hovers just above the hilt of a sheathed…",
    proposals: ["Mica Valaston"]
  },
  {
    id: "pnj_star_mages_eveis_brightstone",
    en: "Eveis Brightstone",
    cat: "PNJ",
    group: "Star Mages",
    desc: "You take a moment to absorb the sight before you, your mind struggling to accept what you see. Hovering just above the ground is a mythical being, one of the fabled Carrow from the depths of Ember's…",
    proposals: ["Eveis Brightstone"]
  },
  {
    id: "pnj_steed_s_point_kali_andrella",
    en: "Kali Andrella",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "While she is no longer a young woman, the Arcturian in front of you is a study in motion, moving gracefully from one task to the next as if dancing from one side of the room to the other. As she…",
    proposals: ["Kali Andrella"]
  },
  {
    id: "pnj_steed_s_point_moriah_foxhaven",
    en: "Moriah Foxhaven",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "A young Arcturian woman sits atop a magnificent four-legged yarnac, which she drives across the grassy plain with calm and ease. Her sun-kissed light brown skin is freckled from relentless exposure…",
    proposals: ["Moriah Foxhaven"]
  },
  {
    id: "pnj_steed_s_point_rattletrap__the_rickety_man",
    en: "Rattletrap, the Rickety Man",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "This humanoid figure is crafted from various scraps of wood, its ramshackle limbs held together with a skeleton made of timber and ligatures woven from vine. The masterful carving that comprises its…",
    proposals: ["Rattletrap, the Rickety Man"]
  },
  {
    id: "pnj_storsa_s_strani_kendral_lowd",
    en: "Kendral Lowd",
    cat: "PNJ",
    group: "Storsa'S Strani",
    desc: "For a Kivahr, descended from the giants of old, the scarred fisher before you seems small, somehow, dwarfed by the fishing pole he carries across his back. He hunches his shoulders, as if trying to…",
    proposals: ["Kendral Lowd"]
  },
  {
    id: "pnj_strayhearth_caravan_agraband_swift",
    en: "Agraband Swift",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "A six-stringed kithara is slung across the back of this aged human clad in an odd-yet-practical assortment of clothing and jewelry. The seasoned bard wears the salt-and-pepper locks of his long hair…",
    proposals: ["Agraband Swift"]
  },
  {
    id: "pnj_strayhearth_caravan_ankarist",
    en: "Ankarist",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "You observe a stern Drakon warrior with a determined expression and piercing golden eyes. Clad in leather armor reinforced with steel, his martial prowess is immediately apparent in the way he…",
    proposals: ["Ankarist"]
  },
  {
    id: "pnj_strayhearth_caravan_clipper",
    en: "Clipper",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "You hear the sound of jingling bells as a purple-skinned Signborn with a slight build draws your attention. Crowned in a feathered mop of hair streaked with cerulean and lavender, this young…",
    proposals: ["Clipper"]
  },
  {
    id: "pnj_strayhearth_caravan_lyla_cevher",
    en: "Lyla Cevher",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Sharply dressed in a beautiful and richly decorated coat that proudly displays her wealthy background, this young Human is a picture of understated wealth. It's clear from an initial glance at her…",
    proposals: ["Lyla Cevher"]
  },
  {
    id: "pnj_strayhearth_caravan_sin_marmot",
    en: "Sin Marmot",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "A Keth with a friendly demeanor and wide blue eyes and a strange half-mask that covers her mouth. She seems to view everything around her with an air of wondrous innocence but her keen glances also…",
    proposals: ["Sin Marmot"]
  },
  {
    id: "pnj_tayan_empire_loris_tezran",
    en: "Loris Tezran",
    cat: "PNJ",
    group: "Tayan Empire",
    desc: "Tall and immaculately composed, this man carries himself with the cool poise of a man too assured to ever feel threatened. His dark hair is trimmed close and swept neatly back between horns which…",
    proposals: ["Loris Tezran"]
  },
  {
    id: "pnj_tayan_empire_toron",
    en: "Toron",
    cat: "PNJ",
    group: "Tayan Empire",
    desc: "A quiet, well-groomed man wearing prison garb. His sharp, calculating eyes size up everyone in view, betraying a sharp mind behind a calm, almost friendly mask. His neat black hair shows hints of…",
    proposals: ["Toron"]
  },
  {
    id: "pnj_toothbreakers_raster_thorn",
    en: "Raster Thorn",
    cat: "PNJ",
    group: "Toothbreakers",
    desc: "This hulking man grins with a sinister smirk that suggests confidence and a capacity for sudden and brutal violence. He is a human who stands 6 and a half feet tall. He wears tightly fitted scaled…",
    proposals: ["Raster Thorn"]
  },
  {
    id: "pnj_undead_tethra_sh_l",
    en: "Tethra Shùl",
    cat: "PNJ",
    group: "Undead",
    desc: "You see the umbral apparition of a long-dead giant clad in the ancient, esoteric robes of a soothsayer. Her rotten form is draped in ever-flowing shadow, and from the depths of her grim countenance…",
    proposals: ["Tethra Shùl"]
  },
  {
    id: "pnj_veiled_chain_del_kalais",
    en: "Del Kalais",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "You see a tired-looking Signborn man with dusky purple-gray skin and curved violet horns, dark stubble covers his jaw, threatening to become a beard any day, and his eyes are sharp despite the clear…",
    proposals: ["Del Kalais"]
  },
  {
    id: "pnj_veiled_chain_desham__shaar__phos",
    en: "Desham \"Shaar\" Phos",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "An air of authority and stillness surrounds Shaar, their gray skin and charcoal hair clashing with the colorful Ordani clothing they wear. Their burning blue eyes fix with an intense, calculating…",
    proposals: ["Desham \"Shaar\" Phos"]
  },
  {
    id: "pnj_veiled_chain_serethus",
    en: "Serethus",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Tall and imposing, with a strong, bulky frame typical of the Cor'ak, this man's brown and tan are accented by splashes of vibrant purple. Long, purple horns that frame his head in a regal yet…",
    proposals: ["Serethus"]
  },
  {
    id: "pnj_veiled_chain_yeela_drevvin",
    en: "Yeela Drevvin",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "This human woman is stylishly dressed in layers of bright green and orange cloth trimmed with golden thread. Her garments drape over an athletic frame and though she's in her forties she looks more…",
    proposals: ["Yeela Drevvin"]
  },
  {
    id: "pnj_wind_raiders_gastern_faviyos",
    en: "Gastern Faviyos",
    cat: "PNJ",
    group: "Wind Raiders",
    desc: "This Zeph's form is made of swirling, blue-glowing wind wrapped in dark leathers. Over his face sits a horned mask of smooth gray stone with glowing eyes that burn in a bright blue. When he moves,…",
    proposals: ["Gastern Faviyos"]
  },
  {
    id: "pnj_yakoshta_jasper",
    en: "Jasper",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "The Hulg'run man steps carefully, as if he is assessing everything around him with sharp eyes and careful determination. He wears a slight scowl on his face, as if he is above whatever is around him,…",
    proposals: ["Jasper"]
  },
  {
    id: "pnj_yakoshta_sellen",
    en: "Sellen",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "Between the light from the candles perched on her shoulders, the large pickaxe in one hand, and the clipboard in another, the woman before you seems nothing if not prepared for whatever faces her.…",
    proposals: ["Sellen"]
  },
  {
    id: "pnj_yakoshta_tauric",
    en: "Tauric",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "The young man's gray body appears to be carved from rock, with lines of blue agate running through the stone like veins. His color is matched by the gelatinous body of the small blueish-green ooze…",
    proposals: ["Tauric"]
  }
];
