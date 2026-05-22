data_condition = [
    {
        title: "Aveuglé",
        optional: "Standard rule",
        icon: "oneeyed",
        subtitle: "Vous ne pouvez pas voir",
        description: "Une créature aveuglée est totalement incapable de voir, ce qui en fait un attaquant médiocre et une cible facile.",
        reference: "PHB 2024, pg. 367-368.",
        summary: "Vous ratez automatiquement tout Test de d20 nécessitant la vue. Vous subissez le Désavantage à vos jets d'attaque, et les jets d'attaque contre vous ont l'Avantage.",
        bullets: [
            {
                type: "paragraph",
                content: "L'état Aveuglé représente une perte totale de la vue. Une créature qui ne peut pas voir rate automatiquement les tests nécessitant la vue et subit un désavantage significatif en combat."
            },
            {
                type: "list",
                items: [
                    "Vous ratez automatiquement tout Test de d20 nécessitant la vue.",
                    "Vous subissez le <b>Désavantage à vos jets d'attaque</b>.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Les créatures dotées de sens alternatifs comme la Vision aveugle peuvent toujours localiser votre position, mais les pénalités aux jets d'attaque demeurent sauf si leurs sens contournent entièrement le besoin de la vue pour attaquer."
            }
        ]
    },
    {
        title: "Charmé",
        optional: "Standard rule",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes magiquement charmé par une autre créature, ce qui vous empêche de lui nuire et vous rend plus susceptible à son influence.",
        reference: "PHB 2024, pg. 367-368.",
        summary: "Vous ne pouvez pas attaquer le charmeur ni le cibler avec des effets néfastes. Le charmeur a également l'Avantage aux tests de Charisme lors d'interactions sociales avec vous.",
        bullets: [
            {
                type: "paragraph",
                content: "L'état Charmé représente une influence magique sur les émotions. Il n'accorde pas le contrôle mental, mais il protège le charmeur et facilite ses interactions sociales."
            },
            {
                type: "list",
                items: [
                    "Vous ne pouvez pas attaquer le charmeur ni le cibler avec un sort ou une aptitude néfaste.",
                    "Le charmeur a l'<b>Avantage aux tests de Charisme</b> lors d'interactions sociales avec vous."
                ]
            },
            {
                type: "paragraph",
                content: "Une créature charmée peut tout de même refuser une demande nuisible ou contraire à sa nature, mais elle est encline à se montrer amicale et conciliante envers le charmeur."
            }
        ]
    },
    {
        title: "Sonné**",
        optional: "Homebrew rule",
        icon: "internalinjury",
        subtitle: "Votre activité est limitée",
        description: "Un état homebrew qui limite votre économie d'action et peut rompre la Concentration sans vous Étourdir complètement.",
        summary: "Vous pouvez prendre soit une Action soit une Action bonus à votre tour (pas les deux), et vous ne pouvez pas vous Concentrer sur des sorts ou autres effets. Vous pouvez toujours vous déplacer et prendre une Réaction.",
        bullets: [
            {
                type: "paragraph",
                content: "Sonné n'est pas un état final du PHB 2024. Il est conservé ici comme état homebrew pour les tables souhaitant une alternative moins punitive à l'état Étourdi."
            },
            {
                type: "list",
                items: [
                    "Vous pouvez prendre soit une Action soit une Action bonus à votre tour, mais pas les deux. Vous pouvez toujours vous déplacer et prendre une Réaction.",
                    "Vous ne pouvez pas vous Concentrer sur des sorts ou autres effets."
                ]
            },
            {
                type: "paragraph",
                content: "Cet état est conçu pour réduire les situations de blocage total tout en restant un malus puissant, notamment contre les lanceurs de sorts qui dépendent de la Concentration."
            }
        ]
    },
    {
        title: "Assourdi",
        optional: "Standard rule",
        icon: "mute",
        subtitle: "Vous ne pouvez pas entendre",
        description: "Une créature assourdie est totalement incapable d'entendre et rate automatiquement tout test nécessitant l'ouïe.",
        reference: "PHB 2024, pg. 367-368.",
        summary: "Vous ne pouvez pas entendre et ratez automatiquement tout test de caractéristique nécessitant l'ouïe.",
        bullets: [
            {
                type: "paragraph",
                content: "Moins sévère que l'état Aveuglé en combat, cet état empêche une créature d'entendre les ordres verbaux, les avertissements ou les composantes verbales des sorts incantés."
            },
            {
                type: "list",
                items: [
                    "Vous ratez automatiquement tout test de caractéristique nécessitant l'ouïe."
                ]
            },
            {
                type: "paragraph",
                content: "Cet état peut empêcher une créature de percevoir des ordres parlés, des avertissements et l'incantation audible de sorts, mais ne confère pas d'immunité aux dégâts de tonnerre ni à tous les effets sonores."
            }
        ]
    },
    {
        title: "Mourant",
        optional: "Standard rule",
        icon: "deadhead",
        subtitle: "Vous êtes à 0 point de vie",
        description: "Lorsque vous tombez à 0 point de vie, vous recevez l'état Inconscient et devez effectuer des jets de sauvegarde contre la mort pour éviter de mourir.",
        reference: "PHB 2024, pg. 341.",
        summary: "À 0 PV, vous êtes Inconscient et devez effectuer un JS contre la mort au début de votre tour. Trois réussites vous stabilisent ; trois échecs signifient que vous mourez. Un 20 naturel vous redonne 1 PV.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est l'état périlleux entre la conscience et la mort. Votre sort est déterminé par une série de jets de d20 au début de chacun de vos tours, les réussites vous rapprochant de la stabilité et les échecs de la mort."
            },
            {
                type: "list",
                items: [
                    "<b>Jets de sauvegarde contre la mort :</b> Au début de chacun de vos tours, effectuez un JS contre la mort (un d20 sans modificateurs). Sur 10 ou plus, c'est une réussite. Sur 9 ou moins, un échec.",
                    "<b>3 réussites :</b> Vous devenez Stable.",
                    "<b>3 échecs :</b> Vous mourez.",
                    "Un <b>1 naturel</b> compte comme deux échecs. Un <b>20 naturel</b> signifie que vous récupérez 1 point de vie.",
                    "<b>Dégâts à 0 PV :</b> Subir des dégâts à 0 PV provoque un échec de JS contre la mort (deux si les dégâts proviennent d'un coup critique)."
                ]
            },
            {
                type: "paragraph",
                content: "Tout soin qui restaure ne serait-ce qu'un point de vie met fin à l'état Mourant et vous rend immédiatement conscience."
            }
        ]
    },
    {
        title: "Épuisement",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "Un état revu mesuré en 6 niveaux, chacun aggravant vos Tests de d20 et votre Vitesse.",
        reference: "PHB 2024, pg. 368.",
        summary: "Pour chaque niveau d'Épuisement, soustrayez 2 à vos Tests de d20 et réduisez votre Vitesse de 1,50 m. Au niveau 6, vous mourez.",
        bullets: [
            {
                type: "paragraph",
                content: "Le système d'Épuisement final 2024 est plus concis que la version de playtest : chaque niveau affecte directement vos jets et votre mobilité."
            },
            {
                type: "list",
                items: [
                    "<b>Tests de d20 :</b> Soustrayez <b>2 fois votre niveau d'Épuisement</b> à vos jets d'attaque, tests de caractéristique et jets de sauvegarde.",
                    "<b>Vitesse :</b> Réduisez votre Vitesse de <b>1,50 m fois votre niveau d'Épuisement</b>.",
                    "Au <b>niveau 6</b>, vous mourez.",
                    "Terminer un Repos long dissipe 1 niveau d'Épuisement."
                ]
            },
            {
                type: "paragraph",
                content: "Comme la pénalité s'applique à tous les Tests de d20, même un ou deux niveaux d'Épuisement peuvent rapidement avoir de l'importance."
            }
        ]
    },
    {
        title: "Effrayé",
        optional: "Standard rule",
        icon: "sharpsmile",
        subtitle: "Vous êtes effrayé",
        description: "Saisi de terreur, vous subissez le Désavantage aux tests de caractéristique et jets d'attaque tant que la source de votre effroi est visible, et vous ne pouvez pas vous rapprocher d'elle.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous subissez le Désavantage aux tests de caractéristique et jets d'attaque tant que vous pouvez voir la source de votre effroi. Vous ne pouvez pas non plus vous rapprocher volontairement d'elle.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état combine une pénalité de combat et une restriction tactique de déplacement, en faisant un outil puissant de contrôle du champ de bataille en forçant une créature à garder ses distances."
            },
            {
                type: "list",
                items: [
                    "Vous subissez le <b>Désavantage aux tests de caractéristique et aux jets d'attaque</b> tant que la source de votre effroi est dans votre champ de vision.",
                    "Vous ne pouvez pas vous rapprocher volontairement de la source de votre effroi."
                ]
            },
            {
                type: "paragraph",
                content: "Si vous rompez la ligne de mire avec la source de votre effroi, le Désavantage est suspendu à ce moment, mais vous ne pouvez toujours pas vous en rapprocher."
            }
        ]
    },
    {
        title: "Agrippé",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Vous êtes agrippé",
        description: "Votre Vitesse est de 0, et vous subissez le Désavantage aux attaques contre toute cible autre que votre agrippeur.",
        reference: "PHB 2024, pg. 368.",
        summary: "Votre Vitesse est de 0, vous ne pouvez pas bénéficier de bonus à la Vitesse, et vos jets d'attaque contre des cibles autres que l'agrippeur subissent le Désavantage. L'état prend fin si l'agrippeur est Neutralisé ou si vous êtes éloigné.",
        bullets: [
            {
                type: "paragraph",
                content: "L'état Agrippé a été mis à jour pour être plus débilitant, en faisant une option de contrôle plus puissante pour immobiliser une cible et la forcer à s'occuper de vous."
            },
            {
                type: "list",
                items: [
                    "Votre Vitesse devient 0 et vous ne pouvez pas bénéficier de bonus à votre Vitesse.",
                    "Vous subissez le <b>Désavantage aux jets d'attaque</b> contre toute créature autre que celle qui vous agrippe.",
                    "L'état prend fin si l'agrippeur est Neutralisé ou si vous êtes éloigné hors de sa portée."
                ]
            },
            {
                type: "paragraph",
                content: "Ce changement incite la créature agrippée à se concentrer sur la menace immédiate, plutôt que d'attaquer d'autres cibles impunément."
            }
        ]
    },
    {
        title: "Neutralisé",
        optional: "Standard rule",
        icon: "internalinjury",
        subtitle: "Vous ne pouvez pas entreprendre d'actions",
        description: "Une créature neutralisée est incapable de prendre une Action, une Action bonus ou une Réaction, la retirant effectivement de l'économie d'action.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous ne pouvez pas prendre d'Action, d'Action bonus ou de Réaction. La Concentration prend également fin lorsque vous devenez Neutralisé.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état coupe votre économie d'action. Il est également inclus dans plusieurs états plus sévères, notamment Paralysé, Étourdi et Inconscient."
            },
            {
                type: "list",
                items: [
                    "Vous ne pouvez pas prendre d'<b>Action</b>.",
                    "Vous ne pouvez pas prendre d'<b>Action bonus</b>.",
                    "Vous ne pouvez pas prendre de <b>Réaction</b>.",
                    "Si vous vous Concentrez, votre Concentration prend fin lorsque vous devenez Neutralisé."
                ]
            }
        ]
    },
    {
        title: "Invisible",
        optional: "Standard rule",
        icon: "invisible",
        subtitle: "Vous ne pouvez pas être vu",
        description: "Vous ne pouvez pas être vu sans magie ou sens spécial, et les attaques sont affectées sauf si une créature peut vous voir d'une façon ou d'une autre.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous ne pouvez pas être vu sans magie ou sens spécial. Vous avez l'Avantage aux attaques et les attaques contre vous subissent le Désavantage, sauf si une créature peut vous voir d'une façon ou d'une autre.",
        bullets: [
            {
                type: "paragraph",
                content: "L'état Invisible vous dissimule et affecte les attaques, mais ses bénéfices aux attaques ne s'appliquent pas contre une créature qui peut vous voir d'une façon ou d'une autre."
            },
            {
                type: "list",
                items: [
                    "Vous ne pouvez pas être vu sans magie ou sens spécial.",
                    "L'équipement que vous portez est également dissimulé.",
                    "Vous avez l'<b>Avantage aux jets d'attaque</b>, et les jets d'attaque contre vous subissent le <b>Désavantage</b>.",
                    "Si une créature peut vous voir d'une façon ou d'une autre, vous ne bénéficiez pas de ces avantages aux attaques contre elle."
                ]
            },
            {
                type: "paragraph",
                content: "Les effets de zone et les attaques visant un emplacement supposé peuvent tout de même affecter une créature invisible si l'attaquant choisit le bon espace."
            }
        ]
    },
    {
        title: "Paralysé",
        optional: "Standard rule",
        icon: "spiderweb",
        subtitle: "Vous êtes paralysé",
        description: "Vous êtes figé et Neutralisé. Tout coup porté par un attaquant proche est un coup critique.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous êtes Neutralisé, ne pouvez pas bouger ni parler, et ratez automatiquement les JS de Force et de Dextérité. Les attaques contre vous ont l'Avantage, et tout coup porté par un attaquant à 1,50 m est un coup critique.",
        bullets: [
            {
                type: "paragraph",
                content: "C'est un état extrêmement dangereux pouvant mener rapidement à la mort d'un personnage. Vous êtes entièrement à la merci de vos ennemis, incapable d'agir et vulnérable aux attaques dévastatrices."
            },
            {
                type: "list",
                items: [
                    "Vous êtes <b>Neutralisé</b> et ne pouvez pas bouger ni parler.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>.",
                    "Tout jet d'attaque qui vous touche est un <b>coup critique</b> si l'attaquant se trouve à 1,50 m de vous.",
                    "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité."
                ]
            },
            {
                type: "paragraph",
                content: "Les coups critiques automatiques des attaquants adjacents font de cet état celui qui est sans doute le plus dangereux du jeu parmi les états non létaux."
            }
        ]
    },
    {
        title: "Pétrifié",
        optional: "Standard rule",
        icon: "stonepile",
        subtitle: "Vous êtes transformé en pierre",
        description: "Vous êtes transformé en un objet inanimé, devenez Neutralisé et bénéficiez d'une forte résistance aux dégâts.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous êtes transformé en une substance inanimée, êtes Neutralisé, votre Vitesse est de 0, et vous avez la Résistance à tous les dégâts.",
        bullets: [
            {
                type: "paragraph",
                content: "Une créature pétrifiée est effectivement une statue, retirée du jeu et inconsciente de son environnement. Cet état est généralement permanent jusqu'à ce qu'une magie puissante y mette fin."
            },
            {
                type: "list",
                items: [
                    "Vous êtes transformé, ainsi que les objets non magiques que vous portez, en une substance inanimée et dense.",
                    "Vous êtes <b>Neutralisé</b>, votre Vitesse devient 0 et ne peut pas augmenter.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>.",
                    "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
                    "Vous avez la <b>Résistance à tous les dégâts</b>.",
                    "Vous avez l'immunité contre l'état Empoisonné.",
                    "Votre poids est décuplé et vous n'êtes plus soumis au vieillissement."
                ]
            },
            {
                type: "paragraph",
                content: "Bien que vous soyez résistant aux dégâts, des dégâts suffisants peuvent tout de même détruire votre forme pétrifiée, entraînant la mort."
            }
        ]
    },
    {
        title: "Empoisonné",
        optional: "Standard rule",
        icon: "poisonbottle",
        subtitle: "Vous êtes empoisonné",
        description: "Le poison dans votre système vous donne le Désavantage à tous vos jets d'attaque et tests de caractéristique.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous subissez le Désavantage à tous vos jets d'attaque et tests de caractéristique. Cela n'affecte pas vos jets de sauvegarde.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état représente une débilitation générale causée par une toxine. Il entrave votre efficacité dans presque toutes les tâches impliquant une attaque ou une compétence."
            },
            {
                type: "list",
                items: [
                    "Vous subissez le <b>Désavantage aux jets d'attaque et aux tests de caractéristique</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Notamment, l'état Empoisonné n'affecte pas les jets de sauvegarde, seulement les jets d'attaque et les tests de caractéristique — une distinction clé par rapport à d'autres effets débilitants."
            }
        ]
    },
    {
        title: "À terre",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes allongé au sol. Cela vous rend plus difficile à toucher à distance mais plus facile à atteindre au corps à corps.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous subissez le Désavantage aux jets d'attaque. Les jets d'attaque contre vous ont l'Avantage si l'attaquant est à 1,50 m, et le Désavantage sinon. Se relever coûte la moitié de votre Vitesse.",
        bullets: [
            {
                type: "paragraph",
                content: "L'état À terre offre un compromis tactique. C'est un avantage défensif contre les attaquants à distance, mais un handicap majeur face aux adversaires au corps à corps. Il affecte également significativement votre déplacement."
            },
            {
                type: "list",
                items: [
                    "Votre seule option de déplacement est de Ramper (ce qui coûte le double du déplacement) jusqu'à ce que vous vous releviez.",
                    "Se relever coûte la moitié de votre Vitesse.",
                    "Vous subissez le <b>Désavantage aux jets d'attaque</b>.",
                    "Un jet d'attaque contre vous a l'<b>Avantage</b> si l'attaquant est à 1,50 m. Dans le cas contraire, le jet d'attaque subit le <b>Désavantage</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Se relever coûte la moitié de votre déplacement pour le tour, ce qui peut vous empêcher d'atteindre l'emplacement souhaité."
            }
        ]
    },
    {
        title: "Entravé",
        optional: "Standard rule",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Votre Vitesse est de 0, les attaques contre vous ont l'Avantage, tandis que vos attaques et JS de Dextérité subissent le Désavantage.",
        reference: "PHB 2024, pg. 368.",
        summary: "Votre Vitesse est de 0. Vous subissez le Désavantage aux jets d'attaque et aux jets de sauvegarde de Dextérité. Les jets d'attaque contre vous ont l'Avantage.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état représente le fait d'être enchevêtré, tenu par des entraves ou pris dans une toile. Il affecte simultanément votre déplacement, votre attaque et votre défense."
            },
            {
                type: "list",
                items: [
                    "Votre Vitesse devient 0 et vous ne pouvez pas bénéficier de bonus à votre Vitesse.",
                    "Vous subissez le <b>Désavantage aux jets d'attaque</b>.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>.",
                    "Vous subissez le <b>Désavantage aux jets de sauvegarde de Dextérité</b>."
                ]
            },
            {
                type: "paragraph",
                content: "Cet état est particulièrement dangereux car il vous rend vulnérable aux effets nécessitant des jets de sauvegarde de Dextérité, comme de nombreux sorts infligeant des dégâts."
            }
        ]
    },
    {
        title: "Ralenti**",
        optional: "Homebrew rule",
        icon: "snail",
        subtitle: "Votre déplacement est entravé",
        description: "Un état homebrew qui divise votre Vitesse par deux et limite votre économie d'action.",
        summary: "Votre Vitesse est divisée par deux, vous subissez le Désavantage aux JS de DEX, et vous pouvez prendre soit une Action soit une Action bonus (pas les deux). Vous ne pouvez pas prendre l'action Désengagement.",
        bullets: [
            {
                type: "paragraph",
                content: "Ralenti n'est pas un état final du PHB 2024. Il est conservé ici comme effet de contrôle homebrew pour les tables souhaitant une alternative plus faible aux états de blocage total."
            },
            {
                type: "list",
                items: [
                    "Votre Vitesse est divisée par deux.",
                    "Vous subissez le Désavantage aux jets de sauvegarde de Dextérité.",
                    "Vous pouvez prendre soit une Action soit une Action bonus à votre tour, mais pas les deux.",
                    "Vous ne pouvez pas prendre l'action Désengagement."
                ]
            },
            {
                type: "paragraph",
                content: "Il affecte la mobilité, l'économie d'action et la défense d'une créature, en faisant un outil polyvalent de contrôle du champ de bataille."
            }
        ]
    },
    {
        title: "Étourdi",
        optional: "Standard rule",
        icon: "knockedoutstars",
        subtitle: "Vous êtes étourdi",
        description: "Vous êtes Neutralisé, ne pouvez pas bouger, et ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous êtes Neutralisé, ne pouvez pas bouger, et ratez automatiquement les JS de Force et de Dextérité. Les jets d'attaque contre vous ont l'Avantage.",
        bullets: [
            {
                type: "paragraph",
                content: "Une créature étourdie est pratiquement sans défense, retirée du combat pendant toute la durée. C'est un état puissant qui peut renverser le cours d'une bataille en neutralisant une menace clé."
            },
            {
                type: "list",
                items: [
                    "Vous êtes <b>Neutralisé</b> et ne pouvez pas bouger.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>.",
                    "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité."
                ]
            },
            {
                type: "paragraph",
                content: "Cet état est souvent imposé par les aptitudes de Moine ou certains sorts, pouvant complètement neutraliser un ennemi pendant un tour ou plus."
            }
        ]
    },
    {
        title: "Suffocation",
        optional: "Standard rule",
        icon: "drowning",
        subtitle: "Retenir son souffle",
        description: "Privé d'air, vous pouvez retenir votre souffle brièvement avant de gagner un niveau d'Épuisement à la fin de chaque tour.",
        reference: "PHB 2024, pg. 184.",
        summary: "Une fois votre souffle épuisé ou si vous êtes en train d'étouffer, vous gagnez 1 niveau d'Épuisement à la fin de chaque tour jusqu'à ce que vous puissiez respirer. Ces niveaux sont supprimés lorsque vous respirez à nouveau.",
        bullets: [
            {
                type: "paragraph",
                content: "Les règles de suffocation 2024 créent un compte à rebours depuis le souffle retenu jusqu'à un Épuisement croissant, plutôt que de faire immédiatement tomber la créature à 0 PV après un nombre fixe de rounds."
            },
            {
                type: "list",
                items: [
                    "Vous pouvez retenir votre souffle pendant <b>1 + modificateur de CON</b> minutes (minimum 30 secondes).",
                    "Lorsque votre souffle est épuisé ou que vous êtes en train d'étouffer, vous gagnez <b>1 niveau d'Épuisement</b> à la fin de chacun de vos tours.",
                    "L'Épuisement continue jusqu'à ce que vous puissiez respirer à nouveau.",
                    "Lorsque la suffocation prend fin, vous supprimez tous les niveaux d'Épuisement gagnés de cette façon."
                ]
            },
            {
                type: "paragraph",
                content: "Cela rend la suffocation dangereuse sur plusieurs tours tout en gardant son Épuisement séparé des autres sources une fois que la créature peut à nouveau respirer."
            }
        ]
    },
    {
        title: "Inconscient",
        optional: "Standard rule",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes Neutralisé, inconscient et sans défense. Tout coup porté par un attaquant proche est un coup critique.",
        reference: "PHB 2024, pg. 368.",
        summary: "Vous êtes Neutralisé, À terre, ne pouvez pas bouger ni parler, et ratez les JS de FOR/DEX. Les attaques contre vous ont l'Avantage, et les coups portés à 1,50 m sont des coups critiques.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état représente le sommeil, l'inconscience ou le fait d'être à 0 point de vie. Il est presque identique à l'état Paralysé dans ses effets, vous laissant complètement vulnérable."
            },
            {
                type: "list",
                items: [
                    "Vous êtes <b>Neutralisé</b>, ne pouvez pas bouger ni parler, et n'avez pas conscience de ce qui vous entoure.",
                    "Vous lâchez tout ce que vous teniez et tombez À terre.",
                    "Les jets d'attaque contre vous ont l'<b>Avantage</b>.",
                    "Tout jet d'attaque qui vous touche est un <b>coup critique</b> si l'attaquant se trouve à 1,50 m.",
                    "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
                    "Si vous êtes à 0 point de vie, vous êtes soumis aux règles de l'état Mourant."
                ]
            },
            {
                type: "paragraph",
                content: "Une créature est inconsciente lorsqu'elle est à 0 point de vie. Tout soin rendra la conscience. Le sort Sommeil rend également les créatures inconscientes sans réduire leurs points de vie."
            }
        ]
    },
    {
        title: "Stress mental*",
        optional: "Optional rule",
        icon: "architectmask",
        subtitle: "Votre esprit est blessé",
        description: "Un cadre optionnel du DMG 2024 pour le stress mental traumatique utilisant les dégâts psychiques et des effets prolongés possibles.",
        reference: "DMG 2024, pg. 236.",
        summary: "Utilisez les dégâts psychiques comme référence pour le stress mental intense ; les effets prolongés peuvent imposer des états à court terme, un Désavantage aux tests de caractéristique à long terme, ou des effets indéfinis jusqu'à leur suppression.",
        bullets: [
            {
                type: "paragraph",
                content: "Le DMG 2024 présente ces effets comme de la peur et du stress mental plutôt que comme l'ancien sous-système de Folie. Cela aligne l'entrée avec le langage des sources actuelles."
            },
            {
                type: "list",
                items: [
                    "La plupart des effets de stress mental utilisent les <b>dégâts psychiques</b>, généralement résistés par un jet de sauvegarde de Sagesse sauf si une autre caractéristique est plus appropriée.",
                    "<b>Effets à court terme :</b> Effrayé, Neutralisé ou Étourdi pendant 1d10 minutes, possiblement avec un comportement alarmant ou des hallucinations.",
                    "<b>Effets à long terme :</b> Désavantage à certains ou tous les tests de caractéristique pendant 1d10 × 10 heures.",
                    "<b>Effets indéfinis :</b> Un effet à long terme qui dure jusqu'à être supprimé par <i>Restauration suprême</i> ; <i>Apaisement des émotions</i> peut le supprimer temporairement."
                ]
            },
            {
                type: "paragraph",
                content: "Cela préserve la carte de traumatisme mental optionnelle tout en supprimant l'ancienne terminologie de Folie qui ne correspond plus à la présentation du DMG 2024."
            }
        ]
    },
    {
        title: "Ébranlé**",
        optional: "Homebrew rule",
        icon: "headshot",
        subtitle: "Votre concentration est perturbée",
        description: "Un état homebrew moins sévère que Sonné ciblant spécifiquement la Concentration et les tests mentaux.",
        summary: "Un état homebrew qui vous donne le Désavantage aux jets de sauvegarde de Constitution pour maintenir la Concentration, ainsi qu'aux tests d'Intelligence et de Sagesse.",
        bullets: [
            {
                type: "paragraph",
                content: "Cet état homebrew comble un vide pour les effets qui perturbent la concentration d'un lanceur de sorts sans limiter complètement ses actions. Il peut être infligé par des dégâts psychiques, des coups tonnants ou des événements surprenants."
            },
            {
                type: "list",
                items: [
                    "Vous subissez le <b>Désavantage aux jets de sauvegarde de Constitution</b> effectués pour maintenir la Concentration sur un sort ou autre effet.",
                    "Vous subissez le <b>Désavantage aux tests d'Intelligence et de Sagesse</b>.",
                    "Cet état dure souvent 1 minute, ou jusqu'à ce que vous réussissiez un jet de sauvegarde de Sagesse à la fin de votre tour."
                ]
            },
            {
                type: "paragraph",
                content: "C'est une bonne étape intermédiaire avant l'état Sonné plus débilitant, offrant une forme plus légère de perturbation mentale particulièrement menaçante pour les lanceurs de sorts."
            }
        ]
    },
    {
        title: "Fracassé**",
        optional: "Homebrew rule",
        icon: "swordbreak",
        subtitle: "Votre armure est endommagée",
        description: "Un état homebrew pour les campagnes réalistes où l'armure peut être endommagée, réduisant son bonus de CA jusqu'à sa réparation.",
        summary: "Un état homebrew où la CA de base de votre armure est réduite de 2. Cette pénalité peut se cumuler et peut suspendre les propriétés magiques jusqu'à la réparation de l'armure avec des Outils de forgeron.",
        bullets: [
            {
                type: "paragraph",
                content: "Pour les parties souhaitant plus de dégradation de l'équipement, l'état Fracassé fournit une mécanique pour abîmer l'armure suite à des coups puissants ou des effets corrosifs, rendant l'entretien important."
            },
            {
                type: "list",
                items: [
                    "La Classe d'armure de base de votre armure est réduite de 2. Cette pénalité peut se cumuler.",
                    "Si la pénalité atteint ou dépasse le bonus magique de l'armure (le cas échéant), les propriétés magiques de l'armure sont suspendues jusqu'à sa réparation.",
                    "Réparer l'état Fracassé nécessite généralement un test d'Outils de forgeron lors d'un Repos court ou long, et peut coûter de l'or en matériaux."
                ]
            },
            {
                type: "paragraph",
                content: "Cela ajoute un élément de gestion des ressources à l'aventure, faisant de l'entretien de l'armure une partie de la survie à long terme."
            }
        ]
    }
]
