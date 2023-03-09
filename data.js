const monsterData = [
    {
        name: "Goblin Grunt",
        level: 1,
        type: "troop",
        initiative: "+3",
        ac: 16,
        pd: 13,
        md: 12,
        hp: 22,
        health: 22,
        attacks: ["Club +6 vs AC - 6 damage if the goblins and their allies outnumber their enemies; 4 damage if they don't.", "R: Shortbow +6 vs AC - 4 damage"],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 0
    },

    {
        name: "Goblin Scum",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+3",
        ac: 16,
        pd: 14,
        md: 11,
        hp: 5,
        health: 5,
        attacks: ["Club +6 vs AC - 4 damage", "R: Shortbow +6 vs AC - 3 damage"],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 1
    },

    {
        name: "Goblin Shaman",
        level: 2,
        type: "caster",
        initiative: "+6",
        ac: 17,
        pd: 12,
        md: 16,
        hp: 34,
        health: 34,
        attacks: ["Pointy Spear +6 vs AC - 5 damage", "R: Shaking Curse +6 vs PD - 8 damage, and until the end of the shaman's next turn, the target takes 2 damage whenever an enemy engages it or disengages from it. Natural Even hit or miss: Choose another nearby enemy; it also sufferes from the engage/disengage effect until the end of the shaman's next turn."],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 2
    },

    {
        name: "Dire Rat",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+2",
        ac: 15,
        pd: 15,
        md: 10,
        hp: 6,
        health: 6,
        attacks: ["Infected Bite +5 vs AC - 4 ongoing damage"],
        abilities: ["Squealing Pack Attack [Nastier Special]: This creature gains a +1 attack bonus per other dire rat engaged with the target it's attacking.", "Dire Features [Nastier Special]: roll on table or make up."],
        isStaggered: false,
        id: 3
    },

    {
        name: "Giant Ant",
        level: 0,
        type: "troop",
        initiative: "+0",
        ac: 14,
        pd: 13,
        md: 9,
        hp: 20,
        health: 20,
        attacks: ["Mandibles +5 vs AC - 3 damage.  Natural 16+: The target also takes 1D3 ongoing acid damage."],
        abilities: ["Wall Crawler: A giant ant can climb on ceilings and walls as easily as it moves on the ground."],
        isStaggered: false,
        id: 4
    },
    
    {
        name: "Giant Scorpion",
        level: 1,
        type: "wrecker",
        initiative: "+6",
        ac: 16,
        pd: 15,
        md: 10,
        hp: 22,
        health: 22,
        attacks: ["Pincer +6 vs PD - 1 damage, and the scorpion gains a +2 attack bonus against the same target this turn with its stinger attack.  Limited Use: 2/round, each requiring a quick action (hitting the same target twice with pincer gives the stinger attack a +4 bonus).", "Stinger +6 vs AC - 3 damage, and 3 ongoing poison damage."],
        abilities: ["None"],
        isStaggered: false,
        id: 5
    },

    {
        name: "Hunting Spider",
        level: 2,
        type: "wrecker",
        initiative: "+6",
        ac: 17,
        pd: 14,
        md: 11,
        hp: 34,
        health: 34,
        attacks: ["Bite +6 vs AC - 8 damage.  Natural 16+: The target also takes 1D8 ongoing poison damage."],
        abilities: ["Scuttle: A hunting spider can turn its own failed disengage check into a success by taking 1D4 damage.", "Wall Crawler: A hunting spider can climb on ceilings and walls as easily as it moves on the ground."],
        isStaggered: false,
        id: 6
    },

    {
            name: "Giant Web Spider",
            level: 2,
            type: "blocker (large)",
            initiative: "+4",
            ac: 17,
            pd: 16,
            md: 12,
            hp: 68,
            health: 68,
            attacks: ["Bite +7 vs AC - 5 damage, and 5 ongoing poison damage.  Natural Even Hit: The target also takes 2D6 ongoing poison damage if it's dazed or stuck.", "C: Web +7 vs PD (up to 2 nearby enemies in a group) - 3 damage, and the target is dazed until the end of the spider's next turn.  Natural 18+: The target is also stuck until the end of the spider's next turn."],
            abilities: ["Wall Crawler: A giant web spider can climb on ceilings and walls as easily as it moves on the ground."],
            isStaggered: false,
            id: 7
        },

        {
            name: "Wolf",
            level: 1,
            type: "troop",
            initiative: "+4",
            ac: 17,
            pd: 15,
            md: 11,
            hp: 28,
            health: 28,
            attacks: ["Bite +5 vs AC - 5 damage"],
            abilities: ["Pack Attack: This creature gains a +2 bonus to attack and damage for each other ally engaged with the target (max +4 bonus)."],
            isStaggered: false,
            id: 8
        },

        {
            name: "Bear",
            level: 2,
            type: "troop",
            initiative: "+4",
            ac: 17,
            pd: 16,
            md: 12,
            hp: 45,
            health: 45,
            attacks: ["Bite +7 vs AC - 6 damage.  Natural Even Hit: The target takes +1D6 damage from a claw swipe."],
            abilities: ["None"],
            isStaggered: false,
            id: 9
        },

        {
            name: "Dire Wolf",
            level: 3,
            type: "troop (large)",
            initiative: "+6",
            ac: 18,
            pd: 17,
            md: 13,
            hp: 80,
            health: 80,
            attacks: ["Vicious bite +8 vs AC - 18 damage"],
            abilities: ["Pack Attack: This creature gains a +2 bonus to attack and damage for each other ally engaged with the target (max +4 bonus)", "Chilling Howl: Whenever a dire wolf's attack drops an enemy to 0 HP or below, all dire wolves in the battle can howl as a free action. When the wolves howl, each enemy in the battle takes a penalty to its attacks and all defenses equal to equal to the number of living dire wolves in the battle (max - 5) until the end of the attacking wolf's next turn. New howls extend the duration of the current howl rather than downgrading the howl's effect if dire wolves have been slain in the meantime.", "Dire Feature: roll on table or make up."],
            isStaggered: false,
            id: 10
        },

        {
            name: "Dire Bear",
            level: 4,
            type: "troop (large)",
            initiative: "+7",
            ac: 19,
            pd: 19,
            md: 14,
            hp: 130,
            health: 130,
            attacks: ["Bite +8 vs AC - 24 damage.  Natural Even Hit: The target takes +2D6 damage from a claw swipe."],
            abilities: ["Savage: The dire bear gains a +2 attack bonus against staggered enemies.", "Dire Feature: roll on table or make up."],
            isStaggered: false,
            id: 11
        },

        {
            name: "Ankheg",
            level: 2,
            type: "troop (large)",
            initiative: "+8",
            ac: 19,
            pd: 17,
            md: 11,
            hp: 60,
            health: 60,
            attacks: ["Mandibles +7 vs AC - 8 damage. Natural Even Hit: If the target is small the ankheg grabs it. While the ankheg is grabbing a creature, the only legal target for its mandibles attack is the grabbed creature.", "C: Acid Spit +7 vs PD (one nearby enemy, plus any enemy thee ankheg has grabbed) - 5 ongoing acid damage. Limited Use: 1/round, as a quick action."],
            abilities: ["Escape Speed: At the end of the ankheg's turn, roll a D6. If it's equal to or less than the escalation die, the ankheg can move again as a free action. (Usually it's trying to flee to a pre-dug burrow with a small sized creature in its mandibles)."],
            isStaggered: false,
            id: 12
        },

        {
            name: "Bulette",
            level: 5,
            type: "wrecker (large)",
            initiative: "+7",
            ac: 22,
            pd: 19,
            md: 14,
            hp: 170,
            health: 170,
            attacks: ["Gigantic Claws +12 vs AC (2 attacks) - 15 damage. Dual hit: it both claws hit during the same turn, the bulette can make a terrible bite attack during its next turn as a standard action.", "[special trigger] Terrible Bite +14 vs AC - 45 damage. Miss: 22 damage."],
            abilities: ["Blood Frenzy: The bulette's crit range expands to 16+ while the escalation die is 4+.", "Serious Burrower: A bulette can burrow incredibly quickly for short distances. They're renowned for the mounds of dirt and rock they push above them as they surge through the ground like land torpedoes.", "[Nastier Special] Savage Response: When an attacker scores a critical hit against the bulette and it survives, the bulette can make a terrible bite attack as a free action against one target engaged with it."],
            isStaggered: false,
            id: 13
        },

        {
            name: "Chimera",
            level: 9,
            type: "wrecker (large)",
            initiative: "+15",
            ac: 24,
            pd: 20,
            md: 16,
            hp: 320,
            health: 320,
            attacks: ["Fangs, Claws, and Horns +14 vs AC (3 attacks) - 25 damage. Natural 14-15: the target is dazed until the end of the chimera's next turn from a headbutt. Natural 16-17: The target takes 20 ongoing damage from raking claws. Natural 18-20: The chimera makes a fiery breath attack as a free action.", "[special trigger] Fiery Breath +14 vs PD (up to 3 nearby enemies in a group) - 3D10 fire damage."],
            abilities: ["Brutal Thresher: Whenever a creature misses the chimera with a melee attack, the chimera's multiple sharp bits deal 3D10 damage to that attacker.", "[Nastier Special] Now It's Angry: When an attacker scores a critical hit against the chimera and it survives, its attack rolls on its next turn deal the effects of the lower rolls as well as their own results."],
            isStaggered: false,
            id: 14
        },

        {
            name: "Imp",
            level: 3,
            type: "spoiler",
            initiative: "+8",
            ac: 20,
            pd: 13,
            md: 16,
            hp: 40,
            health: 40,
            attacks: ["Festering Claws +7 vs AC - 3 damage, and 5 ongoing damage.", "B: Blight Jet +7 vs PD - 7 damage, and the target is dazed (save ends). First Natural 16+ each turn: The imp can choose one: the target is weakened instead of dazed; OR the imp can make a blight jet attack against a different target as a free action."],
            abilities: ["Curse Aura: Whenever a creature attacks the imp and rolls a natural 1-5, that creature takes 1D10 psychic damage.", "Flight: Imps are hard to pin down because they fly. Not that fast or well, but you don't have to fly well to fly better than humans and elves.", "Random Demon Ability: Roll on table."],
            isStaggered: false,
            id: 15
        },

        {
            name: "Dretch",
            level: 3,
            type: "mook",
            mookNumber: 1,
            initiative: "+5",
            ac: 17,
            pd: 15,
            md: 11,
            hp: 13,
            health: 13,
            attacks: ["Claws +8 vs AC - 6 damage"],
            abilities: ["Fear: While engaged with this creature, enemies that have 15 HP or fewer are dazed (-4 attack) and do not add the escalation die to their attacks."],
            isStaggered: false,
            id: 16
        },

        {
            name: "Despoiler",
            level: 4,
            type: "caster",
            initiative: "+9",
            ac: 19,
            pd: 14,
            md: 18,
            hp: 52,
            health: 52,
            attacks: ["Horns and Daggers +8 vs AC (2 attacks) - 5 damage. Natural 16+: The despoiler can pop free from the target.", "R: Abyssal Whispers +9 vs MD (one nearby or far away enemy) - 15 psychic damage, and the target is confused (save ends), OR the target can choose to avoid confusion effect by taking 6D6 psychic damage to clear their head.", "C: Sow Discord +9 vs MD (2 nearby enemies engaged with the same creature or with each other) - one target makes an at-will melee attack against thee power's other target. Limited use: 1/day, as a quick action."],
            abilities: ["Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 17
        },

        {
            name: "Frenzy Demon",
            level: 5,
            type: "wrecker",
            initiative: "+10",
            ac: 21,
            pd: 17,
            md: 17,
            hp: 70,
            health: 70,
            attacks: ["Claw +9 vs AC (2 attacks) - 9 damage"],
            abilities: ["Raging Frenzy: Whenever the frenzy demon misses with a melee attack, it gains a +1 attack bonus and deals +1D4 damage until the end of the battle (maximum bonus +4, 4D4).", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 18
        },

        {
            name: "Vrock",
            level: 6,
            type: "spoiler",
            initiative: "+9",
            ac: 21,
            pd: 18,
            md: 18,
            hp: 88,
            health: 88,
            attacks: ["Filth-covered Claws +11 vs AC (2 attacks) - 7 damage, and 5 ongoing poison damage.  Natural Even Hit: The vrock can make a demonic screech attack as a free action.", "[special trigger] C: Demonic Screech +11 vs MD (1D3 nearby enemies) - 5 psychic damage, and the target is vulnerable until the end of the battle."],
            abilities: ["[Nastier Special] Predation: Creatures hit by the vrock's demonic screech attack that are already vulnerable are also hampered (save ends).", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 19
        },

        {
            name: "Hezrou",
            level: 7,
            type: "troop (large)",
            initiative: "+11",
            ac: 22,
            pd: 16,
            md: 20,
            hp: 210,
            health: 210,
            attacks: ["Meaty, Clawed Hands +12 vs AC (2 attacks) - 28 damage. Any Hit: The demon can grab the target if it isn't already grabbing a creature. The grabbed foe can't move except to teleport, pop free, or attempt to disengage, and disengage attempts take a -5 penalty unless the creature hit the hezrou with an attack that turn. The hezrou gains a +4 attack bonus against any enemy it is grabbing."],
            abilities: ["Demonic Stench: While engaged with this creature, enemies with 84 HP or fewer are dazed (-4 attacks) and do not add the escalation die to their attacks.", "[Nastier Special] Abyssal Sergeant: Lower level non-mook demons nearby the hezrou deal damage equal to their level when they miss with an attack.", "[Nastier Special] Stab This Now: The hezrou's allies gain a +4 attack bonus against any creature it is grabbing.", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 20
        },

        {
            name: "Glabrezou",
            level: 8,
            type: "caster (large)",
            initiative: "+16",
            ac: 22,
            pd: 22,
            md: 18,
            hp: 320,
            health: 320,
            attacks: ["Pincer +13 vs AC - 45 damage. Natural Even Hit: The demon can grab the target as long as it isn't already grabbing a creature. The grabbed foe can't move except to teleport, pop free, or attempt to disengage, and disengage attempts take a -5 penalty unless the creature hit the glabrezou with an attack that turn. The glabrezou gains a +4 attack bonus against any enemy it is grabbing.", "R: Painbolt +13 vs MD (one nearby or far away creature) - 70 psychic damage.", "C: Hellfire +13 vs PD (1D3 nearby enemies in a group AND any glabrezou allies engaged with those enemies) - 50 fire damage."],
            abilities: ["Mirror Images: At will, as a move action, a glabrezou can create multiple images of itself that make it harder to target. The next time an attack would hit the glabrezou, the attacker has to roll 11+ with another D20 roll: success indicates a hit, failure is a miss that hits one of the mirror images instead, dealing no miss damage to the glabrezou but dispelling all the images. Once the glabrezou is staggered, it takes 2D10 damage whenever it uses mirror image, so movement or escape start registering as alternatives.", "Power Word Stun: Once per day as a free action, the glabrezou can utter a word of power, canceling a single action just taken by a nearby creature with fewer HP than the glabrezou - whether it was casting a spell, healing an ally, or whatever. The GM can see the results of the action, such as a die roll, before deciding whether to use the power word.", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 21
        },

        {
            name: "Despoiler Mage",
            level: 9,
            type: "caster",
            initiative: "+14",
            ac: 24,
            pd: 19,
            md: 23,
            hp: 170,
            health: 170,
            attacks: ["Horns and Swords +13 vs AC (2 attacks) - 20 damage. Natural 16+: The despoiler mage can pop free from the target.", "R: Abyssal Whispers +14 vs MD (one nearby or far away enemy) - 45 psychic damage, and the target is confused (save ends); OR the target can choose to avoid the confusion effect by taking 10D10 psychic damage to clear their head.", "R: Magic Missile (one nearby or far away enemy) - 10 automatic force damage. Limited use: 1/round, as a quick action.", "C: Sow Discord +14 vs MD (2 nearby enemies engaged with the same creature or with each other) - One target makes an at-will melee attack against this power's other target. Limited use: 1/battle, as a quick action."],
            abilities: ["Aura of Betrayal: At the start of each of the despoiler mages turns, choose a random nearby enemy. Until the start of the despoiler mages next turn, that creatures allies no longer consider it an ally, though its enemies powers can still target it as an enemy. The creature isnt compelled to attack its former friends, but the effect tends to screw up all sorts of spells, bardic songs, and the Diabolist knows what else. But at least the betrayal effect is likely to target someone else next round.", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 22
        },

        {
            name: "Hooked Demon",
            level: 9,
            type: "mook",
            mookNumber: 1,
            initiative: "+12",
            ac: 23,
            pd: 21,
            md: 17,
            hp: 45,
            health: 45,
            attacks: ["Hooks and Barbs +14 vs AC - 27 damage. Natural 16+: The hooked demon can make another hooks and barbs attack as a free action (and yes, this can keep going up to a maximum number of attacks equal to the escalation die +1)."],
            abilities: ["[Nastier Special] Bleeding Wounds: Whenever the hooked demon hits a creature with hooks and barbs, that creature takes 10 damage each time it makes a non-basic attack (save ends)."],
            isStaggered: false,
            id: 23
        },

        {
            name: "Giant Vrock",
            level: 9,
            type: "spoiler (large)",
            initiative: "+12",
            ac: 24,
            pd: 21,
            md: 21,
            hp: 333,
            health: 333,
            attacks: ["Giant Filth-covered Claws +14 vs AC (2 attacks) - 30 damage, and 15 ongoing poison damage. Natural Even Hit: The vrock can make a demonic screech attack as a free action.", "[special trigger] Demonic Screech + 14 vs MD (1D3 nearby enemies) - 15 psychic damage, and the target is vulnerable until the end of the battle.", "C: Sporeburst +14 vs PD (all nearby enemies) - 30 damage, and 30 ongoing damage; while the target is taking ongoing damage, it is hampered. Limited Use: 1/battle, when the escalation die is 4+."],
            abilities: ["Predation: Creatures hit by the vrock's demonic screech attack that are already vulnerable are also hampered (save ends).", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 24
        },

        {
            name: "Nalfeshnee",
            level: 10,
            type: "caster (large)",
            initiative: "+13",
            ac: 25,
            pd: 20,
            md: 24,
            hp: 400,
            health: 400,
            attacks: ["Musky Claw or Slimy Hoof +15 vs AC - 90 damage. Miss: The nalfeshnee gains a +4 attack bonus until it hits. Unlike most effects, let it stack.", "R: Accursed Burst +15 vs PD (1D3 nearby enemies) - 50 cold/fire/lightning/negative energy damage (your choice), and the nalfeshnee can make an abyssal curse attack as a free action.", "[special trigger] Abyssal Curse +15 vs MD (each creature hit by accursed burst) - the target is weakened until the end of its next turn."],
            abilities: ["Flight: Nalfeshnee are clumsy but powerful fliers with strangely small wings.", "Unpredictable: Nalfeshnee always have at least two random demon abilities.", "[Nastier Special] Hooked Mooks: Once per battle, if the nalfeshnee is staggered, it can gate in 2D4 hooked demons as a quick action. Roll initiative for the hooked demons; they do not appear in the battle and take their turns until their next initiative count comes up."],
            isStaggered: false,
            id: 25
        },

        {
            name: "Marilith",
            level: 12,
            type: "troop (large)",
            initiative: "+20",
            ac: 28,
            pd: 21,
            md: 25,
            hp: 666,
            health: 666,
            attacks: ["Six Whirling Swords +17 vs AC (6 attacks) - 30 damage, and the marilith can pop free from the target after the attacks.", "R: Beguiling Gaze +17 vs MD (one nearby or far away unengaged enemy) - As a free action, the target immediately moves toward the marilith, attempting to engage it or get as close as possible to it. Limited Use: 1/round, as a quick action."],
            abilities: ["Terrible Swift Swords: The marilith's crit range with melee attacks expands by a number equal to the escalation die.", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 26
        },

        {
            name: "Balor",
            level: 13,
            type: "wrecker (large)",
            initiative: "+17",
            ac: 29,
            pd: 27,
            md: 23,
            hp: 850,
            health: 850,
            attacks: ["Abyssal Blade +18 vs AC - 160 damage. Natural Even Hit: The balor deals +1D20 lightning damage to the target and to one other nearby enemy of the balor's choice. Then repeat that damage roll against the targets once for each point on the escalation die (so if it's 4, that's four more D20 rolls). Natural Even Miss: 80 damage.", "C: Flaming Whip +18 vs PD (one nearby enemy) - 50 fire damage, and the target is pulled to the balor, who engages it. Natural Even Miss: 25 fire damage. Limit Use: 1/round, as a quick action."],
            abilities: ["Desperate Escalator: While staggered, the balor adds the escalation die to its attack rolls.", "Fiery Aura: At the start of the balor's turn, each enemy engaged with it takes 4D10 fire damage; any die result of 10 is kept and the die rerolled.", "Flight: giant bat wings are good for something besides looking tough.", "Shadow and Flame: the balor gains a +5 bonus to all defenses against attacks by far away enemies.", "[Nastier Special] Vorpal Blade: Critical hits with the abyssal blade deal triple damage instead of double damage.", "Random Demon Ability: roll on table."],
            isStaggered: false,
            id: 27
        },

        {
            name: "Derro Maniac",
            level: 4,
            type: "troop",
            initiative: "+8",
            ac: 19,
            pd: 16,
            md: 18,
            hp: 52,
            health: 52,
            attacks: ["Shortsword +9 vs AC - 12 damage. Natural 16+: The derro can cast one of the following close-quarters spells as a quick action this turn: Cloaking Dark: all nearby derro gain a +1 bonus to attacks and defenses until the end of the derro maniac's next turn (cumulative). Sonic Squeal: two random nearby non-derro creatures take 2D4 thunder damage.", "R: Light Repeating Crossbow +9 vs AC - 10 damage. Natural 16+: The target also takes 5 ongoing poison damage. Natural 19+: As above, and the derro maniac can make another light repeating crossbow attack as a free action."],
            abilities: ["Derro Are Confused to Begin With: Confusion only affects derro if they secretely want to murder one of their own companions, a not uncommon condition."],
            isStaggered: false,
            id: 28
        },

        {
            name: "Derro Sage",
            level: 4,
            type: "caster",
            initiative: "+7",
            ac: 18,
            pd: 15,
            md: 18,
            hp: 40,
            health: 40,
            attacks: ["Staff +7 vs AC - 7 damage. Natural 16+: the derro can cast one of the following close-quarters spells as a quick action this turn: Cloaking Dark: all nearby derro gain a +1 bonus to attacks and defenses until the end of the derro sage's next turn (cumulative). Sonic Squeal: two random nearby non-derro creatures take 2D8 thunder damage.", "R: Mind Scream +9 vs MD - 12 psychic damage, and the target is confused until the end of the derro sage's next turn. Natural 16+: the derro sage can make another mind scream attack against a different nearby target as a free action."],
            abilities: ["Derro Are Confused to Begin With: Confusion only affects derro if they secretely want to murder one of their own companions, a not uncommon condition.", "[Nastier Special] Group Gibbering: The derro sage starts a group of derro gibbering as a quick action. It can maintain the gibber as a free action at the start of each turn by taking 1 damage. Each nearby non-derro creature that hears the gibber must roll a D6 at the start of its turn and takes psychic damage equal to the die roll or to the number of gibbering derro, whichever is lower."],
            isStaggered: false,
            id: 29
        }

]

// ====================
//     TEMPLATE
// ====================


// {
//     name: "",
//     level: ,
//     type: "",
//     initiative: "",
//     ac: ,
//     pd: ,
//     md: ,
//     hp: ,
//     health: ,
//     attacks: [""],
//     abilities: [""],
//     isStaggered: false,
//     id: 
// }


export default monsterData