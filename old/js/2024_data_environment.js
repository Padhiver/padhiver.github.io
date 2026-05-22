data_environment_obscurance = [
    {
        title: "Visibilité réduite",
        optional: "Standard rule",
        icon: "bleeding-eye",
        subtitle: "Désavantage de Perception",
        description: "Lumière faible, brouillard par intermittence, feuillage modéré.",
        reference: "PHB, pg. 376.",
        bullets: [
            "Vous subissez le <b>Désavantage</b> aux tests de Sagesse (Perception) visant à voir quelque chose dans un espace à <i>Visibilité réduite</i>."
        ]
    },
    {
        title: "Visibilité nulle",
        optional: "Standard rule",
        icon: "lightning-tear",
        subtitle: "Champ de vision entièrement bloqué",
        description: "Ténèbres, brouillard opaque, feuillage dense.",
        reference: "PHB, pg. 376.",
        bullets: [
            "Vous subissez l'état <b>Aveuglé</b> lorsque vous essayez de voir quelque chose dans un espace à <i>Visibilité nulle</i>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumière vive",
        optional: "Standard rule",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "Une lumière vive permet à la plupart des créatures de voir normalement.",
        reference: "PHB, pg. 19.",
        bullets: [
            "Une Lumière vive permet à la plupart des créatures de voir normalement. Un ciel chargé suffit à produire une Lumière vive, de même que les torches, lanternes, flammes et autres sources de lumière, du moins dans un certain rayon."
        ]
    },
    {
        title: "Lumière faible",
        optional: "Standard rule",
        icon: "semi-closed-eye",
        subtitle: "Visibilité réduite",
        description: "Lumière faible, ou pénombre.",
        reference: "PHB, pg. 19.",
        bullets: [
            "Une zone de Lumière faible est à <b>Visibilité réduite</b>.",
            "Une zone de Lumière faible fait souvent la transition entre la Lumière vive et les Ténèbres environnantes.",
            "La douce lueur du crépuscule et de l'aube compte aussi comme Lumière faible. De même, la pleine lune peut baigner le paysage de Lumière faible."
        ]
    },
    {
        title: "Ténèbres",
        optional: "Standard rule",
        icon: "worried-eyes",
        subtitle: "Visibilité nulle",
        description: "Les Ténèbres créent une zone à Visibilité nulle.",
        reference: "PHB, pg. 19.",
        bullets: [
            "Les Ténèbres créent une zone à <b>Visibilité nulle</b>.",
            "En extérieur et de nuit, les personnages sont exposés aux <i>Ténèbres</i> (même avec du clair de lune), comme c'est le cas au fond d'un donjon non éclairé, ou dans une zone de <i>Ténèbres magiques</i>."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        optional: "Standard rule",
        icon: "one-eyed",
        subtitle: "Voir sans perception visuelle",
        description: "Vous voyez à la portée spécifiée sans vous appuyer sur le sens physique de la vue.",
        reference: "PHB, pg. 376.",
        bullets: [
            "Si vous disposez de la <i>Vision aveugle</i>, vous voyez à la portée spécifiée sans vous appuyer sur le sens physique de la vue.",
            "A cette portée, vous voyez tout ce qui ne bénéficie pas d'un <i>Abri total</i>, même si vous subissez l'état <b>Aveuglé</b> ou vous trouvez dans les <i>Ténèbres</i>.",
            "À cette portée, vous distinguez en outre ce qui a l'état <b>Invisible</b>."
        ]
    },
    {
        title: "Vision dans le noir",
        optional: "Standard rule",
        icon: "semi-closed-eye",
        subtitle: "Voir dans le noir",
        description: "Une créature dotée de la Vision dans le noir peut mieux voir dans l'obscurité ou dans des conditions de faible luminosité, dans un certain rayon.",
        reference: "PHB, pg. 376",
        bullets: [
            "Si vous avez la <i>Vision dans le noir</i>, vous voyez dans des conditions de <i>Lumière faible</i> à la portée indiquée comme s'il s'agissait d'une <i>Lumière vive</i>, et dans les <i>Ténèbres</i> à cette même portée comme dans une zone de <i>Lumière faible</i>.",
            "Dans les Ténèbres, vous discernez les couleurs comme des nuances de gris.",
        ]
    },
    {
        title: "Perception des vibrations",
        optional: "Standard rule",
        icon: "semi-closed-eye",
        subtitle: "Détecter les vibrations",
        description: "Localiser précisément les créatures en contact avec les mêmes surfaces que vous.",
        reference: "PHB, pg. 377.",
        bullets: [
            "Une créature dotée de la <i>Perception des vibrations</i> définit avec précision la position des créatures et des objets en mouvement à une portée définie, à condition qu'elle-même et ce qu'elle détecte soient en contact physique avec la même surface (par exemple le sol, un mur ou un plafond) ou le même élément liquide.",
            "La <i>Perception des vibrations</i> ne permet pas de détecter les créatures ou les objets évoluant dans les airs, et n'est pas considérée comme une forme de vision."
        ]
    },
    {
        title: "Vision lucide",
        optional: "Standard rule",
        icon: "eye-shield",
        subtitle: "Voir dans les Ténébres",
        description: "Votre vision est améliorée dans une portée spécifiée.",
        reference: "PHB, pg. 376.",
        bullets: [
            "Si vous avez la Vision lucide, vous bénéficiez d'une vision améliorée à une portée spécifiée.",
            "A cette portée, votre vision s'affranchit des obstacles suivants :<ul><li><b>Ténèbres.</b> Vous voyez dans les <i>Ténèbres</i> normales comme magiques.<li><b>Invisibilité.</b> Vous voyez les créatures et objets qui ont l'état <b>Invisible</b>.<li><b>Illusions visuelles.</b> Les illusions visuelles vous paraissent transparentes, et vous réussissez automatiquement vos jets de sauvegarde contre elles.<li><b>Métamorphoses.</b> Vous distinguez la forme véritable de toute créature ou tout objet tranformé par magie que vous voyez.<li><b>Plan Éthéré.</b> Vous voyez dans le <i>Plan Éthéré<i>.</ul>"
        ]
    }
]

data_environment_cover = [
    {
        title: "Abri partiel",
        optional: "Standard rule",
        icon: "broken-shield",
        subtitle: "Mur bas, mobilier, créatures",
        description: "Une cible bénéficie d'un abri partiel si un obstacle bloque au moins la moitié de son corps.",
        reference: "PHB, pg. 26.",
        bullets: [
            "L'obstacle peut être un mur bas, un grand meuble, un tronc d'arbre étroit, ou une créature, qu'elle soit ennemie ou amie.",
            "Une cible avec un abri partiel a un <b>bonus de +2 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            "Si une cible se trouve derrière plusieurs sources d'abri, seul le degré d'abri le plus protecteur s'applique."
        ]
    },
    {
        title: "Abri supérieur",
        optional: "Standard rule",
        icon: "cracked-shield",
        subtitle: "Herse, fente de tir",
        description: "Une cible bénéficie d'un abri supérieur si environ les trois quarts de son corps sont couverts par un obstacle.",
        reference: "PHB, pg. 26.",
        bullets: [
            "L'obstacle peut être une herse, une fente de tir ou un tronc d'arbre épais.",
            "Une cible avec un abri supérieur a un <b>bonus de +5 à la CA et aux jets de sauvegarde de Dextérité</b>.",
            "Si une cible se trouve derrière plusieurs sources d'abri, seul le degré d'abri le plus protecteur s'applique."
        ]
    },
    {
        title: "Abri total",
        optional: "Standard rule",
        icon: "shield",
        subtitle: "Entièrement dissimulé",
        description: "Une cible bénéficie d'un abri total si elle est complètement dissimulée par un obstacle.",
        reference: "PHB, pg. 26.",
        bullets: [
            "Une cible avec un abri total <b>ne peut pas être directement ciblée</b> par une attaque ou un sort, bien que certains sorts puissent atteindre une telle cible en l'incluant dans une zone d'effet.",
            "Si une cible se trouve derrière plusieurs sources d'abri, seul le degré d'abri le plus protecteur s'applique."
        ]
    }
]
