data_action = [
    {
        title: "Attack",
        optional: "Règle standard",
        icon: "crossed-swords",
        subtitle: "Melee or ranged attack",
        description: "Perform a melee or ranged attack with your weapon",
        reference: "PHB'24, page 361.",
        bullets: [
            "When you take the Attack action, you can make one attack roll with a weapon or an Unarmed Strike.",
            "<b>Equipping and Unequipping Weapons.</b></br> You can either equip or unequip one weapon when you make an attack as part of this action. You do so either before or after the attack. <br> If you equip a weapon before an attack, you don't need to use it for that attack. Equipping a weapon includes drawing it from a sheath or picking it up. Unequipping a weapon includes sheathing, stowing, or dropping it.",
            "<b>Moving Between Attacks.</b></br> If you move on your turn and have a feature, such as Extra Attack, that gives you more than one attack as part of the Attack action, you can use some or all of that movement to move between those attacks."
        ]
    },
    {
        title: "Unarmed Strike",
        optional: "Règle standard",
        icon: "punch",
        subtitle: "Attack with no weapon",
        description: "A punch, kick, head-butt, or similar forceful blow",
        reference: "PHB'24, page 377.",
        bullets: [
            "Whenever you use your Unarmed Strike, choose one of the following options for its effect.",
            "<b>Damage.</b></br> You make an attack roll against the target.</br> Your bonus to the roll equals your Strength Mod + Prof Bonus.</br> On a hit, the target takes Bludgeoning damage equal to 1 + Strength Mod."
        ]
    },
    {
        title: "Grapple",
        optional: "Règle standard",
        icon: "grab",
        subtitle: "Unarmed Strike Option",
        description: "Attempt to grab a creature or wrestle with it",
        reference: "PHB'24, page 377.",
        bullets: [
            "Whenever you use your Unarmed Strike, choose one of the following options for its effect.",
            "<b>Grapple.</b></br> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or it has the <i>Grappled</i> condition. The DC for the saving throw and any escape attempts equals 8 + Strength Mod + Prof Bonus.",
            "This grapple is possible only if the target is no more than one size larger than you and if you have a hand free to grab it."
        ]
    },
    {
        title: "Shove",
        optional: "Règle standard",
        icon: "hand",
        subtitle: "Unarmed Strike Option",
        description: "Shove a creature, either to knock it prone or push it away from you",
        reference: "PHB'24, page 377.",
        bullets: [
            "Whenever you use your Unarmed Strike, choose one of the following options for its effect.",
            "<b>Shove.</b></br> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you either push it 5ft away or cause it to have the <i>Prone</i> condition. The DC for the saving throw and any escape attempts equals 8 + Strength Mod + Prof Bonus.",
            "This shove is possible only if the target is no more than one size larger than you.",
            "</br>",
            "<b><i>Optional.</i> Shove Aside.</b></br> The target must succeed on a Strength or Dexterity saving throw (it chooses which), or you push it 5ft to a different space within its reach. The DC for the saving throw and any escape attempts equals 8 + Strength Mod + Prof Bonus. </br> The target has advantage on this save.",
            "This shove is possible only if the target is no more than one size larger than you."
        ]
    },
    {
        title: "Magic",
        optional: "Règle standard",
        icon: "magic-swirl",
        subtitle: "Cast time of an action",
        description: "Cast a spell that has a casting time of an action or use a feature or magic item that requires a Magic action to be activated.",
        reference: "PHB'24, page 236, page 371.",
        bullets: [
            "<b>One Spell With A Spell Slot Per Turn.</b></br> On a turn, you can expend only one spell slot to cast a spell. This rule means you can't, for example, cast a spell with a spell slot using the Magic action and another one using a Bonus Action on the same turn.",
            "<b>A Clear Path To The Target.</b></br> To target something with a spell, a caster must have a clear path to it, so it can't be behind Total Cover.",
            "<b>Longer Casting Times.</b></br> If you cast a spell that has a casting time of 1 minute or longer, you must take the Magic action on each turn of that casting, and you must maintain Concentration while you do so. If your Concentration is broken, the spell fails, but you don't expend a spell slot.",
        ]
    },
    {
        title: "Dash",
        optional: "Règle standard",
        icon: "sprint",
        subtitle: "Additional movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB'24, page 365",
        bullets: [
            "The increase equals your Speed after applying any modifiers.",
            "If you have a special speed, such as a Fly Speed or Swim Speed, you can use that speed instead of your Speed when you take this action. You choose which speed to use each time you take it."
        ]
    },
    {
        title: "Disengage",
        optional: "Règle standard",
        icon: "run",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke Opportunity Attacks for the rest of the turn",
        reference: "PHB'24, page 366",
        bullets: [
            "Your movement doesn't provoke Opportunity Attacks for the rest of the turn"
        ]
    },
    {
        title: "Dodge",
        optional: "Règle standard",
        icon: "dodging",
        subtitle: "Avoid incoming attacks",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB'24, page 366",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has Disadvantage if you can see the attacker, and you make Dexterity saving throws with Advantage.",
            "You lose this benefit if you have the <i>Incapacitated</i> condition or if your Speed is 0."
        ]
    },
    {
        title: "Help",
        optional: "Règle standard",
        icon: "team-idea",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an Ability Check or Attack Roll",
        reference: "PHB'24, page 368",
        bullets: [
            "When you take the Help action, you do one of the following:",
            "<b>Assist an Ability Check.</b></br> Choose one of your skill or tool proficiencies and one ally who is near enough for you to assist verbally or physically when they make an ability check. That ally has Advantage on the next ability check they make with the chosen skill or tool. This benefit expires if the ally doesn't use it before the start of your next turn. </br>The DM has final say on whether your assistance is possible.",
            "<b>Assist an Attack Roll.</b></br> You momentarily distract an enemy within 5ft of you, giving Advantage to the next attack roll by one of your allies against that enemy. This benefit expires at the start of your next turn."
        ]
    },
    {
        title: "Hide",
        optional: "Règle standard",
        icon: "hood",
        subtitle: "Attempt to hide",
        description: "Attempt to hide",
        reference: "PHB'24, page 368",
        bullets: [
            "With the Hide action, you try to conceal yourself. To do so, you must succeed on a DC 15 Dexterity (Stealth) check while you're Heavily Obscured or behind Three-Quarters Cover or Total Cover, and you must be out of any enemy's line of sight; if you can see a creature, you can discern whether it can see you.",
            "On a successful check, you have the <i>Invisible</i> condition. Make note of your check's total, which is the DC for a creature to find you with a Wisdom (Perception) check.",
            "The condition ends on you immediately after any of the following occurs: you make a sound louder than a whisper, an enemy finds you, you make an attack roll, or you cast a spell with a Verbal component."
        ]
    },
    {
        title: "Utilize",
        optional: "Règle standard",
        icon: "usable",
        subtitle: "Interact with item or object",
        description: "Use a nonmagical item or interact with an object seperate from the free interaction",
        reference: "PHB'24, page 378",
        bullets: [
            "You normally interact with an object while doing something else, such as when you draw a sword as part of the Attack action. When an object requires an action for its use, you take the Utilize action.",
            "<b>Time-Limited Object Interactions.</b></br> When time is short, such as in combat, interactions with objects are limited: one free interaction per turn. That interaction must occur during a creature's movement or action. Any additional interactions require the Utilize action.",
            "<b>Breaking Objects.</b></br> As an action, you can automatically break or otherwise destroy a fragile, nonmagical object, such as a glass container or a piece of paper. If you try to damage something more resilient, the DM might use the rules on breaking objects in the rules glossary."
        ]
    },
    {
        title: "Search",
        optional: "Règle standard",
        icon: "look-at",
        subtitle: "Try to look for something",
        description: "Spend your searching.",
        reference: "PHB'24, page 373",
        bullets: [
            "When you take the Search action, you make a Wisdom check to discern something that isn't obvious. The Search table suggests which skills are applicable when you take this action, depending on what you're trying to detect.",
            "<table><tr><th style='text-align:left'>Skill</th><th></th><th></th><th style='text-align:left'>Thing to Detect</th></tr><tr><td><u>Insight</u></td><td></td><td></td><td>Creature's state of mind.</td></tr><tr><td><u>Medicine</u></td><td></td><td></td><td>Creature's ailment or cause of death.</td></tr><tr><td><u>Perception</u></td><td></td><td></td><td>Concealed creature or object.</td></tr><tr><td><u>Survival</u></td><td></td><td></td><td>Tracks or food.</td></tr></table>"
        ]
    },
    {
        title: "Study",
        optional: "Règle standard",
        icon: "magnifying-glass",
        subtitle: "Attempt to learn something",
        description: "Spend your time learning information",
        reference: "PHB'24, page 375",
        bullets: [
            "When you take the Study action, you make an Intelligence check to study your memory, a book, a clue, or another source of knowledge and call to mind an important piece of information about it. </br></br> The Areas of Knowledge table suggests which skills are applicable to various areas of knowledge.",
            "<table><tr><th style='text-align:left'>Skill</th><th></th><th></th><th style='text-align:left'>Areas</th></tr><tr><td><u>Arcana</u></td><td></td><td></td><td>Spells, magic items, eldritch symbols, magical traditions, planes of existence, and certain creatures (Aberrations, Constructs, Elementals, Fey, and Monstrosities)</td></tr><tr><td><u>History</u></td><td></td><td></td><td>Historic events and people, ancient civilizations, wars, and certain creatures (Giants and Humanoids)</td></tr><tr><td><u>Investigation</u></td><td></td><td></td><td>Traps, ciphers, riddles, and gadgetry</td></tr><tr><td><u>Nature</u></td><td></td><td></td><td>Terrain, flora, weather, and certain creatures (Beasts, Dragons, Oozes, and Plants)</td></tr><tr><td><u>Religion</u></td><td></td><td></td><td>Deities, religious hierarchies and rites, holy symbols, cults, and certain creatures (Celestials, Fiends, and Undead)</td></tr></table>"
        ]
    },
    {
        title: "Influence",
        optional: "Règle standard",
        icon: "conversation",
        subtitle: "Attempt to convince someone",
        description: "Spend your time communicating",
        reference: "PHB'24, page 369",
        bullets: [
            "With the Influence action, you urge a creature to do something. Describe or roleplay how you're communicating with the creature. Are you trying to deceive, intimidate, amuse, or gently persuade? The DM then determines whether the creature feels willing, unwilling, or hesitant due to your interaction; this determination establishes whether an ability check is necessary, as explained below.",
            "<b>Willing.</b> If your urging aligns with the creature's desires, no ability check is necessary; the creature fulfills your request in a way it prefers. </br></br> <b>Unwilling.</b> If your urging is repugnant to the creature or counter to its alignment, no ability check is necessary; it doesn't comply. </br></br> <b>Hesitant.</b> If you urge the creature to do something that it is hesitant to do, you must make an ability check, which is affected by the creature's attitude: Indifferent, Friendly, or Hostile. </br></br> The Influence Checks table suggests which ability check to make based on how you're interacting with the creature. The GM chooses the check, which has a default DC equal to 15 or the creature's Int score, whichever is higher. On a successful check, the creature does as urged. On a failed check, you must wait 24 hours (or a duration set by the DM) before urging it in the same way again.",
            "<table><tr><th style='text-align:left'>Ability Check</th><th></th><th></th><th style='text-align:left'>Interaction</th></tr><tr><td><u>Charisma (Deception)</u></td><td></td><td></td><td>	Deceiving a creature that understands you.</td></tr><tr><td><u>Charisma (Intimidation)</u></td><td></td><td></td><td>Intimidating a creature.</td></tr><tr><td><u>Charisma (Performance)</u></td><td></td><td></td><td>Amusing a monster.</td></tr><tr><td><u>Charisma (Persuasion)</u></td><td></td><td></td><td>Persuading a creature that understands you.</td></tr><tr><td><u>Wisdom (Animal Handling)</u></td><td></td><td></td><td>Gently coaxing a Beast or Monstrosity.</td></tr></table>"
        ]
    },
    {
        title: "Ready",
        optional: "Règle standard",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB'24, page 372",
        bullets: [
            "You take the Ready action to wait for a particular circumstance before you act. To do so, you take this action on your turn, which lets you act by taking a Reaction before the start of your next turn.",
            "First, you decide what perceivable circumstance will trigger your Reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your Speed in response to it.",
            "When the trigger occurs, you can either take your Reaction right <b>after</b> the trigger finishes or ignore the trigger.",
            "When you Ready a spell, you cast it as normal (expending any resources used to cast it) but hold its energy, which you release with your Reaction when the trigger occurs. To be readied, a spell must have a casting time of an action, and holding on to the spell's magic requires Concentration, which you can maintain up to the start of your next turn. If your Concentration is broken, the spell dissipates without taking effect."
        ]
    },
    {
        title: "Use class feature",
        optional: "Règle standard",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Improvise",
        optional: "Règle standard",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB'24, page 15",
        bullets: [
            "Player characters and creatures can also do things not covered by other actions. Many class features and other abilities provide additional action options, and you can improvise other actions. When you describe an action not detailed elsewhere in the rules, the Dungeon Master tells you whether that action is possible and what kind of D20 Test you need to make, if any."
        ]
    },
    {
        title: "Disarm*",
        optional: "Règle optionnelle",
        icon: "sword-break",
        subtitle: "Knock item out of enemy's grasp",
        description: "A creature can use a weapon attack to knock a weapon or another item from a target's grasp.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "The attacker makes an attack roll contested by the target's Strength (Athletics) check or Dexterity (Acrobatics) check.",
            "If the attacker wins the contest, the attack causes no damage or other ill effect, but the defender drops the item.",
            "The attacker has disadvantage on its attack roll if the target is holding the item with two or more hands.",
            "The target has advantage on its ability check if it is larger than the attacking creature, or disadvantage if it is smaller."

        ]
    },
    {
        title: "Overrun*",
        optional: "Règle optionnelle",
        icon: "shield-bash",
        subtitle: "Run through a hostile space",
        description: "When a creature tries to move through a hostile creature's space, the mover can try to force its way through by overrunning the hostile creature.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the mover makes a Strength (Athletics) check contested by the hostile creature's Strength (Athletics) check.",
            "The creature attempting the overrun has advantage on this check if it is larger than the hostile creature, or disadvantage if it is smaller.",
            "If the mover wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Tumble*",
        optional: "Règle optionnelle",
        icon: "tumble",
        subtitle: "Tumble through a hostile space",
        description: "A creature can try to tumble through a hostile creature's space, ducking and weaving past the opponent.",
        reference: "DMG, page 272",
        bullets: [
            "(Optional Rule):",
            "As an action, the tumbler makes a Dexterity (Acrobatics) check contested by the hostile creature's Dexterity (Acrobatics) check.",
            "If the tumbler wins the contest, it can move through the hostile creature's space once this turn."
        ]
    },
    {
        title: "Mark*",
        optional: "Règle optionnelle",
        icon: "cross-mark",
        subtitle: "Give Advantage on Opportunity Attacks",
        description: "This option makes it easier for melee combatants to harry each other with opportunity attacks.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "When a creature makes a melee attack, it can also mark its target.",
            "Until the end of the attacker's next turn, any opportunity attack it makes against the marked target has advantage.",
            "The opportunity attack doesn't expend the attacker's reaction",
            "The attacker can't make the attack if anything, such as the incapacitated condition or the shocking grasp spell, is preventing it from taking reactions.",
            "The attacker is limited to one opportunity attack per turn.",
        ]
    },
    {
        title: "Climb onto a bigger creature*",
        optional: "Règle optionnelle",
        icon: "mountain-climbing",
        subtitle: "Climb a bigger creature",
        description: "If one creature wants to jump onto another creature, it can do so by grappling. A suitably large opponent can be treated as terrain for the purpose of jumping onto its back or clinging to a limb.",
        reference: "DMG, page 271",
        bullets: [
            "(Optional Rule):",
            "After making any ability checks necessary to get into position and onto the larger creature, the smaller creature uses its action to make a Strength (Athletics) or Dexterity (Acrobatics) check contested by the target's Dexterity (Acrobatics) check.",
            "If it wins the contest, the smaller creature successfully moves into the target creature's space.",
            "The smaller creature moves with the target and has advantage on attack rolls against it.",
        ]
    }
]
