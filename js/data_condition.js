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
        description: "Vous êtes agrippé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Votre vitesse passe à 0, et vous ne pouvez bénéficier d'aucun bonus à votre vitesse.",
            "L'état prend fin si la créature qui vous agrippe est <b>Neutralisé</b>.",
            "L'état se termine également si un effet vous met hors de portée de la créature ou de l'effet qui vous agrippe, comme par exemple lorsque vous êtes projeté par le sort vague tonnante."
        ]
    },
    {
        title: "Assourdi",
        optional: "Règle standard",
        icon: "elf-ear",
        subtitle: "Vous ne pouvez pas entendre",
        description: "Vous ne pouvez pas entendre",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous échouez automatiquement à tout test de caractéristique qui nécessite l'ouïe."
        ]
    },
    {
        title: "Aveuglé",
        optional: "Règle standard",
        icon: "one-eyed",
        subtitle: "Vous ne pouvez pas voir",
        description: "Vous ne pouvez pas voir",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous échouez automatiquement à tout test de caractéristique qui nécessite la vue.",
            "Les jets d'attaque contre vous ont un avantage.",
            "Vous avez un désavantage sur les jets d'attaque."
        ]
    },
    {
        title: "À terre",
        optional: "Règle standard",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes à terre",
        reference: "PHB, pg. 292.",
        bullets: [
            "La seule option de mouvement possible pour vous est de ramper, à moins que vous ne vous releviez et mettiez alors un terme à cet état.",
            "Vous avez un désavantage aux jets d'attaque.",
            "Un jet d'attaque contre vous a un avantage si l'attaquant est à 1,50 mètre ou moins de vous. Sinon, le jet d'attaque a un désavantage."
        ]
    },
    {
        title: "Charmé",
        optional: "Règle standard",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes charmé par une autre créature",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ne pouvez pas attaquer le charmeur ou le cibler avec des capacités ou des effets magiques nuisibles.",
            "Le charmeur a un avantage à ses jets de caractéristique pour interagir socialement avec vous."
        ]
    },
    {
        title: "Empoisonné",
        optional: "Règle standard",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Vous êtes empoisonné",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous avez un désavantage sur les jets d'attaque et les tests de caractéristique."
        ]
    },
    {
        title: "Entravé",
        optional: "Règle standard",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Vous êtes entravé",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre vitesse passe à 0, et vous ne pouvez bénéficier d'aucun bonus à votre vitesse.",
            "Les jets d'attaque contre vous ont un avantage.",
            "Vous avez un désavantage sur les jets d'attaque.",
            "Vous avez un désavantage à vos jets de sauvegarde de Dextérité."
        ]
    },
    {
        title: "Épuisement",
        optional: "Règle standard",
        icon: "crawl",
        subtitle: "Vous êtes épuisé",
        description: "L'épuisement est mesuré en six niveaux",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Niveau</th><th></th><th></th><th style='text-align:left'>Effet</th></tr><tr><td>1</td><td></td><td></td><td>Désavantage sur les tests de caractéristique</td></tr><tr><td>2</td><td></td><td></td><td>Vitesse réduite de moitié</td></tr><tr><td>3</td><td></td><td></td><td>Désavantage sur les jets d'attaque et les jets de sauvegarde</td></tr><tr><td>4</td><td></td><td></td><td>Points de vie maximum réduits de moitié</td></tr><tr><td>5</td><td></td><td></td><td>Vitesse réduite à 0</td></tr><tr><td>6</td><td></td><td></td><td>Mort</td></tr></table>",
            "Vous subissez les effets de votre niveau actuel d'épuisement ainsi que de tous les niveaux inférieurs.",
            "Terminer un repos long réduit votre niveau d'épuisement de 1, à condition que vous ayez également eu de la nourriture et de l'eau.",
            "De plus, être ramené à la vie réduit votre niveau d'épuisement de 1."
        ]
    },
    {
        title: "Étourdi",
        optional: "Règle standard",
        icon: "internal-injury",
        subtitle: "Vous êtes étourdi",
        description: "Vous êtes étourdi",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes <b>Neutralisé</b>, ne pouvez plus bouger et parlez de manière hésitante.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "Les jets d'attaque contre vous ont un avantage."
        ]
    },
    {
        title: "Effrayé",
        optional: "Règle standard",
        icon: "sharp-smile",
        subtitle: "Vous êtes effrayé",
        description: "Vous êtes effrayé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous avez un désavantage aux jets de caractéristique et aux jets d'attaque tant que la source de votre peur est dans votre ligne de vue.",
            "Vous ne pouvez pas vous rapprocher volontairement de la source de votre peur."
        ]
    },
    {
        title: "Inconscient",
        optional: "Règle standard",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes inconscient",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes <b>Neutralisé</b>, ne pouvez plus bouger ni parler, et n'êtes plus conscient de ce qui se passe autour de vous.",
            "Vous lâchez ce que vous teniez et tombez à terre.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "Les jets d'attaque contre vous ont un avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 1,50 mètre ou moins de vous."
        ]
    },
    {
        title: "Invisible",
        optional: "Règle standard",
        icon: "invisible",
        subtitle: "Vous ne pouvez pas être vu",
        description: "Vous ne pouvez pas être vu sans l'aide de magie ou d'un sens particulier",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous ne pouvez être vu sans l'aide de la magie ou d'un sens particulier.",
            "Votre emplacement peut être détecté par un bruit que vous faites ou par les traces que vous laissez.",
            "Les jets d'attaque contre vous ont un désavantage.",
            "Vous avez un avantage sur les jets d'attaque.",
            "Vous ne pouvez pas être ciblé par un sort nécessitant la vue."
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
        subtitle: "Vous ne pouvez pas faire d'actions ou de réactions",
        description: "Vous ne pouvez pas faire d'actions ou de réactions",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ne pouvez effectuer aucune action ni aucune réaction."
        ]
    },
    {
        title: "Paralysé",
        optional: "Règle standard",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Vous ne pouvez rien faire",
        bullets: [
            "Vous êtes <b>Neutralisé</b> et ne pouvez plus bouger ni parler.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "Les jets d'attaque contre vous ont un avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 1,50 mètre ou moins de vous."
        ]
    },
    {
        title: "Pétrifié",
        optional: "Règle standard",
        icon: "stone-pile",
        subtitle: "Vous êtes transformé en pierre",
        description: "Vous êtes transformé, ainsi que tout objet non magique que vous portez ou transportez, en une substance inanimée solide (généralement de la pierre)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Vous êtes transformé, ainsi que tout objet non magique que vous portez, en une substance inanimée solide (généralement en pierre).",
            "Votre poids est multiplié par dix et votre vieillissement cesse.",
            "Vous êtes <b>Neutralisé</b>, ne pouvez plus bouger ni parler, et n'êtes plus conscient de ce qui se passe autour de vous.",
            "Les jets d'attaque contre vous ont un avantage.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "Vous obtenez la résistance contre tous les types de dégâts.",
            "Vous êtes immunisé contre le poison et la maladie, mais un poison ou une maladie déjà dans votre organisme est seulement suspendu, pas neutralisé."
        ]
    }
];