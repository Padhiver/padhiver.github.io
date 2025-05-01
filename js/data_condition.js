// ==================================================
// Mémo : Balises HTML disponibles pour la mise en page
// ==================================================
// 1. Italique : <i>texte en italique</i>
// 2. Gras : <b>texte en gras</b> ou <strong>texte en gras</strong>
// 3. Souligné : <u>texte souligné</u>
// 4. Barré : <s>texte barré</s> ou <del>texte barré</del>
// 5. Couleur : <span style='color: red;'>texte en rouge</span>
// 6. Taille : <span style='font-size: 20px;'>texte en grande taille</span>
// 7. Listes à puces : <ul><li>élément 1</li><li>élément 2</li></ul>
// 8. Liens : <a href='https://example.com'>lien cliquable</a>
// 9. Retours à la ligne : <br> (ex: "ligne 1<br>ligne 2")
// ==================================================

data_condition = [
    {
        title: "Agrippé",
        optional: "Règle standard",
        icon: "grab",
        subtitle: "Vous êtes agrippé",
        description: "Tant que vous avez l'état Agrippé, vous subissez les effets suivants.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Vitesse 0.</b> Votre vitesse est de 0 et ne peut pas augmenter.",
            "<b>Jets d'attaque affectés.</b> Vous avez un <b>Désavantage</b> à vos jets d'attaque contre toute cible autre que celle qui vous agrippe.",
            "<b>Déplaçable.</b> La créature qui vous agrippe peut vous traîner ou vous porter lorsqu'elle se déplace, mais chaque mètre de mouvement lui coûte 1 mètre supplémentaire, sauf si vous êtes de taille Très Petite (Tiny) ou avez au moins deux tailles de moins qu'elle."
        ]
    },
    {
        title: "Assourdi",
        optional: "Règle standard",
        icon: "elf-ear",
        subtitle: "Vous ne pouvez pas entendre",
        description: "Tant que vous avez l'état Assourdi, vous subissez l'effet suivant.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Ne peut entendre.</b> Vous ne pouvez pas entendre et échouez automatiquement à tout test de caractéristique qui nécessite l'ouïe."
        ]
    },
    {
        title: "Aveuglé",
        optional: "Règle standard",
        icon: "one-eyed",
        subtitle: "Vous ne pouvez pas voir",
        description: "Tant que vous avez l'état Aveuglé, vous subissez les effets suivants.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Ne peut voir.</b> Vous ne pouvez pas voir et échouez automatiquement à tout test de caractéristique qui nécessite la vue.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>, et vos jets d'attaque ont un <b>Désavantage</b>."
        ]
    },
    {
        title: "À terre",
        optional: "Règle standard",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Tant que vous avez l'état À terre, vous subissez les effets suivants.",
        reference: "PHB, pg. 292.",
        bullets: [
            "<b>Mouvement restreint.</b> Votre seule option de mouvement est de <b>Ramper</b> ou de dépenser une quantité de mouvement égale à la moitié de votre Vitesse (arrondi à l'inférieur) pour vous relever et ainsi mettre fin à cet état. Si votre Vitesse est de 0, vous ne pouvez pas vous relever.",
            "<b>Jets d'attaque affectés.</b> Vous avez un <b>Désavantage</b> à vos jets d'attaque. Un jet d'attaque contre vous a un <b>Avantage</b> si l'attaquant est à 1,50 mètre ou moins de vous. Sinon, ce jet d'attaque a un <b>Désavantage</b>."
        ]
    },
    {
        title: "Charmé",
        optional: "Règle standard",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Tant que vous avez l'état Charmé, vous subissez les effets suivants.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Ne peut nuire au charmeur.</b> Vous ne pouvez pas attaquer le charmeur ni le cibler avec des capacités ou des effets magiques infligeant des dégâts.",
            "<b>Avantage social.</b> Le charmeur a un <b>Avantage</b> à tout test de caractéristique pour interagir socialement avec vous."
        ]
    },
    {
        title: "Empoisonné",
        optional: "Règle standard",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Tant que vous avez l'état Empoisonné, vous subissez l'effet suivant.",
        reference: "PHB, pg. 292.",
        bullets: [
            "<b>Tests de caractéristique et jets d'attaque affectés.</b> Vous avez un <b>Désavantage</b> à vos jets d'attaque et tests de caractéristique."
        ]
    },
    {
        title: "Entravé",
        optional: "Règle standard",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Tant que vous avez l'état Entravé, vous subissez les effets suivants.",
        reference: "PHB, pg. 292.",
        bullets: [
            "<b>Vitesse 0.</b> Votre vitesse est de 0 et ne peut pas augmenter.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>, et vos jets d'attaque ont un <b>Désavantage</b>.",
            "<b>Jets de sauvegarde affectés.</b> Vous avez un <b>Désavantage</b> à vos jets de sauvegarde de Dextérité."
        ]
    },
    {
        title: "Épuisement",
        optional: "Règle standard",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "Tant que vous avez l'état Épuisement, vous subissez les effets suivants.",
        reference: "PHB, pg. 291.",
        bullets: [
            "<b>Niveaux d'épuisement.</b> Cet état est cumulatif. Chaque fois que vous le recevez, vous gagnez 1 niveau d'Épuisement. Vous mourez si votre niveau d'Épuisement atteint 6.",
            "<b>Tests D20 affectés.</b> Lorsque vous effectuez un <b>Test D20</b> (jet d'attaque, jet de sauvegarde ou test de caractéristique), le résultat du dé est réduit de 2 fois votre niveau d'Épuisement.",
            "<b>Vitesse réduite.</b> Votre Vitesse est réduite de 1,50 mètre fois votre niveau d'Épuisement.", // Conversion de "5 feet"
            "<b>Retirer les niveaux d'épuisement.</b> Terminer un <b>Repos Long</b> retire 1 de vos niveaux d'Épuisement. Lorsque votre niveau d'Épuisement atteint 0, l'état prend fin."
        ]
    },
    {
        title: "Étourdi",
        optional: "Règle standard",
        icon: "internal-injury",
        subtitle: "Vous êtes étourdi",
        description: "Tant que vous avez l'état Étourdi, vous subissez les effets suivants.",
        reference: "PHB, pg. 292.",
        bullets: [
            "<b>Neutralisé.</b> Vous avez l'état <b>Neutralisé</b>.",
            "<b>Jets de sauvegarde affectés.</b> Vous échouez automatiquement à vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>."
        ]
    },
    {
        title: "Effrayé",
        optional: "Règle standard",
        icon: "sharp-smile",
        subtitle: "Vous êtes effrayé",
        description: "Tant que vous avez l'état Effrayé, vous subissez les effets suivants.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Tests de caractéristique et jets d'attaque affectés.</b> Vous avez un <b>Désavantage</b> à vos tests de caractéristique et jets d'attaque tant que la source de votre peur est dans votre ligne de vue.",
            "<b>Ne peut approcher.</b> Vous ne pouvez pas vous rapprocher volontairement de la source de votre peur."
        ]
    },
    {
        title: "Inconscient",
        optional: "Règle standard",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Tant que vous avez l'état Inconscient, vous subissez les effets suivants.",
        reference: "PHB, pg. 292.",
        bullets: [
            "<b>Inerte.</b> Vous avez les états <b>Neutralisé</b> et <b>À terre</b>, et vous lâchez tout ce que vous tenez. Lorsque cet état prend fin, vous restez <b>À terre</b>.",
            "<b>Vitesse 0.</b> Votre Vitesse est de 0 et ne peut pas augmenter.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>.",
            "<b>Jets de sauvegarde affectés.</b> Vous échouez automatiquement à vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Coups critiques automatiques.</b> Tout jet d'attaque qui vous touche est un <b>Coup Critique</b> si l'attaquant est à 1,50 mètre ou moins de vous.",
            "<b>Inconscient des environs.</b> Vous n'êtes pas conscient de votre environnement."
        ]
    },
    {
        title: "Invisible",
        optional: "Règle standard",
        icon: "invisible",
        subtitle: "Vous ne pouvez pas être vu",
        description: "Tant que vous avez l'état Invisible, vous subissez les effets suivants.",
        reference: "PHB, pg. 291.",
        bullets: [
            "<b>Surprise.</b> Si vous êtes Invisible lorsque vous lancez l'Initiative, vous avez un <b>Avantage</b> au jet.",
            "<b>Dissimulé.</b> Vous n'êtes pas affecté par un effet qui requiert que sa cible soit vue, sauf si le créateur de l'effet peut vous voir d'une manière ou d'une autre. Tout équipement que vous portez ou transportez est également dissimulé.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Désavantage</b>, et vos jets d'attaque ont un <b>Avantage</b>. Si une créature peut vous voir d'une manière ou d'une autre, vous ne bénéficiez pas de cet avantage contre cette créature."
        ]
    },
    {
        title: "Mourant",
        optional: "Règle standard",
        icon: "dead-head",
        subtitle: "Vous êtes mourant",
        description: "Vous avez été réduit à 0 point de vie et êtes mourant",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si vous êtes réduit à 0 point de vie par des dégâts qui ne vous tuent pas, vous tombez inconscient et êtes mourant.",
            "Si vous recevez des soins, vous reprenez immédiatement conscience et n'êtes plus mourant.",
            "Lorsque vous êtes mourant, au début de chacun de vos tours, vous faites un jet de sauvegarde contre la mort. Lancez un d20 et n'ajoutez aucun modificateur.",
            "Un résultat de 10 ou plus est une réussite, 9 ou moins est un échec.",
            "À votre troisième réussite, vous devenez stable.",
            "À votre troisième échec, vous mourez.",
            "Un résultat de 1 compte comme deux échecs.",
            "Un résultat de 20 vous fait immédiatement regagner 1 point de vie.",
            "Vous pouvez également être stabilisé par un allié utilisant l'action Stabiliser et réussissant un test de Sagesse (Médecine) DD 10.",
            "Une fois stable, vous regagnez 1 point de vie après 1d4 heures."
        ]
    },
    {
        title: "Neutralisé",
        optional: "Règle standard",
        icon: "internal-injury",
        subtitle: "Vous ne pouvez rien faire",
        description: "Tant que vous avez l'état Neutralisé, vous subissez les effets suivants.",
        reference: "PHB, pg. 290.",
        bullets: [
            "<b>Inactif.</b> Vous ne pouvez effectuer aucune <b>Action</b>, <b>Action Bonus</b> ou <b>Réaction</b>.",
            "<b>Pas de Concentration.</b> Votre <b>Concentration</b> est brisée.",
            "<b>Muet.</b> Vous ne pouvez pas parler.",
            "<b>Surpris.</b> Si vous êtes Neutralisé lorsque vous lancez l'<b>Initiative</b>, vous avez un <b>Désavantage</b> au jet."
        ]
    },
    {
        title: "Paralysé",
        optional: "Règle standard",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Tant que vous avez l'état Paralysé, vous subissez les effets suivants.",
        bullets: [
            "<b>Neutralisé.</b> Vous avez l'état <b>Neutralisé</b>.",
            "<b>Vitesse 0.</b> Votre Vitesse est de 0 et ne peut pas augmenter.",
            "<b>Jets de sauvegarde affectés.</b> Vous échouez automatiquement à vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>.",
            "<b>Coups critiques automatiques.</b> Tout jet d'attaque qui vous touche est un <b>Coup Critique</b> si l'attaquant est à 1,50 mètre ou moins de vous."
        ]
    },
    {
        title: "Pétrifié",
        optional: "Règle standard",
        icon: "stone-pile",
        subtitle: "Vous êtes transformé en substance inanimée",
        description: "Tant que vous avez l'état Pétrifié, vous subissez les effets suivants.",
        reference: "PHB, pg. 291.",
        bullets: [
            "<b>Transformé en substance inanimée.</b> Vous êtes transformé, ainsi que tout objet non magique que vous portez ou transportez, en une substance inanimée solide (généralement de la pierre). Votre poids est multiplié par dix et vous cessez de vieillir.",
            "<b>Neutralisé.</b> Vous avez l'état <b>Neutralisé</b>.",
            "<b>Vitesse 0.</b> Votre Vitesse est de 0 et ne peut pas augmenter.",
            "<b>Jets d'attaque affectés.</b> Les jets d'attaque contre vous ont un <b>Avantage</b>.",
            "<b>Jets de sauvegarde affectés.</b> Vous échouez automatiquement à vos jets de sauvegarde de Force et de Dextérité.",
            "<b>Résistance aux dégâts.</b> Vous avez la <b>Résistance</b> à tous les types de dégâts.",
            "<b>Immunité au poison.</b> Vous avez l'<b>Immunité</b> à l'état <b>Empoisonné</b>."
        ]
    }
];