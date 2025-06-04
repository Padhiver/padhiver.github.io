data_action = [
    {
        title: "Attaque",
        optional: "Standard rule",
        icon: "crossed-swords",
        subtitle: "Attaque au corps à corps ou à distance",
        description: "Effectuer un jet d'attaque avec une arme ou une attaque à mains nues.",
        reference: "PHB, pg. 361.",
        bullets: [
            "Vous pouvez vous équiper ou vous déséquiper d'une arme lorsque vous effectuez une attaque dans le cadre de cette action. Vous pouvez le faire avant ou après l'attaque.",
            "Certaines aptitudes, telle qu'<i>Attaque supplémentaire</i>, vous octroient plusieurs attaques dans le cadre de l'action Attaque. Chacune de ces attaques est un jet distinct et peut cibler des créatures différentes. Vous pouvez vous déplacer entre ces attaques.",
            "Lorsque vous attaquez avec une arme de corps à corps légère, vous pouvez utiliser une action Bonus pour attaquer avec une autre arme de corps à corps légère dans votre autre main.",
            "Vous pouvez utiliser une attaque à mains nues pour <i>Lutter</i>, <i>Bousculer</i> ou <i>infliger des dégâts</i> à un adversaire. Pour infliger des dégâts, effectuez un jet d'attaque contre la cible avec un bonus égal à votre modificateur de Force plus votre bonus de maîtrise et infligez (1 + modificateur de Force) dégâts contondants.",
            "Certaines conditions donnent l'<i>Avantage</i> au jet d'attaque : attaques contre des cibles aveuglées, paralysées, pétrifiées, entravées, étourdies ou inconscientes ; attaques de corps à corps contre des cibles à terre ; attaques par des assaillants invisibles ou cachés.",
            "Certaines conditions donnent un <i>Désavantage</i> au jet d'attaque : attaques contre des cibles invisibles ou cachées ; attaques à distance contre des cibles à terre ; attaques par des assaillants aveuglés, effrayés, empoisonnés ou entravés."
        ]
    },
    {
        title: "Lutte",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Attaque spéciale à mains nues",
        description: "Tenter d'agripper  une créature ou de lutter avec elle",
        reference: "PHB, pg. 369.",
        bullets: [
            "Vous pouvez utiliser l'action <i>Attaque</i> pour effectuer une attaque spéciale à mains nues, une lutte. Si vous êtes capable de faire plusieurs attaques avec l'action <i>Attaque</i>, cette attaque remplace l'une d'entre elles.",
            "La cible de votre lutte ne doit pas être de plus d'une catégorie de taille supérieure à la vôtre, et vous devez disposer d'une main libre pour agripper la cible.",
            "La cible doit réussir un jet de sauvegarde de Force ou de Dextérité (elle choisit), ou elle subit l'état <i>Agrippé</i>. Le DD pour le jet de sauvegarde et toute tentative d'évasion est 8 + modificateur de Force + Bonus de maîtrise de l'attaquant."
        ]
    },
    {
        title: "Bousculade",
        optional: "Standard rule",
        icon: "hand",
        subtitle: "Attaque spéciale à mains nues",
        description: "Bousculer une créature, soit pour la mettre à terre, soit pour l'éloigner de vous.",
        reference: "PHB, pg. 377.",
        bullets: [
            "Vous pouvez utiliser l'action <i>Attaque</i> pour effectuer une attaque spéciale à mains nues, une bousculade. Si vous êtes capable de faire plusieurs attaques avec l'action Attaque, cette attaque remplace l'une d'entre elles.",
            "La cible de votre bousculade ne doit pas être de plus d'une catégorie de taille supérieure à la vôtre.",
            "La cible doit réussir un jet de sauvegarde de Force ou de Dextérité (elle choisit), ou elle sera soit poussée de 1,50 mètre ou mise à terre (l'attaquant choisit). Le DD pour le jet de sauvegarde est 8 + modificateur de Force + Bonus de maîtrise de l'attaquant."
        ]
    },
    {
        title: "Magie",
        optional: "Standard rule",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation de 1 action",
        description: "Lancer un sort avec un temps d'incantation de 1 action.",
        reference: "PHB, pg. 235.",
        bullets: [
            "À un tour donné, vous ne pouvez dépenser qu'un seul emplacement de sort pour lancer un sort. Vous ne pouvez pas, par exemple, lancer un sort à emplacement par l'action Magie et un autre par une action Bonus au cours du même tour.",
            "La cible d'un sort doit être à portée du sort. Pour cibler quelque chose, vous devez avoir une ligne de mire dégagée, elle ne peut donc pas être derrière un abri total.",
            "Les sorts avec des composantes matérielles ne consomment pas le matériel sauf indication explicite. À moins que le coût d'un matériel ne soit indiqué, vous pouvez considérer que le coût est négligeable et que le matériel est simplement disponible dans une bourse à composantes.",
            "Certains sorts et effets nécessitent la <i>Concentration</i> pour rester actifs, comme stipulé dans leur description. Si son créateur perd sa <i>Concentration</i>, l'effet prend fin. Si l'effet a une durée maximale, son descriptif indique combien de temps son créateur peut se concentrer sur lui : jusqu'à 1 minute, 1 heure, ou autre durée. Le créateur peut rompre volontairement sa <i>Concentration</i> à tout moment (pas d'action requise). Les facteurs ci-après brisent la <i>Concentration</i>.<ul><li><b>Autre effet nécessitant la <i>Concentration</i>.</b> Vous perdez la <i>Concentration</i> sur un effet dès l'instant où vous commencez à lancer un sort nécessitant la <i>Concentration</i> ou activez un autre effet qui la requiert.<li><b>Dégâts.</b> Si vous subissez des dégâts, vous devez réussir un jet de sauvegarde de Constitution pour maintenir votre <i>Concentration</i>. Le DD est égal à 10 ou à la moitié des dégâts subis (arrondir à l'inférieur), le nombre le plus élevé étant retenu, jusqu'à un DD maximal de 30.<li><b>Neutralisé ou mort.</b> Votre <i>Concentration</i> prend fin si vous subissez l'état Neutralisé ou si vous mourez.</ul>"
        ]
    },
    {
        title: "Pointe",
        optional: "Standard rule",
        icon: "sprint",
        subtitle: "Vitesse de déplacement doublée",
        description: "Gagne un déplacement supplémentaire pour le tour actuel.",
        reference: "PHB, pg. 371.",
        bullets: [
            "Lorsque vous entreprenez l'action <i>Pointe</i>, vous recevez du déplacement supplémentaire pour ce tour.",
            "Cette augmentation est égale à votre Vitesse, après application d'éventuels modificateurs. Si vous disposez par exemple d'une Vitesse de 9 m, vous pouvez vous déplacer de 18 m à votre tour en entreprenant l'action <i>Pointe</i>. Si vous disposez d'une Vitesse de 9 m réduite à 4,50 m, vous pouvez vous déplacer de 9 m à votre tour avec l'action <i>Pointe.</i>",
            "Si vous disposez d'une Vitesse spéciale, de type Vitesse de vol ou Vitesse de nage, vous pouvez utiliser celle-ci à la place de votre Vitesse lorsque vous entreprenez cette action. Vous choisissez la Vitesse à utiliser chaque fois que vous l'entreprenez."
        ]
    },
    {
        title: "Désengagement",
        optional: "Standard rule",
        icon: "journey",
        subtitle: "Éviter les attaques d'opportunité",
        description: "Votre déplacement ne provoque pas d'attaques d'opportunité jusqu'à la fin du tour.",
        reference: "PHB, pg. 366.",
        bullets: [
            "Si vous entreprenez l'action <i>Désengagement</i>, votre déplacement ne provoque pas d'attaque d'<i>Opportunité</i> jusqu'à la fin du tour."
        ]
    },
    {
        title: "Esquive",
        optional: "Standard rule",
        icon: "aura",
        subtitle: "Augmenter sa défense",
        description: "Se concentrer entièrement sur l'évitement des attaques.",
        reference: "PHB, pg. 366.",
        bullets: [
            "Jusqu'au début de votre tour suivant, tout jet d'attaque effectué contre vous par un assaillant que vous voyez subit le <i>Désavantage</i>, et vos jets de sauvegarde de Dextérité ont l'<i>Avantage</i>.",
            "Vous perdez ces bénéfices si vous subissez l'état <i>Neutralisé</i> ou si votre Vitesse tombe à 0."
        ]
    },
    {
        title: "S'extraire d'une lutte",
        optional: "Standard rule",
        icon: "manacles",
        subtitle: "S'extraire d'une lutte",
        description: "S'extraire d'une lutte",
        reference: "PHB, pg. 369.",
        bullets: [
            "Une créature <i>Agrippée</i> peut consacrer son action à effectuer un test de Force (Athlétisme) ou de Dextérité (Acrobaties) contre le DD d'évasion de la lutte, mettant un terme à l'état sur elle-même en cas de réussite.",
            "L'état prend fin également si l'agrippeur subit l'état <i>Neutralisé</i> ou si la distance entre la cible agrippée et l'agrippeur dépasse la portée d'allonge de ce dernier. En outre, l'agrippeur peut à tout moment mettre fin à la lutte (pas d'action requise)."
        ]
    },
    {
        title: "Soutien",
        optional: "Standard rule",
        icon: "telepathy",
        subtitle: "Assister une autre créature",
        description: "Assister une autre créature pour un test de caractéristique ou un jet d'attaque, ou lui administrer les premiers soins.",
        reference: "PHB, pg. 374.",
        bullets: [
            "Lorsque vous entreprenez l'action <i>Soutien</i>, vous faites l'une ou l'autre des deux choses ci-après.",
            "<b>Assister un test de caractéristique.</b> Choisissez l'une de vos maîtrises de compétence ou d'outil, ainsi qu'un allié suffisamment proche pour que vous puissiez l'assister verbalement ou physiquement lorsqu'il entreprend un test de caractéristique. Cet allié a l'<i>Avantage</i> au prochain test de caractéristique qu'il entreprend avec la compétence ou l'outil choisi. Ce bénéfice expire si l'allié n'y recourt pas avant le début de votre tour suivant. C'est le MD qui décide si votre assistance est possible ou non.",
            "<b>Assister un jet d'attaque.</b> Vous distrayez momentanément un ennemi dans un rayon de 1,50 m, ce qui octroie l'<i>Avantage</i> au jet d'attaque suivant de l'un de vos alliés contre cet ennemi. Ce bénéfice expire au début de votre tour suivant."
        ]
    },
    {
        title: "Utilisation",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Interagir, utiliser des capacités spéciales",
        description: "Interagir avec un objet ou utiliser les capacités spéciales d'un objet",
        reference: "PHB, pg. 377.",
        bullets: [
            "Vous interagissez souvent avec un objet tout en faisant autre chose, comme lorsque vous dégainez votre épée dans le cadre de l'action Attaque.",
            "Lorsqu'un objet requiert spécifiquement votre action, vous entreprenez l'action <i>Utilisation.</i>"
        ]
    },
    {
        title: "Utiliser un bouclier",
        optional: "Standard rule",
        icon: "round-shield",
        subtitle: "Équiper ou déséquiper un bouclier",
        description: "Équiper ou déséquiper un bouclier",
        reference: "PHB, pg. 219",
        bullets: [
            "Les boucliers nécessitent l'action <i>Utilisation</i> pour les équiper ou les déséquiper.",
            "L'armure prend plusieurs minutes à équiper ou déséquiper.",
            "Vous ne recevez le bénéfice Classe d'armure d'un bouclier que si vous êtes formé à le porter."
        ]
    },
    {
        title: "Furtivité",
        optional: "Standard rule",
        icon: "hood",
        subtitle: "Tenter de se dissimuler",
        description: "Tenter de se dissimuler",
        reference: "PHB, pg. 367.",
        bullets: [
            "Vous effectuez un test de Dextérité (Discrétion) DD 15 à condition d'être dans une zone de Visibilité nulle, derrière un Abri supérieur ou un Abri total, et de ne pas être dans le champ de vision d'un ennemi.",
            "Si vous voyez une créature, vous savez si celle-ci vous voit ou non.",
            "En cas de réussite, vous bénéficiez de l'état <i>Invisible</i> tant que vous êtes caché. Prenez note du résultat de ce test, qui est le DD à atteindre pour qu'une créature vous localise au moyen d'un test de Sagesse (Perception).",
            "Vous cessez d'être caché aussitôt après l'un des événements suivants : vous émettez un son plus fort qu'un murmure, un ennemi vous détecte, vous effectuez un jet d'attaque ou lancez un sort à composante verbale."
        ]
    },
    {
        title: "Influence",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Inciter un monstre à faire quelque chose",
        description: "Inciter un monstre à faire quelque chose.",
        reference: "PHB, pg. 368.",
        bullets: [
            "Décrivez ou incarnez la façon dont vous communiquez avec le monstre. Essayez-vous de tromper, d'intimider, d'amuser, de persuader en douceur ?",
            "Le MJ détermine alors si le monstre se sent disposé, réticent ou hésitant suite à votre interaction ; ce jugement détermine si un test de caractéristique est nécessaire, comme expliqué ci-dessous.",
            "<b>Disposé.</b> Si votre requête est en accord avec les désirs du monstre, aucun test de caractéristique n'est nécessaire ; il accède à votre demande par la méthode qu'il préfère.",
            "<b>Réticent.</b> Si votre requête répugne au monstre ou est contraire à son alignement, aucun test de caractéristique n'est nécessaire ; il vous oppose un refus.",
            "<b>Hésitant.</b> Si vous incitez le monstre à faire quelque chose et qu'il se montre hésitant, vous devez en passer par un test de caractéristique, lequel est affecté par l'attitude du monstre : Indifférent, Amical ou Hostile. Le MD choisit le test, dont le DD par défaut est égal à 15 ou à la valeur d'Intelligence du monstre, selon ce qui est le plus élevé. En cas de réussite, le monstre accomplit ce qui lui est demandé. En cas d'échec, vous devez attendre 24 heures (ou une autre durée définie par le MD) avant de l'exhorter à nouveau de la même manière."
        ]
    },
    {
        title: "Observation",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Discerner ce qui n'est pas évident",
        description: "Discerner ce qui n'est pas évident.",
        reference: "PHB, pg. 370.",
        bullets: [
            "Vous effectuez un test de Sagesse visant à discerner ce qui n'est pas évident.",
            "Voici quelques exemples de choses à détecter et la compétence associée : <table><thead><tr><th style='text-align:left'>Compétence</th><th>Chose à détecter</th></tr></thead><tbody><tr><td>Intuition</td><td>État d'esprit d'une créature</td></tr><tr><td>Médecine</td><td>Mal dont souffre une créature ou cause de sa mort</td></tr><tr><td>Perception</td><td>Créature ou objet dissimulé</td></tr><tr><td>Survie</td><td>Traces ou nourriture</td></tr></tbody></table>",
            "Votre MJ peut demander des tests utilisant d'autres caractéristiques comme l'Intelligence."
        ]
    },
    {
        title: "Étude",
        optional: "Standard rule",
        icon: "magnifying-glass",
        subtitle: "Étudier votre mémoire, un livre ou un indice",
        description: "Étudier votre mémoire, un livre ou un indice.",
        reference: "PHB, pg. 366.",
        bullets: [
            "Vous effectuez un test d'Intelligence en consultant votre mémoire, un livre, un indice ou une autre source de savoir, à la recherche d'une information importante sur un sujet donné.",
            "<table><thead><tr><th style='text-align:left'>Compétence</th><th style='text-align:left'>Domaines</th></tr></thead><tbody><tr><td>Arcanes</td><td>Sorts, objets magiques, symboles occultes, traditions magiques, plans d'existence et certaines créatures (Aberrations, Artificiels, Élémentaires, Fées et Monstruosités)</td></tr><tr><td>Histoire</td><td>Événements et personnages historiques, civilisations anciennes, guerres et certaines créatures (Géants et Humanoïdes)</td></tr><tr><td>Investigation</td><td>Pièges, énigmes, messages cryptés et gadgets divers</td></tr><tr><td>Nature</td><td>Terrain, flore, climat et certaines créatures (Bêtes, Dragons, Plantes et Vases)</td></tr><tr><td>Religion</td><td>Divinités, hiérarchies et rites religieux, symboles sacrés, cultes et certaines créatures (Célestes, Fiélons, Morts-vivants)</td></tr></tbody></table>"
        ]
    },
    {
        title: "Intention",
        optional: "Standard rule",
        icon: "stopwatch",
        subtitle: "Attendre une circonstance particulière",
        description: "Attendre une circonstance particulière.",
        reference: "PHB, pg. 368.",
        bullets: [
            "Vous entreprenez l'action <i>Intention</i> à votre tour, ce qui vous permet de jouer votre Réaction avant le début de votre tour suivant.",
            "Décidez quelle circonstance perceptible déclenchera votre Réaction.",
            "Choisissez l'action que vous entreprendrez en réponse à ce déclencheur, ou optez pour un déplacement n'excédant pas votre Vitesse en réponse à celui-ci.",
            "Lorsque le déclencheur intervient, vous avez le choix entre jouer votre <i>Réaction</i> juste après la fin du déclencheur et ne pas tenir compte de celui-ci.",
            "Lorsque votre <i>Intention</i> concerne l'incantation d'un sort, vous le lancez normalement (ce qui requiert de dépenser les éventuelles ressources nécessaires) mais retenez les énergies magiques, que vous ne libérerez qu'à l'intervention du déclencheur en jouant votre Réaction. Pour pouvoir s'anticiper ainsi, le sort doit avoir un temps d'incantation d'une action, sachant que retenir ses énergies vous demande de maintenir votre <i>Concentration</i>, ce que vous ne pouvez faire que jusqu'au début de votre tour suivant. Si votre <i>Concentration</i> est rompue, le sort se dissipe sans prendre effet."
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        optional: "Standard rule",
        icon: "embrassed-energy",
        subtitle: "Certaines aptitudes utilisent des actions",
        description: "Utiliser une aptitude d'espèce ou de classe qui utilise une action",
        reference: "Voir la page de votre classe pour plus d'informations.",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        optional: "Standard rule",
        icon: "first-aid",
        subtitle: "Stabiliser une créature mourante",
        description: "Empêcher une créature mourante d'avoir à faire des jets de sauvegarde contre la mort.",
        reference: "PHB, pg. 29.",
        bullets: [
            "Vous pouvez entreprendre l'action <i>Soutien</i> pour tenter de stabiliser une créature à O point de vie, ce qui demande de réussir un test de Sagesse (Médecine) DD 10.",
            "Une créature <i>Stabilisée</i> n'est pas soumise aux jets de sauvegarde contre la mort, bien qu'étant à O point de vie, mais elle garde l'état <i>Inconscient.</i>",
            "Si elle subit le moindre dégât, elle n'est plus <i>Stabilisée</i> et se retrouve à nouveau soumise aux JS contre la mort.",
            "Une créature <i>Stabilisée</i> qui n'est pas soignée récupère 1 point de vie au bout de 1d4 heures."
        ]
    },
    {
        title: "Improviser",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Toute action ne figurant pas dans cette liste",
        description: "Effectuer toute action que vous pouvez imaginer.",
        reference: "PHB, pg. 15.",
        bullets: [
            "Lorsque vous décrivez une action non détaillée ailleurs dans les règles, le MJ vous dit si cette action est possible et quel type de jet vous devez faire, le cas échéant, pour déterminer le succès ou l'échec."
        ]
    }
]
