data_action = [
    {
        title: "Attaquer",
        optional: "Règle standard",
        icon: "crossed-swords",
        subtitle: "Attaque de mêlée ou à distance",
        description: "Effectuez une attaque de mêlée ou à distance avec votre arme",
        reference: "PHB'24, page 361.",
        bullets: [
            "Lorsque vous utilisez l'action Attaquer, vous pouvez faire un jet d'attaque avec une arme ou une attaque à mains nues.",
            "<b>Équiper et déséquiper des armes.</b></br> Vous pouvez soit équiper ou déséquiper une arme lorsque vous faites une attaque dans le cadre de cette action. Vous le faites soit avant, soit après l'attaque. <br> Si vous équipez une arme avant une attaque, vous n'êtes pas obligé de l'utiliser pour cette attaque. Équiper une arme inclut la tirer d'un fourreau ou la ramasser. Déséquiper une arme inclut la ranger, la stocker ou la laisser tomber.",
            "<b>Se déplacer entre les attaques.</b></br> Si vous vous déplacez pendant votre tour et que vous avez une caractéristique, comme Attaque supplémentaire, qui vous permet de faire plus d'une attaque dans le cadre de l'action Attaquer, vous pouvez utiliser une partie ou la totalité de ce mouvement pour vous déplacer entre ces attaques."
        ]
    },
    {
        title: "Attaque à mains nues",
        optional: "Règle standard",
        icon: "punch",
        subtitle: "Attaquer sans arme",
        description: "Un coup de poing, de pied, de tête ou un coup similaire",
        reference: "PHB'24, page 377.",
        bullets: [
            "Chaque fois que vous utilisez votre attaque à mains nues, choisissez l'une des options suivantes pour son effet.",
            "<b>Dégâts.</b></br> Vous faites un jet d'attaque contre la cible.</br> Votre bonus au jet est égal à votre modificateur de Force + votre bonus de maîtrise.</br> En cas de réussite, la cible subit des dégâts contondants égaux à 1 + votre modificateur de Force."
        ]
    },
    {
        title: "Agripper",
        optional: "Règle standard",
        icon: "grab",
        subtitle: "Option d'attaque à mains nues",
        description: "Tentez de saisir une créature ou de lutter avec elle",
        reference: "PHB'24, page 377.",
        bullets: [
            "Chaque fois que vous utilisez votre attaque à mains nues, choisissez l'une des options suivantes pour son effet.",
            "<b>Agripper.</b></br> La cible doit réussir un jet de sauvegarde de Force ou de Dextérité (elle choisit lequel), sinon elle est <i>Agrippée</i>. Le DD pour le jet de sauvegarde et toute tentative d'échappement est de 8 + votre modificateur de Force + votre bonus de maîtrise.",
            "Cet agrippement n'est possible que si la cible n'est pas plus d'une taille supérieure à la vôtre et si vous avez une main libre pour la saisir."
        ]
    },
    {
        title: "Bousculer",
        optional: "Règle standard",
        icon: "hand",
        subtitle: "Option d'attaque à mains nues",
        description: "Bousculez une créature, soit pour la faire tomber à terre, soit pour la repousser loin de vous",
        reference: "PHB'24, page 377.",
        bullets: [
            "Chaque fois que vous utilisez votre attaque à mains nues, choisissez l'une des options suivantes pour son effet.",
            "<b>Bousculer.</b></br> La cible doit réussir un jet de sauvegarde de Force ou de Dextérité (elle choisit lequel), sinon vous la repoussez de 1,5 mètre ou la faites tomber à terre (<i>À terre</i>). Le DD pour le jet de sauvegarde et toute tentative d'échappement est de 8 + votre modificateur de Force + votre bonus de maîtrise.",
            "Cette bousculade n'est possible que si la cible n'est pas plus d'une taille supérieure à la vôtre.",
            "</br>",
            "<b><i>Optionnel.</i> Bousculer de côté.</b></br> La cible doit réussir un jet de sauvegarde de Force ou de Dextérité (elle choisit lequel), sinon vous la repoussez de 1,5 mètre vers un espace différent à sa portée. Le DD pour le jet de sauvegarde et toute tentative d'échappement est de 8 + votre modificateur de Force + votre bonus de maîtrise. </br> La cible a un avantage sur ce jet de sauvegarde.",
            "Cette bousculade n'est possible que si la cible n'est pas plus d'une taille supérieure à la vôtre."
        ]
    },
    {
        title: "Magie",
        optional: "Règle standard",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation d'une action",
        description: "Lancez un sort qui a un temps d'incantation d'une action ou utilisez une caractéristique ou un objet magique qui nécessite une action de Magie pour être activé.",
        reference: "PHB'24, page 236, page 371.",
        bullets: [
            "<b>Un sort avec un emplacement de sort par tour.</b></br> Lors d'un tour, vous ne pouvez dépenser qu'un seul emplacement de sort pour lancer un sort. Cette règle signifie que vous ne pouvez pas, par exemple, lancer un sort avec un emplacement de sort en utilisant l'action Magie et un autre en utilisant une action bonus lors du même tour.",
            "<b>Un chemin dégagé vers la cible.</b></br> Pour cibler quelque chose avec un sort, le lanceur de sorts doit avoir un chemin dégagé vers elle, donc elle ne peut pas être derrière une couverture totale.",
            "<b>Temps d'incantation plus longs.</b></br> Si vous lancez un sort qui a un temps d'incantation de 1 minute ou plus, vous devez utiliser l'action Magie à chaque tour de cette incantation, et vous devez maintenir votre concentration pendant ce temps. Si votre concentration est rompue, le sort échoue, mais vous ne dépensez pas d'emplacement de sort.",
        ]
    },
    {
        title: "Foncer",
        optional: "Règle standard",
        icon: "sprint",
        subtitle: "Vitesse de mouvement supplémentaire",
        description: "Gagnez un mouvement supplémentaire pour le tour actuel",
        reference: "PHB'24, page 365",
        bullets: [
            "L'augmentation est égale à votre vitesse après application de tous les modificateurs.",
            "Si vous avez une vitesse spéciale, comme une vitesse de vol ou de nage, vous pouvez utiliser cette vitesse au lieu de votre vitesse lorsque vous utilisez cette action. Vous choisissez quelle vitesse utiliser chaque fois que vous l'utilisez."
        ]
    },
    {
        title: "Désengagement",
        optional: "Règle standard",
        icon: "run",
        subtitle: "Empêcher les attaques d'opportunité",
        description: "Votre mouvement ne provoque pas d'attaques d'opportunité pour le reste du tour",
        reference: "PHB'24, page 366",
        bullets: [
            "Votre mouvement ne provoque pas d'attaques d'opportunité pour le reste du tour"
        ]
    },
    {
        title: "Esquiver",
        optional: "Règle standard",
        icon: "dodging",
        subtitle: "Éviter les attaques entrantes",
        description: "Concentrez-vous entièrement sur l'évitement des attaques",
        reference: "PHB'24, page 366",
        bullets: [
            "Jusqu'au début de votre prochain tour, tout jet d'attaque contre vous a un désavantage si vous pouvez voir l'attaquant, et vous faites les jets de sauvegarde de Dextérité avec avantage.",
            "Vous perdez cet avantage si vous avez l'état <i>Neutralisé</i> ou si votre vitesse est de 0."
        ]
    },
    {
        title: "Aider",
        optional: "Règle standard",
        icon: "team-idea",
        subtitle: "Accorder un avantage à un allié",
        description: "Accordez un avantage à un allié sur un test de caractéristique ou un jet d'attaque",
        reference: "PHB'24, page 368",
        bullets: [
            "Lorsque vous utilisez l'action Aider, vous faites l'une des choses suivantes :",
            "<b>Aider un test de caractéristique.</b></br> Choisissez l'une de vos compétences ou maîtrises d'outils et un allié qui est suffisamment proche pour que vous puissiez l'aider verbalement ou physiquement lorsqu'il fait un test de caractéristique. Cet allié a un avantage sur le prochain test de caractéristique qu'il fait avec la compétence ou l'outil choisi. Cet avantage expire si l'allié ne l'utilise pas avant le début de votre prochain tour. </br>Le MJ a le dernier mot pour déterminer si votre aide est possible.",
            "<b>Aider un jet d'attaque.</b></br> Vous distrayez momentanément un ennemi à 1,5 mètre de vous, donnant un avantage au prochain jet d'attaque d'un de vos alliés contre cet ennemi. Cet avantage expire au début de votre prochain tour."
        ]
    },
    {
        title: "Se cacher",
        optional: "Règle standard",
        icon: "hood",
        subtitle: "Tenter de se cacher",
        description: "Tentez de vous cacher",
        reference: "PHB'24, page 368",
        bullets: [
            "Avec l'action Se cacher, vous essayez de vous dissimuler. Pour ce faire, vous devez réussir un test de Dextérité (Discrétion) DD 15 alors que vous êtes fortement obscurci ou derrière une couverture aux trois quarts ou totale, et vous devez être hors de la ligne de vue de tout ennemi ; si vous pouvez voir une créature, vous pouvez discerner si elle peut vous voir.",
            "En cas de réussite, vous avez l'état <i>Invisible</i>. Notez le total de votre test, qui est le DD pour qu'une créature vous trouve avec un test de Sagesse (Perception).",
            "L'état se termine immédiatement après l'une des choses suivantes : vous faites un bruit plus fort qu'un chuchotement, un ennemi vous trouve, vous faites un jet d'attaque, ou vous lancez un sort avec une composante verbale."
        ]
    },
    {
        title: "Utiliser",
        optional: "Règle standard",
        icon: "usable",
        subtitle: "Interagir avec un objet ou un élément",
        description: "Utilisez un objet non magique ou interagissez avec un objet séparément de l'interaction gratuite",
        reference: "PHB'24, page 378",
        bullets: [
            "Vous interagissez normalement avec un objet tout en faisant autre chose, comme lorsque vous tirez une épée dans le cadre de l'action Attaquer. Lorsqu'un objet nécessite une action pour son utilisation, vous utilisez l'action Utiliser.",
            "<b>Interactions avec des objets limitées dans le temps.</b></br> Lorsque le temps est limité, comme en combat, les interactions avec les objets sont limitées : une interaction gratuite par tour. Cette interaction doit se produire pendant le mouvement ou l'action d'une créature. Toute interaction supplémentaire nécessite l'action Utiliser.",
            "<b>Briser des objets.</b></br> En tant qu'action, vous pouvez automatiquement briser ou autrement détruire un objet fragile et non magique, comme un récipient en verre ou une feuille de papier. Si vous essayez d'endommager quelque chose de plus résistant, le MJ pourrait utiliser les règles sur la rupture d'objets dans le glossaire des règles."
        ]
    },
    {
        title: "Fouiller",
        optional: "Règle standard",
        icon: "look-at",
        subtitle: "Essayer de chercher quelque chose",
        description: "Passez votre temps à chercher.",
        reference: "PHB'24, page 373",
        bullets: [
            "Lorsque vous utilisez l'action Fouiller, vous faites un test de Sagesse pour discerner quelque chose qui n'est pas évident. Le tableau de recherche suggère quelles compétences sont applicables lorsque vous utilisez cette action, en fonction de ce que vous essayez de détecter.",
            "<table><tr><th style='text-align:left'>Compétence</th><th></th><th></th><th style='text-align:left'>Chose à détecter</th></tr><tr><td><u>Perspicacité</u></td><td></td><td></td><td>État d'esprit d'une créature.</td></tr><tr><td><u>Médecine</u></td><td></td><td></td><td>Maladie ou cause de mort d'une créature.</td></tr><tr><td><u>Perception</u></td><td></td><td></td><td>Créature ou objet dissimulé.</td></tr><tr><td><u>Survie</u></td><td></td><td></td><td>Pistes ou nourriture.</td></tr></table>"
        ]
    },
    {
        title: "Étudier",
        optional: "Règle standard",
        icon: "magnifying-glass",
        subtitle: "Tenter d'apprendre quelque chose",
        description: "Passez votre temps à apprendre des informations",
        reference: "PHB'24, page 375",
        bullets: [
            "Lorsque vous utilisez l'action Étudier, vous faites un test d'Intelligence pour étudier votre mémoire, un livre, un indice ou une autre source de connaissances et vous rappeler une information importante à son sujet. </br></br> Le tableau des domaines de connaissance suggère quelles compétences sont applicables à divers domaines de connaissance.",
            "<table><tr><th style='text-align:left'>Compétence</th><th></th><th></th><th style='text-align:left'>Domaines</th></tr><tr><td><u>Arcanes</u></td><td></td><td></td><td>Sorts, objets magiques, symboles ésotériques, traditions magiques, plans d'existence et certaines créatures (Aberrations, Créatures artificielles, Élémentaires, Fées et Monstruosités)</td></tr><tr><td><u>Histoire</u></td><td></td><td></td><td>Événements et personnages historiques, civilisations anciennes, guerres et certaines créatures (Géants et Humanoïdes)</td></tr><tr><td><u>Investigation</u></td><td></td><td></td><td>Pièges, chiffres, énigmes et gadgets</td></tr><tr><td><u>Nature</u></td><td></td><td></td><td>Terrain, flore, météo et certaines créatures (Bêtes, Dragons, Vases et Plantes)</td></tr><tr><td><u>Religion</u></td><td></td><td></td><td>Divinités, hiérarchies et rites religieux, symboles sacrés, cultes et certaines créatures (Célestes, Fiélons et Morts-vivants)</td></tr></table>"
        ]
    },
    {
        title: "Influencer",
        optional: "Règle standard",
        icon: "conversation",
        subtitle: "Tenter de convaincre quelqu'un",
        description: "Passez votre temps à communiquer",
        reference: "PHB'24, page 369",
        bullets: [
            "Avec l'action Influencer, vous poussez une créature à faire quelque chose. Décrivez ou jouez la manière dont vous communiquez avec la créature. Essayez-vous de tromper, d'intimider, d'amuser ou de persuader doucement ? Le MJ détermine ensuite si la créature se sent disposée, réticente ou hésitante en raison de votre interaction ; cette détermination établit si un test de caractéristique est nécessaire, comme expliqué ci-dessous.",
            "<b>Disposée.</b> Si votre incitation correspond aux désirs de la créature, aucun test de caractéristique n'est nécessaire ; la créature accomplit votre demande de la manière qu'elle préfère. </br></br> <b>Réticente.</b> Si votre incitation est répugnante pour la créature ou contraire à son alignement, aucun test de caractéristique n'est nécessaire ; elle ne se conforme pas. </br></br> <b>Hésitante.</b> Si vous poussez la créature à faire quelque chose qu'elle hésite à faire, vous devez faire un test de caractéristique, qui est affecté par l'attitude de la créature : Indifférente, Amicale ou Hostile. </br></br> Le tableau des tests d'influence suggère quel test de caractéristique faire en fonction de la manière dont vous interagissez avec la créature. Le MJ choisit le test, qui a un DD par défaut de 15 ou le score d'Int de la créature, selon ce qui est le plus élevé. En cas de réussite, la créature fait ce que vous lui avez demandé. En cas d'échec, vous devez attendre 24 heures (ou une durée fixée par le MJ) avant de la pousser à nouveau de la même manière.",
            "<table><tr><th style='text-align:left'>Test de caractéristique</th><th></th><th></th><th style='text-align:left'>Interaction</th></tr><tr><td><u>Charisme (Tromperie)</u></td><td></td><td></td><td>	Tromper une créature qui vous comprend.</td></tr><tr><td><u>Charisme (Intimidation)</u></td><td></td><td></td><td>Intimider une créature.</td></tr><tr><td><u>Charisme (Représentation)</u></td><td></td><td></td><td>Amuser un monstre.</td></tr><tr><td><u>Charisme (Persuasion)</u></td><td></td><td></td><td>Persuader une créature qui vous comprend.</td></tr><tr><td><u>Sagesse (Dressage)</u></td><td></td><td></td><td>Encourager doucement une Bête ou une Monstruosité.</td></tr></table>"
        ]
    },
    {
        title: "Se tenir prêt",
        optional: "Règle standard",
        icon: "stopwatch",
        subtitle: "Choisir un déclencheur et une action",
        description: "Choisissez un déclencheur et une réaction en réponse",
        reference: "PHB'24, page 372",
        bullets: [
            "Parfois, vous voulez agir juste avant un ennemi ou attendre une circonstance particulière avant d'agir. Pour faire ceci, vous pouvez utiliser à votre tour l'action Se tenir prêt, qui vous permet d'agir en utilisant votre <b>réaction</b> avant le début de votre prochain tour.",
            "En premier lieu, vous devez décider quelle circonstance perceptible déclenchera votre réaction, puis choisir l'action en réponse au déclencheur ou un déplacement supplémentaire au plus égal à votre vitesse. ",
            "Exemples : <i>Si le cultiste marche sur le piège, je lève le levier qui le déclenchera</i> ou <i>si le gobelin s'approche de moi, je m'en éloigne.</i>",
            "Quand le déclencheur est activé, vous pouvez soit utiliser votre réaction <b>dès qu'il se termine</b>, soit l'ignorer.",
            "Quand vous préparez un sort, vous le lancez normalement puis retenez son énergie, que vous ne relâchez par votre réaction que lorsque le déclencheur est activé. Pour être prêt, le sort doit avoir un temps d'incantation d'une action, et il est nécessaire d'être concentré pour contenir la magie du sort. Si votre concentration est interrompue, le sort se dissipe sans aucun effet.",
            "Par exemple, si vous êtes concentré sur le sort <i>toile d'araignée</i> et que vous préparez <i>projectile magique</i>, votre sort <i>toile d'araignée</i> se termine, et si vous êtes touché avant de lancer le sort <i>projectile magique</i>, votre concentration peut être interrompue."
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        optional: "Règle standard",
        icon: "embrassed-energy",
        subtitle: "Certaines aptitudes utilisent des actions",
        description: "Utilisez une aptitude d'espèce ou de classe qui utilise une action",
        reference: "Voir la page de la classe pour plus d'informations.",
        bullets: [

        ]
    },
    {
        title: "Improviser",
        optional: "Règle standard",
        icon: "juggler",
        subtitle: "Toute action non listée ici",
        description: "Effectuez toute action que vous pouvez imaginer",
        reference: "PHB'24, page 15",
        bullets: [
            "Les personnages joueurs et les créatures peuvent également faire des choses non couvertes par d'autres actions. De nombreuses caractéristiques de classe et d'autres capacités fournissent des options d'action supplémentaires, et vous pouvez improviser d'autres actions. Lorsque vous décrivez une action non détaillée ailleurs dans les règles, le Maître du Donjon vous dit si cette action est possible et quel type de test D20 vous devez faire, le cas échéant."
        ]
    },
    {
        title: "Désarmer*",
        optional: "Règle optionnelle",
        icon: "sword-break",
        subtitle: "Faire tomber un objet des mains d'un ennemi",
        description: "Une créature peut utiliser une attaque d'arme pour faire tomber une arme ou un autre objet des mains d'une cible.",
        reference: "DMG, page 271",
        bullets: [
            "(Règle optionnelle) :",
            "L'attaquant fait un jet d'attaque contesté par un test de Force (Athlétisme) ou de Dextérité (Acrobatie) de la cible.",
            "Si l'attaquant gagne le concours, l'attaque ne cause aucun dégât ou autre effet néfaste, mais le défenseur laisse tomber l'objet.",
            "L'attaquant a un désavantage sur son jet d'attaque si la cible tient l'objet avec deux mains ou plus.",
            "La cible a un avantage sur son test de caractéristique si elle est plus grande que la créature attaquante, ou un désavantage si elle est plus petite."
        ]
    },
    {
        title: "Bousculer*",
        optional: "Règle optionnelle",
        icon: "shield-bash",
        subtitle: "Courir à travers un espace hostile",
        description: "Lorsqu'une créature essaie de se déplacer à travers l'espace d'une créature hostile, le déplaceur peut essayer de se frayer un chemin en bousculant la créature hostile.",
        reference: "DMG, page 272",
        bullets: [
            "(Règle optionnelle) :",
            "En tant qu'action, le déplaceur fait un test de Force (Athlétisme) contesté par un test de Force (Athlétisme) de la créature hostile.",
            "La créature qui tente la bousculade a un avantage sur ce test si elle est plus grande que la créature hostile, ou un désavantage si elle est plus petite.",
            "Si le déplaceur gagne le concours, il peut se déplacer à travers l'espace de la créature hostile une fois ce tour-ci."
        ]
    },
    {
        title: "Culbuter*",
        optional: "Règle optionnelle",
        icon: "tumble",
        subtitle: "Culbuter à travers un espace hostile",
        description: "Une créature peut essayer de culbuter à travers l'espace d'une créature hostile, en esquivant et en se faufilant devant l'adversaire.",
        reference: "DMG, page 272",
        bullets: [
            "(Règle optionnelle) :",
            "En tant qu'action, le culbuteur fait un test de Dextérité (Acrobatie) contesté par un test de Dextérité (Acrobatie) de la créature hostile.",
            "Si le culbuteur gagne le concours, il peut se déplacer à travers l'espace de la créature hostile une fois ce tour-ci."
        ]
    },
    {
        title: "Marquer*",
        optional: "Règle optionnelle",
        icon: "cross-mark",
        subtitle: "Donner un avantage sur les attaques d'opportunité",
        description: "Cette option facilite le harcèlement des combattants en mêlée avec des attaques d'opportunité.",
        reference: "DMG, page 271",
        bullets: [
            "(Règle optionnelle) :",
            "Lorsqu'une créature fait une attaque de mêlée, elle peut également marquer sa cible.",
            "Jusqu'à la fin du prochain tour de l'attaquant, toute attaque d'opportunité qu'il fait contre la cible marquée a un avantage.",
            "L'attaque d'opportunité ne dépense pas la réaction de l'attaquant",
            "L'attaquant ne peut pas faire l'attaque si quelque chose, comme l'état <i>Neutralisé</i> ou le sort <i>Poigne électrique</i>, l'empêche de prendre des réactions.",
            "L'attaquant est limité à une attaque d'opportunité par tour.",
        ]
    },
    {
        title: "Grimper sur une créature plus grande*",
        optional: "Règle optionnelle",
        icon: "mountain-climbing",
        subtitle: "Grimper sur une créature plus grande",
        description: "Si une créature veut sauter sur une autre créature, elle peut le faire en l'agrippant. Un adversaire suffisamment grand peut être traité comme un terrain pour sauter sur son dos ou s'accrocher à un membre.",
        reference: "DMG, page 271",
        bullets: [
            "(Règle optionnelle) :",
            "Après avoir fait les tests de caractéristique nécessaires pour se mettre en position et grimper sur la créature plus grande, la créature plus petite utilise son action pour faire un test de Force (Athlétisme) ou de Dextérité (Acrobatie) contesté par un test de Dextérité (Acrobatie) de la cible.",
            "Si elle gagne le concours, la créature plus petite se déplace avec succès dans l'espace de la créature cible.",
            "La créature plus petite se déplace avec la cible et a un avantage sur les jets d'attaque contre elle.",
        ]
    }
]