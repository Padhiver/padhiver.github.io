data_condition = [
    {
        title: "Aveuglé",
        optional: "Standard rule",
        icon: "one-eyed",
        subtitle: "Vous ne pouvez pas voir",
        description: "Vous ne pouvez pas voir.",
        reference: "PHB, pg. 362.",
        bullets: [
            "<b>Incapable de voir.</b> Vous ne voyez rien et ratez automatiquement tout test de caractéristique reposant sur la vue.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>, et vos jets d'attaque subissent le <i>Désavantage.</i>"
        ]
    },
    {
        title: "Charmé",
        optional: "Standard rule",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes charmé par une autre créature.",
        reference: "PHB, pg. 363.",
        bullets: [
            "<b>Ne pas nuire au charmeur.</b> Vous ne pouvez pas attaquer votre « charmeur » ni le cibler avec des aptitudes ou effets magiques qui infligent des dégâts.",
            "<b>Interaction avec Avantage.</b> Le charmeur a l'<i>Avantage</i> aux tests de caractéristique d'interaction sociale avec vous."
        ]
    },
    {
        title: "Assourdi",
        optional: "Standard rule",
        icon: "elf-ear",
        subtitle: "Vous ne pouvez pas entendre",
        description: "Vous ne pouvez pas entendre.",
        reference: "PHB, pg. 361.",
        bullets: [
            "<b>Incapable d'entrendre.</b> Vous n'entendez rien, et ratez automatiquement tous les tests de caractéristique qui reposent sur l'ouïe."
        ]
    },
    {
        title: "Épuisement",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "L'épuisement est mesuré en six niveaux.",
        reference: "PHB, pg. 365.",
        bullets: [
            "<table><tr><th>Niveau</th><th></th><th></th><th style='text-align:left'>Tests d20</th><th></th><th></th><th>Vitesse</th></tr><tr><td>1</td><td></td><td></td><td>-2</td><td></td><td></td><td>-1,50 m</td></tr><tr><td>2</td><td></td><td></td><td>-4</td><td></td><td></td><td>-3 m</td></tr><tr><td>3</td><td></td><td></td><td>-6</td><td></td><td></td><td>-4,50 m</td></tr><tr><td>4</td><td></td><td></td><td>-8</td><td></td><td></td><td>-6 m</td></tr><tr><td>5</td><td></td><td></td><td>-10</td><td></td><td></td><td>-7,50 m</td></tr><tr><td>6</td><td></td><td></td><td>Mort</td><td></td><td></td><td>Mort</td></tr></table>",
            "Cet état est cumulatif. Chaque fois que vous le recevez, vous subissez 1 niveau d'Épuisement. Vous mourez quand votre niveau d'Épuisement atteint 6.",
            "Terminer un Repos long dissipe 1 niveau d'Épuisement. Lorsque votre niveau d'Épuisement atteint 0, l'état prend fin pour vous."
        ]
    },
    {
        title: "Effrayé",
        optional: "Standard rule",
        icon: "sharp-smile",
        subtitle: "Vous êtes effrayé",
        description: "Vous êtes effrayé.",
        reference: "PHB, pg. 365.",
        bullets: [
            "<b>Effet sur les attaques et les tests de caractéristique.</b> Vous subissez le <i>Désavantage</i> aux tests de caractéristique et aux jets d'attaque tant que la source de votre effroi est dans votre champ de vision.",
            "<b>Impossible d'approcher.</b> Vous ne pouvez pas vous rapprocher volontairement de la source de votre effroi."
        ]
    },
    {
        title: "Agrippé",
        optional: "Standard rule",
        icon: "grab",
        subtitle: "Vous êtes agrippé",
        description: "Vous êtes agrippé.",
        reference: "PHB, pg. 360.",
        bullets: [
            "<b>Vitesse 0.<b> Votre <i>Vitesse</i> est de 0 et ne peut pas augmenter.",
            "<b>Effet sur les attaques.</b> Vous subissez le <i>Désavantage</i> aux jets d'attaque contre toute cible hormis l'agrippeur.",
            "<b>Déplaçable.</b> L'agrippeur peut vous tirer ou vous porter lorsqu'il se déplace, mais ses coûts de déplacement sont doublés, sauf si vous êtes de taille TP ou que votre catégorie est inférieure d'au moins deux crans à la sienne."
        ]
    },
    {
        title: "Neutralisé",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "Vous ne pouvez pas entreprendre d'actions ou de réactions",
        description: "Vous ne pouvez pas entreprendre d'actions ou de réactions.",
        reference: "PHB, pg. 370.",
        bullets: [
            "<b>Inactif.</b> Vous ne pouvez entreprendre ni <i>action</i>, ni <i>action Bonus</i> ni <i>Réaction</i>.",
            "<b>Concentration brisée.</b> Votre <i>Concentration</i> est brisée.",
            "<b>Sans voix.</b> Vous ne pouvez pas parler.",
            "<b>Surpris.</b> Si vous êtes <i>Neutralisé</i> au moment de jouer l'<i>Initiative</i>, vous subissez le <i>Désavantage</i> à ce jet."
        ]
    },
    {
        title: "Invisible",
        optional: "Standard rule",
        icon: "invisible",
        subtitle: "Vous ne pouvez pas être vu",
        description: "Vous ne pouvez pas être vu sans l'aide de la magie ou d'un sens spécial.",
        reference: "PHB, pg. 370.",
        bullets: [
            "<b>Surprise.</b> Si vous êtes <i>Invisible</i> au moment de jouer l'<i>Initiative</i>, vous avez l'<i>Avantage</i> à ce jet.",
            "<b>Dissimulé.</b> Vous n'êtes pas affecté par les effets qui exigent que la cible soit vue, sauf si le créateur de l'effet vous « voit » par un biais ou un autre. Tout l'équipement que vous portez est lui aussi dissimulé.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous subissent le <i>Désavantage</i>, et vos jets d'attaque ont l'<i>Avantage</i>. Si une créature vous voit par un biais ou un autre, vous ne recevez pas ce bénéfice contre elle."
        ]
    },
    {
        title: "Paralysé",
        optional: "Standard rule",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Vous ne pouvez rien faire",
        reference: "PHB, pg. 371.",
        bullets: [
            "<b>Neutralisé.</b> Vous subissez l'état <i>Neutralisé</i>.",
            "<b>Vitesse 0.</b> Votre Vitesse est de 0 et ne peut pas augmenter.",
            "<b>Effet sur les jets de sauvegarde.</b> Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>.",
            "<b>Coups critiques automatiques.</b> Tout jet d'attaque qui vous touche est un <i>Coup critique</i> si l'assaillant qui la porte se trouve dans un rayon de 1,50 m."
        ]
    },
    {
        title: "Pétrifié",
        optional: "Standard rule",
        icon: "stone-pile",
        subtitle: "Vous êtes transformé en pierre",
        description: "Vous êtes transformé, ainsi que les objets non magique que vous portez, en une substance inanimée et dense (généralement de la pierre).",
        reference: "PHB, pg. 371.",
        bullets: [
            "<b>Transformé en substance inanimée.</b> Vous êtes transformé, ainsi que les objets non magiques que vous portez, en une substance inanimée et dense (généralement de la pierre). Votre poids est décuplé et vous n'êtes plus soumis au vieillissement.",
            "<b>Neutralisé.</b> Vous subissez l'état <i>Neutralisé</i>.",
            "<b>Vitesse 0.</b> Votre <i>Vitesse</i> est de 0 et ne peut pas augmenter.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>.",
            "<b>Effet sur les jets de sauvegarde.</b> Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Résistance aux dégâts.</b> Vous avez la <i>Résistance</i> à tous les dégâts.",
            "<b>Immunité contre le poison.</b> Vous avez l'<i>Immunité</i> contre l'état <i>Empoisonné</i>."
        ]
    },
    {
        title: "Empoisonné",
        optional: "Standard rule",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Vous êtes empoisonné.",
        reference: "PHB, pg. 365.",
        bullets: [
            "<b>Effet sur les attaques et les tests de caractéristique.<b> Vous subissez le <i>Désavantage</i> aux jets d'attaque et aux tests de caractéristique."
        ]
    },
    {
        title: "À terre",
        optional: "Standard rule",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes à terre.",
        reference: "PHB, pg. 360.",
        bullets: [
            "<b>Déplacement limité.</b> Vos seules possibilités de déplacement sont ramper ou vous relever en dépensant la moitié de votre <i>Vitesse</i> (arrondie à l'inférieur), ce qui met un terme à l'état. Si votre <i>Vitesse</i> est de O, vous ne pouvez pas vous relever.",
            "<b>Effet sur les attaques.</b> Vous subissez le <i>Désavantage<i> aux jets d'attaque. Un jet d'attaque contre vous reçoit l'<i>Avantage</i> si l'assaillant se trouve dans un rayon de 1,50 m de vous. Sans cela, ce jet d'attaque subit le <i>Désavantage</i>."
        ]
    },
    {
        title: "Entravé",
        optional: "Standard rule",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Vous êtes entravé.",
        reference: "PHB, pg. 365.",
        bullets: [
            "<b>Vitesse 0.</b> Votre <i>Vitesse</i> est de 0 et ne peut pas augmenter.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>, et vos jets d'attaque subissent le <i>Désavantage</i>.",
            "<b>Effet sur les jets de sauvegarde.</b> Vous subissez le <i>Désavantage</i> aux jets de sauvegarde de Dextérité."
        ]
    },
    {
        title: "Étourdi",
        optional: "Standard rule",
        icon: "sleepy",
        subtitle: "vous êtes étourdi",
        description: "Vous êtes étourdi.",
        reference: "PHB, pg. 366.",
        bullets: [
            "<b>Neutralisé.</b> Vous subissez l'état <i>Neutralisé</i>.",
            "<b>Effet sur les jets de sauvegarde.</b> Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>."
        ]
    },
    {
        title: "En péril",
        optional: "Standard rule",
        icon: "half-dead",
        subtitle: "Vous êtes en péril",
        description: "Vous êtes en péril.",
        reference: "PHB, pg. 365.",
        bullets: [
            "Une créature est <i>En péril</i> dès qu'il lui reste la moitié ou moins de ses points de vie."
        ]
    },
    {
        title: "Inconscient",
        optional: "Standard rule",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes inconscient.",
        reference: "PHB, pg. 368.",
        bullets: [
            "<b>Inerte.</b> Vous subissez les états <i>À terre</i> et <i>Neutralisé</i>, et laissez choir tout ce que vous teniez. Lorsque cet état prend fin, vous êtes toujours <i>À terre</i>.",
            "<b>Vitesse 0.</b> Votre <i>Vitesse</i> est de 0 et ne peut pas augmenter.",
            "<b>Effet sur les attaques.</b> Les jets d'attaque contre vous ont l'<i>Avantage</i>.",
            "<b>Effet sur les jets de sauvegarde.</b> Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Coups critiques automatiques.</b> Tout jet d'attaque qui vous touche est un <i>Coup critique</i> si l'assaillant qui la porte se trouve dans un rayon de 1,50 m.",
            "<b>Dénué de conscience.</b> Vous n'avez pas conscience de ce qui vous entoure."
        ]
    },
    {
        title: "Mourant",
        optional: "Standard rule",
        icon: "dead-head",
        subtitle: "Vous êtes mourant",
        description: "Vous êtes tombé à zéro point de vie et êtes mourant.",
        reference: "PHB, pg. 28.",
        bullets: [
            "Si vous tombez à 0 point de vie sans mourir sur le coup, vous recevez l'état <i>Inconscient</i> jusqu'à ce que vous regagniez au moins 1 point de vie, et vous êtes soumis aux jets de sauvegarde contre la mort.",
            "Si vous recevez des soins, vous reprenez immédiatement conscience et n'êtes plus mourant.",
            "Chaque fois que vous commencez votre tour avec 0 point de vie, vous devez effectuer un JS spécial appelé jet de sauvegarde contre la mort, afin de déterminer si vous glissez vers le trépas ou si vous vous accrochez à la vie.<ul><li><b>Trois réussites/échecs.</b> Lancez 1d20. Si le dé donne un résultat de 10 ou plus, c'est une réussite. Dans le cas contraire, c'est un échec. Cet échec ou cette réussite n'a pas d'effet en soi. A la troisième réussite, vous êtes <i>Stabilisé</i>. Au troisième échec, vous mourez.<br>Ces réussites et échecs n'ont pas besoin d'être consécutifs ; notez-les quelque part, jusqu'à ce que vous atteigniez un total de trois pour l'un ou l'autre. Ces compteurs sont remis à zéro pour les deux lorsque vous récupérez au moins un point de vie ou êtes Stabilisé.<li><b>Résultat de 1 ou 20.</b> Lorsque vous obtenez un 1 sur le d20 d'un jet de sauvegarde contre la mort, cela vaut deux échecs. Si vous obtenez un 20 sur le d20, en revanche, vous récupérez 1 point de vie.<li><b>Dégâts subis à 0 point de vie.</b> Si vous subissez des dégâts alors que vous êtes à 0 point de vie, vous subissez un échec de jet de sauvegarde contre la mort. Si ces dégâts correspondent à un Coup critique, vous subissez en fait deux échecs. Si les dégâts sont au moins égaux à votre maximum de points de vie, vous mourez.</ul>",
            "Vous pouvez être stabilisé par un allié qui entreprend l'action Soutien et réussit un test de Sagesse (Médecine) DD 10.",
            "Une fois stable, vous êtes à 0 PV, toujours <i>Inconscient</i>, mais plus mourant. Vous récupérez 1 point de vie au bout de 1d4 heures si vous n'êtes pas soigné."
        ]
    }
]
