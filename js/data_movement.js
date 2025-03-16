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

data_movement = [
    {
        title: "Se déplacer",
        optional: "Règle standard",
        icon: "run",
        subtitle: "Coût : 1,5m par 1,5m",
        description: "Coût du mouvement : 1,5m par 1,5m de déplacement",
        reference: "PHB, pg. 190.",
        bullets: [
            "Si vous avez plus d'une vitesse, comme votre vitesse de marche et une vitesse de vol, vous pouvez alterner entre vos vitesses pendant votre déplacement. Chaque fois que vous changez, soustrayez la distance que vous avez déjà parcourue de la nouvelle vitesse.",
            "Vous pouvez vous déplacer à travers l'espace d'une créature non hostile.",
            "Vous pouvez vous déplacer à travers l'espace d'une créature hostile uniquement si la créature est au moins deux tailles plus grande ou plus petite que vous.",
            "L'espace d'une autre créature est un terrain difficile pour vous.",
            "Que la créature soit un ami ou un ennemi, vous ne pouvez pas volontairement terminer votre déplacement dans son espace."
        ]
    },
    {
        title: "Escalader",
        optional: "Règle standard",
        icon: "crags",
        subtitle: "Coût : 3m par 1,5m",
        description: "Coût du mouvement : 3m par 1,5m escaladé",
        reference: "PHB, pg. 182.",
        bullets: [
            "Peut nécessiter un test de Force (Athlétisme) si l'escalade est difficile"
        ]
    },
    {
        title: "Nager",
        optional: "Règle standard",
        icon: "at-sea",
        subtitle: "Coût : 3m par 1,5m",
        description: "Coût du mouvement : 3m par 1,5m nagé",
        reference: "PHB, pg. 182.",
        bullets: [
            "Peut nécessiter un test de Force (Athlétisme) si la nage est difficile"
        ]
    },
    {
        title: "Se laisser tomber à terre",
        optional: "Règle standard",
        icon: "lob-arrow",
        subtitle: "Coût : 0m",
        description: "Coût du mouvement : 0m (gratuit)",
        reference: "PHB, pgs. 190-191,292.",
        bullets: [
            "Vous pouvez vous laisser tomber à terre sans utiliser aucune de votre vitesse",
            "Pour vous déplacer à terre, vous devez ramper ou utiliser de la magie comme la téléportation",
            "Se laisser tomber à terre ajoute l'état <i>À terre</i> (les attaques de mêlée contre vous ont un avantage, les attaques à distance contre vous ont un désavantage, vos propres attaques ont un désavantage)"
        ]
    },
    {
        title: "Ramper",
        optional: "Règle standard",
        icon: "crawl",
        subtitle: "Coût : 3m par 1,5m",
        description: "Coût du mouvement : 3m par 1,5m rampé",
        reference: "PHB, pg. 182.",
        bullets: [

        ]
    },
    {
        title: "Se relever",
        optional: "Règle standard",
        icon: "strong",
        subtitle: "Coût : vitesse divisée par 2",
        description: "Coût du mouvement : vitesse divisée par 2",
        reference: "PHB, pg. 190-191.",
        bullets: [
            "Vous ne pouvez pas vous relever si vous n'avez pas assez de mouvement restant ou si votre vitesse est de 0"
        ]
    },
    {
        title: "Saut en hauteur",
        optional: "Règle standard",
        icon: "wingfoot",
        subtitle: "Hauteur : 3 + mod. de force",
        description: "Hauteur : 3 + modificateur de force",
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous sautez en l'air d'un nombre de mètres égal à <b>3 + votre modificateur de Force</b> si vous vous déplacez d'au moins 3 mètres à pied immédiatement avant le saut.",
            "Lorsque vous faites un saut en hauteur debout, vous ne pouvez sauter qu'à la moitié de cette distance.",
            "Vous pouvez étendre vos bras à la moitié de votre hauteur au-dessus de vous pendant le saut.",
            "Dans certaines circonstances, votre MJ pourrait vous permettre de faire un test de Force (Athlétisme) pour sauter plus haut que la normale."
        ]
    },
    {
        title: "Saut en longueur",
        optional: "Règle standard",
        icon: "wingfoot",
        subtitle: "Distance : score de force",
        description: "Coût : 1,5m par 1,5m",
        reference: "PHB, pg. 182.",
        bullets: [
            "Vous parcourez un nombre de mètres jusqu'à votre <b>score de Force</b> si vous vous déplacez d'au moins 3 mètres (élan) à pied immédiatement avant le saut.",
            "Lorsque vous faites un saut en longueur debout, vous ne pouvez sauter qu'à la moitié de cette distance",
            "Peut nécessiter un test de Force (Athlétisme) DD 10 pour franchir un obstacle bas (pas plus haut qu'un quart de la distance du saut). Vous heurtez l'obstacle en cas d'échec.",
            "Peut nécessiter un test de Dextérité (Acrobatie) DD 10 pour atterrir sur vos pieds dans un terrain difficile. Vous atterrissez à terre en cas d'échec."
        ]
    },
    {
        title: "Improviser",
        optional: "Règle standard",
        icon: "juggler",
        subtitle: "Toute action non listée ici",
        description: "Effectuez tout mouvement ou action que vous pouvez imaginer",
        bullets: [
            "Lorsque vous décrivez un type de mouvement non détaillé ailleurs dans les règles, le MJ vous dit s'il est possible et quel type de jet vous devez faire, le cas échéant, pour déterminer le succès ou l'échec."
        ]
    },
    {
        title: "Terrain difficile",
        optional: "Règle standard",
        icon: "stone-pile",
        subtitle: "Modif. de coût : +1,5m par 1,5m",
        reference: "PHB, pg. 182.",
        description: "Se déplacer sur un terrain difficile coûte 1,5m supplémentaire par 1,5m de mouvement",
        bullets: [
        ]
    },
    {
        title: "Déplacement avec agrippement",
        optional: "Règle standard",
        icon: "grab",
        subtitle: "Modif. de coût : vitesse divisée par 2",
        description: "Traîner ou porter la créature que vous avez agrippée",
        reference: "PHB, pg. 195.",
        bullets: [
            "Si vous vous déplacez en agrippant une autre créature, votre vitesse est réduite de moitié, sauf si la créature est deux tailles ou plus plus petite que vous.",
            "Voir l'action Attaquer pour savoir comment agripper une créature."
        ]
    }
]