data_movement = [
    {
        title: "Déplacement",
        optional: "Standard rule",
        icon: "run",
        subtitle: "Coût : 1,50 m par 1,50 m",
        description: "Coût de déplacement : 1,50 m pour chaque 1,50 m parcouru",
        reference: "PHB, pg. 25.",
        bullets: [
            "Votre déplacement peut inclure des portions d'escalade, de nage, de reptation et de saut. Ces différents modes de déplacement peuvent s'associer avec votre déplacement de base ou constituer l'intégralité de votre déplacement.<br>Quels que soient ces modes, vous déduisez la distance couverte par chacune de ces parties de votre Vitesse, jusqu'à ce qu'il ne vous en reste plus ou que vous ayez terminé votre déplacement, selon ce qui se produit en premier.",
            "Vous pouvez traverser l'espace d'un allié, d'une créature dotée de l'état <i>Neutralisé</i>, d'une créature de taille TP ou d'une créature dont la catégorie de taille est supérieure ou inférieure à la vôtre d'au moins deux crans.",
            "L'espace d'une autre créature est considéré pour vous comme <i>Terrain difficile</i>, sauf si elle est votre alliée ou de taille TP.",
            "Vous ne pouvez pas terminer volontairement votre déplacement dans un espace occupé par une autre créature. Si, pour une raison quelconque, vous terminez un tour dans un espace où se trouve une autre créature, vous subissez l'état À terre sauf si vous êtes de taille TP ou d'une catégorie de taille supérieure à celle de l'autre créature."
        ]
    },
    {
        title: "Escalade",
        optional: "Standard rule",
        icon: "crags",
        subtitle: "Coût : double du déplacement",
        description: "Chaque mètre parcouru en escalade coûte le double, sauf si vous avez une Vitesse d'escalade",
        reference: "PHB, pg. 366.",
        bullets: [
            "Lorsque vous escaladez, toute distance parcourue vous coûte le double de déplacement (le triple en <i>Terrain difficile</i>). Ignorez ce coût supplémentaire si vous disposez d'une Vitesse d'escalade et y recourez pour grimper.",
            "À la discrétion du MD, gravir une surface glissante ou présentant peu de prises peut nécessiter de réussir un test de Force (Athlétisme) DD 15."
        ]
    },
    {
        title: "Nage",
        optional: "Standard rule",
        icon: "at-sea",
        subtitle: "Coût : double du déplacement",
        description: "Chaque mètre parcouru en nageant coûte le double, sauf si vous avez une Vitesse de nage",
        reference: "PHB, pg. 370.",
        bullets: [
            "Lorsque vous nagez, toute distance parcourue vous coûte le double de déplacement (le triple en <i>Terrain difficile</i>). Ignorez ce coût supplémentaire si vous disposez d'une Vitesse de nage et y recourez pour nager.",
            "Sur décision du MD, se déplacer sur une certaine distance en eau agitée peut nécessiter de réussir un test de Force (Athlétisme) DD 15."
        ]
    },
    {
        title: "Vol",
        optional: "Standard rule",
        icon: "angel-wings",
        subtitle: "Coût : 1,50 m par 1,50 m",
        description: "Coût de déplacement : 1,50 m pour chaque 1,50 m parcouru en vol",
        reference: "PHB, pg. 377.",
        bullets: [
            "Tant que vous disposez d'une Vitesse de vol, vous restez en l'air jusqu'à ce que vous vous posiez, tombiez ou mouriez.",
            "Lorsque vous volez, vous tombez si vous subissez l'état <i>Neutralisé</i> ou <i>À terre</i>, ou si votre Vitesse de vol est réduite à 0.",
            "Pour rester en l'air dans pareilles circonstances, vous devez disposer du <i>Vol stationnaire</i>."
        ]
    },
    {
        title: "Plonger à terre",
        optional: "Standard rule",
        icon: "falling",
        subtitle: "Coût : 0 m",
        description: "Coût de déplacement : 0 m (gratuit)",
        reference: "PHB, pg. 25.",
        bullets: [
            "À votre tour, vous pouvez vous octroyer l'état <i>À terre</i> sans dépenser d'action ni le moindre déplacement, à condition que votre Vitesse soit supérieure à 0.",
            "Vos seules possibilités de déplacement sont ramper ou vous relever en dépensant la moitié de votre Vitesse (arrondie à l'inférieur), ce qui met un terme à l'état. Si votre Vitesse est de 0, vous ne pouvez pas vous relever."
        ]
    },
    {
        title: "Reptation",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Coût : double du déplacement",
        description: "Chaque mètre parcouru en reptation coûte le double",
        reference: "PHB, pg. 373.",
        bullets: [
            "Lorsque vous rampez, toute distance parcourue vous coûte le double de déplacement (le triple en <i>Terrain difficile</i>)."
        ]
    },
    {
        title: "Se relever",
        optional: "Standard rule",
        icon: "strong",
        subtitle: "Coût : la moitié de votre Vitesse",
        description: "Coût de déplacement : la moitié de votre Vitesse, arrondie à l'inférieur",
        reference: "PHB, pg. 372.",
        bullets: [
            "Vous relever vous coûte la moitié de votre Vitesse (arrondie à l'inférieur).",
            "Si votre Vitesse est de 0, vous ne pouvez pas vous relever."
        ]
    },
    {
        title: "Saut en hauteur",
        optional: "Standard rule",
        icon: "wingfoot",
        subtitle: "Coût : 1,50 m",
        description: "Coût de déplacement : 1,50 m pour chaque 1,50 m de saut en hauteur",
        reference: "PHB, pg. 374.",
        bullets: [
            "Lorsque vous effectuez un saut en hauteur, vous bondissez d'une distance maximale égale à <b>90 cm + votre modificateur de Force multiplié par 30 cm</b>, à condition d'avoir pris une course d'élan d'au moins 3 m.",
            "Dans le cas d'un saut en hauteur sans élan, vous ne vous élevez que de la moitié de cette hauteur.",
            "Vous pouvez tendre les bras à la verticale durant le saut, d'une hauteur égale à la moitié de votre taille. Dans ces conditions, vous pouvez agripper une hauteur égale à la hauteur du saut plus une fois et demie votre taille.",
            "Quoi qu'il en soit, la distance couverte par le saut est décomptée normalement de votre déplacement."
        ]
    },
    {
        title: "Saut en longueur",
        optional: "Standard rule",
        icon: "wingfoot",
        subtitle: "Coût : 1,50 m par 1,50 m",
        description: "Coût de déplacement : 1,50 m pour chaque 1,50 m de saut en longueur",
        reference: "PHB, pg. 374.",
        bullets: [
            "Vous faites un bond horizontal sur une distance maximale égale à votre <b>valeur de Force multipliée par 30 cm</b> à condition d'avoir pris une course d'élan d'au moins 3 m.",
            "Dans le cas d'un saut en longueur sans élan, vous ne parcourez que la moitié de cette distance.",
            "Dans les deux cas, la distance couverte par le saut est décomptée normalement de votre déplacement.",
            "Si votre saut se termine en <i>Terrain difficile</i>, vous devez réussir un test de Dextérité (Acrobaties) DD 10 sous peine de subir l'état <i>À terre</i>.",
            "Le MD peut vous imposer de réussir un test de Force (Athlétisme) DD 10 pour franchir un obstacle bas (pas plus du quart de la longueur du saut), comme une haie ou une murette. En cas d'échec, vous heurtez l'obstacle."
        ]
    },
    {
        title: "Improviser",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Toute action ne figurant pas dans cette liste",
        description: "Effectuez tout mouvement ou acrobatie que vous pouvez imaginer",
        bullets: [
            "Lorsque vous décrivez un type de déplacement non détaillé ailleurs dans les règles, le MJ vous indique s'il est possible et quel type de jet vous devez effectuer, le cas échéant, pour déterminer la réussite ou l’échec."
        ]
    },
    {
        title: "Terrain difficile",
        optional: "Standard rule",
        icon: "stone-pile",
        subtitle: "Modificateur de coût : +1,50 m par 1,50 m",
        description: "Se déplacer en terrain difficile coûte 1,50 m de déplacement supplémentaire par 1,50 m parcouru.",
        reference: "PHB, pg. 375.",
        bullets: [
        "Si un espace est un <i>Terrain difficile</i>, le déplacement y est doublé. Se déplacer de 1,50 m en <i>Terrain difficile</i>, par exemple, coûte 3 m de déplacement.",
        "Le <i>Terrain difficile</i> n'est pas cumulatif ; soit un espace est un <i>Terrain difficile</i>, soit il ne l'est pas.",
        "Voici quelques exemples de terrains difficiles :<ul><li>Créature qui n'est ni de taille TP ni votre allié</li><li>Mobilier adapté à votre catégorie de taille ou aux créatures de taille supérieure</li><li>Neige abondante, glace, éboulis ou taillis</li><li>Élément liquide d'une profondeur intermédiaire (entre mi-mollets et le niveau de la taille)</li><li>Ouverture étroite, conçue pour une créature dont la catégorie de taille est d'un cran inférieure à la vôtre</li><li>Pente de 20 degrés ou plus</li></ul>"
        ]
    },
    {
        title: "Aggripé",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Coût : +1,50 m par 1,50 m",
        description: "Traîner ou transporter la créature agrippée avec vous",
        reference: "PHB, pg. 361.",
        bullets: [
            "L'agrippeur peut vous tirer ou vous porter lorsqu'il se déplace, mais ses coûts de déplacement sont doublés, sauf si vous êtes de taille TP ou que votre catégorie est inférieure d'au moins deux crans à la sienne."
        ]
    },
    {
        title: "Allure de voyage",
        optional: "Standard rule",
        icon: "run",
        subtitle: "Voyager en dehors des combats",
        description: "Allure de voyage pour un déplacement rapide, normal et lent en dehors des combats.",
        reference: "PHB, pg. 20",
        bullets: [
            "Si le groupe est à dos de cheval ou d'une autre monture, il peut couvrir le double de cette distance en une heure, après quoi les montures doivent prendre un Repos court ou long pour pouvoir reprendre à une allure si soutenue.",
            "<table><tr><th style='text-align:left'>Allure</th><th></th><th></th><th>Minute</th><th></th><th></th><th>Heure</th><th></th><th></th><th>Jour</th></tr><tr><td>Rapide</td><td></td><td></td><td>120 m</td><td></td><td></td><td>6 km</td><td></td><td></td><td>45 km</td></tr><tr><td>Normale</td><td></td><td></td><td>90 m</td><td></td><td></td><td>4,5 km</td><td></td><td></td><td>36 km</td></tr><tr><td>Lente</td><td></td><td></td><td>60 m</td><td></td><td></td><td>3 km</td><td></td><td></td><td>27 km</td></tr></table>",
            "<b>Rapide.</b> Un voyageur qui évolue à allure rapide a le Désavantage aux tests de Sagesse (Perception ou Survie) et Dextérité (Discrétion).",
            "<b>Normale.</b> Un voyageur qui évolue à allure normale a le Désavantage aux tests de Dextérité (Discrétion).",
            "<b>Lente.</b> Un voyageur qui évolue à allure lente a l'Avantage aux tests de Sagesse (Perception ou Survie).",
            "Celles et ceux qui voyagent en chariot, en calèche ou à bord d'un autre véhicule terrestre peuvent opter pour une allure normale. A bord d'un bateau, c'est l'embarcation qui détermine la Vitesse ; les passagers ne choisissent par leur allure de voyage. Si la taille du navire et celle de l'équipage le permettent, il est dans certains cas possible de voguer jusqu'à 24 heures par jour."
        ]
    }
]
