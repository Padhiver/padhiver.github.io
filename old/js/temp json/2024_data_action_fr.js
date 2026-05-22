data_action = [
    {
        title: "Attaque",
        optional: "Standard rule",
        icon: "crossedswords",
        subtitle: "Attaque au corps à corps ou à distance",
        description: "Effectuer une attaque au corps à corps ou à distance, une attaque à mains nues, ou une manœuvre de combat spéciale comme Lutter ou Bousculer.",
        reference: "PHB 2024, pgs. 290, 317.",
        summary: "Effectuez une ou plusieurs attaques avec une arme ou à mains nues. Vous pouvez remplacer une attaque par une tentative de Lutte ou de Bousculade. Certaines armes avec la propriété Nick permettent une attaque supplémentaire sans utiliser d'action bonus.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Attaque est le fondement du combat martial. Elle vous permet d'effectuer une ou plusieurs attaques avec une arme ou à mains nues, et sert de porte d'entrée vers les manœuvres tactiques qui contrôlent le champ de bataille."
            },
            {
                type: "list",
                items: [
                    "Certaines aptitudes, telle qu'<i>Attaque supplémentaire</i>, vous octroient plusieurs attaques dans le cadre de cette action. Chacune est un jet distinct et peut cibler des créatures différentes. Vous pouvez vous déplacer entre ces attaques.",
                    "<b>Attaque à mains nues :</b> Vous pouvez effectuer une attaque spéciale pour Lutter, Bousculer ou infliger des dégâts. Pour infliger des dégâts, effectuez un jet d'attaque de corps à corps. En cas de réussite, elle inflige 1 + votre modificateur de Force dégâts contondants.",
                    "<b>Maîtrise des armes :</b> Lorsque vous attaquez avec une arme, vous pouvez appliquer une propriété de Maîtrise spéciale (comme Pousser, Ralentir ou Renverser) si vous êtes un Guerrier ou avez le don Maître des armes.",
                    "<b>Combat à deux armes :</b> La propriété <i>Nick</i> (sur les cimeterres, marteaux légers, etc.) vous permet d'effectuer une attaque supplémentaire avec cette arme dans le cadre de cette action (sans action bonus requise), mais vous n'ajoutez pas votre modificateur de caractéristique aux dégâts."
                ]
            },
            {
                type: "paragraph",
                content: "N'oubliez pas que diverses conditions peuvent accorder l'Avantage ou le Désavantage à vos jets d'attaque, rendant le positionnement sur le champ de bataille crucial pour tout attaquant."
            }
        ]
    },
    {
        title: "Magie",
        optional: "Standard rule",
        icon: "magicswirl",
        subtitle: "Lancer des sorts ou utiliser la magie",
        description: "Lancer un sort avec un temps d'incantation d'une action, ou utiliser une aptitude magique ou un objet magique nécessitant l'action Magie.",
        reference: "PHB 2024, pgs. 290, 301.",
        summary: "Utilisez l'action Magie pour lancer un sort en 1 action, activer une aptitude magique, ou utiliser un objet magique qui requiert cette action. À votre tour, vous ne pouvez dépenser qu'un seul emplacement de sort pour lancer un sort.",
        bullets: [
            {
                type: "paragraph",
                content: "Les règles 2024 regroupent l'incantation en une action et de nombreuses activations magiques sous l'action Magie, assurant une cohérence pour les sorts, les aptitudes de classe et les objets magiques."
            },
            {
                type: "list",
                items: [
                    "Lancer un sort dont le temps d'incantation est une action.",
                    "Utiliser une aptitude magique de classe ou un objet magique qui spécifie l'action Magie.",
                    "<b>Limite des emplacements de sort :</b> À votre tour, vous ne pouvez dépenser qu'un seul emplacement de sort pour lancer un sort, qu'il utilise une action, une action bonus ou une réaction.",
                    "<b>Concentration :</b> De nombreux sorts nécessitent la Concentration. Vous la perdez si vous : lancez un autre sort nécessitant la Concentration, subissez des dégâts (nécessitant un jet de sauvegarde de CON DD 10 ou la moitié des dégâts subis), êtes Neutralisé ou mourez."
                ]
            },
            {
                type: "paragraph",
                content: "Maîtriser l'action Magie signifie suivre le coût en action, la Concentration et si vous avez déjà dépensé un emplacement de sort ce tour."
            }
        ]
    },
    {
        title: "Pointe",
        optional: "Standard rule",
        icon: "sprint",
        subtitle: "Vitesse de déplacement doublée",
        description: "Gagner un déplacement supplémentaire pour le tour actuel égal à votre Vitesse, doublant ainsi votre potentiel de mouvement.",
        reference: "PHB 2024, pg. 291.",
        summary: "Gagnez un déplacement supplémentaire pour le tour actuel égal à votre Vitesse, doublant ainsi votre distance de déplacement totale pour ce tour.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Pointe est votre meilleure option pour couvrir rapidement de longues distances, que vous chargiez un ennemi ou battiez en retraite. Elle offre un coup de pouce simple mais significatif à votre mobilité pour le tour."
            },
            {
                type: "list",
                items: [
                    "Par exemple, si votre Vitesse est de 9 m, utiliser l'action Pointe vous donne 9 m de déplacement supplémentaire pour le tour, pour un total de 18 m.",
                    "Ce déplacement est soumis à toutes les règles normales et peut provoquer des attaques d'opportunité."
                ]
            },
            {
                type: "paragraph",
                content: "Cette action n'offre aucun bénéfice défensif ; pour traverser une zone menacée en toute sécurité, vous devez utiliser l'action Désengagement."
            }
        ]
    },
    {
        title: "Désarmer*",
        optional: "Optional rule",
        icon: "swordbreak",
        subtitle: "Faire lâcher un objet à un ennemi",
        description: "Utiliser une manœuvre de combat optionnelle pour faire lâcher un objet d'une créature au lieu d'infliger des dégâts.",
        reference: "DMG 2014, pg. 271.",
        summary: "En manœuvre optionnelle, effectuez un jet d'attaque contesté par le test de Force (Athlétisme) ou Dextérité (Acrobaties) de la cible. Si vous l'emportez, la cible lâche un objet tenu.",
        bullets: [
            {
                type: "paragraph",
                content: "Désarmer n'est pas l'une des actions standard 2024. Elle reste utile en tant que manœuvre optionnelle pour les tables souhaitant un moyen direct de séparer un ennemi de son arme, focalisateur ou autre objet tenu."
            },
            {
                type: "list",
                items: [
                    "Effectuez un jet d'attaque contesté par le test de <b>Force (Athlétisme)</b> ou <b>Dextérité (Acrobaties)</b> de la cible.",
                    "Si vous remportez le contest, l'attaque n'inflige aucun dégât et la cible lâche un objet tenu de votre choix.",
                    "La cible a l'<b>Avantage</b> à son test si elle tient l'objet à deux mains ou plus.",
                    "L'attaquant a le <b>Désavantage</b> si la cible est d'une catégorie de taille supérieure."
                ]
            },
            {
                type: "paragraph",
                content: "Très efficace contre les ennemis qui dépendent d'une seule arme puissante, mais moins utile contre ceux dotés d'armes naturelles ou de multiples options."
            }
        ]
    },
    {
        title: "Désengagement",
        optional: "Standard rule",
        icon: "journey",
        subtitle: "Éviter les attaques d'opportunité",
        description: "Pour le reste de votre tour, votre déplacement ne provoque pas d'attaques d'opportunité, permettant une retraite sécurisée.",
        reference: "PHB 2024, pg. 291.",
        summary: "Votre déplacement pour le reste du tour actuel ne provoque aucune attaque d'opportunité, vous permettant de vous éloigner des ennemis en toute sécurité.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est une action purement tactique axée sur le repositionnement. Elle vous permet de vous éloigner d'un ou plusieurs ennemis sans craindre de subir des dégâts, en faisant un outil vital pour contrôler votre position sur le champ de bataille."
            },
            {
                type: "list",
                items: [
                    "C'est le principal moyen de quitter en sécurité la portée d'un ennemi au corps à corps.",
                    "Le bénéfice ne dure que jusqu'à la fin du tour actuel."
                ]
            },
            {
                type: "paragraph",
                content: "Cette action est indispensable pour les personnages à distance ou les lanceurs de sorts qui ont besoin de prendre du recul, ou pour tout personnage cherchant à fuir un adversaire dangereux."
            }
        ]
    },
    {
        title: "Esquive",
        optional: "Standard rule",
        icon: "dodging",
        subtitle: "Augmenter ses défenses",
        description: "Se concentrer entièrement sur l'évitement des attaques, imposant le Désavantage aux attaquants et accordant l'Avantage aux jets de sauvegarde de Dextérité.",
        reference: "PHB 2024, pg. 291.",
        summary: "Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre vous a le Désavantage si vous voyez l'attaquant, et vous effectuez vos jets de sauvegarde de Dextérité avec l'Avantage.",
        bullets: [
            {
                type: "paragraph",
                content: "Lorsque vous anticipez un assaut massif ou un sort de zone dangereux, l'action Esquive est votre meilleure manœuvre défensive. Le bénéfice dure jusqu'au début de votre prochain tour, vous protégeant pendant tout un round de combat."
            },
            {
                type: "list",
                items: [
                    "Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre vous a le <b>Désavantage</b> si vous voyez l'attaquant.",
                    "Vous effectuez également vos <b>jets de sauvegarde de Dextérité avec l'Avantage</b>.",
                    "Vous perdez ces bénéfices si vous êtes <i>Neutralisé</i> ou si votre Vitesse tombe à 0."
                ]
            },
            {
                type: "paragraph",
                content: "C'est un excellent choix pour tenir un goulet d'étranglement, protéger un allié, ou simplement survivre jusqu'à votre prochain tour."
            }
        ]
    },
    {
        title: "Utiliser un bouclier",
        optional: "Standard rule",
        icon: "roundshield",
        subtitle: "Équiper ou déséquiper un bouclier",
        description: "Prendre l'action Utilisation pour équiper ou déséquiper un bouclier.",
        reference: "PHB 2024, pg. 153.",
        summary: "Équiper ou déséquiper un bouclier utilise l'action Utilisation, rendant la gestion du bouclier plus coûteuse qu'une interaction libre avec un objet.",
        bullets: [
            {
                type: "paragraph",
                content: "Contrairement au dégainage ou au rengainage de nombreuses armes, la gestion d'un bouclier utilise l'action Utilisation. Cela représente le temps nécessaire pour fixer ou libérer correctement le bouclier avant que son bonus de CA s'applique ou prenne fin."
            }
        ]
    },
    {
        title: "S'extraire d'une lutte",
        optional: "Standard rule",
        icon: "manacles",
        subtitle: "S'extraire d'une lutte ou d'une entrave",
        description: "Utiliser votre action pour tenter de vous libérer d'une lutte ou d'un effet similaire en réussissant un test contre un DD fixe.",
        reference: "PHB 2024, pg. 291.",
        summary: "Effectuez un test de Force (Athlétisme) ou Dextérité (Acrobaties) contre le DD d'évasion de l'effet. Pour une lutte initiée par une créature, le DD est son DD de lutte (8 + mod. FOR + Bonus de maîtrise).",
        bullets: [
            {
                type: "paragraph",
                content: "Lorsque vous êtes Agrippé ou Entravé, l'action S'extraire est votre chemin direct vers la liberté. Les règles 2024 simplifient cela en vous faisant effectuer un test contre un DD fixe défini par l'effet, plutôt qu'un test contesté."
            },
            {
                type: "list",
                items: [
                    "Pour s'extraire d'une lutte, vous utilisez votre action pour effectuer un test de <b>Force (Athlétisme)</b> ou <b>Dextérité (Acrobaties)</b> (votre choix) contre le DD d'évasion de l'effet.",
                    "Pour une lutte initiée par une créature, le DD est le DD de lutte de cette créature (8 + mod. FOR + Bonus de maîtrise).",
                    "Cette action peut également être utilisée pour d'autres effets spécifiant une évasion, comme être pris dans un filet."
                ]
            },
            {
                type: "paragraph",
                content: "Ce changement rend l'évasion plus prévisible et moins dépendante du jet de l'adversaire, permettant une planification tactique plus fiable."
            }
        ]
    },
    {
        title: "Lutte",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Attaque spéciale à mains nues",
        description: "Dans le cadre de l'une de vos attaques, tenter d'agripper une créature en la forçant à réussir un jet de sauvegarde de Force ou de Dextérité ou à subir l'état Agrippé.",
        reference: "PHB 2024, pg. 317.",
        summary: "Dans le cadre de l'action Attaque, vous pouvez forcer une créature à effectuer un jet de sauvegarde de Force ou de Dextérité contre votre DD de lutte. En cas d'échec, la cible subit l'état Agrippé.",
        bullets: [
            {
                type: "paragraph",
                content: "La lutte est désormais plus rapide et plus cohérente, utilisant un jet de sauvegarde de la cible au lieu d'un test contesté. Cela en fait une tactique de contrôle plus fiable pour les personnages forts, initiée dans le cadre de l'action Attaque."
            },
            {
                type: "list",
                items: [
                    "Cela remplace l'une de vos attaques lorsque vous prenez l'action Attaque. Vous avez besoin d'au moins une main libre.",
                    "La cible ne doit pas être de plus d'une catégorie de taille supérieure à la vôtre et doit être à portée.",
                    "La cible choisit d'effectuer un <b>jet de sauvegarde de Force ou de Dextérité</b> (DD = 8 + votre modificateur de Force + votre bonus de maîtrise).",
                    "En cas d'échec, la cible subit l'état <b>Agrippé</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Une lutte réussie est un excellent moyen d'immobiliser un seul ennemi, l'empêchant d'atteindre vos alliés plus vulnérables."
            }
        ]
    },
    {
        title: "Soutien",
        optional: "Standard rule",
        icon: "allforone",
        subtitle: "Accorder l'Avantage à un allié",
        description: "Utiliser votre action pour aider un allié, lui accordant l'Avantage sur un test de caractéristique ou un jet d'attaque.",
        reference: "PHB 2024, pg. 291.",
        summary: "Vous pouvez accorder l'Avantage à un allié sur son prochain test de caractéristique, ou lui accorder l'Avantage sur son prochain jet d'attaque contre une créature à 1,50 m de vous.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Soutien vous permet d'assister directement un allié, soit en distrayant un adversaire pour créer une ouverture, soit en collaborant sur une tâche. Vous pouvez choisir l'une des deux façons distinctes d'aider."
            },
            {
                type: "list",
                items: [
                    "<b>Assister un test de caractéristique :</b> Vous aidez une autre créature dans un Test de d20. Elle bénéficie de l'<b>Avantage</b> au prochain test de caractéristique qu'elle effectue, à condition de le faire avant le début de votre prochain tour.",
                    "<b>Distraire un ennemi :</b> Vous pouvez également aider un allié à attaquer une créature à 1,50 m de vous. Le prochain jet d'attaque d'un allié contre cette cible bénéficie de l'<b>Avantage</b>, à condition que l'attaque survienne avant le début de votre prochain tour."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une manière fantastique d'améliorer les chances lors d'une attaque critique, comme l'Attaque sournoise d'un Roublard ou le Châtiment divin d'un Paladin, faisant du travail d'équipe une mécanique tangible."
            }
        ]
    },
    {
        title: "Furtivité",
        optional: "Standard rule",
        icon: "hood",
        subtitle: "Tenter de se dissimuler",
        description: "Effectuer un test de Dextérité (Discrétion) DD 15 pour se cacher, bénéficiant des effets de l'état Invisible.",
        reference: "PHB 2024, pg. 291.",
        summary: "Si vous êtes dans une zone à visibilité nulle ou derrière un abri des 3/4 ou Total, vous pouvez effectuer un test de Dextérité (Discrétion) DD 15. En cas de réussite, vous bénéficiez des effets de l'état Invisible jusqu'à ce que vous soyez découvert ou vous révéliez.",
        bullets: [
            {
                type: "paragraph",
                content: "Les règles relatives à la dissimulation ont été clarifiées pour plus de cohérence. Un succès sur un test contre un DD fixe vous rend effectivement Invisible jusqu'à ce que vous vous révéliez ou soyez découvert."
            },
            {
                type: "list",
                items: [
                    "Vous devez être dans une zone à visibilité nulle ou derrière au moins un abri des trois quarts ou Total pour tenter de vous cacher. Vous ne pouvez pas vous cacher d'une créature qui vous voit.",
                    "Effectuez un test de <b>Dextérité (Discrétion) DD 15</b>.",
                    "En cas de réussite, vous bénéficiez de l'état <b>Invisible</b> vis-à-vis des autres créatures. Notez le résultat total de votre test.",
                    "Une créature peut utiliser l'action Observation pour effectuer un test de Sagesse (Perception) contre le résultat de votre test de Discrétion pour vous localiser.",
                    "L'état Invisible prend fin si vous émettez un son plus fort qu'un murmure, effectuez un jet d'attaque, lancez un sort avec une composante verbale, ou n'êtes plus dans une zone obscurcie ou derrière un abri."
                ]
            },
            {
                type: "paragraph",
                content: "Ce nouveau DD standardisé fait de la discrétion une option tactique plus fiable, avec des conditions claires pour la réussite et l'échec."
            }
        ]
    },
    {
        title: "Improviser",
        optional: "Standard rule",
        icon: "juggler",
        subtitle: "Toute action ne figurant pas dans cette liste",
        description: "Effectuer toute action que vous pouvez imaginer et qui n'est pas couverte par les autres actions standard, sous réserve de l'approbation du MJ.",
        reference: "PHB 2024, pg. 291.",
        summary: "Effectuez une action non couverte par les règles. Le MJ détermine si c'est possible et quel Test de d20, le cas échéant, est requis.",
        bullets: [
            {
                type: "paragraph",
                content: "Lorsque vous souhaitez tenter quelque chose de créatif et non conventionnel, vous utilisez l'action Improviser. C'est au MJ de décider ce qui est possible et quels tests, le cas échéant, sont requis."
            },
            {
                type: "list",
                items: [
                    "Lorsque vous décrivez une action non détaillée ailleurs, le MJ vous dit si c'est possible et quel type de Test de d20, le cas échéant, vous devez effectuer pour déterminer le succès ou l'échec."
                ]
            },
            {
                type: "paragraph",
                content: "Cette action codifie la « règle du cool », garantissant qu'il y a toujours de l'espace dans les règles pour l'ingéniosité et les idées spontanées des joueurs."
            }
        ]
    },
    {
        title: "Influence",
        optional: "Standard rule",
        icon: "conversation",
        subtitle: "Affecter socialement une créature",
        description: "Utiliser votre action pour persuader, tromper ou intimider une créature, pouvant altérer son comportement en plein combat.",
        reference: "PHB 2024, pg. 291.",
        summary: "Effectuez un test de Charisme (Persuasion, Tromperie ou Intimidation) pour affecter socialement une créature. Un succès peut temporairement modifier son comportement sans imposer d'état.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Influence fournit un cadre mécanique pour l'interaction sociale dans l'ordre d'initiative, permettant des issues allant au-delà du simple combat à mort. Elle repose sur un test de Charisme pour influencer l'attitude d'une créature."
            },
            {
                type: "list",
                items: [
                    "En tant qu'action, vous pouvez tenter d'influencer une créature avec laquelle vous pouvez communiquer.",
                    "Effectuez un test de Charisme avec Tromperie, Intimidation ou Persuasion. Le MJ peut vous demander de contester cela avec le test de Sagesse (Perspicacité) de la créature.",
                    "L'attitude de la créature (Amicale, Indifférente, Hostile) peut affecter le DD.",
                    "Un succès peut provoquer un changement de comportement temporaire, comme amener une créature hostile à faire une pause pour écouter, mais n'impose pas d'état comme Charmé ou Effrayé."
                ]
            },
            {
                type: "paragraph",
                content: "C'est un excellent outil pour les personnages charismatiques souhaitant désamorcer des combats, créer des distractions ou atteindre des objectifs sans violence."
            }
        ]
    },
    {
        title: "Interagir avec un objet",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Votre interaction gratuite",
        description: "Vous pouvez également interagir gratuitement avec un objet ou un élément de l'environnement dans le cadre de votre déplacement ou action.",
        reference: "PHB 2024, pg. 294.",
        summary: "Dans le cadre de votre déplacement ou action, vous pouvez interagir gratuitement avec un objet (ex. : dégainer une arme, ouvrir une porte). Une seconde interaction peut nécessiter l'action Utilisation.",
        bullets: [
            {
                type: "paragraph",
                content: "Ce n'est pas une action à part entière, mais une part cruciale de l'économie d'action de votre tour. Si vous avez besoin d'effectuer une seconde interaction similaire ou d'utiliser un objet avec sa propre règle d'activation, le MJ peut exiger l'action Utilisation."
            },
            {
                type: "list",
                items: [
                    "Vous pouvez effectuer cette interaction pendant votre déplacement ou votre action.",
                    "Exemples : dégainer ou rengainer une épée, ouvrir ou fermer une porte, sortir une potion de votre sac à dos, ramasser un objet tombé, ou prendre un bibelot sur une table."
                ]
            },
            {
                type: "paragraph",
                content: "Cette règle explique pourquoi une manipulation simple, comme dégainer une arme en entrant dans un combat, tient généralement dans le reste de votre tour."
            }
        ]
    },
    {
        title: "Intention",
        optional: "Standard rule",
        icon: "stopwatch",
        subtitle: "Choisir un déclencheur et une action",
        description: "Utiliser votre action pour préparer une réaction. Vous définissez un déclencheur perceptible et choisissez une action à effectuer lorsqu'il se produit.",
        reference: "PHB 2024, pg. 291.",
        summary: "Utilisez votre action pour spécifier un déclencheur perceptible et choisir une action, une action bonus ou un déplacement. Lorsque le déclencheur survient, vous pouvez utiliser votre réaction pour effectuer l'activité choisie.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Intention vous permet d'agir en dehors de votre tour, interrompant le flux normal du combat. C'est un processus en deux étapes : vous utilisez votre action pour définir les conditions, et votre réaction pour exécuter le plan."
            },
            {
                type: "list",
                items: [
                    "Définissez d'abord un déclencheur perceptible (ex. : « Quand un ennemi ouvre la porte »).",
                    "Choisissez ensuite l'action que vous effectuerez en réponse (ex. : « Je lancerai Trait de feu dessus ») ou optez pour un déplacement n'excédant pas votre Vitesse.",
                    "Lorsque le déclencheur survient, vous pouvez utiliser votre Réaction pour effectuer l'action prévue, immédiatement après la fin du déclencheur.",
                    "Si vous préparez un sort, vous le lancez normalement à votre tour mais retenez son énergie, ce qui nécessite la <b>Concentration</b>. Si votre concentration est rompue, le sort et l'emplacement de sort sont perdus."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une option tactique puissante, mais si le déclencheur ne se produit jamais, vous perdez à la fois votre action et votre réaction pour ce round."
            }
        ]
    },
    {
        title: "Observation",
        optional: "Standard rule",
        icon: "magnifyingglass",
        subtitle: "Tenter de trouver quelque chose",
        description: "Consacrer votre attention à trouver quelque chose de caché ou non évident, généralement avec un test de Sagesse.",
        reference: "PHB 2024, pg. 291.",
        summary: "Effectuez un test de Sagesse pour discerner quelque chose de non évident. Les compétences courantes incluent Perspicacité, Médecine, Perception ou Survie, selon ce que vous cherchez.",
        bullets: [
            {
                type: "paragraph",
                content: "Alors que la conscience passive représente ce que vous remarquez sans effort, l'action Observation est une tentative concentrée pour discerner quelque chose de caché, flou ou facile à négliger."
            },
            {
                type: "list",
                items: [
                    "Utilisez <b>Sagesse (Perception)</b> pour repérer une créature ou un objet caché.",
                    "Utilisez <b>Sagesse (Perspicacité)</b> pour lire l'état ou l'intention d'une créature.",
                    "Utilisez <b>Sagesse (Médecine)</b> pour diagnostiquer une créature ou déterminer la cause du décès.",
                    "Utilisez <b>Sagesse (Survie)</b> pour suivre des traces ou des signes dans l'environnement."
                ]
            },
            {
                type: "paragraph",
                content: "C'est l'action à prendre lorsque vous savez que quelque chose cloche et que vous devez prendre un moment pour examiner soigneusement votre environnement."
            }
        ]
    },
    {
        title: "Bousculade",
        optional: "Standard rule",
        icon: "hand",
        subtitle: "Attaque spéciale à mains nues",
        description: "Dans le cadre de l'une de vos attaques, tenter de mettre une créature à terre ou de la repousser de 1,50 m en la forçant à réussir un jet de sauvegarde de Force ou de Dextérité.",
        reference: "PHB 2024, pg. 317.",
        summary: "Dans le cadre de l'action Attaque, vous pouvez forcer une créature à effectuer un jet de sauvegarde de Force ou de Dextérité contre votre DD de lutte. En cas d'échec, vous pouvez mettre la cible à Terre ou la repousser de 1,50 m.",
        bullets: [
            {
                type: "paragraph",
                content: "Comme la Lutte, la Bousculade est maintenant résolue avec un jet de sauvegarde au lieu d'un test contesté, en faisant une manœuvre de contrôle du champ de bataille plus rapide et plus fiable. Elle remplace l'une de vos attaques de l'action Attaque."
            },
            {
                type: "list",
                items: [
                    "Cela remplace l'une de vos attaques lorsque vous prenez l'action Attaque. La cible ne doit pas être de plus d'une catégorie de taille supérieure à la vôtre et doit être à portée.",
                    "La cible choisit d'effectuer un <b>jet de sauvegarde de Force ou de Dextérité</b> (DD = 8 + votre modificateur de Force + votre bonus de maîtrise).",
                    "En cas d'échec, vous choisissez l'un de deux effets : soit vous mettez la cible <b>à Terre</b>, soit vous la repoussez de <b>1,50 m</b> directement loin de vous."
                ]
            },
            {
                type: "paragraph",
                content: "Mettre un adversaire à terre est un excellent moyen d'accorder l'Avantage à vos alliés au corps à corps, tandis que repousser peut créer de l'espace ou pousser un ennemi dans un danger."
            }
        ]
    },
    {
        title: "Stabiliser une créature",
        optional: "Standard rule",
        icon: "firstaid",
        subtitle: "Secourir une créature mourante",
        description: "Prendre l'action Soutien et réussir un test de Médecine DD 10 pour stabiliser une créature à 0 point de vie.",
        reference: "PHB 2024, pg. 341.",
        summary: "Prenez l'action Soutien et réussissez un test de Sagesse (Médecine) DD 10 pour rendre une créature à 0 PV Stable. Un Kit de soins utilise l'action Utilisation et une utilisation du kit pour stabiliser sans test.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est le moyen non magique d'empêcher une créature à 0 point de vie de continuer à effectuer des jets de sauvegarde contre la mort. La créature reste Inconsciente jusqu'à ce qu'elle récupère des points de vie."
            },
            {
                type: "list",
                items: [
                    "Sans kit, prenez l'action <b>Soutien</b> et réussissez un test de <b>Sagesse (Médecine) DD 10</b>.",
                    "Avec un <b>Kit de soins</b>, prenez l'action <b>Utilisation</b>, dépensez une utilisation, et stabilisez la créature sans test de Sagesse (Médecine).",
                    "Une créature Stable à 0 PV n'effectue pas de jets de sauvegarde contre la mort, cesse d'être Stable si elle subit des dégâts, et récupère 1 point de vie après 1d4 heures si elle n'est pas soignée auparavant."
                ]
            },
            {
                type: "paragraph",
                content: "La magie de soin reste le moyen le plus rapide de remettre un allié au combat, mais la stabilisation empêche une créature tombée de glisser vers la mort."
            }
        ]
    },
    {
        title: "Étude",
        optional: "Standard rule",
        icon: "bookmarklet",
        subtitle: "Se remémorer des informations",
        description: "Utiliser votre action et un test d'Intelligence pour vous remémorer des informations ou examiner des indices.",
        reference: "PHB 2024, pg. 291.",
        summary: "Effectuez un test d'Intelligence pour étudier un sujet ou un indice. Les compétences courantes incluent Arcanes, Histoire, Investigation, Nature ou Religion, selon le sujet.",
        bullets: [
            {
                type: "paragraph",
                content: "L'action Étude couvre le raisonnement concentré, la recherche et le rappel des connaissances. Elle donne aux compétences basées sur l'Intelligence une place claire dans l'économie d'action."
            },
            {
                type: "list",
                items: [
                    "Utilisez <b>Intelligence (Arcanes)</b> pour les sorts, objets magiques et lore planaire.",
                    "Utilisez <b>Intelligence (Histoire)</b> pour les événements historiques, peuples ou lieux.",
                    "Utilisez <b>Intelligence (Investigation)</b> pour déduire comment des indices ou mécanismes s'assemblent.",
                    "Utilisez <b>Intelligence (Nature)</b> ou <b>Religion</b> pour les sujets naturels ou divins/morts-vivants."
                ]
            },
            {
                type: "paragraph",
                content: "Le MJ fixe le DD et les informations utiles apprises, en fonction de la situation et de l'approche du personnage."
            }
        ]
    },
    {
        title: "Utilisation",
        optional: "Standard rule",
        icon: "snatch",
        subtitle: "Utiliser un objet ou un équipement",
        description: "Utiliser un objet ou une interaction non magique qui nécessite une action, comme spécifié par l'objet ou le MJ.",
        reference: "PHB 2024, pg. 291.",
        summary: "Utilisez l'action Utilisation pour les équipements non magiques ou les interactions avec des objets nécessitant une action, comme répandre des chausse-trappes, utiliser des outils ou manipuler un objet complexe.",
        bullets: [
            {
                type: "paragraph",
                content: "Les règles 2024 utilisent l'action Utilisation pour de nombreuses interactions concrètes avec des objets. L'objet ou la situation vous indique quel test, portée ou effet s'applique."
            },
            {
                type: "list",
                items: [
                    "Utilisez l'équipement d'aventurier non magique qui spécifie l'action Utilisation, comme les chausse-trappes, un kit d'escalade ou des entraves.",
                    "Utilisez les outils appropriés lorsqu'un objet le requiert, comme les outils de voleur pour une serrure ou un piège.",
                    "Les objets magiques et les potions utilisent le timing indiqué dans leurs propres descriptions ; ils ne sont pas automatiquement régis par Utilisation."
                ]
            },
            {
                type: "paragraph",
                content: "Cette distinction est importante car certains objets sont des Actions bonus ou des actions Magie plutôt que des actions Utilisation."
            }
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        optional: "Standard rule",
        icon: "embrassedenergy",
        subtitle: "Certaines aptitudes utilisent des actions",
        description: "Activer une aptitude de classe, d'espèce ou autre qui nécessite explicitement une action comme indiqué dans sa description.",
        reference: "Voir la page de votre classe pour plus d'informations.",
        summary: "Activez une aptitude unique de votre classe, espèce ou autre source qui nécessite une action ou une action Magie, comme spécifié dans la description de l'aptitude.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est un fourre-tout pour les nombreuses aptitudes uniques accordées par vos choix de personnage. Vérifiez toujours la description d'une aptitude pour voir quel type d'action elle requiert, car cela peut varier considérablement."
            },
            {
                type: "list",
                items: [
                    "Vérifiez le texte de l'aptitude à chaque fois ; de nombreuses aptitudes 2024 sont passées au timing Action bonus ou action Magie."
                ]
            },
            {
                type: "paragraph",
                content: "Ces aptitudes sont souvent les capacités les plus puissantes et définissantes de votre personnage, en faisant la pierre angulaire de votre tour."
            }
        ]
    },
    {
        title: "Escalader une plus grande créature*",
        optional: "Optional rule",
        icon: "mountainclimbing",
        subtitle: "Escalader un adversaire plus grand",
        description: "En tant qu'action, tenter d'escalader une créature d'au moins deux catégories de taille supérieure, en la traitant comme un terrain.",
        reference: "DMG 2014, pg. 271.",
        summary: "Utilisez cette option de combat optionnelle héritée pour escalader une créature d'au moins deux catégories de taille supérieure, en traitant la plus grande créature comme un terrain et en vous déplaçant avec elle si le MJ le permet.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est une action de combat optionnelle héritée du DMG 2014, pas une action principale du PHB 2024. Elle reste utile pour les tables souhaitant un cadre pour les combats cinématiques contre de très grandes créatures."
            },
            {
                type: "list",
                items: [
                    "La cible doit être d'au moins deux catégories de taille supérieure à l'escaladeur.",
                    "Le MJ décide si les circonstances nécessitent un test de caractéristique pour escalader la créature, en la traitant comme un terrain.",
                    "En cas de succès, l'escaladeur se déplace dans l'espace de la cible, s'y accroche et se déplace avec elle.",
                    "L'escaladeur a l'<b>Avantage</b> sur ses jets d'attaque contre la créature qu'il escalade.",
                    "La plus grande créature peut tenter de déloger l'escaladeur, généralement avec un test contesté de Force (Athlétisme) contre le Force (Athlétisme) ou Dextérité (Acrobaties) de l'escaladeur."
                ]
            },
            {
                type: "paragraph",
                content: "Comme il s'agit d'une règle optionnelle héritée, le MJ devrait définir les attentes avant la partie plutôt que de la traiter comme une action 2024 par défaut."
            }
        ]
    },
    {
        title: "Administrer une potion**",
        optional: "Homebrew rule",
        icon: "healthpotion",
        subtitle: "Utiliser une potion sur un autre",
        description: "Une règle de table plus stricte qui fait de l'administration d'une potion à un autre une action complète, au lieu d'utiliser le timing d'action bonus des potions 2024.",
        summary: "Une règle maison pour les tables souhaitant qu'aider une autre créature avec une potion coûte une action complète, même si une Potion de soins peut normalement être administrée comme Action bonus en 2024.",
        bullets: [
            {
                type: "paragraph",
                content: "Cette règle maison ralentit intentionnellement l'utilisation assistée des potions pour les tables plus réalistes ou tactiques. Elle doit être traitée comme une règle de table délibérée, pas comme la valeur par défaut 2024."
            },
            {
                type: "list",
                items: [
                    "<b>Règle par défaut 2024 :</b> Une Potion de soins peut être bue ou administrée à une autre créature à 1,50 m comme Action bonus.",
                    "<b>Règle maison :</b> Se boire une potion soi-même reste une Action bonus, mais l'administrer à une autre créature coûte une action."
                ]
            },
            {
                type: "paragraph",
                content: "Cela préserve une partie de l'ancienne tension d'économie d'action autour du secours d'un allié tombé tout en gardant l'usage personnel rapide."
            }
        ]
    },
    {
        title: "Tir ciblé**",
        optional: "Homebrew rule",
        icon: "archerytarget",
        subtitle: "Viser une partie du corps spécifique",
        description: "Une règle maison permettant à un attaquant de prendre un malus à son jet pour avoir la chance d'infliger un effet débilitant spécifique.",
        summary: "Une règle maison où vous prenez un malus à votre jet d'attaque (généralement -5) pour infliger une condition spécifique en cas de réussite, comme Étourdir une cible d'un coup à la tête ou la Ralentir d'un coup à la jambe.",
        bullets: [
            {
                type: "paragraph",
                content: "Ce homebrew ajoute une touche cinématique au combat, permettant des effets allant au-delà des simples dégâts. Il récompense la réflexion tactique mais peut ralentir le jeu s'il n'est pas géré avec un ensemble de règles simple et clair."
            },
            {
                type: "list",
                items: [
                    "En tant qu'action, déclarez un « tir ciblé » et prenez un malus à votre jet d'attaque (généralement -5).",
                    "En cas de réussite, vous appliquez un effet supplémentaire selon la zone visée :",
                    "<b>Tête :</b> Imposez l'état Étourdi jusqu'à la fin de son prochain tour.",
                    "<b>Bras/Main :</b> Forcez la cible à lâcher un objet tenu.",
                    "<b>Jambe/Pied :</b> Imposez l'état Ralenti jusqu'à la fin de son prochain tour.",
                    "<b>Œil :</b> Imposez l'état Aveuglé pendant 1 round (nécessite souvent un malus plus élevé, comme -10)."
                ]
            },
            {
                type: "paragraph",
                content: "Utiliser des effets définis à la table comme Étourdi et Ralenti peut rendre cette règle maison distinctive, mais ces effets doivent être convenus avant la partie."
            }
        ]
    },
    {
        title: "Garde**",
        optional: "Homebrew rule",
        icon: "shield",
        subtitle: "Protéger un allié adjacent",
        description: "Une action homebrew permettant à un personnage de défendre activement un allié, imposant le Désavantage aux attaques contre lui.",
        summary: "Utilisez votre action pour protéger un allié adjacent. Les attaques contre lui ont le Désavantage, mais toute attaque qui le rate peut être redirigée pour vous toucher à la place. Votre Vitesse devient 0.",
        bullets: [
            {
                type: "paragraph",
                content: "Cette action homebrew fournit une mécanique dédiée au « tank », créant un rapport risque/récompense clair pour les personnages axés sur la protection des autres. Elle permet à un défenseur de s'interposer activement."
            },
            {
                type: "list",
                items: [
                    "En tant qu'action, choisissez un allié à 1,50 m de vous. Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre cet allié a le Désavantage tant que vous êtes à 1,50 m de lui.",
                    "Cependant, jusqu'au début de votre prochain tour, toute attaque qui rate votre allié protégé peut être redirigée vers vous. L'attaquant utilise le jet d'attaque original pour voir s'il touche votre CA.",
                    "Pendant l'utilisation de cette action, votre Vitesse est 0."
                ]
            },
            {
                type: "paragraph",
                content: "Cette action est un outil puissant pour les défenseurs, mais la mécanique de redirection en fait une manœuvre risquée face à des adversaires précis ou nombreux."
            }
        ]
    }
]
