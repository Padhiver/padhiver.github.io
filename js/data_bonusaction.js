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

data_bonusaction = [
    {
        title: "Combat à deux armes",
        optional: "Règle standard",
        icon: "crossed-swords",
        subtitle: "Utiliser avec l'action Attaquer",
        description: "Attaquer avec votre main secondaire",
        reference: "PHB'24, page 213",
        bullets: [
            "Lorsque vous utilisez l'action Attaquer lors de votre tour et que vous attaquez avec une arme légère, vous pouvez faire une attaque supplémentaire en tant qu'action bonus plus tard lors du même tour.",
            "Cette attaque supplémentaire doit être faite avec une autre arme légère, et vous n'ajoutez pas votre modificateur de caractéristique aux dégâts de l'attaque supplémentaire, sauf si ce modificateur est négatif.",
            "La maîtrise d'arme <b>Nick</b> fait de cette attaque une partie de l'action Attaquer au lieu d'une action bonus."
        ]
    },
    {
        title: "Magie",
        optional: "Règle standard",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation d'une action bonus",
        description: "Lancez un sort qui a un temps d'incantation d'une action bonus ou utilisez une caractéristique ou un objet magique qui nécessite une action bonus de Magie pour être activé.",
        reference: "PHB'24, page 236, page 371.",
        bullets: [
            "<b>Un sort avec un emplacement de sort par tour.</b></br> Lors d'un tour, vous ne pouvez dépenser qu'un seul emplacement de sort pour lancer un sort. Cette règle signifie que vous ne pouvez pas, par exemple, lancer un sort avec un emplacement de sort en utilisant l'action Magie et un autre en utilisant une action bonus lors du même tour.",
            "<b>Un chemin dégagé vers la cible.</b></br> Pour cibler quelque chose avec un sort, le lanceur de sorts doit avoir un chemin dégagé vers elle, donc elle ne peut pas être derrière une couverture totale.",
            "<b>Temps d'incantation plus longs.</b></br> Si vous lancez un sort qui a un temps d'incantation de 1 minute ou plus, vous devez utiliser l'action Magie à chaque tour de cette incantation, et vous devez maintenir votre concentration pendant ce temps. Si votre concentration est rompue, le sort échoue, mais vous ne dépensez pas d'emplacement de sort.",
        ]
    },
    {
        title: "Utiliser une aptitude de classe",
        optional: "Règle standard",
        icon: "embrassed-energy",
        subtitle: "Plusieurs options de classe utilisent des actions bonus",
        description: "Utilisez une aptitude d'espèce ou de classe qui utilise une action bonus",
        reference: "Voir la page de votre classe pour plus d'informations.",
        bullets: [

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
            "En tant qu'action bonus, le déplaceur fait un test de Force (Athlétisme) contesté par un test de Force (Athlétisme) de la créature hostile.",
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
            "En tant qu'action bonus, le culbuteur fait un test de Dextérité (Acrobatie) contesté par un test de Dextérité (Acrobatie) de la créature hostile.",
            "Si le culbuteur gagne le concours, il peut se déplacer à travers l'espace de la créature hostile une fois ce tour-ci."
        ]
    }
]