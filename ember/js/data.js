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
    desc: "Entités étrangères à la réalité normale d'Ember, souvent d'origine abyssale.",
    proposals: ["Aberration", "Anomalie"]
  },
  {
    id: "beast_type_artificiel",
    en: "Artificiel",
    cat: "Bestiaire",
    desc: "Constructs et entités mécaniques créés par l'ingéniosité mortelle ou arcanique.",
    proposals: ["Artificiel", "Construit", "Automate"]
  },
  {
    id: "beast_type_leviathan",
    en: "Leviathan",
    cat: "Bestiaire",
    desc: "Créatures colossales de l'Âge des Bêtes, ancêtres des formes de vie actuelles.",
    proposals: ["Léviathan", "Titan", "Colosse Primordial"]
  },
  {
    id: "beast_type_spirit_beast",
    en: "Spirit Beast",
    cat: "Bestiaire",
    desc: "Bêtes d'essence spirituelle, liées aux Wild Gods et aux forces naturelles.",
    proposals: ["Bête Spirituelle", "Bête-Esprit", "Esprit Animal"]
  },
  {
    id: "beast_type_abyssal_horror",
    en: "Abyssal Horror",
    cat: "Bestiaire",
    desc: "Horreurs d'une malveillance pure venues des profondeurs de l'Abysse.",
    proposals: ["Horreur Abyssale", "Terreur de l'Abîme", "Cauchemar Abyssal"]
  },
  {
    id: "beast_type_carnal_dragon",
    en: "Carnal Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon à la nature instinctuelle et violente.",
    proposals: ["Dragon Charnel", "Dragon Carnal (inchangé)", "Dragon de Chair"]
  },
  {
    id: "beast_type_cruel_dragon",
    en: "Cruel Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon particulièrement impitoyable et sadique.",
    proposals: ["Dragon Cruel", "Dragon de Cruauté"]
  },
  {
    id: "beast_type_vile_dragon",
    en: "Vile Dragon",
    cat: "Bestiaire",
    desc: "Sous-type de dragon abject, corrompu dans son essence même.",
    proposals: ["Dragon Vil", "Dragon Abject", "Dragon Infâme"]
  },
  {
    id: "beast_type_delver",
    en: "Delver",
    cat: "Bestiaire",
    desc: "Petites créatures fouisseuses vivant dans les profondeurs des Pathways.",
    proposals: ["Fouisseur", "Terrassier", "Tunnelier", "Creuseur"]
  },
  {
    id: "beast_type_skum",
    en: "Skum",
    cat: "Bestiaire",
    desc: "Hybrides humanoïdes-poissons engendrés par la corruption abyssale.",
    proposals: ["Skum (inchangé)", "Poisson-Homme", "Impur", "Misérable"]
  },
  {
    id: "beast_type_wyrm",
    en: "Wyrm",
    cat: "Bestiaire",
    desc: "Gigantesques serpents primordiaux, ancêtres des dragons modernes.",
    proposals: ["Wyrm (inchangé)", "Guivre", "Serpent Primordial", "Dragon Serpent"]
  },
  {
    id: "beast_type_vampyre",
    en: "Vampyre",
    cat: "Bestiaire",
    desc: "Morts-vivants suceurs de sang aux pouvoirs surnaturels.",
    proposals: ["Vampyre (inchangé)", "Vampire", "Vampyr"]
  },
  {
    id: "beast_type_wight",
    en: "Wight",
    cat: "Bestiaire",
    desc: "Guerriers morts-vivants conservant leur volonté combative au-delà de la mort.",
    proposals: ["Wight (inchangé)", "Spectre-Guerrier", "Mort-Marchant", "Soldats Morts"]
  },

  // ── Créatures notables ────────────────────────────────────
  {
    id: "beast_abyssal_echo",
    en: "Abyssal Echo",
    cat: "Bestiaire",
    desc: "Apparition de fumée noire et malveillance, entité maléfique venue d'au-delà du monde.",
    proposals: ["Écho Abyssal", "Résonance Abyssale", "Reflet de l'Abîme"]
  },
  {
    id: "beast_abyssal_eel",
    en: "Abyssal Eel",
    cat: "Bestiaire",
    desc: "Serpent abyssal aux dents acérées qui glisse dans l'air sans membres.",
    proposals: ["Anguille Abyssale", "Anguille de l'Abîme", "Murène Abyssale"]
  },
  {
    id: "beast_abyssal_eye",
    en: "Abyssal Eye",
    cat: "Bestiaire",
    desc: "Immense œil rouge flottant enveloppé de ténèbres, émanant haine et malice.",
    proposals: ["Œil Abyssal", "Œil de l'Abîme", "Regard Abyssal"]
  },
  {
    id: "beast_abyss_warped",
    en: "Abyss-Warped Undaunted",
    cat: "Bestiaire",
    desc: "Guerrier humanoïde atrocement mutilé par l'Abysse, aux membres remplacés par des tentacules.",
    proposals: ["Intrépide Tordu par l'Abîme", "Courageux Corrompu par l'Abysse", "Audacieux Abyssalisé"]
  },
  {
    id: "beast_grim_assembly",
    en: "Grim Assembly",
    cat: "Bestiaire",
    desc: "Amalgame répugnant de chair humanoïde fusionnée en une masse quadrupède.",
    proposals: ["La Sombre Assemblée", "L'Assemblée Sinistre", "Le Conclave Morbide"]
  },
  {
    id: "beast_writhing_whisperer",
    en: "Writhing Whisperer",
    cat: "Bestiaire",
    desc: "Entité changeante aux membres constamment remodelés, parsemée d'étoiles sous sa peau.",
    proposals: ["Le Chuchoteur Frémissant", "Le Murmureur Agité", "L'Agité Murmurant"]
  },
  {
    id: "beast_fire_sprite",
    en: "Fire Sprite",
    cat: "Bestiaire",
    desc: "Orbe de flamme tourbillonnant dans l'air, laissant une traînée d'étincelles.",
    proposals: ["Esprit du Feu", "Lutin de Feu", "Feu-Follet Élémentaire"]
  },
  {
    id: "beast_water_sprite",
    en: "Water Sprite",
    cat: "Bestiaire",
    desc: "Petit élémentaire d'eau agile, sphère cohérente avec des larmes d'eau en orbite.",
    proposals: ["Esprit de l'Eau", "Lutin des Eaux", "Ondine"]
  },
  {
    id: "beast_chiaroscuran",
    en: "Chiaroscuran Beast",
    cat: "Bestiaire",
    desc: "Prédateur élémentaire aux contrastes lumière-ombre extrêmes, félin et canin à la fois.",
    proposals: ["Bête du Clair-Obscur", "Bête Chiaroscuro", "Créature des Ombres et Lumières"]
  },
  {
    id: "beast_pallid_drake",
    en: "Pallid Drake",
    cat: "Bestiaire",
    desc: "Grand drake au corps sinueux recouvert d'écailles olive luisantes et frilles teal.",
    proposals: ["Drake Blafard", "Drake Pâle", "Drake Livide"]
  },
  {
    id: "beast_pallid_drakeling",
    en: "Pallid Drakeling",
    cat: "Bestiaire",
    desc: "Jeune drake pâle au corps serpentin orné de frilles teal vibrants.",
    proposals: ["Dragonnet Blafard", "Petit Drake Pâle", "Jeune Drake Livide"]
  },
  {
    id: "beast_radiant_ultra_drake",
    en: "Radiant Ultra Drake",
    cat: "Bestiaire",
    desc: "Drake argenté aux fissures lumineuses bleues, roses et violettes pulsant de l'intérieur.",
    proposals: ["Ultra Drake Rayonnant", "Grand Drake Radieux", "Drake Solaire Géant"]
  },
  {
    id: "beast_animated_rune_tome",
    en: "Animated Rune Tome",
    cat: "Bestiaire",
    desc: "Grimoire de cuir aux runes brillantes s'animant et virevoltant dans les airs.",
    proposals: ["Tome de Runes Animé", "Grimoire de Runes Vivant", "Livre-Rune Animé"]
  },
  {
    id: "beast_woven_construct",
    en: "Woven Construct",
    cat: "Bestiaire",
    desc: "Humanoïde articulé en bouts de bois liés de vignes, capable de parler.",
    proposals: ["Construit Tissé", "Entité Tissée", "Construct de la Trame"]
  },
  {
    id: "beast_surge_walker",
    en: "Surge Walker",
    cat: "Bestiaire",
    desc: "Colosse de corail vivant sur armature de bronze, mélange de créature et de mécanique.",
    proposals: ["Marcheur des Courants", "Marcheur des Décharges", "Itinérant d'Énergie"]
  },
  {
    id: "beast_harrower",
    en: "Harrower",
    cat: "Bestiaire",
    desc: "Guerrier mort-vivant en cotte de bronze, visage bandé au regard funèbre.",
    proposals: ["Le Ravageur", "Le Déchireur", "Le Tourmenteur"]
  },
  {
    id: "beast_sodden_corpse",
    en: "Sodden Corpse",
    cat: "Bestiaire",
    desc: "Cadavre putréfié et détrempé aux membres gonflés, traînant une puanteur écœurante.",
    proposals: ["Cadavre Détrempé", "Corps Putréfié", "Dépouille Gorgée d'Eau"]
  },
  {
    id: "beast_sporix_host",
    en: "Sporix Host",
    cat: "Bestiaire",
    desc: "Thornling parasité par des spores, corps couvert de champignons brillants.",
    proposals: ["Hôte Sporix", "Porteur de Spores", "Corps-Spores"]
  },
  {
    id: "beast_temple_invader",
    en: "Temple Invader",
    cat: "Bestiaire",
    desc: "Élémentaire imposant boosté par l'énergie d'une ancienne machine de pierre.",
    proposals: ["Envahisseur du Temple", "Profanateur de Temple", "Intrus du Sanctuaire"]
  },
  {
    id: "beast_cave_wasps",
    en: "Swarm of Cave Wasps",
    cat: "Bestiaire",
    desc: "Nuée de guêpes caverneuses s'abattant silencieusement sur toute source de lumière.",
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
    desc: "Loremistress sarcastique et acérée de l'Anachraenum, survivante d'un combat de dragon.",
    proposals: ["Adelyne Goss"]
  },
  {
    id: "pnj_anachraenum_arcos_sarinland",
    en: "Arcos Sarinland",
    cat: "PNJ",
    group: "Anachraenum",
    desc: "Nouveau Guildmaster de l'Anachraenum, vétéran sage et tourmenté par ses traumatismes.",
    proposals: ["Arcos Sarinland"]
  },
  {
    id: "pnj_anachraenum_fernis_ossa",
    en: "Fernis Ossa",
    cat: "PNJ",
    group: "Anachraenum",
    desc: "Aventurière Ashka célébrée de l'Anachraenum, envoyée et ancienne leader des Skywarders.",
    proposals: ["Fernis Ossa"]
  },
  {
    id: "pnj_ancients_ix_erax",
    en: "Ix'erax",
    cat: "PNJ",
    group: "Ancients",
    desc: "Araignée colossale ancienne, descendante de la déesse Watcher, observatrice d'Ordain.",
    proposals: ["Ix'erax"]
  },
  {
    id: "pnj_ancients_kern",
    en: "Kern",
    cat: "PNJ",
    group: "Ancients",
    desc: "Vieux druide thornling errant dans les Pathways, d'une sagesse et puissance cachées.",
    proposals: ["Kern"]
  },
  {
    id: "pnj_ancients_mioroth",
    en: "Mioroth",
    cat: "PNJ",
    group: "Ancients",
    desc: "Projection spectrale d'un géant Shent antérieur au Shattering, sage et artificer.",
    proposals: ["Mioroth"]
  },
  {
    id: "pnj_arcturel_zodi_trask",
    en: "Zodi Trask",
    cat: "PNJ",
    group: "Arcturel",
    desc: "Contremaître kiska fier et tenace des carrières d'Arcturel, au service de la Maison Cevher.",
    proposals: ["Zodi Trask"]
  },
  {
    id: "pnj_brevin_edivel_sprout",
    en: "Edivel Sprout",
    cat: "PNJ",
    group: "Brevin",
    desc: "Jeune thornling audacieux et maladroit, obsédé par la magie agricole.",
    proposals: ["Edivel Sprout"]
  },
  {
    id: "pnj_brevin_triss_carpel",
    en: "Triss Carpel",
    cat: "PNJ",
    group: "Brevin",
    desc: "Intendante de Brevin, village pionnier fait de graines, toujours en mouvement.",
    proposals: ["Triss Carpel"]
  },
  {
    id: "pnj_burnished_hand_steros_kraver",
    en: "Steros Kraver",
    cat: "PNJ",
    group: "Burnished Hand",
    desc: "Commandant en chef de la Burnished Hand, guerrier charismatique protecteur des Sages.",
    proposals: ["Steros Kraver"]
  },
  {
    id: "pnj_cindaric_sages_evesso",
    en: "Evesso",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Sage Cindaric austère et sarcastique, chercheur avisé au Sanctuaire de Corpin.",
    proposals: ["Evesso"]
  },
  {
    id: "pnj_cindaric_sages_jon_vastil",
    en: "Jon Vastil",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Holy Speaker des Cindaric Sages, vieillard centenaire malade et de plus en plus critiqué.",
    proposals: ["Jon Vastil"]
  },
  {
    id: "pnj_cindaric_sages_jonico_daridane",
    en: "Jonico Daridane",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Chef de la maison de soins de la Tour Spellbreaker, grand guérisseur à la bedside froide.",
    proposals: ["Jonico Daridane"]
  },
  {
    id: "pnj_cindaric_sages_lilla_arien",
    en: "Lilla Arien",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Keeper of Sages des Cindarics, signborn dévouée au bien-être de ses congénères.",
    proposals: ["Lilla Arien"]
  },
  {
    id: "pnj_cindaric_sages_mira_wavehorn",
    en: "Mira Wavehorn",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Leader de l'enclave de Corpin, ancienne capitaine kiska et guérisseuse accomplie.",
    proposals: ["Mira Wavehorn"]
  },
  {
    id: "pnj_cindaric_sages_vinarith",
    en: "Vinarith",
    cat: "PNJ",
    group: "Cindaric Sages",
    desc: "Intendant du Holy Speaker, gérant les affaires de l'ordre depuis la maladie de son supérieur.",
    proposals: ["Vinarith"]
  },
  {
    id: "pnj_deities_aythorn",
    en: "Aythorn",
    cat: "PNJ",
    group: "Deities",
    desc: "Dieu-éclat thornling facétieux, jeune divinité de la joie et des farces bienfaisantes.",
    proposals: ["Aythorn"]
  },
  {
    id: "pnj_deities_sigil",
    en: "Sigil",
    cat: "PNJ",
    group: "Deities",
    desc: "Dieu des Livres, shard god absorbé dans une quête éternelle de connaissance écrite.",
    proposals: ["Sigil"]
  },
  {
    id: "pnj_deities_sionia",
    en: "Sionia",
    cat: "PNJ",
    group: "Deities",
    desc: "La Déesse Solitaire, nécromancienne shard god révérée par les morts-vivants sentients.",
    proposals: ["Sionia"]
  },
  {
    id: "pnj_fey_meri",
    en: "Meri",
    cat: "PNJ",
    group: "Fey",
    desc: "Petite fée de Primordis en velours noir, ancienne conseillère de l'archimage Agaseros.",
    proposals: ["Meri"]
  },
  {
    id: "pnj_fulgurite_blades_kazra_steelshift",
    en: "Kazra Steelshift",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "Scribe et prêtresse des Fulgurite Blades, acolyte de la déesse Spectra.",
    proposals: ["Kazra Steelshift"]
  },
  {
    id: "pnj_fulgurite_blades_leeph",
    en: "Leeph",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "Scout impulsif et malicieux des Fulgurite Blades, thornling à l'impulsion incontrôlable.",
    proposals: ["Leeph"]
  },
  {
    id: "pnj_fulgurite_blades_rorhim_iron_cask",
    en: "Rorhim Iron-Cask",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "Combattant puissant des Fulgurite Blades, second informel du groupe.",
    proposals: ["Rorhim Iron-Cask"]
  },
  {
    id: "pnj_fulgurite_blades_sajor_velex",
    en: "Sajor Velex",
    cat: "PNJ",
    group: "Fulgurite Blades",
    desc: "Leader des Fulgurite Blades, mage accomplie passionnée des ruines Aedir.",
    proposals: ["Sajor Velex"]
  },
  {
    id: "pnj_helkas_sadri_zhalimorne",
    en: "Sadri Zhalimorne",
    cat: "PNJ",
    group: "Helkas",
    desc: "Magistrate ambitieuse d'Helkas, juriste voyagée au sourire sardonique.",
    proposals: ["Sadri Zhalimorne"]
  },
  {
    id: "pnj_house_bastilla_katerin_bastilla",
    en: "Katerin Bastilla",
    cat: "PNJ",
    group: "House Bastilla",
    desc: "Chef de la Maison Bastilla, commandant une armada de marchands et corsaires.",
    proposals: ["Katerin Bastilla"]
  },
  {
    id: "pnj_house_wandren_hephiss_wandren",
    en: "Hephiss Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "Dirigeante de la Maison Wandren, stratège impitoyable dont les opposants disparaissent.",
    proposals: ["Hephiss Wandren"]
  },
  {
    id: "pnj_house_wandren_juro_wandren",
    en: "Juro Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "Contrebandier charmeur de la Maison Wandren, chef d'un réseau de trafic florissant.",
    proposals: ["Juro Wandren"]
  },
  {
    id: "pnj_house_wandren_vitt_wandren",
    en: "Vitt Wandren",
    cat: "PNJ",
    group: "House Wandren",
    desc: "Criminel opportuniste lié à la Maison Wandren, chef de la Brigade des Balises.",
    proposals: ["Vitt Wandren"]
  },
  {
    id: "pnj_humanoids_ifton_shepp",
    en: "Ifton Shepp",
    cat: "PNJ",
    group: "Humanoids",
    desc: "Bricoleur et ingénieur de Rock Bottom, ancien membre de la compagnie Silver Beam.",
    proposals: ["Ifton Shepp"]
  },
  {
    id: "pnj_humanoids_undaunted_trainee",
    en: "Undaunted Trainee",
    cat: "PNJ",
    group: "Humanoids",
    desc: "Jeune membre des Undaunted, athlète martial et champion des jeux d'arène d'Ordain.",
    proposals: ["Undaunted Trainee"]
  },
  {
    id: "pnj_humanoids_vartholomew_chess",
    en: "Vartholomew Chess",
    cat: "PNJ",
    group: "Humanoids",
    desc: "Inventeur visionnaire d'Arcturel, créateur des construits Chessman de style Aedir.",
    proposals: ["Vartholomew Chess"]
  },
  {
    id: "pnj_kessian_issa_sunsword",
    en: "Issa Sunsword",
    cat: "PNJ",
    group: "Kessian",
    desc: "Paladin de Lantyr venue de Kessia, solitaire et déterminée à éradiquer la corruption.",
    proposals: ["Issa Sunsword"]
  },
  {
    id: "pnj_lumek_luna_karrowrath",
    en: "Luna Karrowrath",
    cat: "PNJ",
    group: "Lumek",
    desc: "Championne de Lumé, légende des Lumek ayant tué le Baron du Sang lors du dernier siège.",
    proposals: ["Luna Karrowrath"]
  },
  {
    id: "pnj_mutagists_kaftor_brenk",
    en: "Kaftor Brenk",
    cat: "PNJ",
    group: "Mutagists",
    desc: "Ritualiste impitoyable du laboratoire Mutagiste souterrain, maître de la bio-magie expérimentale.",
    proposals: ["Kaftor Brenk"]
  },
  {
    id: "pnj_nain_amalthea_stonecraft",
    en: "Amalthea Stonecraft",
    cat: "PNJ",
    group: "Nain",
    desc: "Bardue aster de 85 ans aux ailes violettes, l'une des plus grandes conteuses du plateau.",
    proposals: ["Amalthea Stonecraft"]
  },
  {
    id: "pnj_nain_svala_bronwen",
    en: "Svala Bronwen",
    cat: "PNJ",
    group: "Nain",
    desc: "Guerrière vrjnhar implacable et millénaire, parcourant le monde pour rendre justice.",
    proposals: ["Svala Bronwen"]
  },
  {
    id: "pnj_ordain_brackus_von_tet",
    en: "Brackus von Tet",
    cat: "PNJ",
    group: "Ordain",
    desc: "Forgeron d'Ordain, ancien gladiateur reconverti en artisan estimé du Smokerie.",
    proposals: ["Brackus von Tet"]
  },
  {
    id: "pnj_ordain_cherish_ellerie",
    en: "Cherish Ellerie",
    cat: "PNJ",
    group: "Ordain",
    desc: "Membre ambitieuse de la Maison Salva, couverte de tatouages et soif de pouvoir.",
    proposals: ["Cherish Ellerie"]
  },
  {
    id: "pnj_ordain_conaris_haid",
    en: "Conaris Haid",
    cat: "PNJ",
    group: "Ordain",
    desc: "Grand Prêtre excentrique et imprévisible de Sockets, personnalité adorée d'Ordain.",
    proposals: ["Conaris Haid"]
  },
  {
    id: "pnj_ordain_falar",
    en: "Falar",
    cat: "PNJ",
    group: "Ordain",
    desc: "Vieux marchand de peintures dans Flotsam, amer et critique envers la ville d'Ordain.",
    proposals: ["Falar"]
  },
  {
    id: "pnj_ordain_helice_korsos",
    en: "Helice Korsos",
    cat: "PNJ",
    group: "Ordain",
    desc: "Sorcière à louer dans l'Orchard Lanes, charmante et liée à un puissant Casia.",
    proposals: ["Helice Korsos"]
  },
  {
    id: "pnj_ordain_janix_mance",
    en: "Janix Mance",
    cat: "PNJ",
    group: "Ordain",
    desc: "Forgeron-artificier aux prothèses métalliques, inventeur intrépide et pédagogue bienveillant.",
    proposals: ["Janix Mance"]
  },
  {
    id: "pnj_ordain_jorey_swift",
    en: "Jorey Swift",
    cat: "PNJ",
    group: "Ordain",
    desc: "Jeune membre prometteur des Undaunted, adolescent au regard de voyageur.",
    proposals: ["Jorey Swift"]
  },
  {
    id: "pnj_ordain_mistress_caberi",
    en: "Mistress Caberi",
    cat: "PNJ",
    group: "Ordain",
    desc: "Dirigeante glamour de la Maison Salva, icône de la mode et figure publique de longue date.",
    proposals: ["Mistress Caberi"]
  },
  {
    id: "pnj_ordain_zira_hestidero",
    en: "Zira Hestidero",
    cat: "PNJ",
    group: "Ordain",
    desc: "Leader charismatique des Undaunted, warlock célébrée des Jeux Solaires d'Ordain.",
    proposals: ["Zira Hestidero"]
  },
  {
    id: "pnj_otherhood_of_fortune_salara__queen_of_scales",
    en: "Salara, Queen of Scales",
    cat: "PNJ",
    group: "Otherhood Of Fortune",
    desc: "Reine des marchés du Seawall, dirigeante ashka au regard tranchant et aux règles strictes.",
    proposals: ["Salara, Queen of Scales"]
  },
  {
    id: "pnj_otherhood_of_fortune_sticks",
    en: "Sticks",
    cat: "PNJ",
    group: "Otherhood Of Fortune",
    desc: "Ancien pirate retraité de Seawall, leader populaire défendant les gens ordinaires du plateau.",
    proposals: ["Sticks"]
  },
  {
    id: "pnj_redrak_eamon_mariflor",
    en: "Eamon Mariflor",
    cat: "PNJ",
    group: "Redrak",
    desc: "Chef du Consortium Agrimage de Redrak, reconnu pour son intelligence et son accessibilité.",
    proposals: ["Eamon Mariflor"]
  },
  {
    id: "pnj_sanguinaries_avwynn_taol",
    en: "Avwynn Taol",
    cat: "PNJ",
    group: "Sanguinaries",
    desc: "Agent mystérieux aux motivations secrètes, sagesse d'ancienne et charme de diplomate.",
    proposals: ["Avwynn Taol"]
  },
  {
    id: "pnj_signarans_corvana_vortest",
    en: "Corvana Vortest",
    cat: "PNJ",
    group: "Signarans",
    desc: "Mage solitaire signaran à la réputation imprévisible, gardant un passé soigneusement caché.",
    proposals: ["Corvana Vortest"]
  },
  {
    id: "pnj_silver_beam_larissa_toth",
    en: "Larissa Toth",
    cat: "PNJ",
    group: "Silver Beam",
    desc: "Directrice executive du Consortium Silver Beam, aristocrate altyra froide et avisée.",
    proposals: ["Larissa Toth"]
  },
  {
    id: "pnj_skybrush_liestra_grann",
    en: "Liestra Grann",
    cat: "PNJ",
    group: "Skybrush",
    desc: "Prêteuse sur gages kivahr sarcastique de Skybrush, grande et redoutable commerçante.",
    proposals: ["Liestra Grann"]
  },
  {
    id: "pnj_skybrush_mica_valaston",
    en: "Mica Valaston",
    cat: "PNJ",
    group: "Skybrush",
    desc: "Constable taciturne de Skybrush, hulg'run au caractère brusque toujours prêt à intervenir.",
    proposals: ["Mica Valaston"]
  },
  {
    id: "pnj_star_mages_eveis_brightstone",
    en: "Eveis Brightstone",
    cat: "PNJ",
    group: "Star Mages",
    desc: "Mage stellaire gardienne d'Ordain, Carrow de l'océan profond parmi les plus puissants du plateau.",
    proposals: ["Eveis Brightstone"]
  },
  {
    id: "pnj_steed_s_point_kali_andrella",
    en: "Kali Andrella",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "Agrimane renommée au bras enroulé de vignes, spécialiste des problèmes insolubles.",
    proposals: ["Kali Andrella"]
  },
  {
    id: "pnj_steed_s_point_moriah_foxhaven",
    en: "Moriah Foxhaven",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "Jeune agrimane nomade chevauchant les plaines, sorcière autodidacte au cœur ouvert.",
    proposals: ["Moriah Foxhaven"]
  },
  {
    id: "pnj_steed_s_point_rattletrap__the_rickety_man",
    en: "Rattletrap, the Rickety Man",
    cat: "PNJ",
    group: "Steed'S Point",
    desc: "Construit en bois des ruines de Steed's Point, capable de parler, serviteur éternel.",
    proposals: ["Rattletrap, the Rickety Man"]
  },
  {
    id: "pnj_storsa_s_strani_kendral_lowd",
    en: "Kendral Lowd",
    cat: "PNJ",
    group: "Storsa'S Strani",
    desc: "Pêcheur kivahr rongé par la culpabilité, ancien aventurier ayant perdu sa famille.",
    proposals: ["Kendral Lowd"]
  },
  {
    id: "pnj_strayhearth_caravan_agraband_swift",
    en: "Agraband Swift",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Vieux barde raconteur capitainant la célèbre Caravane Strayhearth.",
    proposals: ["Agraband Swift"]
  },
  {
    id: "pnj_strayhearth_caravan_ankarist",
    en: "Ankarist",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Enquêteur Drakon de la Veiled Chain, guerrier graveleux à l'héritage tayan.",
    proposals: ["Ankarist"]
  },
  {
    id: "pnj_strayhearth_caravan_clipper",
    en: "Clipper",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Jeune marchand signborn exubérant et coloré des routes commerciales de l'Arctus.",
    proposals: ["Clipper"]
  },
  {
    id: "pnj_strayhearth_caravan_lyla_cevher",
    en: "Lyla Cevher",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Héritière non préparée de la Maison Cevher, jeune noble dévastée par la mort de son père.",
    proposals: ["Lyla Cevher"]
  },
  {
    id: "pnj_strayhearth_caravan_sin_marmot",
    en: "Sin Marmot",
    cat: "PNJ",
    group: "Strayhearth Caravan",
    desc: "Druidesse keth voyageuse des Striders, portant un demi-masque et cherchant la connexion à Ember.",
    proposals: ["Sin Marmot"]
  },
  {
    id: "pnj_tayan_empire_loris_tezran",
    en: "Loris Tezran",
    cat: "PNJ",
    group: "Tayan Empire",
    desc: "Ambassadeur tayan à Ordain, homme de charme, d'intelligence et de menace feutrée.",
    proposals: ["Loris Tezran"]
  },
  {
    id: "pnj_tayan_empire_toron",
    en: "Toron",
    cat: "PNJ",
    group: "Tayan Empire",
    desc: "Espion vétéran de l'Empire Tayan, mage redoutable au masque de calme.",
    proposals: ["Toron"]
  },
  {
    id: "pnj_toothbreakers_raster_thorn",
    en: "Raster Thorn",
    cat: "PNJ",
    group: "Toothbreakers",
    desc: "Chef brutal des Toothbreakers, colosse en armure d'écailles dominant le district Concourse.",
    proposals: ["Raster Thorn"]
  },
  {
    id: "pnj_undead_tethra_sh_l",
    en: "Tethra Shùl",
    cat: "PNJ",
    group: "Undead",
    desc: "Spectre sadique d'une sorcière Varùn antique, entité de gloom et de malice.",
    proposals: ["Tethra Shùl"]
  },
  {
    id: "pnj_veiled_chain_del_kalais",
    en: "Del Kalais",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Enquêteur signborn de la Veiled Chain, bavard et perspicace, bras spectraux.",
    proposals: ["Del Kalais"]
  },
  {
    id: "pnj_veiled_chain_desham__shaar__phos",
    en: "Desham \"Shaar\" Phos",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Chef actuel de la Veiled Chain, ancien agent d'élite aux yeux brûlants.",
    proposals: ["Desham \"Shaar\" Phos"]
  },
  {
    id: "pnj_veiled_chain_serethus",
    en: "Serethus",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Mage-enquêteur celebré et grégaire de la Veiled Chain, académicien au macabre chaleureux.",
    proposals: ["Serethus"]
  },
  {
    id: "pnj_veiled_chain_yeela_drevvin",
    en: "Yeela Drevvin",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Agent senior vétéran de la Veiled Chain, maîtresse de la discrétion en milieu urbain.",
    proposals: ["Yeela Drevvin"]
  },
  {
    id: "pnj_wind_raiders_gastern_faviyos",
    en: "Gastern Faviyos",
    cat: "PNJ",
    group: "Wind Raiders",
    desc: "Capitaine pirate zeph de brume et vent, chef imprévisible des Wind Raiders.",
    proposals: ["Gastern Faviyos"]
  },
  {
    id: "pnj_yakoshta_jasper",
    en: "Jasper",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "Responsable hulg'run du traitement du minerai à Yakoshta, ambitieux et endetté.",
    proposals: ["Jasper"]
  },
  {
    id: "pnj_yakoshta_sellen",
    en: "Sellen",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "Fondatrice de la mine de Yakoshta, hulg'run bienveillante et travailleuse dans la Forêt de Pierre.",
    proposals: ["Sellen"]
  },
  {
    id: "pnj_yakoshta_tauric",
    en: "Tauric",
    cat: "PNJ",
    group: "Yakoshta",
    desc: "Jeune hulg'run fan d'oozes à Yakoshta, préférant son limon Squish au travail minier.",
    proposals: ["Tauric"]
  },


  // ── Créatures supplémentaires ─────────────────────────────
  {
    id: "beast_corrupted_kezus_jelly",
    en: "Corrupted Kezus Jelly",
    cat: "Bestiaire",
    desc: "Méduse bioluminescente corrompue par l'Abysse, dont l'éclat masque une nature dangereuse.",
    proposals: ["Corrupted Kezus Jelly"]
  },
  {
    id: "beast_giant_corrupted_kezus_jelly",
    en: "Giant Corrupted Kezus Jelly",
    cat: "Bestiaire",
    desc: "Version géante de la méduse corrompue, plus grande et encore plus menaçante.",
    proposals: ["Giant Corrupted Kezus Jelly"]
  },
  {
    id: "beast_jurtak_champion",
    en: "Jurtak Champion",
    cat: "Bestiaire",
    desc: "Lézard saurien à six yeux, champion de guerre armé d'une lame d'os venimeuse.",
    proposals: ["Jurtak Champion"]
  },
  {
    id: "beast_jurtak_geomancer",
    en: "Jurtak Geomancer",
    cat: "Bestiaire",
    desc: "Saurien à six yeux maîtrisant la géomancie, couvert de pierre cristallisée.",
    proposals: ["Jurtak Geomancer"]
  },
  {
    id: "beast_jurtak_hunter",
    en: "Jurtak Hunter",
    cat: "Bestiaire",
    desc: "Saurien agile à six yeux, chasseur furtif armé d'un arc en bois et os.",
    proposals: ["Jurtak Hunter"]
  },
  {
    id: "beast_jurtak_sporebearer",
    en: "Jurtak Sporebearer",
    cat: "Bestiaire",
    desc: "Saurien porteur de spores parasitaires, variante du chasseur Jurtak.",
    proposals: ["Jurtak Sporebearer"]
  },
  {
    id: "beast_jurtak_warrior",
    en: "Jurtak Warrior",
    cat: "Bestiaire",
    desc: "Saurien combattant à six yeux, guerrier de base des tribus Jurtak.",
    proposals: ["Jurtak Warrior"]
  },
  {
    id: "beast_vhismara_s_claw",
    en: "Vhismara's Claw",
    cat: "Bestiaire",
    desc: "Main colossale à six doigts rampant dans l'obscurité avec des griffes hideuses.",
    proposals: ["Vhismara's Claw"]
  },
  {
    id: "beast_anachraenum_aetherial",
    en: "Anachraenum Aetherial",
    cat: "Bestiaire",
    desc: "Petit construit rocheux flottant aux formes géométriques qui pulsent doucement.",
    proposals: ["Anachraenum Aetherial"]
  },
  {
    id: "beast_broken_aedir_sentinel",
    en: "Broken Aedir Sentinel",
    cat: "Bestiaire",
    desc: "Ancienne sentinelle Aedir métallique partiellement détruite, encore combative.",
    proposals: ["Broken Aedir Sentinel"]
  },
  {
    id: "beast_silver_beam_sentinel",
    en: "Silver Beam Sentinel",
    cat: "Bestiaire",
    desc: "Humanoïde blindé en acier argenté, construit par le Consortium Silver Beam.",
    proposals: ["Silver Beam Sentinel"]
  },
  {
    id: "beast_silver_beam_servitor",
    en: "Silver Beam Servitor",
    cat: "Bestiaire",
    desc: "Construit humanoïde en acier brossé du Consortium Silver Beam, aux mouvements précis.",
    proposals: ["Silver Beam Servitor"]
  },
  {
    id: "beast_the_cube",
    en: "The Cube",
    cat: "Bestiaire",
    desc: "Cube flottant en pierre gravée de runes étranges, recouvert d'une épaisse rouille.",
    proposals: ["The Cube"]
  },
  {
    id: "beast_ancara",
    en: "Ancara",
    cat: "Bestiaire",
    desc: "Prédateur massif aux griffes et bec dentelé, doté d'un regard d'une intelligence redoutable.",
    proposals: ["Ancara"]
  },
  {
    id: "beast_anydrath",
    en: "Anydrath",
    cat: "Bestiaire",
    desc: "Bête aquatique fuselée aux mâchoires acérées, aussi à l'aise sur terre que dans l'eau.",
    proposals: ["Anydrath"]
  },
  {
    id: "beast_baradom",
    en: "Baradom",
    cat: "Bestiaire",
    desc: "Créature écailleuse colossale au regard indifférent et à la gueule démesurée.",
    proposals: ["Baradom"]
  },
  {
    id: "beast_crevvet",
    en: "Crevvet",
    cat: "Bestiaire",
    desc: "Minuscule rongeur à six pattes et quatre yeux émeraude, aux griffes disproportionnées.",
    proposals: ["Crevvet"]
  },
  {
    id: "beast_giant_kezus_jelly",
    en: "Giant Kezus Jelly",
    cat: "Bestiaire",
    desc: "Grande méduse bioluminescente aux reflets translucides, créature de beauté et de danger.",
    proposals: ["Giant Kezus Jelly"]
  },
  {
    id: "beast_grey_hydroxol",
    en: "Grey Hydroxol",
    cat: "Bestiaire",
    desc: "Grande créature carnassière à l'affût, langue oscillante pour flairer ses proies.",
    proposals: ["Grey Hydroxol"]
  },
  {
    id: "beast_gumtoad",
    en: "Gumtoad",
    cat: "Bestiaire",
    desc: "Amphibiens colorés en forme de grenouille aux pattes collantes, discrets dans les canyons.",
    proposals: ["Gumtoad"]
  },
  {
    id: "beast_hydroxol",
    en: "Hydroxol",
    cat: "Bestiaire",
    desc: "Créature carnassière vigilante, gueule ouverte et langue active pour traquer ses proies.",
    proposals: ["Hydroxol"]
  },
  {
    id: "beast_jobri",
    en: "Jobri",
    cat: "Bestiaire",
    desc: "Grand reptile aux yeux expressifs et six pattes, utilisé comme monture.",
    proposals: ["Jobri"]
  },
  {
    id: "beast_kezus_jelly",
    en: "Kezus Jelly",
    cat: "Bestiaire",
    desc: "Petite méduse bioluminescente aux reflets translucides fascinants.",
    proposals: ["Kezus Jelly"]
  },
  {
    id: "beast_rask",
    en: "Rask",
    cat: "Bestiaire",
    desc: "Grand félin-canin aux yeux phosphorescents et touffes de fourrure, prédateur élégant.",
    proposals: ["Rask"]
  },
  {
    id: "beast_rask_juvenile",
    en: "Rask Juvenile",
    cat: "Bestiaire",
    desc: "Jeune Rask aux yeux lumineux, version juvénile du prédateur félin-canin.",
    proposals: ["Rask Juvenile"]
  },
  {
    id: "beast_scalemaw",
    en: "Scalemaw",
    cat: "Bestiaire",
    desc: "Reptile massif de plus de quatre mètres aux quatre yeux luisants, ventre rasant le sol.",
    proposals: ["Scalemaw"]
  },
  {
    id: "beast_sitherian",
    en: "Sitherian",
    cat: "Bestiaire",
    desc: "Araignée géante à dix yeux et crochets venimeux à la venom verte visqueuse.",
    proposals: ["Sitherian"]
  },
  {
    id: "beast_yarnac",
    en: "Yarnac",
    cat: "Bestiaire",
    desc: "Grand quadrupède poilu à la crête impressionnante, lent mais puissant.",
    proposals: ["Yarnac"]
  },
  {
    id: "beast_yarnac_juvenile",
    en: "Yarnac Juvenile",
    cat: "Bestiaire",
    desc: "Jeune Yarnac, version plus petite du grand quadrupède poilu.",
    proposals: ["Yarnac Juvenile"]
  },
  {
    id: "beast_aburyx",
    en: "Aburyx",
    cat: "Bestiaire",
    desc: "Être céleste à tête de flamme dorée, armé d'une épée de lumière concentrée.",
    proposals: ["Aburyx"]
  },
  {
    id: "beast_kynryth",
    en: "Kynryth",
    cat: "Bestiaire",
    desc: "Masse métallique de bras et tentacules portant une flamme pulsante en son cœur.",
    proposals: ["Kynryth"]
  },
  {
    id: "beast_skither",
    en: "Skither",
    cat: "Bestiaire",
    desc: "Petit être céleste rapide à l'œil unique et aux ailes grossières en forme d'insecte.",
    proposals: ["Skither"]
  },
  {
    id: "beast_vorg",
    en: "Vorg",
    cat: "Bestiaire",
    desc: "Mille-pattes métallique aux segments infinis, doté de pinces remarquablement habiles.",
    proposals: ["Vorg"]
  },
  {
    id: "beast_afflicted_pallid_drake",
    en: "Afflicted Pallid Drake",
    cat: "Bestiaire",
    desc: "Grand drake serpentin aux écailles blanc-vert, affecté d'une corruption visible.",
    proposals: ["Afflicted Pallid Drake"]
  },
  {
    id: "beast_afflicted_pallid_drakeling",
    en: "Afflicted Pallid Drakeling",
    cat: "Bestiaire",
    desc: "Jeune drake pâle au corps mince et frilles tachetées, portant une affliction.",
    proposals: ["Afflicted Pallid Drakeling"]
  },
  {
    id: "beast_pallid_ultra_drake",
    en: "Pallid Ultra Drake",
    cat: "Bestiaire",
    desc: "Version ultra d'un drake pâle, grand et imposant aux frilles immaculées.",
    proposals: ["Pallid Ultra Drake"]
  },
  {
    id: "beast_ketral",
    en: "Ketral",
    cat: "Bestiaire",
    desc: "Petite créature à peau rocheuse sombre, presque invisible parmi les rochers.",
    proposals: ["Ketral"]
  },
  {
    id: "beast_paint_globlin",
    en: "Paint Globlin",
    cat: "Bestiaire",
    desc: "Créature trapue dont le corps est fait de peintures tourbillonnantes qui refusent de se mélanger.",
    proposals: ["Paint Globlin"]
  },
  {
    id: "beast_shade_of_agaseros",
    en: "Shade of Agaseros",
    cat: "Bestiaire",
    desc: "Être arcanique à quatre bras et corps de laiton, scintillant d'existence incertaine.",
    proposals: ["Shade of Agaseros"]
  },
  {
    id: "beast_water_mote",
    en: "Water Mote",
    cat: "Bestiaire",
    desc: "Minuscule élémentaire d'eau amorphe et luminescent, à peine plus gros qu'un animal.",
    proposals: ["Water Mote"]
  },
  {
    id: "beast_water_visitor",
    en: "Water Visitor",
    cat: "Bestiaire",
    desc: "Élémentaire aquatique presque humanoïde, aux membres changeants terminés par des éclats.",
    proposals: ["Water Visitor"]
  },
  {
    id: "beast_water_wanderer",
    en: "Water Wanderer",
    cat: "Bestiaire",
    desc: "Grand élémentaire d'eau imposant aux mouvements fluides et délibérés, très intelligent.",
    proposals: ["Water Wanderer"]
  },
  {
    id: "beast_vanexis",
    en: "Vanexis",
    cat: "Bestiaire",
    desc: "Créature lumineuse féerique à grands yeux brillants, se déplaçant avec une grâce prédatrice.",
    proposals: ["Vanexis"]
  },
  {
    id: "beast_jahud",
    en: "Jahud",
    cat: "Bestiaire",
    desc: "Assassin fielon à quatre bras et peau bleue, armé de dagues et lames d'os.",
    proposals: ["Jahud"]
  },
  {
    id: "beast_agrimage",
    en: "Agrimage",
    cat: "Bestiaire",
    desc: "Praticien de l'agrimagie portant graines, eau et outils végétaux pour aider les communautés.",
    proposals: ["Agrimage"]
  },
  {
    id: "beast_anachraenum_adventurer",
    en: "Anachraenum Adventurer",
    cat: "Bestiaire",
    desc: "Explorateur vétéran de la guilde des Lore Hunters, capuche et expérience taillées au combat.",
    proposals: ["Anachraenum Adventurer"]
  },
  {
    id: "beast_arcturian_miner",
    en: "Arcturian Miner",
    cat: "Bestiaire",
    desc: "Mineur couvert de poussière, équipé d'outils lourds pour extraire les ressources d'Ember.",
    proposals: ["Arcturian Miner"]
  },
  {
    id: "beast_burnished_hand_protector",
    en: "Burnished Hand Protector",
    cat: "Bestiaire",
    desc: "Guerrier en armure de bronze lustré, protecteur des Cindaric Sages.",
    proposals: ["Burnished Hand Protector"]
  },
  {
    id: "beast_cascillian_marine",
    en: "Cascillian Marine",
    cat: "Bestiaire",
    desc: "Soldat en uniforme teal clair, armé d'un trident et d'une arbalète.",
    proposals: ["Cascillian Marine"]
  },
  {
    id: "beast_cascillian_marine_officer",
    en: "Cascillian Marine Officer",
    cat: "Bestiaire",
    desc: "Officier marin cascillien portant l'écharpe de commandement sur son uniforme teal.",
    proposals: ["Cascillian Marine Officer"]
  },
  {
    id: "beast_cindaric_adherent",
    en: "Cindaric Adherent",
    cat: "Bestiaire",
    desc: "Adepte des Cindaric Sages en robe dorée et cramoisi, guérisseur lettré.",
    proposals: ["Cindaric Adherent"]
  },
  {
    id: "beast_cindaric_sage",
    en: "Cindaric Sage",
    cat: "Bestiaire",
    desc: "Sage Cindaric en robe d'or et cramoisi, maître des arts cindariques.",
    proposals: ["Cindaric Sage"]
  },
  {
    id: "beast_flameguard_crusader",
    en: "Flameguard Crusader",
    cat: "Bestiaire",
    desc: "Guerrier fej des Lumek en armure et épée embrasée de feu divin.",
    proposals: ["Flameguard Crusader"]
  },
  {
    id: "beast_flameguard_firebrand",
    en: "Flameguard Firebrand",
    cat: "Bestiaire",
    desc: "Guerrier fej avec une torche enflammée dans le dos, fervent soldat des Lumek.",
    proposals: ["Flameguard Firebrand"]
  },
  {
    id: "beast_mutagist_bombardier",
    en: "Mutagist Bombardier",
    cat: "Bestiaire",
    desc: "Agent Mutagiste équipé de bandoulières de fioles chimiques explosives.",
    proposals: ["Mutagist Bombardier"]
  },
  {
    id: "beast_mutagist_excisor",
    en: "Mutagist Excisor",
    cat: "Bestiaire",
    desc: "Chirurgien Mutagiste aux tatouages verts lumineux, scalpel à la main.",
    proposals: ["Mutagist Excisor"]
  },
  {
    id: "beast_mutagist_grenadier",
    en: "Mutagist Grenadier",
    cat: "Bestiaire",
    desc: "Combattant Mutagiste en cotte de mailles, chargé de produits chimiques volatils.",
    proposals: ["Mutagist Grenadier"]
  },
  {
    id: "beast_mutagist_scout",
    en: "Mutagist Scout",
    cat: "Bestiaire",
    desc: "Éclaireur Mutagiste en manteau en patchwork, expérimenté et discret.",
    proposals: ["Mutagist Scout"]
  },
  {
    id: "beast_mutagist_vivisector",
    en: "Mutagist Vivisector",
    cat: "Bestiaire",
    desc: "Praticien Mutagiste masqué et ganté, au regard froid derrière ses lunettes.",
    proposals: ["Mutagist Vivisector"]
  },
  {
    id: "beast_otherhood_brigand",
    en: "Otherhood Brigand",
    cat: "Bestiaire",
    desc: "Brigand de l'Otherhood en robes dorées et armure d'écailles, combattant discipliné.",
    proposals: ["Otherhood Brigand"]
  },
  {
    id: "beast_otherhood_raider",
    en: "Otherhood Raider",
    cat: "Bestiaire",
    desc: "Raider léger de l'Otherhood en cuir brun et robes dorées, agressif.",
    proposals: ["Otherhood Raider"]
  },
  {
    id: "beast_silver_beam_engineer",
    en: "Silver Beam Engineer",
    cat: "Bestiaire",
    desc: "Technicien du Consortium Silver Beam, spécialiste des réparations de machines.",
    proposals: ["Silver Beam Engineer"]
  },
  {
    id: "beast_silver_beam_guard",
    en: "Silver Beam Guard",
    cat: "Bestiaire",
    desc: "Garde du Consortium Silver Beam en uniforme gris et bleu, posté à la sécurité.",
    proposals: ["Silver Beam Guard"]
  },
  {
    id: "beast_thayloc_courser",
    en: "Thayloc Courser",
    cat: "Bestiaire",
    desc: "Rôdeur-clerc en manteau argenté armé d'un arc long aux gravures sacrées.",
    proposals: ["Thayloc Courser"]
  },
  {
    id: "beast_undaunted_adept",
    en: "Undaunted Adept",
    cat: "Bestiaire",
    desc: "Combattant de rue des Undaunted en robes de moine cramoisi, couvert de cicatrices.",
    proposals: ["Undaunted Adept"]
  },
  {
    id: "beast_veiled_chain_agent",
    en: "Veiled Chain Agent",
    cat: "Bestiaire",
    desc: "Agent de la Veiled Chain en tenue colorée élaborée, discret et observateur.",
    proposals: ["Veiled Chain Agent"]
  },
  {
    id: "beast_wandren_patroller",
    en: "Wandren Patroller",
    cat: "Bestiaire",
    desc: "Patrouilleur de la Maison Wandren surveillant les rues, prêt à dégainer ses lames.",
    proposals: ["Wandren Patroller"]
  },
  {
    id: "beast_wandren_tracer",
    en: "Wandren Tracer",
    cat: "Bestiaire",
    desc: "Agent masqué des Wandren en cuir sombre et violet, accentué d'or.",
    proposals: ["Wandren Tracer"]
  },
  {
    id: "beast_wandren_watcher",
    en: "Wandren Watcher",
    cat: "Bestiaire",
    desc: "Sentinelle des Wandren postée sur les toits, scrutant les rues en contrebas.",
    proposals: ["Wandren Watcher"]
  },
  {
    id: "beast_wind_raider_boarder",
    en: "Wind Raider Boarder",
    cat: "Bestiaire",
    desc: "Marin pirate tanné par les tempêtes, combattant habile des Wind Raiders.",
    proposals: ["Wind Raider Boarder"]
  },
  {
    id: "beast_mootap",
    en: "Mootap",
    cat: "Bestiaire",
    desc: "Anguille aveugle aux dizaines de tentacules lumineux en couronne, surgissant de nulle part.",
    proposals: ["Mootap"]
  },
  {
    id: "beast_suarrok",
    en: "Suarrok",
    cat: "Bestiaire",
    desc: "Super-prédateur avien géant aux ailes membraneuses et regard terrifiant.",
    proposals: ["Suarrok"]
  },
  {
    id: "beast_suarrok_juvenile",
    en: "Suarrok Juvenile",
    cat: "Bestiaire",
    desc: "Jeune Suarrok mêlant traits d'oiseau et de lézard, cou sinueux comme un serpent.",
    proposals: ["Suarrok Juvenile"]
  },
  {
    id: "beast_vespian_hydral",
    en: "Vespian Hydral",
    cat: "Bestiaire",
    desc: "Créature reptilienne à crête dorsale en voile, mi-serpent mi-lézard aquatique.",
    proposals: ["Vespian Hydral"]
  },
  {
    id: "beast_young_cheliceraeth",
    en: "Young Cheliceraeth",
    cat: "Bestiaire",
    desc: "Jeune créature cristalline à dix yeux et huit pattes, comme des cristaux vivants.",
    proposals: ["Young Cheliceraeth"]
  },
  {
    id: "beast_corpuleth",
    en: "Corpuleth",
    cat: "Bestiaire",
    desc: "Brute mort-vivante en armure hérissée de piques d'os et métal rouillé.",
    proposals: ["Corpuleth"]
  },
  {
    id: "beast_corrupted_cadrithor",
    en: "Corrupted Cadrithor",
    cat: "Bestiaire",
    desc: "Quadrupède d'ombre pure, squelette canin grotesque enveloppé de fumée noire.",
    proposals: ["Corrupted Cadrithor"]
  },
  {
    id: "beast_crumbling_skallith",
    en: "Crumbling Skallith",
    cat: "Bestiaire",
    desc: "Squelette réanimé en état de délabrement avancé, traînant une lame rouillée.",
    proposals: ["Crumbling Skallith"]
  },
  {
    id: "beast_horrendor",
    en: "Horrendor",
    cat: "Bestiaire",
    desc: "Cadavre ambulant souriant d'un rictus sanglant, pestilentiel et sardonique.",
    proposals: ["Horrendor"]
  },
  {
    id: "beast_regus_halamattrix",
    en: "Regus Halamattrix",
    cat: "Bestiaire",
    desc: "Spectre translucide d'un guerrier ordanais en armure vieille de deux siècles.",
    proposals: ["Regus Halamattrix"]
  },
  {
    id: "beast_skallith",
    en: "Skallith",
    cat: "Bestiaire",
    desc: "Squelette humanoïde réanimé aux os décharnés et armement rouillé.",
    proposals: ["Skallith"]
  },
  {
    id: "beast_skallith_warrior",
    en: "Skallith Warrior",
    cat: "Bestiaire",
    desc: "Version guerrière du Skallith, en armure corrodée et lame en main.",
    proposals: ["Skallith Warrior"]
  },
  {
    id: "beast_sarracenias",
    en: "Sarracenias",
    cat: "Bestiaire",
    desc: "Plante carnivore camouflée en débris végétaux, bondissant sur ses proies.",
    proposals: ["Sarracenias"]
  },
  {
    id: "beast_giant_luminous_ooze",
    en: "Giant Luminous Ooze",
    cat: "Bestiaire",
    desc: "Immense blob d'ooze doré aux tentacules hérissés d'éclats métalliques et cristallins.",
    proposals: ["Giant Luminous Ooze"]
  },
  {
    id: "beast_luminous_copper_ooze",
    en: "Luminous Copper Ooze",
    cat: "Bestiaire",
    desc: "Slime cuivré traînant des fragments de métal et cristaux dans sa gelée.",
    proposals: ["Luminous Copper Ooze"]
  },
  {
    id: "beast_luminous_gold_ooze",
    en: "Luminous Gold Ooze",
    cat: "Bestiaire",
    desc: "Ooze d'or liquide s'étirant en bras visqueux pour se propulser.",
    proposals: ["Luminous Gold Ooze"]
  },
  {
    id: "beast_luminous_iron_ooze",
    en: "Luminous Iron Ooze",
    cat: "Bestiaire",
    desc: "Ooze gris argenté aux fragments métalliques intégrés, se déformant constamment.",
    proposals: ["Luminous Iron Ooze"]
  },
  {
    id: "beast_luminous_silver_ooze",
    en: "Luminous Silver Ooze",
    cat: "Bestiaire",
    desc: "Ooze argenté scintillant comme un tas de pièces, pulsant de poussières lumineuses.",
    proposals: ["Luminous Silver Ooze"]
  },
  {
    id: "beast_oozeling",
    en: "Oozeling",
    cat: "Bestiaire",
    desc: "Minuscule ooze translucide curieux, explorant son environnement avec une timide prudence.",
    proposals: ["Oozeling"]
  },
  {
    id: "pnj_veiled_chain_desham_shaar_phos",
    en: "Desham \"Shaar\" Phos",
    cat: "PNJ",
    group: "Veiled Chain",
    desc: "Chef actuel de la Veiled Chain, ancien agent d'élite aux yeux brûlants.",
    proposals: ["Desham \"Shaar\" Phos"]
  }
];
