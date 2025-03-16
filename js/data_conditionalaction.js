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

data_conditionalaction = [
    {
        title: "Équiper ou déséquiper un bouclier",
        optional: "Règle standard",
        icon: "round-shield",
        subtitle: "Équiper ou déséquiper un bouclier",
        description: "Équiper ou déséquiper un bouclier",
        reference: "PHB'24, page 219",
        bullets: [
            "Un bouclier peut être équipé ou déséquipé en tant qu'action."
        ]
    },
    {
        title: "Stabiliser une créature",
        optional: "Règle standard",
        icon: "first-aid",
        subtitle: "(Aider) Aider une créature mourante",
        description: "Empêchez une créature mourante de devoir faire des jets de sauvegarde contre la mort",
        reference: "PHB'24, page 30",
        bullets: [
            "Vous pouvez utiliser l'action Aider pour essayer de stabiliser une créature avec 0 point de vie, ce qui nécessite un test réussi de Sagesse (Médecine) DD 10.",
            "Une créature stable ne fait pas de jets de sauvegarde contre la mort même si elle a 0 point de vie, mais elle a toujours l'état <i>Inconsciente</i>.",
            "Si la créature subit des dégâts, elle cesse d'être stable et recommence à faire des jets de sauvegarde contre la mort.",
            "Une créature stable qui n'est pas soignée regagne 1 point de vie après 1d4 heures."
        ]
    },
    {
        title: "Échapper à un agrippement",
        optional: "Règle standard",
        icon: "manacles",
        subtitle: "Tenter de s'échapper",
        description: "Échapper à un agrippement",
        reference: "PHB'24, page 367",
        bullets: [
            "Une créature agrippée peut utiliser son action pour faire un test de Force (Athlétisme) ou de Dextérité (Acrobatie) contre le DD d'échappement de l'agrippement, mettant fin à l'état sur elle-même en cas de réussite.",
            "L'état se termine également si l'agrippeur a l'état <i>Neutralisé</i> ou si la distance entre la cible agrippée et l'agrippeur dépasse la portée de l'agrippement."
        ]
    },
    {
        title: "Identifier un sort*",
        optional: "Règle optionnelle",
        icon: "crystal-eye",
        subtitle: "Identifier en tant qu'action",
        description: "Test d'Arcane pour identifier",
        reference: "XGE, page 85",
        bullets: [
            "Parfois, un personnage souhaite identifier un sort que quelqu'un d'autre est en train de lancer ou qui a déjà été lancé. Pour ce faire, un personnage peut utiliser sa réaction pour identifier un sort pendant qu'il est lancé, ou il peut utiliser une action lors de son tour pour identifier un sort par son effet après qu'il a été lancé.",
            "Si le personnage a perçu l'incantation, l'effet du sort, ou les deux, le personnage peut faire un test d'Intelligence (Arcane) avec la réaction ou l'action. Le DD est de 15 + le niveau du sort. Si le sort est lancé en tant que sort de classe et que le personnage est membre de cette classe, le test est fait avec avantage. Par exemple, si le lanceur de sorts lance un sort en tant que clerc, un autre clerc a un avantage sur le test pour identifier le sort. Certains sorts ne sont associés à aucune classe lorsqu'ils sont lancés, comme lorsqu'un monstre utilise son trait d'Incantation innée.",
            "Ce test d'Intelligence (Arcane) représente le fait qu'identifier un sort nécessite un esprit vif et une familiarité avec la théorie et la pratique de l'incantation. Cela est vrai même pour un personnage dont la caractéristique d'incantation est la Sagesse ou le Charisme. Pouvoir lancer des sorts ne vous rend pas automatiquement apte à déduire exactement ce que les autres font lorsqu'ils lancent leurs sorts."
        ]
    }
]