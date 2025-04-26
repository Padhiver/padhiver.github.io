// ==================================================
// Mémo : Balises HTML disponibles pour la mise en page
// ==================================================
// 1. Italique : <i>texte en italique</i>
// 2. Gras : <b>texte en gras</b> ou <strong>texte en gras</strong>
// 3. Souligné : <u>texte souligné</u>
// 4. Barré : <s>texte barré</s> ou <del>texte barré</del>
// 5. Couleur : <span style='color: red;'>texte en rouge</span>
// 6. Taille : <span style='font-size: 20px;'>texte en grande taille</span>
// 7. Listes à puces : <ul><li>élément 1</li><li>élément 2</li></ul>
// 8. Liens : <a href='https://example.com'>lien cliquable</a>
// 9. Retours à la ligne : <br> (ex: "ligne 1<br>ligne 2")
// ==================================================

data_environment_obscurance = [
    {
        title: "Visibilité réduite",
        optional: "Règle standard",
        icon: "bleeding-eye",
        subtitle: "Désavantage sur la Perception",
        description: "Lumière faible, brouillard irrégulier, feuillage modéré",
        reference: "PHB, pg. 183.",
        bullets: [
            "Vous avez un <b>désavantage sur les tests de Sagesse (Perception)</b> qui dépendent de la vision."
        ]
    },
    {
        title: "Visibilité nulle",
        optional: "Règle standard",
        icon: "lightning-tear",
        subtitle: "Effectivement aveuglé",
        description: "Ténèbres, brouillard opaque, feuillage dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Si vous êtes dans une zone à visibilité nulle, vous souffrez de l'état <b>aveuglé</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumière vive",
        optional: "Règle standard",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "La lumière vive permet à la plupart des créatures de voir normalement",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les jours gris produisent une lumière vive, comme le feraient des torches, des lanternes, des feux et d'autres sources d'illumination avec un rayon spécifique."
        ]
    },
    {
        title: "Lumière faible",
        optional: "Règle standard",
        icon: "semi-closed-eye",
        subtitle: "Légèrement obscurci",
        description: "Lumière faible, également appelée ombres",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone à <b>visibilité réduite</b>.",
            "Une lumière faible est généralement l'extension d'une source de lumière vive, comme une torche ou des ténèbres environnantes.",
            "La lumière du crépuscule ou de l'aube est aussi considérée comme une lumière faible. Une pleine lune particulièrement brillante peut éclairer la nuit d'une lumière faible."
        ]
    },
    {
        title: "Ténèbres",
        optional: "Règle standard",
        icon: "worried-eyes",
        subtitle: "Fortement obscurci",
        description: "Les ténèbres créent une zone de visibilité nulle.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les ténèbres créent une zone de <b>visibilité nulle</b>.",
            "Vous êtes confronté aux ténèbres de nuit (même la plupart des nuits avec la lune), aux confins d'un donjon sans éclairage, dans une crypte souterraine ou dans une zone de ténèbres magiques."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        optional: "Règle standard",
        icon: "one-eyed",
        subtitle: "Percevoir sans la vue",
        description: "Percevez votre environnement sans compter sur la vue, dans un certain rayon",
        reference: "PHB, pg. 183.",
        bullets: [
            "Si vous avez la vision aveugle, vous pouvez percevoir votre environnement sans compter sur la vue, dans un certain rayon."
        ]
    },
    {
        title: "Vision dans le noir",
        optional: "Règle standard",
        icon: "semi-closed-eye",
        subtitle: "Vision limitée dans l'obscurité",
        description: "Une créature avec la vision dans le noir peut mieux voir dans l'obscurité ou dans des conditions de faible luminosité, dans un certain rayon",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Sur une distance donnée, vous pouvez voir dans une zone de <b>lumière faible</b> comme s'il s'agissait de <b>lumière vive</b>, et dans les <b>ténèbres</b> comme s'il s'agissait de <b>lumière faible</b>, ce qui fait que les ténèbres sont pour vous une zone à <b>visibilité réduite</b>.",
            "Vous ne pouvez cependant pas discerner les couleurs dans les ténèbres, seulement des nuances de gris.",
            "De nombreuses créatures dans les mondes de D&D, en particulier celles qui vivent sous terre, ont la vision dans le noir."
        ]
    },
    {
        title: "Vision lucide",
        optional: "Règle standard",
        icon: "eye-shield",
        subtitle: "Voir dans l'obscurité",
        description: "Une créature avec la vision lucide peut voir tout dans sa vraie forme, indépendamment de l'environnement",
        reference: "PHB, pg. 184.",
        bullets: [
            "Si vous avez la vision lucide, vous pouvez, dans un rayon de portée spécifique, voir normalement dans les ténèbres normales et magiques, voir les créatures et les objets invisibles, détecter automatiquement les illusions visuelles et réussir les jets de sauvegarde contre celles-ci, ainsi que percevoir la forme originale d'un métamorphe ou d'une créature transformée grâce à la magie.",
            "Vous pouvez même voir dans le plan éthéré."
        ]
    }
]

data_environment_cover = [
    {
        title: "Abri partiel",
        optional: "Règle standard",
        icon: "broken-shield",
        subtitle: "Mur bas, meuble, créatures",
        description: "Une cible a un abri partiel si un obstacle bloque au moins la moitié de son corps",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle peut être un mur bas, un meuble large, un tronc d'arbre étroit ou une créature, que ce soit un ennemi ou un allié.",
            "Si vous avez un abri partiel (50%), vous obtenez un <b>bonus de +2 à la CA et aux jets de sauvegarde de Dextérité.</b>",
            "Si vous êtes derrière des sources multiples, c'est le type le plus élevé qui s'applique."
        ]
    },
    {
        title: "Abri supérieur",
        optional: "Règle standard",
        icon: "cracked-shield",
        subtitle: "Herse, meurtrière",
        description: "Une cible a un abri supérieur si environ les trois quarts de son corps sont couverts par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "L'obstacle pourrait être une herse, une meurtrière ou un tronc d'arbre épais.",
            "Si vous avez un abri supérieur (75%), vous obtenez un <b>bonus de +5 à la CA et aux jets de sauvegarde de Dextérité.</b>",
            "Si vous êtes derrière des sources multiples, c'est le type le plus élevé qui s'applique."
        ]
    },
    {
        title: "Abri total",
        optional: "Règle standard",
        icon: "shield",
        subtitle: "Complètement dissimulé",
        description: "Une cible a un abri total si elle est complètement dissimulée par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Si vous avez un abri total (100%), vous ne pouvez être <b>visé directement</b> par une attaque ou un sort, mais certains sorts peuvent toutefois vous atteindre en vous incluant dans la <b>zone d'effet.</b>",
            "Si vous êtes derrière des sources multiples, c'est le type le plus élevé qui s'applique."
        ]
    }
]