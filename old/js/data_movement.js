data_movement = [
    {
        title: "Se déplacer",
        icon: "run",
        subtitle: "Coût: Vitesse utilisée",
        description: "Coût: Vitesse de chaque mode de déplacement",
        reference: "PHB, pg. 190.",
        bullets: [
            "Lors de votre tour, vous pouvez vous déplacer sur une distance inférieure ou égale à votre vitesse. Pendant votre déplacement, vous pouvez combiner ou alterner le saut, l'escalade ou la nage. Vous devez soustraire à chaque mode de déplacement le coût correspondant à votre vitesse, et vous arrêter si votre vitesse est réduite à 0.",
            "Vous pouvez traverser un emplacement occupé par une créature amie.",
            "Vous ne pouvez traverser un emplacement occupé par une créature hostile, sauf si celle-ci fait à minima deux catégories de taille de moins que vous.",
            "L'emplacement occupé par une créature est toujours considéré comme un terrain difficile.",
            "Si vous sortez de la zone d'allonge d'une créature hostile pendant votre déplacement, vous provoquez une attaque d'opportunité contre vous."
        ]
    },
    {
        title: "Escalader",
        icon: "crags",
        subtitle: "Coût: 1 mètre coûte 2",
        description: "Coût du déplacement : 1 mètre escaladé coûte 2 mètres de déplacement normal ou plus si terrain difficile",
        reference: "PHB, pg. 182.",
        bullets: [
            "Un test de Force (Athlétisme) peut vous être demandé par le MD en fonction du terrain escaladé"
        ]
    },
    {
        title: "Nager",
        icon: "at-sea",
        subtitle: "Coût: 1 mètre coûte 2",
        description: "Coût du déplacement : 1 mètre nagé coûte 2 mètres de déplacement normal ou plus si eaux agitées",
        reference: "PHB, pg. 182.",
        bullets: [
            "Un test de Force (Athlétisme) peut vous être demandé par le MD si les conditions de natation sont difficiles"
        ]
    },
    {
        title: "Chute",
        icon: "falling",
        subtitle: "Coût: 0",
        description: "Coût du déplacement : 0",
        reference: "PHB, pg. 183.",
        bullets: [
            "Vous pouvez tomber et chuter d'une hauteur importante volontairement ou non.",
            "Vous subissez 1d6 de dégâts par tranche de 3 mètres de chute.",
            "Le maximum de dégâts est de 20d6, sauf si vous pouvez les éviter, sinon vous serez à terre à la fin de votre chute."
        ]
    },
    {
        title: "Ramper",
        icon: "crawl",
        subtitle: "Coût: 1 mètre coûte 2",
        description: "Coût du déplacement : 1 mètre rampé coûte 2 mètres de déplacement normal ou plus si terrain sinueux",
        reference: "PHB, pg. 182.",
        bullets: [
			"Un test de Force (Athlétisme) peut vous être demandé par le MD si vous devez ramper sur un terrain difficile"
        ]
    },
    {
        title: "Se Relever",
        icon: "strong",
        subtitle: "Coût: Moitié de la vitesse",
        description: "Coût du déplacement : La Moitié de votre vitesse totale",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "Pour vous relever, cela vous coûte la moitié de votre vitesse totale (4,50 mètres si votre vitesse est de 9). De plus impossible de vous relevez si votre vitesse est insuffisante ou réduite à 0."
        ]
    },
    {
        title: "Saut en hauteur",
        icon: "wingfoot",
        subtitle: "Coût: 1 mètre coûte 1",
        description: "Coût du déplacement : 1 mètre sauté coûte 1 mètre de déplacement normal",
        
        reference: "PHB, pg. 182.",
        bullets: [
            "Votre saut en hauteur peut atteindre une hauteur de <b>1 mètre + le tiers de votre modificateur de Force </b> si vous prenez un élan sur 3 mètres avant de sauter.",
            "Sans le moindre élan, votre saut ne pourra atteindre que la moitié de cette hauteur.",
            "Vous pouvez lever les bras pendant le saut pour atteindre une hauteur supplémentaire de une fois et demi votre taille.",
            "Un test de Force (Athlétisme) peut vous être demandé par le MD pour sauter plus haut que la hauteur normale."
        ]
    },
    {
        title: "Saut en longueur",
        icon: "wingfoot",
        subtitle: "Coût: 1 mètre coûte 1",
        description: "Coût du déplacement : 1 mètre sauté coûte 1 mètre de déplacement normal",
        reference: "PHB, pg. 182.",
        bullets: [
            "Votre saut en longueur peut atteindre une distance en mètres égale à votre <b>valeur de Force divisée par 3</b> si vous prenez un élan sur 3 mètres avant de sauter.",
            "Sans le moindre élan, votre saut ne pourra atteindre que la moitié de cette distance en mètres.",
            "Un test de Force (Athlétisme) peut être requis par le MD pour savoir si vous réussissez à sauter par dessus un petit obstacle DD10 (pas plus haut que le quart de la distance de votre saut) Si vous échouez, vous percutez l'obstacle.",
            "Vous devez réussir un test de Dextérité (Acrobaties) DD10 pour retomber sur vos pieds sur un terrain difficile. Sinon vous tombez à terre."
        ]
    },
    {
        title: "Improviser un déplacement",
        icon: "juggler",
        subtitle: "Autre déplacement non listé ici",
        description: "Réaliser un déplacement particulier",
        bullets: [
            "Si un déplacement, mouvement ou cascade n'est pas décrit dans les règles, parlez en à votre MD pour savoir si ce déplacement est autorisé, et si un jet de caractéristique est nécessaire pour en déterminer le succès ou l'échec."
        ]
    },
    {
        title: "Terrain difficile",
        icon: "stone-pile",
        subtitle: "Coût: 1 mètre coûte 2",
        reference: "PHB, pg. 182.",
        description: "En terrain difficile votre distance de déplacement ne pourra atteindre que la moitié de votre déplacement normal. Votre vitesse est divisée par deux.",
        bullets: [
        ]
    },
    {
        title: "Créature Empoignée",
        icon: "grab",
        subtitle: "Coût: Vitesse divisée par 2",
        description: "Déplacer une créature que vous avez empoignée",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous vous déplacez en traînant ou portant la créature, mais votre vitesse est divisée par deux. Sauf si la créature fait au minimum <b> 2 catégories de taille de moins </b> que vous.",
            "L'empoignade est une action d'attaque au corps à corps spéciale."
        ]
    }
]
