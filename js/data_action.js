data_action = [
    {
        title: "Attaquer",
        icon: "crossed-swords",
        subtitle: "Corps à corps ou à distance",
        description: "Vous pouvez effectuer une attaque au corps à corps ou à distance avec vos armes",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Certaines aptitudes comme <i>l'attaque supplémentaire</i> du guerrier, permettent à un personnage de porter plus d'une attaque, qu'il faudra résoudre avec un jet d'attaque pour chacune d'elles.",
            "Vous pouvez attaquer avec votre arme (épée courte, bâton ...) à une main et effectuer également une attaque d'arme secondaire comme action bonus (Voir l'action bonus <i>Attaque d'arme secondaire</i>).",
            "Vous pouvez utiliser votre attaque de corps à corps pour effectuer une <i>Empoignade</i> ou <i>Bousculer une créature</i>.",
            "Certains états peuvent vous avantager lors de votre attaque, comme un ennemi neutralisé, à terre, aveuglé, inconscient...",
            "Votre attaque peut également être désavantagée contre des attaquants invisibles ou abrités ou bien en fonction de votre propre état."
        ]
    },
    {
        title: "Empoigner",
        icon: "grab",
        subtitle: "Attaque spéciale de corps à corps",
        description: "Vous tentez d'empoigner une créature ou de lutter avec elle",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser votre <i>Action Attaquer</i> pour effectuer une attaque de corps à corps appelée, empoignade. Si vous avez plusieurs attaques avec l'action attaquer, cette attaque spéciale compte pour une d'elles.",
            "La cible de votre empoignade ne doit pas faire plus d'une catégorie de taille de plus que vous et doit être dans votre zone d'allonge.",
            "Vous devez effectuer un test d'empoignade à la place d'un jet d'attaque. C'est à dire un test de Force (Athlétisme) opposé à un test de Force (Athlétisme) ou de Dextérité (Acrobaties) au choix de votre cible.",
            "Si vous réussissez votre test d'opposition, votre cible est empoignée. Ce qui correspond à des états spéciaux décrits dans la section des états."
        ]
    },
    {
        title: "Bousculer",
        icon: "hand",
        subtitle: "Attaque spéciale de corps à corps",
        description: "Vous tentez de bousculer une créature ou de la faire tombe à terre",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous pouvez utiliser votre <i>Action Attaquer</i> comme une attaque de corps à corps visant à bousculer une créature. Si vous avez plusieurs attaques avec l'action attaquer, cette attaque spéciale compte pour une d'elles.",
            "La cible ne doit pas faire plus d'une catégorie de taille de plus que vous et doit être dans votre zone d'allonge.",
            "Vous devez effectuer un test d'opposition à la place d'un jet d'attaque. C'est à dire un test de Force (Athlétisme) opposé à un test de Force (Athlétisme) ou de Dextérité (Acrobaties) au choix de votre cible.",
            "Si vous remportez ce test d'opposition, vous avez le choix entre faire tomber votre cible à terre, ou bien la répousser d'une distance de 1,50 mètres de vous."
        ]
    },
    {
        title: "Lancer un sort",
        icon: "magic-swirl",
        subtitle: "Durée d'incantation d'une action",
        description: "Lancer un sort avec une durée d'incantation d'une action",
        reference: "PHB, pg. 192,202,204.",
        bullets: [
            "Pour utiliser une action de lancer un sort, il ne faut pas avoir lancé un autre sort lors de votre action bonus, à moins que ce sort ne soit un tour de magie dont la durée est d'une action.",
            "La cible d'un sort doit être à portée de ce sort. Pour viser une chose, l'incantateur doit avoir une vue dégagée entre elle est lui. La cible ne doit pas bénéficier d'un abri total.",
            "Certains sorts nécessitent l'utilisation de composantes matérielles pour être lancés. A moins qu'elles ne soient listées explicitement, vous pouvez considérer que ces composantes se trouvent par defaut dans la sacoche du lanceur de sort.",
            "Pour certains sorts, l'incantateur doit maintenir sa concentration au delà du temps requis pour une seule action. Si vous perdez vous concentration, le sort est perdu. La perte de concentration peut être liée à un arrêt volontaire du lanceur de sort pour en lancer un autre ou à un changement d'état, comme neutralisé (voir états).",
			"Si l'incantateur subit des dégâts pendant sa concentration, il doit réussir un jet de sauvegarde de Constitution. Le DD est de 10 ou la moitié du total de dégâts reçus si plusieurs attaques lui sont portées. Par contre il doit effectuer un jet de sauvegarde dès qu'une attaque réussie lui fait des dégâts."
        ]
    },
    {
        title: "Se précipiter",
        icon: "sprint",
        subtitle: "Double la vitesse de mouvement",
        description: "Vous doublez votre vitesse de mouvement lors de ce tour",
        reference: "PHB, pg. 192,193.",
        bullets: [
            "Ce bonus de déplacement est égal à votre vitesse, après avoir appliqué tous vos modificateurs éventuels. Tout effet qui augmente ou réduit votre vitesse modifie du même montant votre bonus de déplacement.",
			"Ainsi, si votre vitesse de 9 mètres est réduite à 4,50 mètres, votre action se précipiter vous permettra d'effectuer un déplacement de 9 mètres à votre tour."
        ]
    },
    {
        title: "Se désengager",
        icon: "journey",
        subtitle: "Eviter les attaques d'opportunité",
        description: "Vous pouvez vous déplacer sans provoquer d'attaques d'opportunité jusqu'à la fin de votre tour.",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquiver",
        icon: "aura",
        subtitle: "Eviter les attaques",
        description: "Votre objectif est d'esquiver toutes les attaques portées contre vous",
        reference: "PHB, pg. 192.",
        bullets: [
            "Jusqu'au début de votre prochain tour, les jets d'attaque dont vous êtes la cible sont désavantagés si vous pouvez voir l'assaillant. Vous êtes également avantagé pour les jets de sauvegarde de Dextérité.",
            "Vous perdez l'avantage conféré à cette action si vous êtes dans l'état <i>neutralisé (voir états) </i> ou si votre vitesse est à 0."
        ]
    },
    {
        title: "Se désengager",
        icon: "manacles",
        subtitle: "Se libérer d'une empoignade",
        description: "Se libérer d'une empoignade",
        reference: "PHB, pg. 192,195.",
        bullets: [
            "Si vous effectuer l'action se désengager, vous pouvez vous déplacer sans provoquer d'attaques d'opportunité jusqu'à la fin du tour.",
            "Une créature empoignée peut utiliser une action pour se libérer Vous devez réussir un test de Force (Athlétisme) ou de Dextérité (Acrobaties) opposé à un test de Force (Athlétisme)."
        ]
    },
    {
        title: "Aider",
        icon: "telepathy",
        subtitle: "Attribuer un avantage à un allié",
        description: "Vous aidez et donnez à un allié un avantage",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous aidez et donnez à un allié un avantage lors de son prochain test de caractéristique.",
            "Vous pouvez aussi aider un allié à attaquer une autre créature située à 1,50 mètre ou moins de vous. Si votre allié attaque cette cible avant le début de votre prochain tour, il est avantagé.",
            "Cet avantage se terminera dès le commencement de votre prochain tour."
        ]
    },
    {
        title: "Utiliser un objet",
        icon: "snatch",
        subtitle: "Intéragir avec un objet",
        description: "Intéragir avec un objet",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous pouvez intéragir avec un objet librement avec votre action pendant votre tour comme par exemple dégainer votre épée. Par contre l'intéraction avec pus d'un objet nécessite obligatoirement l'action utiliser un objet.",
            "Quand un objet nécessite à lui seul une action particulière ou dédiée, vous devez effectuer l'action utiliser un objet comme action à votre tour."
        ]
    },
    {
        title: "Utiliser un bouclier",
        icon: "round-shield",
        subtitle: "S'équiper ou enlever un bouclier",
        description: "S'équiper ou enlever un bouclier",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Il vous faudra l'utilisation d'une action, soit pour vous équiper d'un bouclier, ou soit pour l'enlever.",
            "Pour contre il vous faudra une à plusieurs minutes pour enfiler ou ôter une armure."
        ]
    },
    {
        title: "Se cacher",
        icon: "hood",
        subtitle: "Tentative pour se cacher",
        description: "Tentative pour se cacher",
        reference: "PHB, pg. 174,177,192.",
        bullets: [
            "Vous ne pouvez pas vous cacher d'une créature qui peut déjà vous voir et votre cachette est révélée si vous faites du bruit, comme par exemple, crier un avertissement ou en renversant un vase.",
            "Pendant un combat, la plupart des créatures restent attentives aux signes de danger et il est fort probable qu'elles vous remarquent au moindre de vos mouvements ou si vous vous approchez d'elles.",
            "Quand vous tentez de vous cacher, faites un test de Dextérité (Discrétion) jusqu'à ce que vous soyez découvert ou que vous sortiez de votre cachette. Le résultat de ce test doit être opposé à celui du test de Sagesse (Perception) de toute créature qui cherche activement des signes de votre présence.",
            "Il y a cenpendant toujours un risque d'être découvert, même si une créature ne vous cherche pas. Pour cela, votre MD comparera votre test de Dextérité (Discrétion) à la valeur passive de Sagesse (Perception) de cette créature. Soit un DD de 10 + le modificateur de Sagesse, sans oublier les bonus ou malus de la créature et +5 ou -5 si celle-ci est avantagée ou désavantagée.",
            "Vous pouvez également utiliser l'action se cacher hors combat, pour vous faufiler ou déjouer la vigilance de gardes. Dans ce cas, un test de Dextérité (Discrétion) sera alors nécessaire."
        ]
    },
    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "Chercher quelque chose",
        description: "Focaliser votre attention pour chercher quelque chose",
        reference: "PHB, pg. 192.",
        bullets: [
            "En fonction de la nature de ce que vous cherchez, votre MD peut vous demander un test de Sagesse (Perception) ou d'Intelligence (Investigation)."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Réagir sous condition à votre tour",
        description: "Se tenir prêt à réagir dès que certaines conditions sont réunies ou déclenchées",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous devez d'abord choisir la situation qui va déclencher votre réaction.",
            "Puis, l'action que vous allez effectuer en réponse à ce déclencheur. ",
            "En réponse à l'action prévue, vous pouvez décider de vous déplacer à la place d'une distance inférieure ou égale à votre vitesse.",
            "Quand vous préparer un sort dans le cadre de cette action, vous le lancez normalement mais vous contenez son énergie jusqu'au moment du déclencheur de cette action. Sauf si, votre concentration est interrompue, entrainant la dissipation des effets attendus du sort."
        ]
    },
    {
        title: "Utiliser une aptitude",
        icon: "embrassed-energy",
        subtitle: "Certains talents ou pouvoirs",
        description: "Vous pouvez utiliser un talent racial ou une aptitude de classe comme une action",
        reference: "Voir la classe de votre personnage pour plus de détails.",
        bullets: [

        ]
    },
    {
        title: "Improviser une action",
        icon: "juggler",
        subtitle: "Autre action non listée ici",
        description: "Effectuer une action originale non listée ici",
        reference: "PHB, pg. 193.",
        bullets: [
            "Si vous souhaitez réaliser une action qui n'est pas décrite dans les règles, parlez en à votre MD pour savoir si cette action est recevable, et si un jet de caractéristique est nécessaire pour en déterminer le succès ou l'échec."
        ]
    }
]
