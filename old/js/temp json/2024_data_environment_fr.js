data_environment_obscurance = [
    {
        title: "Vision aveugle",
        optional: "Standard rule",
        icon: "echoripples",
        subtitle: "Voir sans perception visuelle",
        description: "Une créature dotée de la Vision aveugle peut percevoir son environnement dans un rayon spécifique sans s'appuyer sur la vue, déjouant l'invisibilité et les ténèbres.",
        reference: "PHB 2024, pg. 183.",
        summary: "Permet à une créature de percevoir son environnement dans un rayon spécifique sans s'appuyer sur la vue, voyant tout ce qui n'est pas derrière un Abri total, même dans les ténèbres ou si la cible est Invisible.",
        tags: [
            "environment_vision"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Ce sens précis non visuel permet à une créature de localiser d'autres créatures et objets, même s'ils sont dans les ténèbres magiques ou sont invisibles."
            },
            {
                type: "list",
                items: [
                    "Dans son rayon, la créature peut effectivement voir tout ce qui n'est pas derrière un <b>Abri total</b>, même si elle subit l'état Aveuglé ou que la cible est dans les ténèbres.",
                    "Elle peut également voir une créature ayant l'état <b>Invisible</b> dans ce rayon.",
                    "Ce sens ne s'étend pas au-delà de sa portée définie."
                ]
            },
            {
                type: "paragraph",
                content: "La Vision aveugle est un puissant contrecoup aux ténèbres et à l'invisibilité, mais l'Abri total la bloque quand même."
            }
        ]
    },
    {
        title: "Lumière vive",
        optional: "Standard rule",
        icon: "starpupil",
        subtitle: "Vision normale",
        description: "Sous une lumière vive, comme la lumière directe du soleil ou la zone d'une torche, la plupart des créatures peuvent voir normalement sans pénalité.",
        reference: "PHB 2024, pg. 183.",
        summary: "Conditions d'éclairage normales où la plupart des créatures peuvent voir sans pénalité. Certaines aptitudes et monstres peuvent interagir spécifiquement avec la lumière vive.",
        tags: [
            "environment_light"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "C'est la condition d'éclairage par défaut pour la plupart des rencontres en journée et des intérieurs bien éclairés. Sous une lumière vive, la vision n'est pas entravée et les tests basés sur la vue sont effectués sans pénalité."
            },
            {
                type: "list",
                items: [
                    "Les sources incluent la lumière directe du soleil, la zone d'un sort de <i>Lumière du jour</i>, ou les environs immédiats des torches et lanternes.",
                    "Certaines créatures ont la Sensibilité à la lumière du soleil, leur donnant le Désavantage aux Tests de d20 en plein soleil."
                ]
            },
            {
                type: "paragraph",
                content: "La transition de la lumière vive vers des conditions plus sombres est une considération tactique importante, créant des zones d'ombre et de dissimulation."
            }
        ]
    },
    {
        title: "En feu",
        optional: "Standard rule",
        icon: "sun",
        subtitle: "Dégâts de feu persistants",
        description: "Une créature ou un objet en feu subit des dégâts de feu au début de chacun de ses tours jusqu'à ce que les flammes soient éteintes.",
        reference: "PHB 2024, pg. 361.",
        summary: "Lorsqu'une créature ou un objet est en feu, il subit 1d4 dégâts de Feu au début de chaque tour. Prendre une action pour éteindre le feu met fin au danger.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "En feu est un danger du PHB 2024 pour une exposition continue au feu après qu'un effet enflamme une créature ou un objet."
            },
            {
                type: "list",
                items: [
                    "Une créature ou un objet en feu subit <b>1d4 dégâts de Feu</b> au début de chacun de ses tours.",
                    "Une créature peut prendre une <b>action</b> pour éteindre le feu sur elle-même ou sur une autre créature ou objet à portée.",
                    "Le feu peut également être éteint par d'autres moyens, comme l'immersion dans l'eau."
                ]
            }
        ]
    },
    {
        title: "Ténèbres",
        optional: "Standard rule",
        icon: "worriedeyes",
        subtitle: "Visibilité nulle",
        description: "Les ténèbres créent une zone à visibilité nulle, aveuglant effectivement toute créature tentant de voir à l'intérieur sans sens spéciaux.",
        reference: "PHB 2024, pg. 183.",
        summary: "Crée une zone à visibilité nulle, aveuglant effectivement les créatures à l'intérieur. La Vision dans le noir permet à une créature de voir dans les ténèbres non magiques comme s'il s'agissait d'une lumière faible.",
        tags: [
            "environment_light"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "L'obscurité totale bloque entièrement la vision, imposant l'état Aveuglé aux créatures tentant de voir dans ou à travers la zone. Des sens spéciaux sont nécessaires pour agir efficacement dans les ténèbres."
            },
            {
                type: "list",
                items: [
                    "Les créatures sans sens spéciaux sont effectivement Aveuglées dans les ténèbres.",
                    "Les créatures dotées de la <b>Vision dans le noir</b> peuvent voir dans les ténèbres non magiques dans un rayon défini comme s'il s'agissait d'une lumière faible (elles subissent donc le Désavantage aux tests de Perception). Elles ne distinguent pas les couleurs dans les ténèbres.",
                    "Les ténèbres magiques, comme celles créées par le sort <i>Ténèbres</i>, bloquent même la Vision dans le noir."
                ]
            },
            {
                type: "paragraph",
                content: "La distinction entre ténèbres magiques et non magiques est cruciale, car seuls les sens les plus puissants (comme la Vision lucide) peuvent percer les ténèbres magiques."
            }
        ]
    },
    {
        title: "Vision dans le noir",
        optional: "Standard rule",
        icon: "semiclosedeye",
        subtitle: "Voir dans le noir",
        description: "Ce sens courant permet à une créature de voir dans une lumière faible comme s'il s'agissait d'une lumière vive, et dans les ténèbres comme s'il s'agissait d'une lumière faible.",
        reference: "PHB 2024, pg. 183.",
        summary: "Dans un rayon défini, vous voyez dans une lumière faible comme s'il s'agissait d'une lumière vive, et dans les ténèbres comme s'il s'agissait d'une lumière faible. Voir dans les ténèbres ainsi impose le Désavantage aux tests de Perception.",
        tags: [
            "environment_vision"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La Vision dans le noir n'est pas une vue parfaite dans l'obscurité. Elle permet à une créature de se déplacer et de combattre dans le noir, mais avec une pénalité clé à la perception qui rend plus difficile la détection d'éléments cachés."
            },
            {
                type: "list",
                items: [
                    "Dans son rayon défini, une créature dotée de la Vision dans le noir voit dans une <b>lumière faible comme s'il s'agissait d'une lumière vive</b>.",
                    "Elle voit dans les <b>ténèbres comme s'il s'agissait d'une lumière faible</b>. La zone est donc à Visibilité réduite pour elle, imposant le Désavantage aux tests de Perception.",
                    "La créature ne distingue pas les couleurs dans les ténèbres, seulement des nuances de gris.",
                    "La Vision dans le noir ne pénètre pas les ténèbres magiques."
                ]
            },
            {
                type: "paragraph",
                content: "Cela signifie qu'un personnage doté de la Vision dans le noir a toujours moins de chances de repérer un piège ou une créature cachée dans l'obscurité totale qu'en pleine lumière."
            }
        ]
    },
    {
        title: "Déshydratation",
        optional: "Standard rule",
        icon: "atsea",
        subtitle: "Pas assez d'eau",
        description: "Une créature qui boit trop peu d'eau risque l'Épuisement après avoir terminé un Repos long.",
        reference: "PHB 2024, pg. 365.",
        summary: "Une créature a besoin de 4 litres d'eau par jour, ou 8 litres par temps chaud. En boire seulement la moitié nécessite un JS de Constitution DD 15 après un Repos long ou 1 niveau d'Épuisement ; en boire moins provoque l'Épuisement automatiquement.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La déshydratation est un danger du PHB 2024 pour le suivi de l'eau lors des voyages et des scènes de survie."
            },
            {
                type: "list",
                items: [
                    "Une créature a besoin de <b>4 litres d'eau par jour</b>, ou <b>8 litres</b> par temps chaud.",
                    "Si elle n'en boit que la moitié, elle doit réussir un <b>jet de sauvegarde de Constitution DD 15</b> après avoir terminé un Repos long, sous peine de gagner 1 niveau d'Épuisement.",
                    "Si elle en boit moins de la moitié, elle gagne automatiquement 1 niveau d'Épuisement après avoir terminé un Repos long.",
                    "L'Épuisement causé par la déshydratation ne peut être supprimé tant que la créature n'a pas bu la quantité requise."
                ]
            }
        ]
    },
    {
        title: "Lumière faible",
        optional: "Standard rule",
        icon: "semiclosedeye",
        subtitle: "Visibilité réduite",
        description: "Une lumière faible, ou pénombre, crée une zone à visibilité réduite où les détails sont plus difficiles à distinguer.",
        reference: "PHB 2024, pg. 183.",
        summary: "Crée une zone à visibilité réduite. Les créatures subissent le Désavantage aux tests de Sagesse (Perception) basés sur la vue.",
        tags: [
            "environment_light"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La lumière faible représente des zones d'éclairage partiel, comme le crépuscule, une nuit de pleine lune, ou le bord du halo d'une torche. Cette obscurité partielle impose des pénalités aux créatures qui dépendent de la vue."
            },
            {
                type: "list",
                items: [
                    "Les créatures dans une lumière faible subissent le Désavantage aux tests de Sagesse (Perception) basés sur la vue.",
                    "Les sources naturelles incluent le crépuscule, l'aube ou la pleine lune.",
                    "Les créatures dotées de la <b>Vision dans le noir</b> traitent la lumière faible comme s'il s'agissait d'une lumière vive."
                ]
            },
            {
                type: "paragraph",
                content: "La lumière faible est importante pour l'exploration et la dissimulation car elle affecte la Perception basée sur la vue, mais n'impose pas par elle-même le Désavantage aux jets d'attaque."
            }
        ]
    },
    {
        title: "Chute",
        optional: "Standard rule",
        icon: "falling",
        subtitle: "1d6 par 3 m (max 20d6)",
        description: "Une créature subit 1d6 dégâts contondants pour chaque tranche de 3 m de chute, jusqu'à un maximum de 20d6, et atterrit à terre.",
        reference: "PHB 2024, pg. 183.",
        summary: "Vous subissez 1d6 dégâts contondants pour chaque tranche de 3 m de chute, jusqu'à 20d6, et atterrissez À terre sauf si vous évitez les dégâts. Tomber dans l'eau peut permettre un JS de Force ou Dextérité DD 15 pour réduire les dégâts de moitié.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La chute est un danger environnemental significatif. Les dégâts augmentent avec la distance de chute, jusqu'à un maximum représentant la vitesse terminale."
            },
            {
                type: "list",
                items: [
                    "Une créature subit <b>1d6 dégâts contondants pour chaque tranche de 3 m</b> de chute, jusqu'à un maximum de <b>20d6</b>.",
                    "La créature atterrit <b>À terre</b> sauf si elle évite les dégâts de la chute.",
                    "<b>Chute dans l'eau :</b> Si la créature qui tombe peut prendre une Réaction, elle peut effectuer un test de <b>Force (Athlétisme) ou Dextérité (Acrobaties) DD 15</b> pour entrer dans l'eau proprement et ne subir que la moitié des dégâts.",
                    "<b>Vitesse de chute (optionnel) :</b> Une créature tombant d'une grande hauteur descend instantanément jusqu'à 150 m, puis jusqu'à 150 m à la fin des tours suivants jusqu'à la fin de la chute."
                ]
            },
            {
                type: "paragraph",
                content: "Une longue chute peut se résoudre très rapidement, aussi les réactions et aptitudes modifiant la chute doivent être gérées dès que leur déclencheur se produit."
            }
        ]
    },
    {
        title: "Abri partiel",
        optional: "Standard rule",
        icon: "brokenshield",
        subtitle: "+2 à la CA et aux JS de Dex",
        description: "Un obstacle couvrant au moins la moitié de votre corps vous accorde un bonus de +2 à la CA et aux jets de sauvegarde de Dextérité.",
        reference: "PHB 2024, pg. 319.",
        summary: "Un obstacle qui couvre au moins la moitié de votre corps (comme un muret ou une autre créature) vous accorde un bonus de +2 à votre Classe d'armure et à tous vos jets de sauvegarde de Dextérité.",
        tags: [
            "environment_cover"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "L'abri partiel est le type d'abri le plus courant, représentant le fait de se mettre à couvert derrière un muret, un arbre ou même une autre créature. Il offre un bonus défensif mineur mais utile."
            },
            {
                type: "list",
                items: [
                    "Confère un <b>bonus de +2 à la CA et aux jets de sauvegarde de Dextérité</b>.",
                    "Exemples : un muret bas, un grand meuble, une autre créature."
                ]
            },
            {
                type: "paragraph",
                content: "Ce bonus fait de vous une cible plus difficile pour les attaques directes et les effets de zone nécessitant de l'agilité, comme le souffle d'un Dragon."
            }
        ]
    },
    {
        title: "Visibilité nulle",
        optional: "Standard rule",
        icon: "fog",
        subtitle: "Champ de vision entièrement bloqué",
        description: "Une zone à visibilité nulle bloque entièrement la vision, comme dans les ténèbres, un brouillard opaque ou un feuillage dense.",
        reference: "PHB 2024, pg. 183.",
        summary: "Une zone qui bloque entièrement la vision, comme les ténèbres ou un brouillard épais. Une créature tentant de voir à travers une zone à visibilité nulle est effectivement Aveuglée.",
        tags: [
            "environment_obscurance"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Une zone à visibilité nulle bloque entièrement la vision. Cela impose effectivement l'état Aveuglé à toute créature tentant de voir quelque chose à l'intérieur, rendant impossible le ciblage de créatures par la vue."
            },
            {
                type: "list",
                items: [
                    "Une créature dans une zone à visibilité nulle subit effectivement l'état <b>Aveuglé</b> lorsqu'elle tente de voir quoi que ce soit dans cette zone.",
                    "Une créature peut toujours tenter de se Cacher dans une zone à visibilité nulle."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une condition clé pour la discrétion, car vous devez être dans une zone à visibilité nulle pour tenter l'action Furtivité vis-à-vis d'une créature."
            }
        ]
    },
    {
        title: "Visibilité réduite",
        optional: "Standard rule",
        icon: "dustcloud",
        subtitle: "Désavantage aux tests de Perception",
        description: "Une zone à visibilité réduite entrave la vue, comme une lumière faible, un brouillard léger ou un feuillage modéré.",
        reference: "PHB 2024, pg. 183.",
        summary: "Une zone qui entrave la vue, comme une lumière faible ou un brouillard léger. Les créatures subissent le Désavantage aux tests de Perception basés sur la vue.",
        tags: [
            "environment_obscurance"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Lorsque la vision est partiellement entravée, il est plus difficile de repérer des éléments dans la zone, imposant le Désavantage aux tests de Perception basés sur la vue."
            },
            {
                type: "list",
                items: [
                    "Une créature dans une zone à visibilité réduite subit le <b>Désavantage aux tests de Sagesse (Perception)</b> visant à voir quelque chose dans cette zone.",
                    "Se cacher n'est pas possible dans une zone à visibilité réduite sauf si vous êtes également derrière un abri d'au moins trois quarts."
                ]
            },
            {
                type: "paragraph",
                content: "La visibilité réduite affecte la capacité à voir et à remarquer des éléments ; le Désavantage aux jets d'attaque provient d'autres règles, comme l'impossibilité de voir la cible."
            }
        ]
    },
    {
        title: "Malnutrition",
        optional: "Standard rule",
        icon: "journey",
        subtitle: "Pas assez de nourriture",
        description: "Une créature qui mange trop peu risque l'Épuisement après avoir terminé un Repos long.",
        reference: "PHB 2024, pg. 371.",
        summary: "Une créature a besoin de 500 g de nourriture par jour. Après un nombre de jours sans nourriture suffisante égal à 3 + son modificateur de CON, elle gagne 1 niveau d'Épuisement après chaque Repos long jusqu'à ce qu'elle mange suffisamment.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La malnutrition est le danger du PHB 2024 pour le suivi de la nourriture, distinct de la déshydratation."
            },
            {
                type: "list",
                items: [
                    "Une créature a besoin de <b>500 g de nourriture par jour</b>.",
                    "Elle peut se passer de nourriture suffisante pendant un nombre de jours égal à <b>3 + son modificateur de Constitution</b> (minimum 1 jour).",
                    "Au-delà, elle gagne <b>1 niveau d'Épuisement</b> après chaque Repos long jusqu'à ce qu'elle mange suffisamment.",
                    "Une journée normale d'alimentation remet à 0 le compteur de jours sans nourriture suffisante."
                ]
            }
        ]
    },
    {
        title: "Suffocation",
        optional: "Standard rule",
        icon: "drowning",
        subtitle: "Retenir son souffle",
        description: "Une créature privée d'air peut retenir son souffle brièvement avant de gagner un niveau d'Épuisement à la fin de chaque tour.",
        reference: "PHB 2024, pg. 184.",
        summary: "Vous pouvez retenir votre souffle pendant 1 + modificateur de CON minutes. Ensuite ou si vous êtes en train d'étouffer, vous gagnez 1 niveau d'Épuisement à la fin de chaque tour jusqu'à ce que vous puissiez respirer, puis supprimez l'Épuisement gagné par suffocation.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Ces règles régissent la durée pendant laquelle une créature peut survivre sans air. Une fois que le souffle d'une créature est épuisé, le danger s'intensifie via l'Épuisement jusqu'à ce qu'elle puisse respirer à nouveau."
            },
            {
                type: "list",
                items: [
                    "Une créature peut retenir son souffle pendant un nombre de minutes égal à <b>1 + son modificateur de Constitution</b> (minimum 30 secondes).",
                    "Lorsque le souffle est épuisé ou que la créature est en train d'étouffer, elle gagne <b>1 niveau d'Épuisement</b> à la fin de chacun de ses tours.",
                    "L'Épuisement continue jusqu'à ce que la créature puisse respirer à nouveau.",
                    "Lorsque la suffocation prend fin, la créature supprime tous les niveaux d'Épuisement gagnés par suffocation."
                ]
            },
            {
                type: "paragraph",
                content: "Cela fait de la suffocation un danger s'aggravant rapidement tout en gardant son Épuisement supprimable une fois l'air rétabli."
            }
        ]
    },
    {
        title: "Abri supérieur",
        optional: "Standard rule",
        icon: "crackedshield",
        subtitle: "+5 à la CA et aux JS de Dex",
        description: "Un obstacle couvrant environ les trois quarts de votre corps accorde un bonus significatif de +5 à la CA et aux jets de sauvegarde de Dextérité.",
        reference: "PHB 2024, pg. 319.",
        summary: "Un obstacle qui couvre environ les trois quarts de votre corps (comme une fente de tir) vous accorde un bonus de +5 à votre Classe d'armure et à tous vos jets de sauvegarde de Dextérité.",
        tags: [
            "environment_cover"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Ce niveau d'abri représente le fait d'être majoritairement dissimulé, comme regarder derrière un coin ou tirer depuis une fente de tir. Il offre un avantage défensif majeur, vous rendant très difficile à toucher."
            },
            {
                type: "list",
                items: [
                    "Confère un <b>bonus de +5 à la CA et aux jets de sauvegarde de Dextérité</b>.",
                    "Exemples : une herse, une fente de tir, ou un tronc d'arbre épais.",
                    "Ce niveau d'abri est également suffisant pour tenter l'action Furtivité."
                ]
            },
            {
                type: "paragraph",
                content: "Un bonus de +5 est un énorme avantage défensif, équivalent à un bouclier très rare. Rechercher un abri supérieur est une tactique très efficace."
            }
        ]
    },
    {
        title: "Abri total",
        optional: "Standard rule",
        icon: "shield",
        subtitle: "Impossible à cibler directement",
        description: "Vous êtes complètement dissimulé par un obstacle, vous rendant immunisé contre le ciblage direct par des attaques ou des sorts.",
        reference: "PHB 2024, pg. 319.",
        summary: "Un obstacle vous dissimule complètement, ce qui signifie que vous ne pouvez pas être directement ciblé par une attaque ou un sort nécessitant une ligne d'effet. Vous pouvez toujours tenter de vous Cacher.",
        tags: [
            "environment_cover"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "L'abri total signifie qu'il n'y a pas de chemin dégagé entre vous et l'origine d'un effet. Vous êtes complètement protégé de tout effet nécessitant une ligne d'effet vers une cible."
            },
            {
                type: "list",
                items: [
                    "Une cible avec un abri total <b>ne peut pas être directement ciblée</b> par une attaque ou un sort.",
                    "Une attaque ou un sort peut tout de même affecter une cible avec un abri total via une zone d'effet si l'effet peut se propager autour de l'obstacle (ex. : l'explosion d'une <i>Boule de feu</i>).",
                    "Une créature derrière un abri total peut toujours tenter l'action Furtivité."
                ]
            },
            {
                type: "paragraph",
                content: "C'est la forme de protection ultime, forçant les ennemis à se repositionner ou à utiliser des capacités de zone pour vous blesser."
            }
        ]
    },
    {
        title: "Perception des vibrations",
        optional: "Standard rule",
        icon: "groundbreaker",
        subtitle: "Détecter les vibrations",
        description: "Une créature dotée de la Perception des vibrations peut détecter et localiser précisément l'origine des vibrations en contact avec la même surface ou substance.",
        reference: "PHB 2024, pg. 183.",
        summary: "Permet à une créature de localiser précisément les créatures et objets en mouvement dans un rayon défini si ceux-ci sont en contact avec la même surface ou liquide. La Perception des vibrations n'est pas considérée comme de la vision.",
        tags: [
            "environment_vision"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Ce sens spécial est courant chez les créatures fouisseuses et leur permet de détecter tout ce qui se déplace sur ou à travers le sol sans avoir besoin de le voir."
            },
            {
                type: "list",
                items: [
                    "La créature ou l'objet détecté doit être en contact avec la même surface ou le même liquide que la créature dotée de la Perception des vibrations.",
                    "La Perception des vibrations ne peut pas détecter les créatures volantes ou incorporelles qui ne sont pas en contact avec cette surface ou ce liquide.",
                    "La Perception des vibrations localise précisément la position, mais ce n'est pas de la vision et elle ne révèle pas de détails visuels."
                ]
            },
            {
                type: "paragraph",
                content: "C'est un excellent moyen de contrecarrer la discrétion et l'invisibilité pour les créatures terrestres, rendant les embuscades contre de telles créatures très difficiles."
            }
        ]
    },
    {
        title: "Vision lucide",
        optional: "Standard rule",
        icon: "eyeshield",
        subtitle: "Voir les formes véritables",
        description: "Un sens puissant et rare permettant à une créature de voir les choses telles qu'elles sont réellement, contournant la plupart des formes de tromperie.",
        reference: "PHB 2024, pg. 183.",
        summary: "Permet à une créature de voir dans toutes les formes de ténèbres, de voir les créatures invisibles, de détecter automatiquement les illusions, et de percevoir la forme véritable des métamorphes ou créatures transformées.",
        tags: [
            "environment_vision"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La Vision lucide est la forme de perception ultime, perçant presque toutes les formes de dissimulation et de tromperie magiques et non magiques. Elle révèle la réalité telle qu'elle est."
            },
            {
                type: "list",
                items: [
                    "<b>Ténèbres :</b> Voit normalement dans les ténèbres normales comme magiques.",
                    "<b>Invisibilité :</b> Voit les créatures et objets invisibles.",
                    "<b>Illusions :</b> Détecte automatiquement les illusions visuelles et réussit automatiquement les jets de sauvegarde contre elles.",
                    "<b>Forme véritable :</b> Voit la forme véritable d'un métamorphe ou d'une créature transformée par magie.",
                    "<b>Plan Éthéré :</b> Peut voir dans le Plan Éthéré."
                ]
            },
            {
                type: "paragraph",
                content: "Une créature dotée de la Vision lucide est un adversaire incroyablement dangereux pour les groupes qui dépendent de la discrétion, des illusions ou des ténèbres magiques."
            }
        ]
    },
    {
        title: "Combat sous-marin",
        optional: "Standard rule",
        icon: "atsea",
        subtitle: "Combattre dans l'eau",
        description: "Les attaques avec des armes sous l'eau sont entravées sauf si l'arme ou la créature est adaptée au combat aquatique.",
        reference: "PHB 2024, pg. 184.",
        summary: "Une créature sans Vitesse de nage subit le Désavantage aux attaques avec des armes de corps à corps sous l'eau sauf si l'arme inflige des dégâts perforants. Les attaques avec des armes à distance ratent au-delà de la portée normale et subissent le Désavantage dans la portée normale.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Les règles de combat sous-marin 2024 utilisent le type de dégâts et la portée de l'arme plutôt que l'ancienne liste d'armes exemptées."
            },
            {
                type: "list",
                items: [
                    "<b>Attaques avec armes de corps à corps :</b> Une créature sans Vitesse de nage subit le <b>Désavantage</b> sauf si l'arme inflige des dégâts <b>perforants</b>.",
                    "<b>Attaques avec armes à distance :</b> Une attaque avec une arme à distance rate automatiquement au-delà de la portée normale et subit le <b>Désavantage</b> dans la portée normale.",
                    "Tout ce qui se trouve sous l'eau a la <b>Résistance aux dégâts de Feu</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Ces règles font du combat aquatique un défi spécialisé où le choix des armes et le déplacement sont d'une importance capitale."
            }
        ]
    },
    {
        title: "Règles de poursuite*",
        optional: "Optional rule",
        icon: "sprint",
        subtitle: "Résoudre des poursuites dynamiques",
        description: "Un sous-système optionnel pour des poursuites palpitantes avec des complications et une limite sur les Pointes consécutives.",
        reference: "DMG 2024, pg. 232.",
        summary: "Un système optionnel où les participants peuvent effectuer la Pointe 3 + modificateur de CON fois, puis chaque Pointe supplémentaire nécessite un JS de Constitution DD 10 ou 1 niveau d'Épuisement. Les poursuites utilisent également des tests d'évasion et des complications.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Ces règles donnent une structure aux scènes de poursuite pour qu'elles soient plus qu'une série d'actions de déplacement, introduisant des événements aléatoires et une mécanique d'endurance pour créer une séquence dynamique."
            },
            {
                type: "list",
                items: [
                    "<b>Limite de Pointe :</b> Un participant à une poursuite peut effectuer la Pointe un nombre de fois égal à 3 + son modificateur de Constitution (minimum une fois). Chaque Pointe supplémentaire nécessite un <b>JS de Constitution DD 10</b> à la fin du tour ou 1 niveau d'Épuisement.",
                    "<b>Attaques d'opportunité :</b> Les participants à une poursuite ne peuvent normalement pas effectuer d'attaques d'opportunité les uns contre les autres, bien que les non-participants le puissent.",
                    "<b>Évasion :</b> La cible effectue un test de Dextérité (Discrétion) à l'initiative 0 si elle a l'occasion de rompre la ligne de mire ; comparez-le à la Perception passive des poursuivants.",
                    "<b>Complications :</b> Le MJ peut utiliser des tables de complications ou des obstacles préparés pour rendre la poursuite plus dynamique."
                ]
            },
            {
                type: "paragraph",
                content: "Ce système transforme une poursuite en un mini-jeu dynamique de gestion du risque et de dépassement d'obstacles inattendus."
            }
        ]
    },
    {
        title: "Eaux profondes*",
        optional: "Optional rule",
        icon: "atsea",
        subtitle: "Trop profond pour toucher le fond",
        description: "Une eau suffisamment profonde pour qu'une créature ne puisse pas toucher le fond avec les pieds crée une pression de nage supplémentaire et peut restreindre la parole.",
        reference: "DMG 2024, pg. 234.",
        summary: "Les eaux profondes forcent une créature sans Vitesse de nage à dépenser 1 pied de déplacement supplémentaire pour chaque pied nagé et peuvent empêcher une parole claire sauf si une magie ou une autre aptitude le permet.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Les eaux profondes sont un effet environnemental du DMG 2024 pour les scènes où les créatures nagent pleinement plutôt que de patauger."
            },
            {
                type: "list",
                items: [
                    "Une créature sans <b>Vitesse de nage</b> doit dépenser 1 pied de déplacement supplémentaire pour chaque pied qu'elle se déplace en nageant.",
                    "Une créature dans des eaux profondes ne peut généralement pas parler clairement sauf si elle peut respirer sous l'eau, possède une Vitesse de nage, ou utilise une magie permettant la parole sous l'eau.",
                    "Les eaux profondes se combinent souvent avec les règles séparées de combat sous-marin et de suffocation."
                ]
            }
        ]
    },
    {
        title: "Grand froid*",
        optional: "Optional rule",
        icon: "thermometercold",
        subtitle: "Risque d'Épuisement",
        description: "Une exposition prolongée à des températures de -18 °C ou moins oblige à effectuer des JS de Constitution pour résister aux niveaux d'Épuisement.",
        reference: "DMG 2024, pgs. 234-235.",
        summary: "Lorsqu'il est exposé à des températures de -18 °C ou moins, une créature doit effectuer un JS de Constitution DD 10 à la fin de chaque heure ou gagner un niveau d'Épuisement.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Le froid intense est une menace environnementale persistante qui peut user même les aventuriers les plus robustes au fil du temps, imposant des niveaux d'Épuisement pour chaque heure d'exposition."
            },
            {
                type: "list",
                items: [
                    "Par des températures de -18 °C ou moins, une créature exposée au froid doit réussir un <b>JS de Constitution DD 10</b> à la fin de chaque heure ou gagner un niveau d'<b>Épuisement</b>.",
                    "Les créatures ayant la résistance ou l'immunité aux dégâts de Froid réussissent automatiquement ce jet de sauvegarde."
                ]
            },
            {
                type: "paragraph",
                content: "Avec les règles d'Épuisement révisées, les pénalités graduelles de -1 font de cela une menace lente mais sérieuse lors des expéditions arctiques."
            }
        ]
    },
    {
        title: "Grande chaleur*",
        optional: "Optional rule",
        icon: "sun",
        subtitle: "Risque d'Épuisement",
        description: "Une exposition prolongée à des températures de 38 °C ou plus oblige à effectuer des JS de Constitution pour résister aux niveaux d'Épuisement.",
        reference: "DMG 2024, pgs. 234-235.",
        summary: "Par des températures de 38 °C ou plus, une créature doit effectuer un JS de Constitution horaire ou gagner un niveau d'Épuisement. Le DD commence à 5 et augmente de 1 chaque heure.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La chaleur suffocante peut être aussi dangereuse que le froid glacial, épuisant progressivement les forces d'une créature et menant à l'Épuisement, surtout pour ceux portant une armure lourde."
            },
            {
                type: "list",
                items: [
                    "Par des températures de 38 °C ou plus, une créature exposée à la chaleur sans eau suffisante doit effectuer un JS de Constitution à la fin de chaque heure ou gagner un niveau d'<b>Épuisement</b>.",
                    "Le DD est de <b>5 pour la première heure et augmente de 1</b> pour chaque heure supplémentaire.",
                    "Les créatures portant une armure intermédiaire ou lourde subissent le <b>Désavantage</b> à ce jet.",
                    "Les créatures ayant la résistance ou l'immunité aux dégâts de Feu réussissent automatiquement."
                ]
            },
            {
                type: "paragraph",
                content: "Le DD croissant rend de plus en plus difficile la survie lors de longs voyages dans le désert sans eau et abri adéquats."
            }
        ]
    },
    {
        title: "Eau glaciale*",
        optional: "Optional rule",
        icon: "thermometercold",
        subtitle: "Immersion dans l'eau froide",
        description: "L'immersion dans une eau glaciale peut rapidement provoquer l'Épuisement une fois qu'une créature dépasse sa tolérance basée sur la Constitution.",
        reference: "DMG 2024, pg. 235.",
        summary: "Une créature peut supporter l'eau glaciale pendant un nombre de minutes égal à son score de Constitution. Chaque minute supplémentaire nécessite un JS de Constitution DD 10 ou 1 niveau d'Épuisement.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "L'eau glaciale est plus dangereuse que le simple froid car l'immersion épuise l'endurance rapidement."
            },
            {
                type: "list",
                items: [
                    "Une créature peut être immergée pendant un nombre de minutes égal à son <b>score de Constitution</b> avant de subir des effets néfastes.",
                    "Chaque minute supplémentaire nécessite un <b>JS de Constitution DD 10</b> ou la créature gagne 1 niveau d'Épuisement.",
                    "Les créatures ayant la résistance ou l'immunité aux dégâts de Froid réussissent automatiquement, tout comme les créatures naturellement adaptées aux eaux glacées."
                ]
            }
        ]
    },
    {
        title: "Fortes précipitations*",
        optional: "Optional rule",
        icon: "raining",
        subtitle: "Affecte la perception et le feu",
        description: "Une pluie ou chute de neige intense crée une zone à visibilité réduite et la pluie forte éteint les flammes à l'air libre.",
        reference: "DMG 2024, pgs. 234-235.",
        summary: "Une pluie forte ou une neige abondante crée une zone à Visibilité réduite et impose le Désavantage aux tests de Sagesse (Perception). La pluie forte éteint également les flammes à l'air libre.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Une averse ou un blizzard peut significativement affecter la visibilité et l'ouïe, rendant plus difficile la détection des menaces et plus facile le fait de rester caché. Cela peut également affecter les sources de lumière."
            },
            {
                type: "list",
                items: [
                    "Une pluie forte ou une neige abondante crée une zone à <b>Visibilité réduite</b>.",
                    "Les créatures dans la zone subissent le <b>Désavantage aux tests de Sagesse (Perception)</b>.",
                    "La pluie forte éteint les flammes à l'air libre."
                ]
            },
            {
                type: "paragraph",
                content: "Cela peut neutraliser les sources de lumière courantes et rendre beaucoup plus difficile la détection visuelle ou auditive d'un danger approchant."
            }
        ]
    },
    {
        title: "Haute altitude*",
        optional: "Optional rule",
        icon: "mountainclimbing",
        subtitle: "Risque d'Épuisement",
        description: "À des altitudes de 3 000 m ou plus, le voyage est plus éprouvant pour les créatures ayant besoin de respirer.",
        reference: "DMG 2024, pg. 235.",
        summary: "À 3 000 m ou plus, chaque heure de voyage compte comme 2 heures pour déterminer la durée de voyage d'une créature respirante. L'acclimatation prend 30 jours et est impossible au-delà de 6 000 m sauf pour les natifs.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "L'air raréfié aux hautes altitudes rend l'effort physique prolongé difficile et peut mener à l'Épuisement pour les créatures qui n'y sont pas habituées lors de longs voyages."
            },
            {
                type: "list",
                items: [
                    "À des altitudes de <b>3 000 m ou plus</b>, chaque heure passée à voyager compte comme <b>2 heures</b> pour déterminer combien de temps une créature peut voyager.",
                    "Une créature respirante s'acclimate après avoir passé <b>30 jours ou plus</b> à cette altitude.",
                    "Les créatures respirantes ne peuvent pas s'acclimater aux altitudes dépassant <b>6 000 m</b> sauf si elles sont natives de ces environnements."
                ]
            },
            {
                type: "paragraph",
                content: "Cela fait des voyages en montagne un véritable test d'endurance, nécessitant un rythme soigneux ou une assistance magique."
            }
        ]
    },
    {
        title: "Blessures persistantes*",
        optional: "Optional rule",
        icon: "swordbreak",
        subtitle: "Séquelles durables de combat",
        description: "Une règle optionnelle pour ajouter des conséquences mécaniques durables lorsqu'une créature subit un coup critique ou tombe à 0 PV.",
        reference: "DMG 2014, pg. 272.",
        summary: "Une règle optionnelle pour les campagnes réalistes où subir un coup critique ou tomber à 0 PV peut infliger une pénalité mécanique durable, comme une boiterie ou un œil perdu, déterminée par un jet de table.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Pour les campagnes visant une atmosphère plus sombre, cette règle garantit que les blessures graves peuvent laisser des séquelles durables au-delà des points de vie perdus."
            },
            {
                type: "list",
                items: [
                    "Une créature peut subir une blessure persistante lorsqu'elle reçoit un coup critique, tombe à 0 point de vie, ou rate un JS contre la mort de 5 ou plus.",
                    "Le MJ peut faire lancer le joueur sur la table des Blessures persistantes.",
                    "Exemples : <b>Perdre un œil</b> (Désavantage aux attaques à distance et à la Perception), <b>Boiterie</b> (Vitesse réduite de 1,50 m), <b>Blessure interne</b> (Désavantage aux JS de CON), <b>Cicatrice horrible</b> (Désavantage en Persuasion, Avantage en Intimidation)."
                ]
            },
            {
                type: "paragraph",
                content: "Ces blessures nécessitent souvent une magie puissante ou un temps de repos significatif pour guérir, créant de nouveaux défis et opportunités de roleplay."
            }
        ]
    },
    {
        title: "Dégâts massifs*",
        optional: "Optional rule",
        icon: "internalinjury",
        subtitle: "Risque de choc systémique",
        description: "Cette règle optionnelle impose un JS de Constitution DD 15 lorsqu'une créature subit des dégâts égaux ou supérieurs à la moitié de son maximum de PV depuis une seule source.",
        reference: "DMG 2014, pg. 273.",
        summary: "Une règle optionnelle où subir des dégâts égaux ou supérieurs à la moitié de votre maximum de PV depuis une seule source impose un JS de Constitution DD 15. En cas d'échec, vous subissez un effet de choc aléatoire.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Cette règle modélise le choc physique de recevoir un coup unique et dévastateur. Même si un personnage survit, le traumatisme peut l'affecter s'il rate un JS de Constitution."
            },
            {
                type: "list",
                items: [
                    "Lorsqu'une créature subit des dégâts d'une source unique égaux ou supérieurs à <b>la moitié de son maximum de points de vie</b>, elle doit réussir un <b>JS de Constitution DD 15</b>.",
                    "En cas d'échec, la créature subit un effet aléatoire de la table de Choc systémique, comme tomber à 0 PV, être Étourdie, ou perdre ses réactions temporairement."
                ]
            },
            {
                type: "paragraph",
                content: "Un jet raté peut avoir un impact dévastateur, mais cela reste une règle optionnelle héritée plutôt qu'une règle par défaut du DMG 2024."
            }
        ]
    },
    {
        title: "Variantes de repos*",
        optional: "Optional rule",
        icon: "nightsleep",
        subtitle: "Modifier le rythme de la campagne",
        description: "Ces règles optionnelles modifient la durée des repos courts et longs pour altérer fondamentalement le rythme et le ton d'une campagne.",
        reference: "DMG 2014, pg. 267.",
        summary: "Règles optionnelles pour modifier le rythme de la campagne. Héroïsme épique : Repos court = 5 minutes, Repos long = 1 heure. Réalisme sombre : Repos court = 8 heures, Repos long = 7 jours.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Le rythme de votre campagne peut être radicalement modifié en changeant le temps nécessaire aux personnages pour récupérer leurs ressources. Ces variantes permettent des parties à haute intensité ou sombres et réalistes."
            },
            {
                type: "list",
                items: [
                    "<b>Héroïsme épique :</b> Un Repos court dure 5 minutes et un Repos long dure 1 heure. Pour les parties à action soutenue où les ressources se reconstituent rapidement.",
                    "<b>Réalisme sombre :</b> Un Repos court dure 8 heures et un Repos long dure 7 jours. Cela rend les rencontres plus dangereuses et encourage une gestion soigneuse des ressources."
                ]
            },
            {
                type: "paragraph",
                content: "Choisir une variante de repos est une décision majeure qui impacte profondément la gestion des ressources de toutes les classes et doit être établie au début d'une campagne."
            }
        ]
    },
    {
        title: "Glace glissante*",
        optional: "Optional rule",
        icon: "icecube",
        subtitle: "Terrain difficile, risque de tomber",
        description: "La glace glissante est un Terrain difficile et peut faire tomber À terre une créature qui commence son tour dessus ou s'y déplace.",
        reference: "DMG 2024, pg. 235.",
        summary: "La glace glissante est un Terrain difficile. Lorsqu'une créature se déplace dessus pour la première fois à son tour ou commence son tour là, elle doit réussir un JS de Dextérité DD 10 ou tomber À terre.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Cette règle simple peut transformer un lac gelé ou une caverne verglacée en un champ de bataille périlleux où maintenir son équilibre est un défi constant."
            },
            {
                type: "list",
                items: [
                    "La glace glissante est un <b>Terrain difficile</b>.",
                    "Lorsqu'une créature se déplace sur de la glace glissante pour la première fois à son tour ou commence son tour là, elle doit réussir un <b>JS de Dextérité DD 10</b> ou tomber À terre."
                ]
            },
            {
                type: "paragraph",
                content: "Les personnages avec des scores élevés en Acrobaties brilleront dans ces environnements, tandis que ceux en armure lourde auront du mal à garder l'équilibre."
            }
        ]
    },
    {
        title: "Vent fort*",
        optional: "Optional rule",
        icon: "windsock",
        subtitle: "Affecte les attaques et la perception",
        description: "Un vent fort impose le Désavantage aux attaques avec des armes à distance, éteint les flammes, disperse le brouillard et peut forcer les créatures volantes à atterrir.",
        reference: "DMG 2024, pgs. 234-235.",
        summary: "Un vent fort impose le Désavantage aux jets d'attaque avec des armes à distance, éteint les flammes à l'air libre, disperse le brouillard et force les créatures volantes à atterrir à la fin de leur tour ou à tomber.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Un vent puissant peut transformer un tir précis en coup dans le vide, éteindre des sources de lumière vitales et rendre le vol périlleux. À son maximum, il peut rendre les attaques à distance et le vol impossibles."
            },
            {
                type: "list",
                items: [
                    "Un vent fort impose le <b>Désavantage aux jets d'attaque avec des armes à distance</b>.",
                    "Il éteint les flammes à l'air libre et disperse le brouillard.",
                    "Une créature volante dans un vent fort doit atterrir à la fin de son tour ou tomber.",
                    "Dans un désert, un vent fort peut créer une tempête de sable qui impose le <b>Désavantage aux tests de Sagesse (Perception)</b> basés sur la vue."
                ]
            },
            {
                type: "paragraph",
                content: "Ces règles font de la météo une considération tactique importante, forçant potentiellement les archers et les créatures volantes à modifier leurs stratégies."
            }
        ]
    },
    {
        title: "Glace fine*",
        optional: "Optional rule",
        icon: "icecube",
        subtitle: "Danger lié au poids",
        description: "La glace fine se brise lorsque le poids total sur une zone de 3 m × 3 m dépasse sa tolérance aléatoire.",
        reference: "DMG 2024, pg. 235.",
        summary: "La glace fine supporte 3d10 × 10 livres par zone de 3 m × 3 m. Si le poids total dépasse cette tolérance, la glace se brise et les créatures dessus tombent à travers.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "La glace fine est un danger environnemental simple pour les lacs gelés, les rivières et les terrains magiques instables."
            },
            {
                type: "list",
                items: [
                    "Une zone de 3 m × 3 m de glace fine supporte <b>3d10 × 10 livres</b>.",
                    "Lorsque le poids total sur la zone dépasse cette tolérance, la glace se brise.",
                    "Les créatures sur la glace brisée tombent à travers, déclenchant souvent les règles d'eau glaciale ou de nage."
                ]
            }
        ]
    },
    {
        title: "Pièges*",
        optional: "Optional rule",
        icon: "tripwire",
        subtitle: "Dangers cachés",
        description: "Les pièges sont des dangers cachés, mécaniques ou magiques, nécessitant un test de Perception pour les repérer et des compétences spécifiques pour les désactiver.",
        reference: "DMG 2024, pgs. 105-115.",
        summary: "Dangers cachés nécessitant un test de Sagesse (Perception) pour les repérer et un test de compétence pertinent (ex. : Outils de voleur, Dissipation de la magie) pour les désactiver, avec des DD définis par la conception du piège.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Les pièges offrent des défis en dehors du combat, allant de simples fosses à des dispositifs complexes qui ressemblent à des énigmes à résoudre sous pression. Ils sont définis par les compétences nécessaires pour les détecter et les désamorcer."
            },
            {
                type: "list",
                items: [
                    "<b>Détecter/Désactiver :</b> La description d'un piège précise les tests et DD pour le trouver ou le désactiver. Trouver un piège nécessite généralement un test de Sagesse (Perception). Le désactiver peut nécessiter un test de Dextérité avec des outils de voleur, un test d'Intelligence (Investigation), ou un sort de <i>Dissipation de la magie</i> pour les pièges magiques.",
                    "Le DMG 2024 fournit des conseils détaillés sur la conception de pièges simples et complexes avec des DD clairs pour les jets de sauvegarde, la détection et le désamorçage."
                ]
            },
            {
                type: "paragraph",
                content: "Des pièges bien placés peuvent épuiser les ressources du groupe, le diviser, ou l'affaiblir avant un combat majeur."
            }
        ]
    },
    {
        title: "Effets de coup critique / maladresse**",
        optional: "Homebrew rule",
        icon: "swordbreak",
        subtitle: "Résultats extrêmes pour les attaques",
        description: "Une règle maison populaire qui ajoute des effets supplémentaires aux 20 naturels (au-delà des dégâts) et aux 1 naturels (au-delà du simple raté).",
        summary: "Une règle maison où un 20 nat peut appliquer un effet supplémentaire et un 1 nat peut provoquer une conséquence négative comme lâcher son arme ou tomber À terre.",
        tags: [
            "environment_other"
        ],
        bullets: [
            {
                type: "paragraph",
                content: "Pour ajouter plus de hauts et de bas cinématiques au combat, de nombreuses tables utilisent des effets de coup critique et de maladresse. À utiliser avec précaution, car les maladresses peuvent affecter de façon disproportionnée les personnages effectuant de nombreuses attaques, comme les Guerriers."
            },
            {
                type: "list",
                items: [
                    "<b>Coup critique (20 nat) :</b> En plus de maximiser un dé de dégâts, l'attaquant peut choisir un effet :",
                    "- Repousser la cible de 3 m.",
                    "- Mettre la cible À terre.",
                    "- Imposer un malus défini par la table jusqu'à la fin du tour suivant de la cible.",
                    "<b>Maladresse (1 nat) :</b> L'attaque rate automatiquement. Le MJ peut choisir l'un des effets suivants :",
                    "- L'attaquant lâche son arme.",
                    "- L'attaquant tombe À terre.",
                    "- L'attaque touche un allié adjacent (en utilisant le même jet d'attaque)."
                ]
            },
            {
                type: "paragraph",
                content: "Définissez les effets supplémentaires avant la partie afin que les coups critiques et maladresses restent rapides et prévisibles."
            }
        ]
    }
]
