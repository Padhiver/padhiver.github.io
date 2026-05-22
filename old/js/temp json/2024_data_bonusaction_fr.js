data_bonusaction = [
    {
        title: "Lancer un sort",
        optional: "Standard rule",
        icon: "magicswirl",
        subtitle: "Temps d'incantation de 1 action bonus",
        description: "Lancer un sort dont le temps d'incantation est une action bonus.",
        reference: "PHB 2024, pg. 301.",
        summary: "Lancez un sort avec un temps d'incantation d'1 action bonus. Dans les règles 2024, un lanceur de sorts ne peut dépenser qu'un seul emplacement de sort pour lancer un sort à son tour.",
        bullets: [
            {
                type: "paragraph",
                content: "Les sorts en action bonus utilisent le timing indiqué dans l'entrée Temps d'incantation du sort. La limite d'incantation 2024 est basée sur les emplacements de sort dépensés pendant le tour, et non sur l'ancienne restriction des sorts mineurs en action bonus."
            },
            {
                type: "list",
                items: [
                    "La plupart des sorts utilisent l'action <b>Magie</b>, mais certains sorts ont un Temps d'incantation d'<b>Action bonus</b>, de <b>Réaction</b>, ou plus long.",
                    "À votre tour, vous ne pouvez dépenser qu'un seul <b>emplacement de sort</b> pour lancer un sort.",
                    "Après avoir lancé un sort en action bonus avec un emplacement de sort, vous pouvez toujours prendre une action non magique ou lancer un sort qui ne dépense pas d'emplacement de sort si une autre règle le permet."
                ]
            },
            {
                type: "paragraph",
                content: "Cela garde les sorts en action bonus rapides sans conserver l'ancienne formulation 2014 qui limitait le reste du tour aux sorts mineurs en action standard."
            }
        ]
    },
    {
        title: "Combat à deux armes",
        optional: "Standard rule",
        icon: "crossedswords",
        subtitle: "Utiliser avec l'action Attaque",
        description: "Lorsque vous prenez l'action Attaque avec une arme légère, utilisez votre action bonus pour effectuer une attaque avec une seconde arme légère.",
        reference: "PHB 2024, pg. 291.",
        summary: "Après avoir pris l'action Attaque avec une arme légère, vous pouvez utiliser votre action bonus pour effectuer une attaque avec une autre arme légère. Vous n'ajoutez pas votre modificateur de caractéristique aux dégâts de l'attaque bonus.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est la règle classique du combat à deux armes, vous permettant d'échanger votre action bonus contre une attaque supplémentaire. Cela augmente votre potentiel offensif au prix d'un bouclier ou d'une arme à deux mains."
            },
            {
                type: "list",
                items: [
                    "Lorsque vous prenez l'action Attaque et attaquez avec une arme ayant la propriété <b>Légère</b>, vous pouvez utiliser une action bonus pour attaquer avec une autre arme <b>Légère</b> que vous tenez dans l'autre main.",
                    "Vous n'ajoutez pas votre modificateur de caractéristique aux dégâts de l'attaque bonus, sauf si ce modificateur est négatif.",
                    "Le style de combat Combat à deux armes vous permet d'ajouter votre modificateur de caractéristique aux dégâts de cette attaque bonus.",
                    "Le don Duelliste vous permet d'utiliser des armes sans la propriété Légère pour ce combat."
                ]
            },
            {
                type: "paragraph",
                content: "Notez que certaines armes avec la nouvelle propriété <i>Nick</i> permettent une attaque supplémentaire sans utiliser d'action bonus, les rendant très attrayantes pour les combattants à deux armes et libérant l'action bonus pour d'autres usages."
            }
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        optional: "Standard rule",
        icon: "embrassedenergy",
        subtitle: "Certaines aptitudes utilisent des actions bonus",
        description: "Activer une aptitude de classe, d'espèce ou autre qui utilise une action bonus, comme spécifié dans sa description.",
        reference: "Voir les descriptions de classes dans le PHB 2024.",
        summary: "Activez une aptitude unique de votre classe, espèce ou autre source qui nécessite une action bonus, comme spécifié dans la description de l'aptitude.",
        bullets: [
            {
                type: "paragraph",
                content: "Bon nombre des aptitudes de classe les plus emblématiques s'activent en tant qu'action bonus, permettant aux personnages d'effectuer leurs actions signature tout en prenant une action principale comme attaquer ou lancer un sort."
            },
            {
                type: "list",
                items: [
                    "Exemples : un Barbare entrant en Rage, l'Action rusée d'un Roublard, l'Imposition des mains d'un Paladin, ou la Forme sauvage d'un Druide."
                ]
            },
            {
                type: "paragraph",
                content: "Gérer votre action bonus est un aspect clé de la maîtrise de ces classes, car elle est souvent en concurrence avec d'autres options comme le combat à deux armes ou les sorts en action bonus."
            }
        ]
    },
    {
        title: "Viser**",
        optional: "Homebrew rule",
        icon: "archerytarget",
        subtitle: "Obtenir l'Avantage sur une attaque",
        description: "Une règle de table permettant à une créature de dépenser son action bonus et son déplacement pour obtenir l'Avantage sur une attaque.",
        reference: "Inspiré de Visée stable, TCE.",
        summary: "Si vous ne vous êtes pas déplacé ce tour, cette règle maison vous permet d'utiliser une action bonus pour obtenir l'Avantage sur votre prochain jet d'attaque ce tour, réduisant votre Vitesse à 0 jusqu'à la fin du tour.",
        bullets: [
            {
                type: "paragraph",
                content: "Ce n'est pas une option d'action générale du DMG 2024. Elle est conservée en tant que règle maison inspirée de l'aptitude optionnelle de Roublard Visée stable issue du Chaudron des merveilles de Tasha."
            },
            {
                type: "list",
                items: [
                    "À utiliser uniquement si la table souhaite une option de visée générale disponible au-delà de l'aptitude du Roublard.",
                    "Vous ne devez pas vous être déplacé ce tour.",
                    "Utiliser cette action bonus accorde l'Avantage sur le prochain jet d'attaque effectué ce tour et réduit votre Vitesse à 0 jusqu'à la fin du tour."
                ]
            },
            {
                type: "paragraph",
                content: "Comme cela élargit une aptitude optionnelle spécifique à une classe, confirmez-la en tant que règle de table avant la partie."
            }
        ]
    },
    {
        title: "Bousculade forcée*",
        optional: "Optional rule",
        icon: "shieldbash",
        subtitle: "Traverser l'espace d'une créature hostile",
        description: "En tant qu'action ou action bonus, tenter de forcer votre passage à travers l'espace d'une créature hostile via un test d'Athlétisme contesté.",
        reference: "DMG 2014, pg. 272.",
        summary: "En tant qu'action bonus, effectuez un test de Force (Athlétisme) contesté par l'Athlétisme d'un ennemi. Si vous l'emportez, vous pouvez traverser son espace une fois ce tour. Vous avez l'Avantage si vous êtes plus grand.",
        bullets: [
            {
                type: "paragraph",
                content: "Cette règle optionnelle permet aux personnages forts d'utiliser la force brute pour percer une ligne ennemie en initiant un contest de force. Elle peut être utilisée comme action ou, plus souplement, comme action bonus."
            },
            {
                type: "list",
                items: [
                    "En tant qu'action ou action bonus, le bousculeur effectue un test de Force (Athlétisme) contesté par le test de Force (Athlétisme) de la créature hostile.",
                    "Le bousculeur a l'<b>Avantage</b> au test s'il est plus grand que la créature hostile, ou le <b>Désavantage</b> s'il est plus petit.",
                    "Si le bousculeur remporte le contest, il peut traverser l'espace de la créature hostile une fois ce tour."
                ]
            },
            {
                type: "paragraph",
                content: "Disposer de cette option en action bonus la rend bien plus viable pour les personnages qui souhaitent également attaquer lors du tour où ils se repositionnent."
            }
        ]
    },
    {
        title: "Culbute*",
        optional: "Optional rule",
        icon: "acrobatic",
        subtitle: "Traverser l'espace d'une créature hostile",
        description: "En tant qu'action ou action bonus, tenter de se faufiler habilement à travers l'espace d'une créature hostile via un test d'Acrobaties contesté.",
        reference: "DMG 2014, pg. 272.",
        summary: "En tant qu'action bonus, effectuez un test de Dextérité (Acrobaties) contesté par les Acrobaties d'un ennemi. Si vous l'emportez, vous pouvez traverser son espace une fois ce tour.",
        bullets: [
            {
                type: "paragraph",
                content: "Alternative agile à la Bousculade forcée, la Culbute permet aux personnages dextres de se faufiler devant un adversaire en misant sur l'acrobatie plutôt que sur la force brute. Elle peut être utilisée comme action ou comme action bonus."
            },
            {
                type: "list",
                items: [
                    "En tant qu'action ou action bonus, le culbuteur effectue un test de Dextérité (Acrobaties) contesté par le test de Dextérité (Acrobaties) de la créature hostile.",
                    "Si le culbuteur remporte le contest, il peut traverser l'espace de la créature hostile une fois ce tour."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une excellente action bonus pour les personnages mobiles comme les Moines ou les Roublards pour naviguer sur un champ de bataille encombré sans sacrifier leur action principale."
            }
        ]
    },
    {
        title: "Potion de soins",
        optional: "Standard rule",
        icon: "potionball",
        subtitle: "Boire ou administrer",
        description: "Boire une Potion de soins ou l'administrer à une autre créature à 1,50 m en tant qu'action bonus.",
        reference: "PHB 2024, pg. 228.",
        summary: "Une Potion de soins peut être bue ou administrée à une autre créature à 1,50 m en tant qu'action bonus, restaurant 2d4 + 2 points de vie.",
        bullets: [
            {
                type: "paragraph",
                content: "Les règles 2024 rendent la Potion de soins basique plus rapide à utiliser en combat qu'en 2014. Cela s'applique aussi bien à la boire soi-même qu'à l'administrer à une créature proche."
            },
            {
                type: "list",
                items: [
                    "Utilisez une action bonus pour boire la potion vous-même.",
                    "Vous pouvez également utiliser une action bonus pour l'administrer à une autre créature à 1,50 m.",
                    "La cible récupère <b>2d4 + 2 points de vie</b>.",
                    "Les autres potions utilisent le timing indiqué dans leurs propres descriptions."
                ]
            },
            {
                type: "paragraph",
                content: "Ce changement facilite l'intégration des soins d'urgence dans un tour sans consommer l'action principale."
            }
        ]
    },
    {
        title: "Feinte**",
        optional: "Homebrew rule",
        icon: "liar",
        subtitle: "Obtenir l'Avantage sur votre attaque",
        description: "Une règle maison permettant à une créature d'utiliser son action bonus pour tenter de déjouer un adversaire, lui accordant l'Avantage sur sa propre attaque.",
        summary: "Une règle maison où vous utilisez une action bonus pour effectuer un test de Tromperie contesté par la Perspicacité d'une cible afin d'obtenir l'Avantage sur votre prochaine attaque contre elle.",
        bullets: [
            {
                type: "paragraph",
                content: "Bien que le Roublard 2024 bénéficie d'une capacité similaire via l'Action rusée, ce homebrew rend l'option disponible à tous les personnages, offrant un moyen non magique d'obtenir l'Avantage par la ruse plutôt que par la force brute."
            },
            {
                type: "list",
                items: [
                    "Ce n'est pas une action standard universelle ; c'est une option de table pour les campagnes où la ruse sociale compte davantage en combat.",
                    "En tant qu'action bonus, effectuez un test de Charisme (Tromperie) contesté par le test de Sagesse (Perspicacité) de la cible.",
                    "Si vous réussissez, vous obtenez l'Avantage sur votre prochain jet d'attaque contre cette créature ce tour."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une excellente option thématique pour les Bretteurs ou tout personnage qui mise autant sur la ruse que sur la puissance au combat."
            }
        ]
    },
    {
        title: "Changer d'arme**",
        optional: "Homebrew rule",
        icon: "switchweapon",
        subtitle: "Rengainer une arme et en dégainer une autre",
        description: "Une règle maison pour fluidifier le combat en permettant à un personnage de rengainer une arme et d'en dégainer une autre comme action bonus.",
        reference: "Basé sur 'Interagir avec un objet', PHB 2024, pg. 294.",
        summary: "Une règle maison vous permettant d'utiliser votre action bonus pour rengainer une arme que vous tenez et en dégainer une autre, contournant le coût en action normal pour une seconde interaction avec un objet.",
        bullets: [
            {
                type: "paragraph",
                content: "Ce homebrew de confort de jeu fluidifie le combat pour les personnages qui alternent fréquemment entre armes de corps à corps et à distance, ce qui est difficile sous les règles standard d'interaction avec les objets."
            },
            {
                type: "list",
                items: [
                    "<b>RAW :</b> Vous disposez d'une interaction gratuite avec un objet à votre tour (ex. : dégainer une épée). Rengainer cette épée puis en dégainer une autre nécessiterait votre action pour la seconde interaction.",
                    "<b>Règle maison :</b> En tant qu'action bonus, vous pouvez rengainer une arme que vous tenez et en dégainer une autre. Cela rend le changement d'arme plus fluide pour les personnages martiaux."
                ]
            },
            {
                type: "paragraph",
                content: "Particulièrement utile pour les personnages avec le style de combat Armes de jet ou ceux devant passer d'une arme à deux mains à une main libre pour lancer des sorts."
            }
        ]
    }
]
