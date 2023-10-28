
// Data entry for Bestiary monsters is currently a work in progress
// Data based on 13th Age Bestiary, 1st Edition

const bestiaryMonsterData = [

// BASILISK

{
    name: "Basilisk",
    level: 4,
    type: "wrecker (large)",
    initiative: "+3",
    ac: 24,
    pd: 19,
    md: 18,
    hp: 85,
    health: 85,
    attacks: ["Multi-legged Attack +8 vs AC (3 attacks, each against a different enemy) - 12 damage. Natural 16+: The target takes 5 ongoing poison damage.", "[special trigger] C: Basilisk's Stare +8 vs MD - 5 ongoing poison damage, and the target must start making last gasp saves depending on the basilisk's type (see below) as it accidentally takes a full look at the basilisk. Constructs and undead are immune to this effect."],
    abilities: ["Basilisk's Stare: When a basilisk hits an enemy that is already taking ongoing poison damage, the basilisk can make a Basilisk's Stare attack against the target as a free action.", "Last Gasp Failed Save Effects: [Green Basilisk] Failed Save: the target takes 25 poison damage as its blood turns to poison. Fourth Failed Save: the target's body liquefies and they die. [Red Basilisk] Failed Save: the target takes 15 fire damage, and each of the target's nearby allies takes 5 fire damage as the target's blood boils under their skin and sprays outward in gouts of liquid fire. Fourth Failed Save: the targets body ignites as their flaming skull shoots upward on a jet of burning blood, killing them. [Black Basilisk] Failed Save: the target's blood begins to coagulate and harden, and dust puffs out of their lungs through their mouth. Fourth Failed Save: the target's body turns to stone and they die. [White Basilisk] Failed Save: the target begins to evaporate. The target must make an immediate normal save or it loses a chunk of flesh or a limb, whatever is dramatic but will allow the creature to survive (perhaps with minuses until healed). Fourth Failed Save: The target's body explodes into a fine red mist and they die.", "Resist Melee Damage 18+: When a melee attack targets this creature, the attacker must roll a natural 18+ on the attack roll or only deal half damage. An attacker can ignore this resistance by declaring that they are looking directly at the basilisk during the attack. IF they do, the basilisk can make a Basilisk's Stare attack against them as a free action before the attack. Constructs and undead are not affected by this resistance.", "Stare Down: When an enemy makes a ranged attack against the basilisk, the basilisk can make a Basilisk's Stare attack against them as a free action before the attack.", "[Nastier Special] Death Breath: Each creature engaged with the basilisk at the end of the basilisk's turn takes 10 poison damage."],
    isStaggered: false,
    id: 119
},

// BATS

{
    name: "Swarm of Bats",
    level: 1,
    type: "spoiler",
    initiative: "+5",
    ac: 16,
    pd: 16,
    md: 11,
    hp: 30,
    health: 30,
    attacks: ["C: Swarming Bites +7 vs PD (1d3 nearby enemies) - 2 damage, and after the attack, the swarm of bats engages one of the targets. Natural Even Hit: The target is hampered until the end of its next turn. It can end the effect by attacking the swarm, or if the swarm drops to 0 HP."],
    abilities: ["Vulnerability: Thunder", "No Opportunities: The swarm of bats can't make opportunity attacks, and enemies can't make opportunity attacks against it.", "Swarming Resistance: Each turn, the swarm of bats gains resist damage 18+ to all damage from attacks by enemies that the swarm did NOT attack that turn."],
    isStaggered: false,
    id: 120
},

{
    name: "Dire Bat",
    level: 2,
    type: "troop",
    initiative: "+8",
    ac: 18,
    pd: 17,
    md: 14,
    hp: 32,
    health: 32,
    attacks: ["Fangs and Wings +6 vs AC - 5 damage, and 5 ongoing damage. Natural 2-5: the dire bat pops free from the target and can move as a free action."],
    abilities: ["Vulnerability: Thunder", "Resist Ranged Damage 16+: Shifty, spinning bats are hard to hit unless they're grounded or stuck.", "Skittish: A dire bat engaged with a conscious enemy after attacking it will attempt to disengage and fly into the air if it has a move action remaining that turn.", "[Nastier Special] Blood Drinker: When the dire bat drops an enemy to 0 HP or below, it continues to attack that enemy (until it dies) instead of attacking other enemies.", "[Nastier Special] Dire Feature: Most dire bats don't have a dire feature, but this one does."],
    isStaggered: false,
    id: 121
},

{
    name: "Bat Cavalry",
    level: 2,
    type: "wrecker (large)",
    initiative: "+6",
    ac: 19,
    pd: 17,
    md: 14,
    hp: 70,
    health: 70,
    attacks: ["Fangs, Wings, and Sword +8 vs AC - damage and effect depends on the natural roll. Natural Even Hit: the target takes 10 damage from a sword strike, and the bat cavalry pops free from the target and can move as a free action. Natural Even Miss Against a Target Taking Ongoing Damage: the target takes 6 damage from clawing wings. Natural Odd Hit: the target takes 8 damage, and 5 ongoing damage from bat fangs. Natural 2-5: In addition to any other effect, the bat cavalry pops free from the target, and as a free action, it can move to another nearby enemy and make a Fangs, Wings, and Sword attack against it.", "R: Thrown Javelin +5 vs AC - 8 damage."],
    abilities: ["Vulnerability: Thunder", "Resist Ranged Damage 16+: Shifty, spinning bats are hard to hit unless they're grounded or stuck.", "Skittish: A bat cavalry engaged with a conscious enemy after attacking it will attempt to disengage and fly into the air if it has a move action remaining that turn.", "[Nastier Special] Blood Drinker: When the bat cavalry drops an enemy to 0 HP or below, it continues to attack that enemy (until it dies) instead of attacking other enemies."],
    isStaggered: false,
    id: 122
},

{
    name: "Goblin Bat Mage",
    level: 3,
    type: "spoiler",
    initiative: "+7",
    ac: 19,
    pd: 16,
    md: 16,
    hp: 44,
    health: 44,
    attacks: ["Bloody Fangs +7 vs AC - 6 damage, and 6 ongoing damage. Natural 2-5: the goblin bat mage pops free from the target and can move as a free action.", "R: Blood Bolt Spell +7 vs PD - 8 negative energy damage. Natural Even Hit: if the target is staggered after taking the damage, it's also hampered until the end of its next turn. Natural Odd Hit: one random nearby ally of the target takes 2D6 negative energy damage."],
    abilities: ["Vulnerability: Thunder", "Resist Ranged Damage 16+: Shifty, spinning bats are hard to hit unless they're grounded or stuck.", "Skittish: A goblin bat mage engaged with a conscious enemy after attacking it will attempt to disengage and fly into the air if it has a move action remaining that turn.", "Unwieldy Flyer: When the goblin bat mage is staggered, it must roll an immediate save. On a failure, it loses its ability to fly until the end of its next turn. If flying near the ground, it lands immediately. If flying farther away from the ground, it lands badly and takes 15 damage."],
    isStaggered: false,
    id: 123
},

{
    name: "Thunder Bat",
    level: 5,
    type: "archer",
    initiative: "+13",
    ac: 22,
    pd: 18,
    md: 15,
    hp: 70,
    health: 70,
    attacks: ["Fangs +10 vs AC - 15 damage. Natural Even Hit Against a Dazed Enemy: the target takes 20 ongoing thunder damage.", "Thunder Screech +10 vs PD (1d3 nearby creatures in a group) - 12 thunder damage. Natural Even Hit: the target is dazed (save ends)."],
    abilities: ["Resist Ranged Damage 16+: Shifty, spinning bats are hard to hit unless they're grounded or stuck", "Resist Thunder 18+: Unlike most bats, this one dispenses thunder rather than fearing it.", "Unwieldy Flyer: When a thunder bat is staggered, it must roll an immediate save. On a failure, it loses its ability to fly until the end of its next turn. If flying near the ground, it lands immediately. If flying far away from the ground, it lands badly and takes 25 damage."],
    isStaggered: false,
    id: 124
},

{
    name: "Wraith Bat",
    level: 9,
    type: "mook",
    mookNumber: 1,
    initiative: "+14",
    ac: 24,
    pd: 23,
    md: 20,
    hp: 36,
    health: 36,
    attacks: ["Ghostly Fangs +14 vs PD - 25 negative energy damage, and the target takes +1d8 negative energy damage for each relationship point it has with the Lich King.", "C: Spiraling Assault +14 vs PD (1d3 nearby enemies) - 22 negative energy damage, and after the attack the wraith bat teleports to and engages with one target it hit. Limited Use: regardless of the number of wraith bats in the battle, only one wraith bat can use this attack each round."],
    abilities: ["Ghostly: This creature has resist damage 16+ to all damage except force damage. A wraith bat can move through solid objects but it can't end its movement inside them."],
    isStaggered: false,
    id: 125
},

// BLACK DRAGONS

{
    name: "Catacomb Dragon",
    level: 3,
    type: "wrecker (large)",
    initiative: "+9",
    ac: 19,
    pd: 17,
    md: 15,
    hp: 104,
    health: 104,
    attacks: ["Acid Fangs +8 vs AC (2 attacks) - 8 damage, and 5 ongoing acid damage. Natural 5, 10, 15, or 20: the dragon regains the use of its Caustic Breath if it's expended and can use it during its next turn.", "C: Caustic Breath +7 vs PD (1D3 nearby enemies) - 10 acid damage, 5 ongoing acid damage, and the target is caught in an acidic haze (see below) with an effect that depends on the roll. Even Hit: while in the haze, the target is Dazed from choking or blinding. Odd Hit: While in the haze, the target takes a -5 penalty to all saves against acid damage.  Miss: 5 ongoing acid damage. Acidic Haze: the haze is magical, semi-aware, and remains around the target until the end of the battle or until removed magically. A spellcaster can cast a spell that targets AC or PD to attack the haze and destroy it - the haze has 1 HP and an AC/PD of 22. The GM is encouraged to play fast and loose with physics here: the mist can be burned, condensed/frozen, blown away, absorbed, transmuted, etc. At the GM's discretion, there may be physical ways to remove the haze, but it should require a hard DC. Limited Use: 1/battle, as a quick action."],
    abilities: ["Vulnerability: Thunder", "Resist Acid 14+", "All-terrain Terror: A catacomb dragon flies reasonably well, powerful and fast in a straight line though it's not as manueverable as more agile flyers. It can also burrow quickly and effectively due to the acidic coating on its skin.", "Corrosive Contact: When an enemy is engaged with the catacomb dragon at the start of its turn, it takes 3 acid damage.", "Escalator: A dragon adds the escalation die to its attack rolls"],
    isStaggered: false,
    id: 157
},

{
    name: "Gorge Dragon",
    level: 5,
    type: "spoiler (large)",
    initiative: "+13",
    ac: 21,
    pd: 19,
    md: 17,
    hp: 164,
    health: 164,
    attacks: ["Coiling +10 vs PD - 18 damage, and the dragon grabs the target; while grabbed, the target takes 9 damage at the start of each of its turns. Natural 5, 10, 15, or 20: the dragon regains the use of its Dazzling Breath if it's expended and can use it during its next turn.", "Bite +13 (includes grab bonus) vs AC (one enemy it's grabbing) - 25 damage. Natural 16+: the target takes no damage and is instead Swallowed Whole (see below). Limited use: 1/round, as a free action.", "C: Dazzling Breath +9 vs MD (1D3 nearby enemies) - 14 damage, and if the target has 40 HP or fewer after being hit, it's weakened until the end of its next turn. Limited Use: 1/battle, as a quick action."],
    abilities: ["Vulnerability: Fire", "Resist Cold 14+", "Swallowed Whole: A creature that is swallowed whole must start making last gasp saves during its next turn. An ally can assist with the last gasp save as normal, but the save remains hard (16+) in that case. A roll of 16-19 causes the creature to be regurgitated from the dragon's gut, while a 20 means that the creature cuts/rips a hole through the dragon's flesh to escape (dealing basic attack damage automatically). GM note: this is a REALLY good place to stick weird treasure. Just sayin'.", "Chain Constrictor: The gorge dragon can have up to two enemies grabbed at the same time.", "Water-breathing: Gorge dragons swim well and can breathe underwater", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Escalator: A dragon adds the escalation die to its attack rolls"],
    isStaggered: false,
    id: 158
},

{
    name: "Void Dragon",
    level: 7,
    type: "caster (huge)",
    initiative: "+13",
    ac: 23,
    pd: 21,
    md: 19,
    hp: 290,
    health: 290,
    attacks: ["Jaws and Claws +12 vs AC (2 attacks) - 26 damage. Natural 5, 10, 15, or 20: the dragon regains the use of its ensorceling breath if it's expended and can use it during its next turn. Miss: 13 damage.", "C: Ensorceling Breath +12 vs PD (1D3 nearby enemies) - 24 damage, and the dragon's breath coalesces into two small void beasts of rapidly shifting form (see below). Miss: the dragon's breath coalesces into one small void beast (see below).  Void Beasts: each beast appears next to the dragon, acts as it wishes, and enters the initiative order after the next two creatures have taken their turns. See void beast stats at the end of the entry. Limited Use: 1/battle, as a quick action."],
    abilities: ["Draconic Grace: At the start of each of the void dragon's turns, roll a D6 to see if it gets an extra standard action. If the roll is equal to or less than the escalation die, the void dragon can take an extra standard action that turn. After the first success, the grace die bumps up to a D8. After the second success, it's a D10, then a D12 after the third success, and finally a D20 after the fourth one.", "Level 6 Void Beast: Slam +11 vs AC - 18 damage. Natural 5, 10, 15, or 20: the void beast spawns a new void beast at full HP. It follows the same rules for beasts formed by Ensorceling Breath. AC: 22, PD: 20, MD: 18, HP: 27", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Escalator: A dragon adds the escalation die to its attack rolls"],
    isStaggered: false,
    id: 159
},

{
    name: "Void Beast",
    level: 6,
    type: "troop",
    initiative: "see Void Dragon entry",
    ac: 22,
    pd: 20,
    md: 18,
    hp: 27,
    health: 27,
    attacks: ["Slam +11 vs AC - 18 damage. Natural 5, 10, 15, or 20: the void beast spawns a new void beast at full HP. It follows the same rules for beasts formed by the Void Dragon's Ensorceling Breath."],
    abilities: ["N/A"],
    isStaggered: false,
    id: 160
},

{
    name: "Empyrean Dragon",
    level: 9,
    type: "spoiler (huge)",
    initiative: "+17",
    ac: 25,
    pd: 23,
    md: 21,
    hp: 510,
    health: 510,
    attacks: ["Gleaming Bite +14 vs AC - 50 damage, and one effect triggers based on the head that attacks (GM's choice). Head 1: the target can't use recoveries until the end of its next turn. Head 2: one enemy that hit the dragon since the dragon's last turn takes 12 damage. Head 3: The target moves to a nearby non-harmful location of the dragon's choice as a free action. This movement can provoke opportunity attacks.", "C: Venom Breath +13 vs PD (1D3 +1 nearby enemies) - 35 damage. Swarming Motes: each time the dragon uses this attack, a swarm of light motes that resolve into scorpions and stinging insects swirl around the targets. The swarm harasses each targeted enemy, hit or miss. During its next turn, any enemy being swarmed this way must choose one: take 25 damage, OR roll twice for each attack roll it makes that turn, taking the lower result.", "[Special Trigger] C: Crying Heavens +13 vs MD (each enemy in the battle) - 20 ongoing damage. Miss: 10 ongoing damage. Temporal Manastorm: the empyrean dragon's connection with the overworld falters, creating a storm of distorted time and magic in the area. The dragon's critical hit range for all attacks expands by 2 until the end of the battle. In addition, when a target saves against the ongoing damage from this attack, the crit range of its attacks against the dragon expands by 1 until the end of the battle. Limited Use: 1/battle, as a free action when first staggered."],
    abilities: ["Three Heads Are Better Than One: The empyrean dragon can make two Gleaming Bite attacks as a single standard action, one each from two heads. The third head is assumed to be maneuvering the body around. It can choose not to make one of those attacks to end any condition affecting it except ongoing damage (this includes the Stunned condition, even though it technically doesn't get an action while Stunned). An enemy who scores a critical hit against an empyrean dragon can forego the extra damage to lop off one of the dragon's heads. If an enemy deals 150 damage with a single attack against the dragon, the attack will also remove a head. An empyrean dragon with two remaining heads can make only one Gleaming Bite attack as a standard action and can't sacrifice that attack to remove conditions. The dragon dies if all three heads are removed.", "Intermittent Breath: An empyrean dragon can use Venom Breath 1D2+1 times per battle, but never two turns in a row.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Escalator: A dragon adds the escalation die to its attack rolls"],
    isStaggered: false,
    id: 161
},

// BLUE SORCERER

{
    name: "Blue Sorcerer",
    level: 3,
    type: "caster",
    initiative: "+9",
    ac: 18,
    pd: 14,
    md: 17,
    hp: 48,
    health: 48,
    attacks: ["Nasty Dagger or Short Spear +8 vs AC - 6 damage", "[Minor Spell] R: Lightning Fork +8 vs PD - 6 lightning damage. Natural Even Hit or Miss: the sorcerer can target a different nearby enemy with the attack.", "[Major Spell] C: Breath of the Blue +8 vs PD (1 nearby enemy) - 10 lightning damage, and at the start of the target's next turn, 1d6 nearby allies of the target take 4 lightning damage.", "[Major Spell] C: Chaos Orb +8 vs MD (1d3 nearby enemies) - 8 lightning damage. Natural Even Hit: the sorcerer gains one use of the target's racial power, if any. It must use that power by the end of the battle or lose it, and it can't use the power this turn."],
    abilities: ["Power Monger: When the blue sorcerer starts its turn and it didn't gather power the previous turn, choose whether it will gather power or cast a spell this turn. When it chooses to cast a spell, roll a d20 to see if it uses a minor spell (1-10) or major spell (11-20).", "Gather Power: The blue sorcerer can use its standard action to gather power in order to cast a double-strength and double-damage spell with its next standard action. When it gathers power, the sorcerer rolls a d6 and gains one of the following chaotic benefits: 1-2: +1 AC until the start of its next turn, 3-4: one nearby enemy of the sorcerer's choice takes damage equal to its level (3), 5-6: each nearby enemy engaged with the sorcerer's allies takes damage equal to the sorcerer's level (3); OR grant one nearby dragon with intermittent breath an additional use of its breath weapon this battle.", "[Nastier Special] Escalating Caster: Add the escalation die to the sorcerer's Power Monger rolls and attack rolls.", "[Nastier Special] Sorcerous Evasion (kobolds only): Once per battle when an attack misses the sorcerer, the attacker takes miss damage from that attack, if any, and the sorcerer takes no damage."],
    isStaggered: false,
    id: 126
},

// BUGBEARS

{
    name: "Bugbear Scout",
    level: 2,
    type: "troop (double strength)",
    initiative: "+8",
    ac: 18,
    pd: 16,
    md: 15,
    hp: 88,
    health: 88,
    attacks: ["Flanged Mace +7 vs AC - 10 damage", "R: Throwing Axe +7 vs AC - 8 damage. Limited Use: 1/battle.", "C: Stealthy Maneuver +7 vs MD (the nearby enemy with the highest MD) - the next attack the bugbear scout makes against the target this turn deals +1d12 extra damage. Limited Use: 1/round, as a quick action when the bugbear scout starts its turn unengaged."],
    abilities: ["[Nastier Special] Unpredictable: The bugbear scout gains a +5 bonus to disengage checks, and when it successfully disengages, one of the enemies engaged with it takes 1d6 damage."],
    isStaggered: false,
    id: 127
},

{
    name: "Bugbear Schemer",
    level: 3,
    type: "leader",
    initiative: "+7",
    ac: 19,
    pd: 14,
    md: 17,
    hp: 42,
    health: 42,
    attacks: ["Big-ass Warclub +9 vs AC - 8 damage. Natural Even Hit or Miss: each of the bugbear schemer's nearby humanoid allies gains a +2 bonus to melee attacks until the start of the schemer's next turn. Natural Odd Miss: 4 damage.", "R: Ridiculously Heavy Crossbow +7 vs AC (one nearby or far away enemy) - 14 damage. Natural Even Hit: the target takes 1d6 extra damage. Limited Use: 1/battle.", "[Special Trigger] C: Rebuke to Fools +9 vs MD (one nearby enemy) - 2d6 psychic damage. Limited Use: 1/round as an interrupt action, when a nearby enemy rolls a natural 1-5 with an attack against it."],
    abilities: ["Combat Reload: During the bugbear schemer's turn, if it doesn't engage an enemy or move, it regains a use of ridiculously heavy crossbow if it's expended as it reloads the crossbow.", "Fighting Withdrawal: When the bugbear schemer successfully disengages, one of the enemies engaged with it takes 1d6 damage.", "[Nastier Special] Flee is a Four Letter Word: When the bugbear schemer thinks the battle is out of reach and isn't engaged, it can try to flee once per battle. As a move action, roll a hard save. On a success, the bugbear schemer had a bolt-hole or escape plan ready and it gets away (though it's probably just getting more troops)."],
    isStaggered: false,
    id: 128
},

{
    name: "Barbarous Bugbear",
    level: 4,
    type: "wrecker",
    initiative: "+12 (see Ferocious Start)",
    ac: 18,
    pd: 17,
    md: 16,
    hp: 51,
    health: 51,
    attacks: ["Warclub +9 vs AC - 11 damage. Natural Even Hit or Miss: each enemy engaged with the barbarous bugbear takes 1d8 damage.", "R: Throwing Axe +8 vs AC - 10 damage. Limited Use: 2/battle"],
    abilities: ["Ferocious Start: Until the barbarous bugbear is staggered or the escalation die is 2+, it acts twice per round.  Roll initiative once at +12. It takes its second turn when the initiative count is seven less (minimum 1)."],
    isStaggered: false,
    id: 129
},

// BULETTES

{
    name: "Green Bulette",
    level: 5,
    type: "wrecker (large)",
    initiative: "+12",
    ac: 19,
    pd: 17,
    md: 13,
    hp: 92,
    health: 92,
    attacks: ["Charging Maw +12 vs AC - 30 damage. Natural Even Miss: the target pops free from all enemies engaged with it and is vulnerable to all attacks (save ends). Leaping Bite: The Green Bulette gains a +3 bonus to attack and damage with its first attack each battle."],
    abilities: ["Into the Earth: The first time each round an attack hits the bulette, it can choose to hunker down as a free action. If it does, it gains a +3 bonus to AC and PD until the start of its next turn. Force attacks and opportunity attacks don't trigger this ability. If the green bulette hunkers down while it's moving (for example, from a readied action), its movement ends that turn.", "Blood-frenzy Escalator: While at least one creature in the battle is staggered or unconscious, the bulette gains a bonus to its attacks and damage equal to the escalation die but can't use Into the Earth. Creatures that have no blood (constructs, oozes, plant creatures, etc.) don't trigger this ability.", "Occasional Burrower: Like all bulettes, the green bulette can burrow. While above ground, it prefers to move slowly on the surface and rely on its plant and soil covered shell to stay hidden until it attacks."],
    isStaggered: false,
    id: 130
},

{
    name: "Lumberland Dirt-Fisher",
    level: 5,
    type: "wrecker (huge)",
    initiative: "+11",
    ac: 17,
    pd: 15,
    md: 11,
    hp: 135,
    health: 135,
    attacks: ["Tongue Lash and Bite +14 vs AC (1d3 nearby enemies) - 30 damage.", "R: Sticky Tongue +15 vs PD - 20 damage. Natural Even Hit: the target pops free from all enemies engaged with it, is pulled into the pit with the dirt-fisher (who engages it), and loses its next move action. Climbing out of the pit requires a move action and a DC 20 check. If the bulette is not in the pit, the bulette pulls the target to itself and engages it."],
    abilities: ["Hole Digger: A dirt-fisher can burrow incredibly quickly for short distances, but it prefers to attack from within its pre-dug trapdoor pit. It usually has a few pits dug nearby if forced to leave its current pit.", "Into the Earth: The first time each round an attack hits the dirt-fisher, it can hunker down and pull the lid on its pit shut. If it does, it gains a +3 bonus to all defenses until the start of its next turn, and any creature in the pit takes a -5 penalty to checks to climb out of the pit. Force attacks and opportunity attacks don't trigger this ability.", "Nowhere to Run: The dirt-fisher deals double damage against creatures engaged with it in its pit."],
    isStaggered: false,
    id: 131
},

{
    name: "Ravenous Bumoorah",
    level: 5,
    type: "wrecker",
    initiative: "+13",
    ac: 17,
    pd: 15,
    md: 11,
    hp: 46,
    health: 46,
    attacks: ["Land Shark Maw +15 vs AC - 14 damage. Natural Even Hit: the target takes 10 thunder damage."],
    abilities: ["Blood-frenzy Escalator: While at least one creature in the battle is staggered or unconscious, the bulette gains a bonus to its attacks and damage equal to the escalation die. Creatures that have no blood (constructs, oozes, plant creatures, etc.) don't trigger this ability.", "Earth Surge: Whenever the bumoorah takes damage from an attack, it rolls a save; on a 16+ it can immediately dive beneath the ground, preventing further attacks against it until it surfaces at the start of its next turn. Force attacks and opportunity attacks don't trigger this ability.", "Serious Burrower: The bumoorah can burrow incredibly quickly for short distances. Bumoorahs are renowned for the dust-spurts and vibrating sound they generate as they shoot through the ground like hungry spears."],
    isStaggered: false,
    id: 132
},

{
    name: "Deep Bulette",
    level: 9,
    type: "wrecker (huge)",
    initiative: "+10",
    ac: 25,
    pd: 23,
    md: 19,
    hp: 378,
    health: 378,
    attacks: ["Pulverizing Maw +15 vs AC (1d3 enemies) - 90 damage. Miss: 45 damage."],
    abilities: ["Blood Frenzy: The deep bulette's crit range expands by 4 while the escalation die is 4+.", "Tunnel Fighter: While fighting in a tunnel with nowhere for its enemies to move but ahead of it, the deep bulette gains the following abilities based on the escalation die: Escalation Die is Odd - When the bulette hits an enemy engaged with it with an attack, that target pops free from it and is hampered (save ends). Escalation Die is Even - The deep bulette engages each nearby enemy in front of it as it pushes its bulk inexorably forward down the tunnel. Enemies pushed ahead of it this way don't get to make opportunity attacks."],
    isStaggered: false,
    id: 133
},

// CAMBION ASSASSINS

{
    name: "Cambion Dirk",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+8",
    ac: 20,
    pd: 18,
    md: 14,
    hp: 13,
    health: 13,
    attacks: ["Damned Dirk +10 vs AC - 7 damage. Natural Even Hit or Miss: the cambion becomes cloaked until it's hit by an attack against MD or until it misses with a natural odd attack roll."],
    abilities: ["Dark Step: While cloaked, the cambion dirk automatically succeeds on all disengage checks."],
    isStaggered: false,
    id: 134
},

{
    name: "Cambion Sickle",
    level: 5,
    type: "troop",
    initiative: "+11",
    ac: 21,
    pd: 19,
    md: 15,
    hp: 70,
    health: 70,
    attacks: ["Damned Sickle +11 vs AC - 17 damage. Natural Even Hit or Miss: the cambion becomes cloaked until it's hit by an attack against MD or until it misses with a natural odd attack roll.", "R: Ray of Darkness +11 vs MD - 10 negative energy damage. Natural Even Hit: the target is confused until the end of its next turn, or if the cambion was cloaked when it attacked, the confusion is save ends."],
    abilities: ["Improved Dark Step: While cloaked, the cambion sickle automatically succeeds on all disengage checks and gains a +2 bonus to all defenses against ranged attacks."],
    isStaggered: false,
    id: 135
},

{
    name: "Cambion Katar",
    level: 6,
    type: "wrecker",
    initiative: "+13",
    ac: 21,
    pd: 19,
    md: 15,
    hp: 80,
    health: 80,
    attacks: ["Damned Katar +12 vs AC - 20 damage. Natural Even Hit or Miss: the cambion becomes cloaked until it's hit by an attack against MD or until it misses with a natural odd roll.", "Spiky Headbutt +12  vs AC - 8 damage, and 10 ongoing poison damage.", "R: Ray of Darkness +12 vs MD - 10 negative energy damage. Natural Even Hit: the target is confused until the end of its next turn, or if the cambion was cloaked when it attacked, the confusion is save ends."],
    abilities: ["Corruption Aura: When an enemy misses the cambion katar with a melee attack, it suffers one of the following effects: Natural Even Miss: the attacker takes 5 poison damage. Natural Odd Miss: the cambion katar can make a Spiky Headbutt attack against the attacker as a free action.", "Superior Dark Step: When cloaked, the cambion katar automatically succeeds on all disengage checks and gains a +2 bonus to all defenses against close and ranged attacks."],
    isStaggered: false,
    id: 136
},

{
    name: "Cambion Hellblade",
    level: 8,
    type: "wrecker",
    initiative: "+17",
    ac: 24,
    pd: 21,
    md: 21,
    hp: 140,
    health: 140,
    attacks: ["Damned Hellblade +14 vs AC - 40 damage. Natural Even Hit or Miss: the cambion becomes cloaked until it's hit by an attack against MD or until it misses with a natural odd attack roll. Miss: 20 damage.", "Spiky Headbutt +14 vs AC - 10 damage, and 15 ongoing poison damage.", "R: Ray of Darkness +14 vs MD - 20 negative energy damage. Natural Even Hit: the target is confused until the end of its next turn, or if the cambion was cloaked when it attacked, the confusion is save ends."],
    abilities: ["Cloaked in Evil: The cambion hellblade starts every battle cloaked. As a quick action, the hellblade can drop its cloaking to make a spiky headbutt attack as a free action.", "Corruption Aura: When an enemy misses the cambion hellblade with a melee attack, it suffers one of the following effects: Natural Even Miss: the attacker takes 15 poison damage. Natural Odd Miss: the cambion hellblade can make a spiky headbutt attack against the attacker as a free action.", "Ultimate Dark Step: While cloaked, the cambion hellblade automatically succeeds on all disengage checks, and gains a +2 bonus to all defenses against close and ranged attacks, and can drop its cloaking as a quick action to teleport to a nearby location it can see (instead of making an extra attack)."],
    isStaggered: false,
    id: 137
},

// CENTAURS

{
    name: "Centaur Lancer",
    level: 4,
    type: "troop",
    initiative: "+9",
    ac: 20,
    pd: 17,
    md: 14,
    hp: 60,
    health: 60,
    attacks: ["Charging Lance +10 vs AC - 15 damage, and the target pops free from the centaur. Hit 'Em Hard: the crit range of the attack expands by 2 and instead deals 20 damage on a hit if the centaur first moves before attacking an enemy it wasn't engaged with at the start of its turn. Natural 18+: the target is also dazed until the end of its next turn.", "Spear +9 vs AC - 13 damage. Natural Even Hit: the centaur lancer can make a kick attack as a free action.", "[Special Trigger] Kick +8 vs PD (1d2 enemies engaged with the centaur) - the target takes 5 damage and pops free from the centaur."],
    abilities: ["Harnessed Speed: The centaur lancer gains a +4 AC bonus against opportunity attacks."],
    isStaggered: false,
    id: 138
},

{
    name: "Centaur Raider",
    level: 5,
    type: "wrecker",
    initiative: "+10",
    ac: 20,
    pd: 19,
    md: 14,
    hp: 70,
    health: 70,
    attacks: ["Hoof and Weapon +10 vs AC - 15 damage. Natural Even Hit: as a free action, the centaur raider can move and make another hoof and weapon attack against a different nearby enemy (it will take opportunity attacks for moving).", "R: Short Bow +9 vs AC - 18 damage. Natural 16+: the centaur raider can take an additional move action this turn.", "[Special Trigger / Nastier Special] Sweeping Blow +10 vs AC (1d3 nearby enemies) - 15 damage, and the target loses its next move action."],
    abilities: ["Harnessed Speed: The centaur raider gains a +4 AC bonus against opportunity attacks and only takes half damage from opportunity attacks that hit it.", "[Nastier Special] Barreling Charge: When the escalation die is even, the centaur raider can use a standard action and a move action to make a sweeping blow attack against multiple enemies as it moves past them (it will take opportunity attacks). It ends this move and attack unengaged."],
    isStaggered: false,
    id: 139
},

{
    name: "Centaur Ranger",
    level: 6,
    type: "Archer",
    initiative: "+13",
    ac: 22,
    pd: 20,
    md: 16,
    hp: 85,
    health: 85,
    attacks: ["Twin Scimitars +10 vs AC (2 attacks) - 10 damage", "R: Longbow +11 vs AC - 20 damage. Natural Even Hit: the centaur ranger can take an additional move action this turn. Natural 16+: The centaur ranger can make a second (but not a third) longbow attack this turn as a free action.", "[Nastier Special] R: Pinning Volley +11 vs AC (2 attacks) - 8 damage, and the target is hampered until the end of its next turn. Natural 18+: the target is stuck (save ends) instead of hampered. Limited Use: 2/battle."],
    abilities: ["Moving Combatant: The centaur ranger gains a +4 AC bonus against opportunity attacks and only takes half damage from opportunity attacks that hit it. When an enemy makes an opportunity attack against it and misses, that enemy takes 10 damage from a counter-attack.", "Terrain Familiarity: Once each round when the escalation die is odd, the centaur ranger can make use of the area's terrain to its advantage as a free action. It can choose to either gain a +2 attack bonus for its attacks that turn, or to gain a +2 bonus to all defenses against the next attack that targets it by using a flashy or tricky maneuver (leaping off a rock over an enemy, stirring up a hornet's nest near an attacker, etc.). The target of its attack or a creature attacking it when it attempts this stunt rolls a normal save; on a success, the bonus is negated."],
    isStaggered: false,
    id: 140
},

{
    name: "Centaur Champion",
    level: 6,
    type: "leader (double strength)",
    initiative: "+12",
    ac: 22,
    pd: 20,
    md: 16,
    hp: 170,
    health: 170,
    attacks: ["Two-handed Sword +11 vs AC (2 attacks) - 20 damage. Champion's Challenge: If the centaur champion scores a crit against the target, it can challenge that enemy. If it does, until the end of the battle the champion and the target each take a -4 attack penalty against any target except for the other. If the centaur champion dies or challenges a new foe, the old challenge is canceled.", "Crushing Hooves +10 vs PD (2 attacks) - 13 damage, and the target is vulnerable until the start of its next turn."],
    abilities: ["Hooves and Slash: As a standard action, the centaur champion can make a Crushing Hooves attack and a single Two-Handed Sword attack (one attack roll) against the same enemy.", "Leader of the Clan: When the centaur champion engages an enemy, each other centaur ally engaged with that creature can pop free from it.", "Moving Combatant: The centaur champion gains a +4 AC bonus against opportunity attacks and only takes half damage from opportunity attacks that hit it. When an enemy makes an opportunity attack against it and misses, that enemy takes 20 damage from a counter-attack.", "[Nastier Special] Chief's Challenge: When the champion issues a Champion's Challenge, it only takes a -2 attack penalty against other enemies than its chosen foe, but that enemy still takes the -4 attack penalty. In addition, the champion can use Champion's Challenge as a free action when it becomes staggered.", "[Nastier Special] Champion's Scorn: Each of the champion's centaur allies in the battle gains a +5 damage bonus with ranged attacks."],
    isStaggered: false,
    id: 141
},

// CHAOS BEASTS

{
    name: "Chaos Glorp",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+5",
    ac: 17,
    pd: 16,
    md: 13,
    hp: 20,
    health: 20,
    attacks: ["Oozespasm +8 vs AC - 3 ongoing damage, or 10 damage if the target is already taking ongoing damage.  Miss (splooshglumpbrekkk): The chaos glorp pops free from all enemies and moves as a free action to engage a nearby enemy taking ongoing damage."],
    abilities: ["Spontaneous Chaos: When the escalation die reaches 6, the chaos glorp rolls a normal save. If it succeeds, it transforms into a chaos beast with full HP."],
    isStaggered: false,
    id: 162
},

{
    name: "Chaos Beast",
    level: 4,
    type: "troop",
    initiative: "+6",
    ac: 18,
    pd: 14,
    md: 17,
    hp: 48,
    health: 48,
    attacks: ["Bestial Chaos +9 vs AC - damage and effect depends on the natural roll. Natural Even Hit (peckpeckclaw): 7 damage, and the chaos beast can make another bestial chaos attack as a free action. Natural Odd Hit (slapgushslap): 15 ongoing damage. Miss (splooshglumpbrekkk): The chaos beast pops free from all enemies and moves to engage a random nearby enemy as a free action, preferably one it wasn't just engaged with."],
    abilities: ["Chaos Combined: Once a chaos beast is staggered, it can combine with another chaos beast next to it as a quick action to become a full strength chaos brute acting on this beast's initiative. Replace the other beast with a chaos glorp mook."],
    isStaggered: false,
    id: 163
},

{
    name: "Chaos Brute",
    level: 4,
    type: "wrecker (large)",
    initiative: "+8",
    ac: 20,
    pd: 17,
    md: 13,
    hp: 60,
    health: 60,
    attacks: ["Brute Chaos +9 vs AC - Damage and effect depends on the natural roll. Natural Even Hit (stomptearsmash): 25 damage. Natural Odd Hit (slapgushslap): 15 ongoing damage. Miss (shameterrordespair): 1D3 random nearby enemies each take 10 psychic damage."],
    abilities: ["Chaos Combined: Once a chaos brute is staggered, it can combine with another chaos brute or chaos beast* next to it as a quick action to become a full strength chaos behemoth: the new creature rolls initiative as if it had just entered the battle. *If a chaos beast and a chaos brute combine to create a chaos behemoth, the behemoth starts with 70 HP instead of 90 HP and takes a -1 penalty to all attacks and defenses."],
    isStaggered: false,
    id: 164
},

{
    name: "Chaos Behemoth",
    level: 4,
    type: "spoiler (huge)",
    initiative: "+5",
    ac: 21,
    pd: 16,
    md: 16,
    hp: 90,
    health: 90,
    attacks: ["Behemoth Chaos +9 vs AC - Damage and effect depends on the natural roll. Natural Even Hit (chompsucktear): 30 damage, and the chaos behemoth can make a Mewhowlwail attack as a free action. Natural Odd Hit (slapgushslap): 25 ongoing damage. Miss (slopspewbarf): 10 damage, and the target is Hampered until the end of its next turn.", "Mewhowlwail +9 vs MD (each nearby enemy) - 10 psychic damage, and if the target is taking ongoing damage, saves against that ongoing damage become hard saves (16+)."],
    abilities: ["The Betrayal of the Flesh: When a nearby enemy taking ongoing damage drops to 0 HP or below, add +15 to the amount of ongoing damage that enemy is taking as its body melts and warps. At the GM's option, a creature slain in a battle involving a chaos behemoth might transform into a chaos glorp or chaos beast instead of having the decency to just die."],
    isStaggered: false,
    id: 165
},

// CHIMERA

{
    name: "Iconic Chimera",
    level: 8,
    type: "wrecker (large)",
    initiative: "+15",
    ac: 24,
    pd: 20,
    md: 17,
    hp: 320,
    health: 320,
    attacks: ["Fangs, Claws, and Horns +14 vs AC (3 attacks) - 25 damage. Natural 14-15: the target is Dazed until the end of the chimera's next turn from a headbutt. Natural 16-17: the target takes 20 ongoing damage from raking claws. Natural 18-20: the chimera can make a Fiery Breath attack as a free action.", "[Special Trigger] Fiery Breath +14 vs PD (up to 3 nearby enemies in a group) - 3D10 fire damage"],
    abilities: ["Chimerical Change: At the start of battle each PC rolls one icon relationship die of their choice and one die chosen from their relationships by the GM. A roll of 6 means the chimera has shifted in a manner that gives it a chimerical flaw (F) that the adventurers can exploit. A roll of 5 indicates that the chimera gains both a flaw and a benefit associated with that icon. A result of 1 or 2 means that the chimera gains the icon's chimerical benefit (B) without the flaw.  See Bestiary page 43 for details, it's the whole page."],
    isStaggered: false,
    id: 166
},

// CHUUL

{
    name: "Chuul",
    level: 6,
    type: "spoiler (large)",
    initiative: "+11",
    ac: 25,
    pd: 18,
    md: 18,
    hp: 126,
    health: 126,
    attacks: ["Crushing Claws + 11 vs AC (2 attacks) - 21 damage. Both attacks hit the same target: the chuul grabs the target.", "Crippling Tentacles +11 vs PD - the target is Weakened (save ends). First failed save: the target is Hampered and Weakened (save ends both). Second failed save: the target is instead Helpless (hard save ends, 16+). Quick Use: This attack only requires a quick action when used against an enemy the chuul is grabbing."],
    abilities: ["Resist Psychic 16+", "Water-breathing: Chuuls swim well and can breathe underwater, though they prefer not to.", "[Nastier Special] Bite it Off: When the chuul scores a critical hit against a Weakened or Helpless foe, it bites off one of that enemy's hands. An adventurer with no hands might have trouble casting spells or holding weapons. (A cleric might be able to restore the missing appendage with a ritual).", "[Nastier Special] Fueled by Hate: Once per round when the chuul misses with an attack, its next attack that battle deals 4D6 extra poison damage on a hit."],
    isStaggered: false,
    id: 167
},

{
    name: "Chuulish Swarm",
    level: 6,
    type: "troop",
    initiative: "+13",
    ac: 20,
    pd: 18,
    md: 16,
    hp: 80,
    health: 80,
    attacks: ["Fly-by Tentacle Sting +11 vs AC - 15 poison damage. Natural Even Miss: the swarm can pop free from all enemies, and as a quick action this turn, it can move normally even if it has already moved this turn. Natural Odd Hit or Miss: the swarm can make a Sharp Claws attack this turn as a quick action instead of a standard action.", "Sharp Claws +11 vs AC - 10 damage, and 5 ongoing poison damage."],
    abilities: ["Flight: The swarm flies fast and is agile, but has a wide turning radius.", "Resist Damage 16+", "Swarm: This monster is a swarm of chuul body parts cooperating to attack humanoids. Even though there are thousands of them, treat them as a single creature.", "Water-breathing: Chuuls swim well and can breathe underwater, though they prefer not to.", "[Nastier Special] Burrow Under Your Skin: When an attacker misses the swarm with a melee attack, that enemy takes 10 ongoing damage."],
    isStaggered: false,
    id: 168
},

{
    name: "Massive Mutant Chuul",
    level: 10,
    type: "wrecker (huge)",
    initiative: "+15",
    ac: 27,
    pd: 25,
    md: 22,
    hp: 450,
    health: 450,
    attacks: ["Crushing Claws +15 vs AC (2 attacks) - 70 damage. Both attacks hit the same target: the chuul grabs the target. Miss: 35 damage.", "Crippling Tentacles +15 vs PD - the target is Weakened (hard save ends, 16+). First failed save: the target is Hampered and Weakened (hard save ends both). Second failed save: the target is instead Helpless (hard save ends). Quick Use: this attack only requires a quick action when used against an enemy the chuul is grabbing.", "[Chuul Mutation] R: Venom Spit +16 vs PD (1D3 nearby or far away enemies in a group) - 40 poison damage. First attack is a natural even roll: the chuul can make a second Venom Spit attack against the same group as a free action."],
    abilities: ["I Hate You All: Once per round when the chuul is engaged with one or more enemies and is the target of an attack, it can try to interpose one of those enemies between itself and the attack as a free action after seeing the attack roll. That enemy rolls a normal save; on a failure, it becomes the target of the attack instead of the chuul. If the chuul tries to interpose an enemy it's grabbing, the save is hard (16+) instead.", "Resist Psychic 16+", "Water-breathing: Chuuls swim well and can breathe underwater, though they prefer not to.", "Chuul Mutations: choose ONE", "[Chuul Mutation] Exposed Brain Nightmare Aura: When an enemy is engaged with the chuul at the start of its turn, that creature must roll a normal save; on a failure, it's Hampered (easy save ends, 6+).", "[Chuul Mutation] Extra Claw: The mutant chuul can make three Crushing Claws attacks instead of two. If two of the attacks hit the same target, the chuul grabs it.", "[Chuul Mutation] Oversized Claw: When the chuul rolls a natural even hit with Crushing Claws, it deals 120 damage instead of 70.", "[Chuul Mutation] Venom Spit: the chuul gains a Venom Spit attack.", "[Chuul Mutation] Whipping Tentacles: The Crippling Tentacles attack is now a close attack against 1D3 enemies in a group."],
    isStaggered: false,
    id: 169
},

{
    name: "Chuulish Slave",
    level: 4,
    type: "troop",
    initiative: "+9",
    ac: 20,
    pd: 18,
    md: 14,
    hp: 54,
    health: 54,
    attacks: ["Misshapen Claws +9 vs AC (2 attacks) - 7 damage. Both attacks hit the same target: the chuulish slave can make a Writing Tentacles attack against that target as a quick action this turn.", "Writing Tentacles +9 vs PD - the target is Weakened (save ends)"],
    abilities: ["Chuulish Slave Mutations: Choose ONE", "[Chuul Mutation] Chitonous Plates: The slave gains a +2 bonus to AC", "[Chuul Mutation] Acid Saliva: The Writing Tentacles attack also deals 10 acid damage on a hit.", "[Chuul Mutation] Poisonous Blood: When a melee attack hits the chuulish slave, the attacker takes 10 poison damage.", "[Chuul Mutation] Grossness: The slave is a large blob-like mess. It has 72 HP but takes a -2 penalty to all defenses."],
    isStaggered: false,
    id: 170
},

// COUATL

{
    name: "Couatl",
    level: 8,
    type: "spoiler (large)",
    initiative: "+14",
    ac: 24,
    pd: 21,
    md: 21,
    hp: 300,
    health: 300,
    attacks: ["Rippling Scales +13 vs PD (each enemy engaged with it) - 10 damage, and the couatl must pop free from the target. Quick Use: This attack only requires a quick action (once per round) to use.", "Serpent Strike +13 vs AC (one Dazed, Confused, Staggered, or Stunned enemy) - 60 damage, and 20 ongoing poison damage.", "R: Forked Devastation +13 vs PD (one nearby or far away enemy) - 50 damage of the following type (couatl's choice): fire, holy, or lightning. Natural Even Hit or Miss: the couatl can make a Forked Devastation attack against a different enemy as a free action."],
    abilities: ["Resist Holy and Poison 16+", "Flight: Couatls fly and hover so smoothly on their multi-colored wings that other flyers get jealous.", "Cyclic Escalator: When the escalation die is even, the couatl adds the escalation die to its attack rolls.", "[Nastier Special] Ever-rippling: The couatl can use more than one Rippling Scales attack during this turn.", "[Nastier Special] Flee: Once per campaign, the couatl can take a 'campaign loss' similar to the PC-oriented flee special action to escape from certain death, along with its allies.", "[Nastier Special] One or Two Icon-centric Abilities: Choose each appropriate ability from the Icon-centered Abilities list after the elder couatl entry (Bestiary page 53)."],
    isStaggered: false,
    id: 171
},

{
    name: "Elder Couatl",
    level: 11,
    type: "spoiler (large)",
    initiative: "+16",
    ac: 27,
    pd: 24,
    md: 24,
    hp: 600,
    health: 600,
    attacks: ["Rippling Scales +17 vs PD (each enemy engaged with it) - 25 damage, and the couatl must pop free from the target. Quick Use: This attack only requires a quick action (once per round) to use.", "Serpent Strike +17 vs AC (one Dazed, Confused, Staggered, or Stunned Enemy) - 110 damage, and 40 ongoing poison damage.", "R: Forked Devastation +17 vs PD (one nearby or far away enemy) - 90 damage of the following type (couatl's choice): fire, holy, or lightning. Natural Even Hit or Miss: the couatl can make a Forked Devastation attack against a different enemy as a free action."],
    abilities: ["Cyclic Salvation Escalator: When the escalation die is even, the couatl adds the escalation die to its attack rolls and saves.", "Flight: Couatls fly and hover so smoothly on their multi-colored wings that other flyers get jealous.", "One or Two Icon-centric Abilities: Choose each appropriate ability from the Icon-centered Abilities list after the elder couatl entry (Bestiary page 53).", "Resist Holy and Poison 16+", "[Nastier Special] Ever-rippling: The couatl can use more than one Rippling Scales attack during this turn.", "[Nastier Special] Flee: Once per campaign, the couatl can take a 'campaign loss' similar to the PC-oriented flee special action to escape from certain death, along with its allies."],
    isStaggered: false,
    id: 172
},

// DROW

{
    name: "Drow Spider-Mage",
    level: 3,
    type: "caster",
    initiative: "+8",
    ac: 19,
    pd: 13,
    md: 17,
    hp: 40,
    health: 40,
    attacks: ["Sharpened Wand +8 vs AC - 10 damage", "R: Shadowfire +8 vs PD (one nearby or far away enemy) - 8 damage, and the target is Weakened (save ends). Limited Use: Once the spider-mage hits with Shadowfire, she can't use it again until the target saves against it.", "C: Malediction of Webs +8 vs PD (up to 2 nearby enemies in a group) - the target is Stuck (save ends), and takes 5 damage each time it fails the save."],
    abilities: ["Dark Orison: Each time the spider-mage misses with an attack, the crit range of attacks by drow and spiders in the battle expands by 1.", "Spider Speaker: The first time each battle an enemy hits the spider-mage with a melee attack, that attacker takes 8 ongoing poison damage from her familiar."],
    isStaggered: false,
    id: 148
},

{
    name: "Drow Soldier",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 20,
    pd: 19,
    md: 14,
    hp: 18,
    health: 18,
    attacks: ["Paired Swords +9 vs AC - 6 damage", "R: Crossbow +9 vs AC (one nearby enemy, or far away enemy at -2 attack) - 7 damage"],
    abilities: ["With My Dying Breath I Curse Thee: When the drow soldier drops to 0 HP, one enemy engaged with it takes 2 poison damage before the drow soldier dies."],
    isStaggered: false,
    id: 149
},

{
    name: "Drow Sword Maiden",
    level: 5,
    type: "troop",
    initiative: "13",
    ac: 21,
    pd: 19,
    md: 15,
    hp: 75,
    health: 75,
    attacks: ["Cruel Cutlass +10 vs AC - 18 damage", "C: Dagger Dance +10 vs AC (one nearby enemy, or a far away enemy at -2 attack) - 14 damage. Natural Even Hit: each other enemy engaged with the sword maiden takes 10 damage."],
    abilities: ["[Nastier Special] Effortless Grace: Once per round when an attack misses the sword maiden, she can move or make a cruel cutlass attack as a free action.", "[Nastier Special] Arcane Warrior: The sword maiden has a true magic item (probably a weapon) and uses it to her benefit (adjust stats accordingly)."],
    isStaggered: false,
    id: 150
},

{
    name: "Drow Spider-Sorceress",
    level: 6,
    type: "caster",
    initiative: "+11",
    ac: 22,
    pd: 16,
    md: 20,
    hp: 84,
    health: 84,
    attacks: ["Sharpened Wand +11 vs AC - 20 damage", "R: Darkfire +11 vs PD (one nearby or far away enemy) - 20 damage, and the target is Weakened (save ends). Limited Use: Once the sorceress hits with darkfire, she can't use it again until the target saves.", "C: Greater Malediction of Webs +11 vs PD (up to 2 nearby enemies in a group) - 10 damage, and the target is Stuck (save ends) and takes 10 damage each time it fails the save."],
    abilities: ["Dark Orison: Each time the spider-sorceress misses with an attack, the crit range of attacks by drow and spiders in the battle expands by 1.", "Spider Speaker: The first time each battle an enemy hits the spider-sorceress with a melee attack, that attacker takes 16 ongoing poison damage from her familiar.", "[Nastier Special] Arcane Arachnids: The spider sorceress has a true magic item (probably an implement) and uses it to her benefit (adjust stats accordingly)."],
    isStaggered: false,
    id: 151
},

{
    name: "Drow Darkbolt",
    level: 7,
    type: "archer",
    initiative: "12",
    ac: 23,
    pd: 21,
    md: 17,
    hp: 100,
    health: 100,
    attacks: ["Dagger and Spidersilk Line +12 vs AC (one nearby enemy) - 22 damage. Miss: 8 damage.", "R: Exsanguinating Barbed Arrows +12 vs AC (one nearby or far away enemy) - 20 damage, and 6 ongoing damage. Natural Even Hit: As a free action, the darkbolt can make a second barbed arrows attack against a different enemy with a -2 attack penalty. If it gets another natural even hit, it can make a third (and final) barbed arrows attack against a different enemy with a -4 attack penalty as a free action."],
    abilities: ["Darkbolt Vanish: If unengaged, when the darkbolt attacks and rolls a natural even miss, it can step into a shadow dimension that turn as a move action. While in the shadows, it can't be seen or targeted with attacks, and it reappears anywhere nearby at the start of its next turn.", "Wall Crawler: A darkbolt can climb on ceilings and walls as easily as it moves on the ground thanks to its rope-dagger and spiked bracers.", "[Nastier Special] Well Equipped: The drow has a potion or poison that it can use as a quick action twice this battle."],
    isStaggered: false,
    id: 152
},

{
    name: "Drow Cavalry",
    level: 9,
    type: "wrecker (double strength)",
    initiative: "+14",
    ac: 25,
    pd: 23,
    md: 18,
    hp: 270,
    health: 270,
    attacks: ["Glass-tipped Lance +14 vs AC - 75 (90/25) damage, and the target pops free from the cavalry and is Weakened (save ends). Limited Use: 1/battle, during a surprise round or the first round of battle.", "Spider Saber +14 vs AC - 75 (90/25) damage"],
    abilities: ["Expert Spider Rider: While mounted, the drow cavalry deals +15 damage with its attacks, hit or miss, against unmounted enemies.", "Mounted Combatant: Reduce the drow cavalry's attack damage by 50 when it's not riding a spider.", "Spider Mount: Whenever the drow cavalry rolls a natural 1-10 on an attack roll, its spider mount acts independently, choosing one of the following options (see Spider Mount stat block): Bite - the spider makes a bite attack, Jump and Scuttle - the spider and its rider pop free from all enemies and can move somewhere nearby, Web - the spider makes a web attack."],
    isStaggered: false,
    id: 153
},

{
    name: "Spider Mount",
    level: 6,
    type: "troop",
    initiative: "+15 (or same as rider if it has one)",
    ac: 22,
    pd: 16,
    md: 20,
    hp: 90,
    health: 90,
    attacks: ["Bite +11 vs AC - 15 damage, and 10 ongoing poison damage", "C: Web +11 vs PD (up to 2 nearby enemies in a group) - The target is Stuck (save ends)."],
    abilities: ["Wall Crawler: A spider mount can climb on ceilings and walls as easily as it moves on the ground, and so can its rider.", "Uncontrolled: A riderless spider mount will eventually run away. At the start of the spider's turn roll a d4; if you roll less than the escalation die, the mount flees."],
    isStaggered: false,
    id: 154
},

{
    name: "Weaver Swarm",
    level: 3,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 19,
    pd: 17,
    md: 13,
    hp: 10,
    health: 10,
    attacks: ["A Thousand Needle Wounds +8 vs AC - 5 damage. Natural 16+: the target is Hampered until the end of its next turn. Natural 18+: As above, and the target is also Stuck until the end of its next turn."],
    abilities: ["Clinging: Enemies take a -5 penalty to disengage checks against the swarm.", "Wall Crawler: The swarm can climb on ceilings and walls as easily as it moves on the ground."],
    isStaggered: false,
    id: 155
},

{
    name: "Lokkris",
    level: 6,
    type: "mook",
    mookNumber: 1,
    initiative: "+16",
    ac: 22,
    pd: 21,
    md: 14,
    hp: 23,
    health: 23,
    attacks: ["Stingers On Each Leg +11 vs AC - 8 damage, and 5 ongoing poison damage."],
    abilities: ["Lays Eggs In Your Eyes!: Each time the lokkris hits with an attack, the crit range for all lokkris against that target expands by 1 until the end of the battle.", "Flight: Lokkris are quick darting fliers that move with an angry buzzing sound.", "Wall Crawler: A lokkris can climb on ceilings and walls as easily as it moves on the ground."],
    isStaggered: false,
    id: 156
},

// DYBBUK

{
    name: "Corpse Dybbuk",
    level: 6,
    type: "troop (double-strength)",
    initiative: "+12",
    ac: 22,
    pd: 16,
    md: 20,
    hp: 180,
    health: 180,
    attacks: ["Supernatural Strength +11 vs AC - 35 damage. Natural 16+: the target is Vulnerable to the dybbuk's attacks until the end of the battle. Natural 18+: the dybbuk gains a Fear aura against the target (save ends) as the dybbuk warps its corpse flesh into a horrifying form. While engaged with the dybbuk, if the scared target has 30 HP or fewer, it's Dazed and does not add the escalation die to its attacks. Miss: 3D6 damage."],
    abilities: ["Unholy Aversion: When an enemy makes a spell or magic weapon attack against the corpse dybbuk that deals holy damage and rolls a natural 18+, the dybbuk leaves its host body. The body drops in place and the corpse dybbuk becomes an undamaged ethereal dybbuk (see that entry). If the escalation die is 3+, reset the escalation die to 2.", "Warp Another's Flesh: Once per battle as a free action, the corpse dybbuk can grant a nearby ally a +2 bonus to attack and damage until the end of the battle. The warped ally takes damage equal to its level each time it uses a standard action to attack. If this ability is expended, the dybbuk regains it when the escalation die reaches 4+."],
    isStaggered: false,
    id: 173
},

{
    name: "Parasitic Dybbuk",
    level: 6,
    type: "spoiler (double-strength)",
    initiative: "+13",
    ac: 22,
    pd: 16,
    md: 20,
    hp: 180,
    health: 180,
    attacks: ["Loathsome Vomity Smear +10 vs PD - 40 poison damage. Miss: 3D10 poison damage.", "C: Unearthly Glare +10 vs MD (one nearby enemy) - 30 psychic damage. Natural Even Hit or Miss: one special dybbuk ability triggers as a free action (see below).", "[Special Dybbuk Ability] C: Visage of Innocence +11 vs MD (one nearby enemy) - the target can't attack the dybbuk until the end of its next turn.", "[Special Dybbuk Ability] C: Horrific Visage +11 vs MD (1D3 nearby enemies) - the target is Weakened (save ends).", "[Special Dybbuk Ability] C: Puppet Strings +11 vs MD - the target is confused (save ends)."],
    abilities: ["Shapechange: As a standard action, the dybbuk can change its host's form to that of another humanoid, or back to its own shape. Seeing through the shapechange requires a DC 25 skill check. When the dybbuk is driven out of the host body, the body reverts to its original form.", "Unholy Aversion: When an enemy makes a spell attack or magic weapon attack against the parasitic dybbuk that deals holy damage and rolls a natural 18+, the dybbuk leaves the host body. The body drops in place (unconscious) and the parasitic dybbuk becomes an undamaged ethereal dybbuk (see that entry). If the escalation die is 3+, reset the escalation die to 2.", "Wall-crawler: A dybbuk can climb on ceilings and walls as easily as it moves on the ground.", "Special Dybbuk Abilties: Choose ONE (see entries)", "[Special Dybbuk Ability] Scratching Nails: When the target is engaged with the dybbuk at the start of its turn, it takes 20 damage.", "[Special Dybbuk Ability] Warped Flesh: The dybbuk heals 30 HP.", "[Nastier Special] Experienced Possessor: When the dybbuk rolls a natural odd hit or miss with Unearthly Glare, one special dybbuk ability triggers.", "[Nastier Special] Flight: The dybbuk can hover 6 feet off the ground and make boneless flea-like leaps."],
    isStaggered: false,
    id: 174
},

{
    name: "Ethereal Dybbuk",
    level: 7,
    type: "wrecker (double-strength)",
    initiative: "+16",
    ac: 26,
    pd: 24,
    md: 20,
    hp: 206,
    health: 206,
    attacks: ["R: Soul-suck +12 vs MD (3 attacks, against nearby or far away enemies) - 38 negative energy damage. Limited Use: if the dybbuk hits the same target with its first two soul-suck attacks, it must make the third attack against a different target if it can (or it loses the attack)."],
    abilities: ["Fading: When the escalation die is 2+, the dybbuk's soul-suck attack only deals 19 damage, and when it's 4+ soul-suck only deals 10 damage. When the escalation die reaches 6, the dybbuk fades away at the end of the round. A dybbuk that fades away undefeated is not gone forever and may return in a later adventure.", "Fear: The dybbuk knows things about the other side and enjoys telling such secrets to you! While engaged with this creature, enemies that have 36 HP or fewer are Dazed and do not add the escalation die to their attacks.", "Flight: The dybbuk hovers eerily, roughly 6 feet off the ground.", "Otherworldly: When a melee attack that doesn't deal holy damage targets this creature, the attacker must roll a natural 18+ on the attack roll or it only deals half damage."],
    isStaggered: false,
    id: 175
},

// ELDER BEASTS

{
    name: "Umluppuk",
    level: 7,
    type: "spoiler (huge)",
    initiative: "+15",
    ac: 23,
    pd: 21,
    md: 20,
    hp: 310,
    health: 310,
    attacks: ["Pods of Mouths and Eyes +12 vs AC (4 attacks) - 20 damage. Natural Even Hit: the target is Stuck (easy save ends 6+). Miss: 10 damage.", "C: Chorus of Madness +12 vs MD (up to 3 random nearby creatures) - 10 ongoing psychic damage, and the target is confused (save ends both). Quick Use: This ability only requires a quick action (once per round) instead of a standard action when the umluppuk starts its turn unengaged (or without an enemy consumed if you are using the nastier special!).", "[Nastier Special] Consume +12 vs PD (one Stuck enemy) - 50 damage, and the target takes 10 ongoing acid damage and is absorbed into the umluppuk (hard save ends both, 16+); while inside the umluppuk, the target is Vulnerable to the umluppuk's Pods of Mouths and Eyes attacks, and it's Stuck."],
    abilities: ["Resist Psychic 18+", "[Nastier Special] Consume: Once per round during its turn, the umluppuk can make a Consume attack against a Stuck enemy as a quick action. The umluppuk can only have one target consumed at a time."],
    isStaggered: false,
    id: 176
},

{
    name: "Hagunemnon",
    level: 13,
    type: "wrecker (large)",
    initiative: "+16",
    ac: 29,
    pd: 23,
    md: 27,
    hp: 864,
    health: 864,
    attacks: ["Spontaneous Metamorphosing Limbs +18 vs AC - 110 damage, and the hagunemnon can make a Spontaneous Metamorphosing Limbs attack against a different target as a free action. Natural 19+: The target starts making last gasp saves. On the fourth failure, it becomes a shapeless ooze. Diminishing Limbs: With each subsequent hit after the first, Spontaneous Metamorphosing Limbs deals 20 less damage. The hagunemnon also doesn't gain any extra attacks when it makes a basic attack."],
    abilities: ["Dimension Hop: As a move action when the escalation die is odd, the hagunemnon can teleport nearby or far away to a location it can see.", "Resist Psychic 18+", "Shapechange: As a standard action, the hagunemnon can change its form to that of any large or medium creature, or back to its own shape. Seeing through the shapechange requires a DC 25 skill check.", "[Nastier Special] Madness Aura: When a creature is engaged with the hagunemnon at the start of its turn, it takes 4D10 psychic damage. If it takes 31 or more damage this way during a single turn, it's also Confused until the start of its next turn."],
    isStaggered: false,
    id: 177
},

{
    name: "Warped Beast",
    level: 5,
    type: "wrecker",
    initiative: "+9",
    ac: 20,
    pd: 17,
    md: 15,
    hp: 75,
    health: 75,
    attacks: ["Tentacle Maw +10 vs AC - 16 damage. Natural 18+: the target is Hampered until the end of its next turn. Miss: the warped beast can make a Psychic Blast attack as a free action.", "[Special Trigger] C: Psychic Blast +10 vs MD (1D3 nearby enemies) - 8 psychic damage. Natural 18+: the target is Confused until the end of its next turn."],
    abilities: ["One Madness Feature: At the start of each of the warped beast's turns, roll a D6. The warped beast gains the corresponding ability until the start of its next turn. 1) Amorphous Oozing Form: The beast has Resist Damage 11+ to all damage. 2) Dimensional Slide: Once during its turn, the warped beast can teleport anywhere nearby it can see as a move action. Each enemy engaged with it when it teleports is Confused until the end of its next turn. 3) Fear Aura: While engaged with the warped beast, enemies that have 24 HP or fewer are Dazed and do not add the escalation die to their attacks. 4) Gibbering Mouths: When an enemy ends its turn engaged with the warped beast, it's Confused until the end of its next turn. 5) Many Spontaneous Limbs: When the warped beast makes a Tentacle Maw attack during its turn, roll a D4. That many additional limbs or tentacles spontaneously erupt from the creature and make an additional basic attack that turn (special abilities/effects don't trigger on those extra attacks). Each of those attacks only deals half damage. 6) Warping Touch: When the warped beast hits a creature with a Tentacle Maw attack, the target also takes 5 ongoing psychic damage and a -2 penalty to saves (save ends both).", "[Nastier Special] Warped Mutant: Roll two madness features instead of one each round (reroll similar results)."],
    isStaggered: false,
    id: 178
},

// ETTERCAPS

{
    name: "Ettercap Hunter",
    level: 2,
    type: "blocker",
    initiative: "+6",
    ac: 18,
    pd: 14,
    md: 14,
    hp: 32,
    health: 32,
    attacks: ["Poison Bite +7 vs AC - 6 damage, and 4 ongoing poison damage. Miss: if the target is Dazed, Hampered, or Stuck, it takes 4 extra damage.", "C: Web Spray +8 vs PD (1D4 nearby enemies in a group) - 3 damage. Natural Even Hit: the target is Hampered (save ends). Natural Odd Hit: the target is Stuck (save ends). Limited Use: 1/battle."],
    abilities: ["Goopy Webs: When an enemy of level 4 or lower rolls a natural 1-5 with a melee attack against an ettercap hunter, that enemy is Dazed (save ends)."],
    isStaggered: false,
    id: 179
},

{
    name: "Ettercap Acolyte",
    level: 1,
    type: "mook",
    mookNumber: 1,
    initiative: "+2",
    ac: 16,
    pd: 13,
    md: 15,
    hp: 7,
    health: 7,
    attacks: ["Sacrificial Dagger +6 vs AC - 3 damage."],
    abilities: ["Fanatical Devotion: As a standard action, an ettercap acolyte can deal 2D6 poison damage to one Dazed, Hampered, or Stuck enemy engaged with it. The ettercap acolyte also takes 7 damage from this kamikaze action, killing it.", "Goopy Webs: When an enemy of level 3 or lower rolls a natural 1-5 with a melee attack against an ettercap acolyte, that enemy is Dazed (save ends)."],
    isStaggered: false,
    id: 180
},

{
    name: "Ettercap Supplicant",
    level: 3,
    type: "caster",
    initiative: "+6",
    ac: 18,
    pd: 14,
    md: 17,
    hp: 44,
    health: 44,
    attacks: ["Sacrificial Dagger +7 vs AC - 8 damage, and the ettercap supplicant can use The Web That Burns an additional time this battle.", "R: The Skein of Pain +8 vs MD - 10 psychic damage, and until the end of the battle, the target takes 1D6 psychic damage each time it fails a save.", "C: The Web That Burns +8 vs PD (1D3 nearby enemies in a group) - 6 ongoing acid damage. Natural Even Hit: The target is Hampered (save ends). Limited Use: 1/battle."],
    abilities: ["Goopy Webs: When an enemy of level 5 or lower rolls a natural 1-5 with a melee attack against an ettercap supplicant, that enemy is Dazed (save ends)."],
    isStaggered: false,
    id: 181
},

{
    name: "Ettercap Warrior",
    level: 3,
    type: "blocker",
    initiative: "+9",
    ac: 20,
    pd: 15,
    md: 15,
    hp: 48,
    health: 48,
    attacks: ["Thrusting Spear +9 vs AC - 8 damage. Natural 16+: the ettercap warrior can make a Poison Bite attack as a free action. Natural Even Miss: 4 damage.", "Poison Bite +9 vs AC - 6 damage, and 4 ongoing poison damage. Miss: If the target is Dazed, Hampered, or Stuck it takes 4 damage.", "C: Web Spray +9 vs PD (1D4 nearby enemies in a group) - 4 damage. Natural Even Hit: the target is Hampered (save ends). Natural Odd Hit: the target is Stuck (save ends). Limited Use: 1/battle."],
    abilities: ["Goopy Webs: When an enemy of level 5 or lower rolls a natural 1-5 with a melee attack against an ettercap warrior, that enemy is Dazed (save ends)."],
    isStaggered: false,
    id: 182
},

{
    name: "Ettercap Keeper",
    level: 4,
    type: "leader",
    initiative: "+7",
    ac: 20,
    pd: 15,
    md: 18,
    hp: 50,
    health: 50,
    attacks: ["Staff and Fangs +9 vs AC - 10 damage. Natural Even Hit or Miss: 5 ongoing poison damage.", "R: Staff of Tongues +9 vs MD (one nearby or far away enemy) - 15 psychic damage, and the target can't cast spells or speak (save ends).", "C: Her First Whisper +9 vs MD (each nearby enemy engaged with one or more ettercaps) - 10 ongoing psychic damage. Limited Use: 1/battle.", "R: Her Other Thought +9 vs MD (one nearby enemy per point on the escalation die) - 13 psychic damage. Miss: 7 psychic damage. Limited Use: 1/battle."],
    abilities: ["The Web of Faith: While one or more lower-level non-mook ettercap allies are nearby it, the ettercap keeper gains resist damage 16+.", "Goopy Webs: When an enemy of level 6 or lower rolls a natural 1-5 with a melee attack against an ettercap keeper, that enemy is Dazed (save ends)."],
    isStaggered: false,
    id: 183
},

// FROST GIANTS

{
    name: "Bergship Raider",
    level: 7,
    type: "spoiler (large)",
    initiative: "+10",
    ac: 21,
    pd: 20,
    md: 18,
    hp: 270,
    health: 270,
    attacks: ["Whirling Ice Hook +13  vs AC - 50 damage, and the target takes a -5 penalty to disengage checks until the end of its next turn. Miss: 15 damage to each enemy engaged with the giant.", "R: Frost Chain +13 vs AC (one nearby enemy or far away enemy at -2 attack) - 40 damage, and the target is pulled next to the giant, who engages it.", "[Nastier Special] Knockdown +10 vs PD (one enemy smaller than it) - 20 damage, and the target can't disengage until the end of its next turn."],
    abilities: ["Vulnerability: Fire", "Resist Cold 16+", "Ancient Cold: While battling one or more frost giants, there is only a 50% chance that the escalation die increases at the start of the round.", "Winter's Bite: When the escalation die is odd, each enemy engaged with the raider takes 35 cold damage at the start of its turn.", "[Nastier Special] Overbearing: Twice per battle, the raider can make a Knockdown attack as a quick action (once per round)."],
    isStaggered: false,
    id: 184
},

{
    name: "Ice Sorceress",
    level: 7,
    type: "caster (large)",
    initiative: "+10",
    ac: 23,
    pd: 22,
    md: 17,
    hp: 190,
    health: 190,
    attacks: ["Icicle Staff +14 vs AC - 20 damage, 20 cold damage, and the sorceress can make an Icy Delusions attack against the target as a free action.", "R: Winter Wind +14 vs PD - 55 cold damage. Natural Even Hit or Miss: The sorceress can make an Icy Delusions attack against the target as a free action.", "[Special Trigger] C: Icy Delusions +14 vs MD (one enemy) - At the start of each round, the target loses 2D6 points from their initiative count as they slowly freeze from the inside out (save ends). Frozen Flesh: When a creature is reduced to 0 initiative or lower from Icy Delusions, it becomes delusional and frozen and must choose one condition that will affect it: Confused (hard save ends); OR Stunned (save ends). After saving, the creature rerolls its initiative.", "[Special Trigger] C: Ice Wall +14 vs PD (one moving enemy or ranged attacker) - The target stops its movement or loses its ranged attack that turn, and the wall of ice remains until the end of the battle (GM's choice on its size, but it shouldn't be too large or thick; normal DC to break through it)."],
    abilities: ["Vulnerability: Fire", "Resist Cold 16+", "Ice Summoner: Once per round as a free action, the giant can make an ice wall attack to conjure forth a wall of ice that stops one enemy's movement or ranged attack. The giant can't use this ability to target creatures making fire attacks or wielding weapons that deal fire damage.", "Ancient Cold: While battling one or more frost giants, there is only a 50% chance that the escalation die increases at the start of the round.", "[Nastier Special] Ice Armor: The ice sorceress has Resist Damage 16+ unless the attack deals fire damage."],
    isStaggered: false,
    id: 185
},

{
    name: "Frost Giant Adventurer",
    level: 8,
    type: "spoiler (large)",
    initiative: "+13",
    ac: 24,
    pd: 23,
    md: 18,
    hp: 280,
    health: 280,
    attacks: ["Overlarge Club +13 vs AC (one nearby enemy or one enemy engaged with the giant) - 75 damage. Natural Even Hit: The target loses its next move action, and if it's engaged with the giant, it pops free."],
    abilities: ["Vulnerability: Fire", "Resist Cold 16+", "Ancient Cold: While battling one or more frost giants, there is only a 50% chance that the escalation die increases at the start of the round.", "Blood of the Niefelheim: When an enemy the frost giant adventurer is engaged with scores a critical hit against the giant, that enemy is Hampered (hard save ends 16+)."],
    isStaggered: false,
    id: 186
},

{
    name: "Jotun Auroch (huge mook)",
    level: 6,
    type: "mook",
    mookNumber: 1,
    initiative: "+7",
    ac: 20,
    pd: 18,
    md: 13,
    hp: 70,
    health: 70,
    attacks: ["Trampling Hooves +8 vs PD - 6 damage. Natural 1-5: the jotun auroch can make a Fiery or Frosty Breath attack as a free action.", "[Special Trigger] C: Fiery or Frosty Breath +10 vs PD (1D4 nearby enemies) - 5 fire or cold damage, depending on what the jotun auroch has been eating lately."],
    abilities: ["Resist Cold and Fire 18+", "Big Sack of Hit Points: The jotun auroch is not a combat threat and can be more or less ignored when building battles. Battles involving jotun aurochs should pivot around frost and fire giants who are trying to rustle, herd, or protect their herd while the PCs are in their way."],
    isStaggered: false,
    id: 187
},

{
    name: "Winter Beast",
    level: 6,
    type: "troop (large)",
    initiative: "+7",
    ac: 22,
    pd: 20,
    md: 14,
    hp: 170,
    health: 170,
    attacks: ["Fang, Claw, or Tusk +11 vs AC - 21 damage, and the beast's special ability triggers."],
    abilities: ["Winter Beast Special Ability: Choose ONE.", "[Special Ability] Armored Polar Bear: The target takes 10 extra damage, and if the target makes an opportunity attack against the polar bear before the start of the bear's next turn, the bear can make a Fang, Claw, or Tusk attack against the target as a free action.", "[Special Ability] Giant Walrus: The target takes 14 extra damage and is Stuck (save ends; also ends if the walrus moves).", "[Special Ability] Winter Wolf: The target takes 14 extra damage, or 28 extra damage if another winter wolf is engaged with it.", "Resist Cold 12+"],
    isStaggered: false,
    id: 188
},

{
    name: "Ice Zombie",
    level: 6,
    type: "mook",
    mookNumber: 1,
    initiative: "+5",
    ac: 22,
    pd: 22,
    md: 13,
    hp: 20,
    health: 20,
    attacks: ["Chill Claws +11 vs AC - 12 cold damage", "Icy Breath of the Grave +11 vs PD - 9 cold damage, and the target is Vulnerable to cold attacks (save ends)."],
    abilities: ["Vulnerability: Fire, Holy", "Resist Cold 18+", "Fiery Decapitation: Ice zombies have frozen, iron-hard flesh that makes them tougher than normal zombies - critical hits that deal fire damage deal triple damage to ice zombies; other critical hits just deal double damage."],
    isStaggered: false,
    id: 189
},

// FUNGALOIDS

{
    name: "Fungaloid Creeper",
    level: 1,
    type: "troop",
    initiative: "+3",
    ac: 16,
    pd: 15,
    md: 10,
    hp: 30,
    health: 30,
    attacks: ["Probing Tendrils: +6 vs AC (1D3 attacks) - 2 damage. Natural 18+: the target is Stuck until the end of its next turn. Natural 1-5: Both the fungaloid and its target take 1D4 damage.", "[Fungal Attack] C: Poison Tentacles 5+level vs PD (1D3 nearby enemies) - 3+level poison damage, and the target is Vulnerable to fungal attacks (save ends).", "[Fungal Attack] C: Brown Noise 5+level vs PD (1D3 nearby enemies) - 3+level ongoing thunder damage.", "[Fungal Attack] C: Hallucinogenia 3+level vs MD (one nearby enemy) - the target is Confused (easy save ends 6+).", "[Fungal Attack] C: Infectious Spores 5+level vs PD (1D3 nearby enemies) - 3+level ongoing poison damage.", "[Fungal Attack] C: Piercing Shriek 5+level vs PD (1D3 nearby enemies) - 4+level psychic damage."],
    abilities: ["Food is Here: When a fungaloid creeper scores a critical hit with an attack, all nearby fungaloids move to engage the fungaloid's target, even if that target has dropped to 0 HP. The move is a free action, and engaged creeper's can roll disengage attempts instead of taking opportunity attacks.", "Slow, Rolling Wave: Whenever the escalation die is even, each creeper must succeed on a normal save at the start of its turn or lose its move action that turn.", "[Nastier Special] Fungal Attack: Make ONE fungal attack."],
    isStaggered: false,
    id: 190
},

{
    name: "Aerial Spore",
    level: 2,
    type: "mook",
    mookNumber: 1,
    initiative: "+1",
    ac: 15,
    pd: 9,
    md: 13,
    hp: 7,
    health: 7,
    attacks: ["C: Stinging Tendrils +6 vs PD (one nearby enemy) - 4 poison damage, and the target is Weakened until the end of its next turn."],
    abilities: ["Puffball Exploder: The first time each round an aerial spore in the battle drops to 0 HP, it explodes and 1D3 nearby non-fungus non-construct creatures are covered in spores and begin to choke. Until the end of the battle, when a choking creature rolls a natural 1-5 on an attack roll, it takes damage equal to the natural roll. If a creature is affected twice by this attack, the damage it takes on a natural 1-5 doubles; if affected three times, it triples, etc.", "Spores: A creature choking from Puffball Exploder can use a standard action to wash the spores off itself and/or cough them up, preventing further choking effects until it's affected by Puffball Exploder again.", "Weightless: The aerial spore floats upon air currents, but it prefers to stay within 5 to 7 feet of the ground so it can use its tendrils to keep it in place or propel it. A free-floating spore too far away from the ground to use its tendrils can easily be blown about from strong winds or similar magical effects."],
    isStaggered: false,
    id: 191
},

{
    name: "Sporrior",
    level: 2,
    type: "wrecker",
    initiative: "+10",
    ac: 18,
    pd: 16,
    md: 12,
    hp: 36,
    health: 36,
    attacks: ["Chitinous Bite +7 vs AC - 5 damage. Natural Even Hit or Miss: the sporrior can make a Spore Cloud attack this turn as a quick action.", "R: Parasitic Darts +6 vs AC (1D3 nearby or far away enemies in a group) - 5 poison damage. Natural Even Hit or Miss: the sporrior can make a Spore Cloud attack this turn as a quick action.", "C: Spore Cloud +6 vs PD (1D3 nearby enemies) - 4 poison damage."],
    abilities: ["Sprinter: A sporrior gains an extra move action when the escalation die is odd.", "Wall-crawler: A sporrior can climb on ceilings and walls as easily as it moves on the ground."],
    isStaggered: false,
    id: 192
},

{
    name: "Fungaloid Drudge",
    level: 3,
    type: "troop",
    initiative: "+5",
    ac: 19,
    pd: 17,
    md: 13,
    hp: 32,
    health: 32,
    attacks: ["Pitchfork +8 vs AC - 10 damage. Natural 16+: the drudge can make a Fungal Attack this turn as a quick action.", "[Fungal Attack] C: Poison Tentacles 5+level vs PD (1D3 nearby enemies) - 3+level poison damage, and the target is Vulnerable to fungal attacks (save ends).", "[Fungal Attack] C: Brown Noise 5+level vs PD (1D3 nearby enemies) - 3+level ongoing thunder damage.", "[Fungal Attack] C: Hallucinogenia 3+level vs MD (one nearby enemy) - the target is Confused (easy save ends 6+).", "[Fungal Attack] C: Infectious Spores 5+level vs PD (1D3 nearby enemies) - 3+level ongoing poison damage.", "[Fungal Attack] C: Piercing Shriek 5+level vs PD (1D3 nearby enemies) - 4+level psychic damage."],
    abilities: ["N/A"],
    isStaggered: false,
    id: 193
},

{
    name: "Braincap",
    level: 3,
    type: "wrecker (double-strength)",
    initiative: "+5",
    ac: 19,
    pd: 13,
    md: 17,
    hp: 90,
    health: 90,
    attacks: ["R: Focused Brain Blast +8 vs PD (1 nearby or far away Staggered enemy) - 21 force damage. Miss: 5 psychic damage.", "C: Hallucinogenia +8 vs MD (1D3 nearby enemies) - The target is Confused (easy save ends 6+) and Vulnerable to psychic damage until the end of the battle. Miss: The target sees odd colors at the corners of its vision until it has taken a full heal-up (-2 penalty to skill checks to see things).", "C: Psionic Filaments +8 vs MD (1D3 nearby enemies) - 15 psychic damage."],
    abilities: ["Programmed Brain: During its turn when one or more nearby enemies are Staggered, the braincap uses Focused Brain Blast. When no enemies are Staggered, the braincap uses Hallucinogenia if its hit points are even, and Psionic Filaments if its hit points are odd.", "Lost Opportunity: This creature can't make opportunity attacks."],
    isStaggered: false,
    id: 194
},

{
    name: "Fungaloid Monarch",
    level: 4,
    type: "leader (double-strength)",
    initiative: "+8",
    ac: 20,
    pd: 14,
    md: 18,
    hp: 98,
    health: 98,
    attacks: ["Mycotic Scepter +9 vs AC - 24 damage. Natural 12+: one nearby fungaloid can make a fungal attack as a free action. Natural 16+: up to three nearby fungaloids can each make a fungal attack as a free action. Natural 20: Up to 5 nearby fungaloids can each make a fungal attack as a free action.", "[Fungal Attack] C: Poison Tentacles 5+level vs PD (1D3 nearby enemies) - 3+level poison damage, and the target is Vulnerable to fungal attacks (save ends).", "[Fungal Attack] C: Brown Noise 5+level vs PD (1D3 nearby enemies) - 3+level ongoing thunder damage.", "[Fungal Attack] C: Hallucinogenia 3+level vs MD (one nearby enemy) - the target is Confused (easy save ends 6+).", "[Fungal Attack] C: Infectious Spores 5+level vs PD (1D3 nearby enemies) - 3+level ongoing poison damage.", "[Fungal Attack] C: Piercing Shriek 5+level vs PD (1D3 nearby enemies) - 4+level psychic damage."],
    abilities: ["Group Mind: The monarch's attacks deal +1 damage for each other allied creature with the plant type in the battle (max +10).", "Drudge Summons: If there are not enough nearby fungaloids to use up all of the fungal attacks granted by the Mycotic Scepter, skip the extra fungal attacks but add a full-strength fungaloid drudge to the battle next to the fungaloid monarch."],
    isStaggered: false,
    id: 195
},

{
    name: "Fungaloid Empress",
    level: 4,
    type: "wrecker (huge)",
    initiative: "+15",
    ac: 20,
    pd: 18,
    md: 18,
    hp: 170,
    health: 170,
    attacks: ["Crushing Limbs +9 vs AC (1D3 enemies engaged with the empress) - 18 damage."],
    abilities: ["Combat Womb: At the end of each of the empress' turns, if there are fewer than two elder spores (see below) per enemy, add a number of elder spores to the battle so that there are two spores per enemy. A spore can sprout already engaged wit ha nearby or far away enemy or on its own, it's up to you.", "Sporulating Spiracles: Fungus grows on everything in the area! Whenever a non-fungus creature attempts to move, it must make a DC 18 Dexterity or Strength check to do so or it loses its move action. If the creature uses a standard action to clear away fungus, it can move normally that turn."],
    isStaggered: false,
    id: 196
},

{
    name: "Elder Spore",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "Directly after the fungaloid empress in the initiative order",
    ac: 18,
    pd: 12,
    md: 16,
    hp: 7,
    health: 7,
    attacks: ["Slime Spikes +9 vs AC - 6 poison damage"],
    abilities: ["N/A"],
    isStaggered: false,
    id: 197
},

// GELAHEDRONS

{
    name: "Gelatinous Tetrahedron",
    level: 4,
    type: "blocker (huge)",
    initiative: "+3",
    ac: 19,
    pd: 17,
    md: 14,
    hp: 160,
    health: 160,
    attacks: ["Shlup'n'schlorp +9 vs PD - 22 acid damage, and the tetrahedron engulfs the target (functions like a grab; see below) if it's smaller than the tetrahedron. Miss: the tetrahedron can make a Spasms attack as a free action.", "[Special Trigger] C: Spasms +9 vs AC (up to 2 attacks, each against a different nearby enemy) - 11 damage.", "[Instinctive Action] 1. C: Fling +9 vs PD (one engaged enemy) - 14 damage, and the target pops free from the ooze and must roll an easy save; on a failure, it loses its next move action.", "[Instinctive Action] 2. C: Fling +9 vs PD (one nearby enemy not engaged with the ooze) - 28 damage, and the target is flung somewhere nearby and must roll an easy save; on a failure, it loses its next move action.", "[Instinctive Action] 3. C: Fling +9 vs PD (one far away enemy) - 42 damage, and the target is flung somewhere far away and must roll an easy save; on a failure, it loses its next move action"],
    abilities: ["Flows Where It Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze (Dazed, Hampered, Weakened, Ongoing Damage, etc.), that condition doesn't affect it.", "Engulf and Dissolve: Targets engulged/grabbed by the tetrahedron take 22 acid damage at the start of the cube's turn but are not viable targets for additional attacks by the tetrahedron. Multiple targets can be held within the tetrahedron simultaneously. Any engulfed creature that is also Staggered must begin making last gasp saves or become paralyzed as the tetrahedron's toxins overwhelm it.", "Instinctive Actions: Gelatinous creatures have no brains, sometimes they just do things. When the escalation die is odd, instead of making an attack or moving, roll a D4 to see what the tetrahedron does. If an option is not viable (you roll a 1 but there's no engaged enemy), reroll until you get a valid option.", "[Instinctive Action] 4. As a standard action the ooze quickly moves around the battlefield, oozing over 1D3 nearby enemies. Those enemies become engaged with the ooze and stuck (save ends)."],
    isStaggered: false,
    id: 198
},

{
    name: "Gelatinous Cubahedron, aka Cube",
    level: 5,
    type: "blocker (huge)",
    initiative: "+4",
    ac: 20,
    pd: 18,
    md: 15,
    hp: 200,
    health: 200,
    attacks: ["Shlup'n'schlorp +10 vs PD - 30 acid damage, and the cube engulfs the target (functions like a grab; see below) if it's smaller than the cube. Miss: the cube can make a Spasms attack as a free action.", "[Special Trigger] C: Spasms +10 vs AC (up to 2 attacks, each against a different nearby enemy) - 15 damage.", "[Special Trigger; Instinctive Action] Gel Drop +10 vs PD (1D3 nearby enemies) - 15 damage, and the cube engulfs the target if it's smaller than the cube."],
    abilities: ["Flows Where It Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze (Dazed, Hampered, Weakened, Ongoing Damage, etc.), that condition doesn't affect it.", "Engulf and Dissolve: Targets engulfed/grabbed by the cube take 30 acid damage at the start of the cube's turn but are not viable targets for additional attacks by the cube. Multiple targets can be held within the cube simultaneously.Any engulfed creature that is also Staggered must begin making last gasp saves or become paralyzed as the cube's toxins overwhelm it.", "Instinctive Actions: Gelatinous creatures have no brains, sometimes they just do things. When the escalation die is odd, instead of making an attack or moving, roll a D6 to see what the cubahedron does. If an option is not viable (you roll a 5 but there is no engulfed enemy), reroll until you get a valid option.", "[Instinctive Action] 1. The cubahedron jiggles in place. Each nearby enemy takes 5 acid damage. Each creature engulfed by the cube takes a -4 penalty to its saves until the end of its next turn.", "[Instinctive Action] 2. The cubahedron moves as a quick action. If the cube ends its move engaged with enemies, each of those enemies must roll a save; on a failure, the cubahedron grabs them (but they're not engulfed).", "[Instinctive Action] 3. The cubahedron spits an engulfed creature into the air above it and makes a Shlup'n'schlorp attack against that creature with a +5 attack bonus. Then the creature is engulfed again.", "[Instinctive Action] 4. The cubahedron flattens itself slightly and crawls up a wall and possibly across the ceiling. The cube falls at the end of its turn. Each creature engulfed by the cube takes 30 damage, and it makes a Gel Drop attack against enemies below it.", "[Instinctive Action] 5. The cubahedron moves one creature engulfed by it to the surface. The target gains a +4 bonus to attempts to escape the cube, but each time the cube is targeted by an attack, the engulfed creature must roll a save; on a failure, it becomes the target of the attack instead.", "[Instinctive Action] 6. The cubahedron spits out each enemy engulfed by it with great force in different directions; each of those creatures takes 50 damage."],
    isStaggered: false,
    id: 199
},

{
    name: "Gelatinous Octahedron",
    level: 6,
    type: "blocker (huge)",
    initiative: "+5",
    ac: 21,
    pd: 19,
    md: 16,
    hp: 280,
    health: 280,
    attacks: ["Shlup'n'schlorp +11 vs PD - 38 acid damage, and the ooze engulfs the target (functions like a grab; see below) if it's smaller than the ooze. Miss: the ooze can make a Spasms attack as a free action.", "[Special Trigger] C: Spasms +11 vs AC (up to 2 attacks, each against a different nearby enemy) - 19 damage.", "[Instinctive Action] 1. C: Acid Splash +11 vs PD (1D3 nearby or far away enemies in a group) - 8 ongoing acid damage. Each failed save: Acid destroys one of the target's non-magical items. The target takes a cumulative -1 attack penalty until the end of the battle (boots fall apart, shield straps snap, etc.). Miss: 5 ongoing acid damage.", "[Special Trigger; Instinctive Action] C: Fire Gout +11 vs PD (1D3 nearby or far away enemies in a group) - 8 ongoing fire damage. Each Failed Save: the ongoing damage for all enemies hit by the attack increases by 1.", "[Instinctive Action] 6. C: Acid Jet +11 vs PD (one nearby or far away enemy) - 45 acid damage. Miss: 8 ongoing acid damage.", "[Instinctive Action] 7. C: Acid Geyser +11 vs PD (1D3 nearby or far away enemies) - 30 acid damage, and the octahedron is propelled uncontrollably about the area, passing next to each of the enemies. Unlike normal, each enemy can make an opportunity attack against the ooze as it moves this way, but the ooze can make a Glomp attack against those who do so as a free action as it passes (tell the PCs that the ooze will get a counter-attack).", "[Special Trigger] Glomp +9 vs PD - 10 acid damage, and the octahedron engulfs the target if it's smaller than the octahedron."],
    abilities: ["Flows Where It Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze (Dazed, Hampered, Weakened, Ongoing Damage, etc.), that condition doesn't affect it.", "Engulf and Dissolve: Targets engulfed/grabbed by the ooze take 38 acid damage at the start of the ooze's turn but are not viable targets for additional attacks by the ooze. Multiple targets can be held within the ooze simultaneously. Any engulfed creature that is also Staggered must begin making last gasp saves or become paralyzed as the cube's toxins overwhelm it.", "Instinctive Actions: Gelatinous creatures have no brains, sometimes they just do things. When the escalation die is odd, instead of making an attack or moving, roll a D8 to see what the octahedron does. If an option is not viable (you roll a 3 but there are no nearby targets), reroll until you get a valid option.", "[Instinctive Action] 2. The octahedron grows an orifice that gushes out a liquid glue that floods the area. Each enemy engaged with the octahedron is Stuck (hard save ends). Each nearby enemy not engaged with the octahedron is Stuck (save ends). Each far away enemy is stuck (easy save ends). The glue has no effect on creatures who are flying or have some way of avoiding it.", "[Instinctive Action] 3. The octahedron squirts a slick slime that targets 1D3 nearby enemies. Until the end of the battle, each target must roll an easy save each time it moves; on a failure, it's Hampered until the end of its next turn.", "[Instinctive Action] 4. The octahedron makes a Fire Gout attack as it splashes out a gel that ignites in the air and sticks to skin and clothing.", "[Instinctive Action] 5. The octahedron sweats acid. Each enemy engaged with the octahedron must roll a normal save; on a failure, it takes 40 acid damage. On a success, it takes 20 acid damage.", "[Instinctive Action] 8. The octahedron splits into two tetrahedrons, and each one can act this turn (roll a D4 for the Instinctive Actions of each one). Divide the octahedron's current hit points equally between the two new creatures."],
    isStaggered: false,
    id: 200
},

{
    name: "Gelatinous Dodecahedron",
    level: 7,
    type: "blocker (huge)",
    initiative: "+5",
    ac: 21,
    pd: 19,
    md: 16,
    hp: 550,
    health: 550,
    attacks: ["Shlup'n'schlorp +10 vs PD - 30 acid damage, and the dodecahedron engulfs the target (functions like a grab; see below) if it's smaller than the dodecahedron. Miss: the dodecahedron can make a Spasms attack as a free action.", "[Special Trigger] C: Spasms +10 vs AC (up to 2 attacks, each against a different nearby enemy) - 15 damage.", "[Special Trigger; Instinctive Action] C: Squash +10 vs PD (1D4 nearby enemies) - 20 damage, and the target is Stunned (easy save ends).", "[Special Trigger; Instinctive Action] Sudden Orifice +12 vs PD (each enemy engaged with it) - the dodecahedron engulfs the target if it's smaller than the dodecahedron.", "[Special Trigger; Instinctive Action] C: Stretch and Engulf +12 vs. PD (one nearby or far away enemy)— 30 acid damage, and the dodecahedron engulfs the target if it's smaller than the dodecahedron.", "[Instinctive Action] 8. C: Pseudopod Slaps +10 vs. AC (one nearby enemy) — 25 thunder damage. Natural Odd Hit: The target pops free from the dodecahedron and is knocked far away, and the ooze makes the attack again against a different nearby enemy as a free action. Natural Even Hit: The dodecahedron engulfs the target if it's smaller than the dodecahedron."],
    abilities: ["Flows Where It Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze (Dazed, Hampered, Weakened, Ongoing Damage, etc.), that condition doesn't affect it.", "Engulf and Dissolve: Targets engulfed/grabbed by the ooze take 30 acid damage at the start of the ooze's turn but are not viable targets for additional attacks by the ooze. Multiple targets can be held within the ooze simultaneously. Any engulfed creature that is also Staggered must begin making last gasp saves or become paralyzed as the ooze's toxins overwhelm it.", "Instinctive Actions: Gelatinous creatures have no brains, sometimes they just do things. When the escalation die is odd, instead of making an attack or moving, roll a D12 to see what the dodecahedron does. If an option is not available (you roll a 1 but there are no nearby enemies), reroll until you get a valid option.", "[Instinctive Action] 1. The dodecahedron makes a Squash attack against 1D4 nearby enemies as it rolls and shlorps around the area. Any enemies already engulfed by the dodecahedron take 10 thunder damage.", "[Instinctive Action] 2. The dodecahedron throws out whip-like tendrils and makes a Sudden Orifice attack against each enemy engaged with it. Then it pulls each nearby enemy next to it and engages that creature.", "[Instinctive Action] 3. Hundreds of finger-size slimes slither out from the interior of the dodecahedron and begin worming their way across the bodies of each of its enemies in the battle. Until the end of the battle, when a non-ooze creature takes any damage besides ongoing acid damage, it also takes 10 acid damage. ", "[Instinctive Action] 4. The dodecahedron bounces and thrums. Each enemy engaged with it or engulfed by it must roll a save; on a failure, that enemy takes 30 thunder damage. On a success, it takes 15 thunder damage and pops free from the dodecahedron.", "[Instinctive Action] 5. The dodecahedron hunkers down and produces acidic spikes. It gains a +4 bonus to all defenses until the end of the battle, and each enemy who makes a melee attack against it with a non-magical weapon must roll a save; on a failure the weapon dissolves. When a creature's weapon dissolves, that creature is hampered and weakened (save ends both). Magical weapons lose their bonuses to hit and damage until the end of the battle instead of being dissolved (but the owner is still hampered and weakened). They can be “restored” after the battle by taking a few minutes during a rest to re-attune them.", "[Instinctive Action] 6. The dodecahedron moves, rolling around the battlefield, then makes a Shlup'n'schlorp attack at the end of its movement with a +5 bonus. If the attack misses, instead of making a spasms attack the dodecahedron rolls about the area again and makes a second shlup'n'schlorp attack with a +10 bonus. If the second attack misses, it doesn't get a spasms attack and the dodecahedron's turn ends. ", "[Instinctive Action] 7. The dodecahedron makes a Spasms attack. If it misses with either attack roll, after the attacks, it can make a Stretch and Engulf attack as a free action.", "[Instinctive Action] 9. Each enemy engulfed by the dodecahedron takes 40 acid damage, and the dodecahedron heals 40 hp for each enemy it has engulfed.", "[Instinctive Action] 10. The dodecahedron splits into an octahedron and a tetrahedron, and each one can act this turn (roll a D8 and D4 for the instinctive actions of each one). Divide the dodecahedron's current hit points into thirds, and give one third to the tetrahedron and two thirds to the octahedron.", "[Instinctive Action] 11. The dodecahedron splits into three tetrahedrons, and each one can act this turn (roll a D4 for the instinctive actions of each one). Divide the dodecahedron's current hit points equally between the three new creatures.", "[Instinctive Action] 12. The dodecahedron splits into two cubahedrons, and each one can act this turn (roll a D6 for the instinctive actions of each one). Divide the dodecahedron's current hit points equally between the two new creatures. "],
    isStaggered: false,
    id: 201
},

// GENIE

{
    name: "Djinn",
    level: 9,
    type: "spoiler (large)",
    initiative: "+15",
    ac: 25,
    pd: 22,
    md: 21,
    hp: 350,
    health: 350,
    attacks: ["Greatsword +13 vs AC (2 attacks) - 40 damage. Natural 5, 10, 15, 20: Increase the escalation die by 1 (cumulative), and until the end of the battle, the djinn adds the escalation die to its attacks.", "C: Assault of the Whirlwind +13 vs PD (1D4+1 nearby creatures, including invisible creatures) - 35 damage, and after the attack the djinn teleports to one of the targets and engages it. Natural 5, 10, 15, 20: the target is Hampered until the end of its next turn. Miss: 10 damage. Limit Use: the djinn can only use this attack while it's not staggered."],
    abilities: ["Flight: Genies fly extremely well, but lumber, at best, when walking on the ground.", "Grant-a-wish: A PC whose attack drops a djinn to 0 HP gains the equivalent of an extremely favorable roll of 6 with an icon relationship die with an icon of the PC's choice that the PC already has a positive or conflicted relationship with. Treat this advantage as if it came from a positive relationship. The GM is encouraged to treat this result with the utmost benevolence and compassion.", "[Nastier Special - Archmage or Priestess] Protection Boon: While not Staggered, the djinn gains Resist Spell Damage 16+ against all spells except those cast by a PC that has at least a one point icon relationship with the Archmage or Priestess.", "[Nastier Special - Crusader] Spiky Bits: When an enemy makes a melee attack against the djinn and misses, it takes 2D20 damage.", "[Nastier Special - Diabolist] Demonic Taint: The djinn gains a random demonic feature from the table on Bestiary page 233.", "[Nastier Special - Dwarf King] Unwelcome Resonance: Whenever a nearby enemy attempts to trigger a magic item power, there's a 50% chance that the power fails. If it does, the item refuses to let its owner use that power until the end of the battle.", "[Nastier Special - Elf Queen or The Three] Sorcerous Reach: The djinn's Assault of the Whirlwind attack can also target far away enemies", "[Nastier Special - Emperor or Lich King] Aura of Command: Twice per battle as a free action, the djinn can turn an ally's normal save into an easy save, or an enemy's normal save into a hard save.", "[Nastier Special - High Druid or Prince of Shadows] Wind/Shadow Form: While not Staggered, the djinn has Resist Melee Damage 16+.", "[Nastier Special - Orc Lord] Frenzied: The djinn takes a -1 penalty to all defenses. While not Staggered, its crit range expands by 3."],
    isStaggered: false,
    id: 202
},

{
    name: "Efreet",
    level: 10,
    type: "wrecker (large)",
    initiative: "+15",
    ac: 25,
    pd: 24,
    md: 23,
    hp: 420,
    health: 420,
    attacks: ["Blade of the Perfect Warrior +15 vs AC (3 attacks) - 35 damage. Natural 5, 10, 15, 20: Each nearby enemy takes 20 fire damage.", "R: Jet of Absolute Conflagration +15 vs PD (one random nearby conscious enemy) - 110 fire damage. Natural 5, 10, 15, 20: The target loses all fire resistance until the end of the battle and is Hampered (save ends)."],
    abilities: ["Vulnerability: Cold (only while Staggered)", "Resist Fire 18+", "Flight: Efreet don't fly as well or as quickly as djinn, but they are able to get around ok.", "Grant-a-wish: A PC whose attack drops an efreet to 0 HP gains the equivalent of an extremely favorable roll of 6 with an icon relationship die with an icon of the PC's choice that the PC already has a positive or conflicted relationship with. Treat this advantage as if it came from a positive relationship. The GM is encouraged to treat this result with the utmost benevolence and compassion.", "[Nastier Special - Archmage or Priestess] Reinforced Aura/Spirit: The efreet gains a +1 bonus to MD and has no Vulnerability to cold while Staggered.", "[Nastier Special - Crusader] Spiky Bits: When an enemy makes a melee attack against the efreet and misses, it takes 2D20 damage.", "[Nastier Special - Diabolist] Demonic Taint: The efreet gains a random demonic feature from the table on Bestiary page 233.", "[Nastier Special - Dwarf King or Lich King] Stone Slumbers: When the escalation die is 4+ at the start of a round, reset the escalation value by rolling it.", "[Nastier Special - Elf Queen or The Three] Energy Transformation: The efreet can choose to deal lightning damage instead of fire damage with its attack.", "[Nastier Special - Emperor] Imperial Mark: While not Staggered, the efreet gains Resist Damage 16+ against enemies that have a positive or conflicted relationship with the Emperor.", "[Nastier Special - High Druid or Prince of Shadows] Wind/Shadow Form: While not Staggered, the efreet has Resist Melee Damage 16+.", "[Nastier Special - Orc Lord] Frenzied: The efreet takes a -1 penalty to all defenses. While not Staggered, its crit range expands by 3."],
    isStaggered: false,
    id: 203
},

// GHOULS

{
    name: "Gravemeat",
    level: 1,
    type: "mook",
    mookNumber: 1,
    initiative: "+2",
    ac: 17,
    pd: 12,
    md: 10,
    hp: 5,
    health: 5,
    attacks: ["Dirtcaked Claw +5 vs AC - 3 damage, or 6 damage if the target is Vulnerable. Natural 18+: The gravemeat can make another Dirtcaked Claw attack as a free action, then it takes 1D6 damage from the exertion."],
    abilities: ["Vulnerability: Holy"],
    isStaggered: false,
    id: 204
},

{
    name: "Ghoul Fleshripper",
    level: 4,
    type: "wrecker",
    initiative: "+9",
    ac: 19,
    pd: 18,
    md: 13,
    hp: 54,
    health: 54,
    attacks: ["Bony Claws +7 vs AC (2 attacks) - 6 damage, and the target is Vulnerable (save ends). Critical Hit: Until the target saves against the Vulnerable effect, it also takes 2D6 ongoing damage each turn."],
    abilities: ["Vulnerability: Holy", "Infected Bite: Any creature that is slain by a ghoul and not consumed with rise as a ghoul the next night."],
    isStaggered: false,
    id: 205
},

{
    name: "Ghoul Licklash",
    level: 4,
    type: "blocker",
    initiative: "+8",
    ac: 21,
    pd: 17,
    md: 13,
    hp: 48,
    health: 48,
    attacks: ["Bloody Claws +8 vs AC - 12 damage, and the target is Vulnerable (save ends).", "C: Flesh-seeking Tongue +8 vs PD (one nearby enemy) - 8 damage. Natural Even Hit: the target pops free from each enemy it's engaged with and is pulled to the ghoul licklash, who engages it. Natural Odd Hit: The target is Vulnerable (save ends). Critical Hit: the licklash can make a Flesh-seeking Tongue attack against a different target as a free action."],
    abilities: ["Vulnerability: Holy", "Infected Bite: Any creature that is slain by a ghoul and not consumed will rise as a ghoul the next night.", "Tongue Lash: Once per round when a nearby enemy makes a ranged attack, the ghoul licklash can make a Flesh-seeking Tongue attack against that enemy before the attack as a free action."],
    isStaggered: false,
    id: 206
},

{
    name: "Ghoul Pusbuster",
    level: 4,
    type: "spoiler",
    initiative: "+7",
    ac: 19,
    pd: 16,
    md: 13,
    hp: 60,
    health: 60,
    attacks: ["Feeble Claws +8 vs AC - 9 damage", "C: Vomit Comet +8 vs PD (1D3 nearby enemies) - 10 ongoing damage, and the target is Vulnerable (save ends both). Natural Even Hit: the target is Hampered (save ends). Natural Odd Hit: the target is Dazed (save ends). Self-diminishing: the ghoul pusbuster takes 2D6 damage for each creature it targets with this attack."],
    abilities: ["Vulnerability: Holy"],
    isStaggered: false,
    id: 207
},

{
    name: "Ghast",
    level: 5,
    type: "wrecker",
    initiative: "+12",
    ac: 22,
    pd: 18,
    md: 14,
    hp: 74,
    health: 74,
    attacks: ["Finely Honed Claws +11 vs AC (2 attacks) - 8 damage, and the target is Vulnerable (save ends).", "Paralyzing Bite +11 vs AC (one vulnerable enemy) - 12 damage, and the target is Stunned (save ends).", "C: Hungry Howl +11 vs MD (each nearby enemy) - the target must choose one: 15 psychic damage; or 5 psychic damage and the target is Vulnerable (save ends). Limited Use: 1/battle."],
    abilities: ["N/A"],
    isStaggered: false,
    id: 208
},

// GOLEMS

{
    name: "Bronze Golem",
    level: 7,
    type: "blocker (large)",
    initiative: "+11",
    ac: 22,
    pd: 21,
    md: 17,
    hp: 190,
    health: 190,
    attacks: ["Gong-like Fists of Bronze +12 vs AC (2 attacks) - 20 damage. Natural Even Hit Against Target in Heavy Armor: the target is Dazed (save ends). Natural Odd Hit Against Target in Light Armor or No Armor: the target takes 10 extra damage. Miss: 4D6 damage."],
    abilities: ["Golem Immunity: Non-organic golems are immune to effects. They can't be Dazed, Weakened, Confused, made Vulnerable, or touched by Ongoing Damage. you can damage a golem, but that's about it.", "Hidden Flaw: An enemy who hits the bronze golem with a natural 18+ attack roll can roll a DC 25 skill check using Intelligence or Wisdom to notice the bronze golem's hidden flaw! On a success, until the end of the battle, the golem loses its damage resistance and becomes Vulnerable to all attacks (against each enemy informed of the flaw).", "Resist Damage 18+", "[Nastier Special] Percussion Resonance: When the escalation die reaches 3+, the bronze golem gains a bonus to its first Gong-like Fists of Bronze attack roll each turn equal to the number of attacks made against it so far that turn (each turn is separate, not cumulative).", "[Nastier Special] Spiky: When an enemy engaged with the bronze golem misses it with a melee attack, that enemy takes 2D12 damage."],
    isStaggered: false,
    id: 209
},

{
    name: "Marble Golem",
    level: 9,
    type: "troop (large)",
    initiative: "+10",
    ac: 25,
    pd: 20,
    md: 22,
    hp: 340,
    health: 340,
    attacks: ["Enormous Maul +15 vs AC - 60 damage. Natural Even Hit or Miss: the golem can make a Backswing attack as a free action.", "[Special Trigger] Backswing +14 vs PD - 40 damage"],
    abilities: ["Golem Immunity: Non-organic golems are immune to effects. They can't be Dazed, Weakened, Confused, made Vulnerable, or touched by Ongoing Damage. You can damage a golem, but that's about it.", "Special Virtues: Each marble golem is infused with two virtues - magical properties that relate to the emotion or feeling incorporated into the sculpture as its dominant theme. Choose two virtues from the list below, or for a unique marble golem, invent your own.", "[Special Virtue] Awe (fear effect): While nearby the golem, enemies with 40 HP or fewer are Dazed and do not add the escalation die to their attacks.", "[Special Virtue] Beauty: The first time each enemy attacks the marble golem this battle, it must roll a normal save; on a failure, the attack takes a -6 penalty.", "[Special Virtue] Courage: While Staggered, the marble golem adds the escalation die to its attack rolls.", "[Special Virtue] Endurance: When the marble golem rolls a natural 1-5 with an attack roll, it heals 1D10 HP per point on the escalation die (it was checking for damage and got distracted).", "[Special Virtue] Hatred: When an enemy is Staggered by the marble golem's attack, that enemy takes 4D10 extra damage", "[Special Virtue] Patience: Each turn, the marble golem can use one standard action to gain a +2 bonus to all defenses until the start of its next turn. If it does, it gains an extra standard action during its next turn.", "[Special Virtue] Protection: When the marble golem rolls a natural 16+ with an attack, decrease the escalation die by 1.", "[Special Virtue] Strength: The marble golem's melee attacks now deal half damage on a miss.", "[Nastier Special] More Virtues: Statues that capture even more themes make stronger marble golems. Add one or two more virtues to the golem."],
    isStaggered: false,
    id: 210
},

// HAG

{
    name: "Hag",
    level: 6,
    type: "spoiler",
    initiative: "+10",
    ac: 21,
    pd: 19,
    md: 15,
    hp: 108,
    health: 108,
    attacks: ["Iron Claws +10 vs AC (2 attacks) - 9 damage. Natural 14+: the hag triggers one hag ability as a free action. Natural 18+: the hag triggers two hag abilities as a free action (can't be the same ability twice).", "R: Evil Eye +10 vs MD - Ongoing 12 damage (hard save ends). Natural 16+: the attack roll also targets a second different enemy of the hag's choice. Natural 18+: As above, and the attack roll also targets a third different enemey of the hag's choice."],
    abilities: ["Death Curse: Each hag can lay a curse upon the one who ends its horrible life. After dropping to 0 HP, a hag always lingers long enough to pronounce the words of the curse (see curse options on page 106 of the Bestiary).", "Delusionist: All hags have the ability to twist the perceptions of others. If the hag has a short time to prepare, it can hide a small hut, disguise a volunteer or captive as a monster, disguise itself as a harmless peasant woman, etc. A DC 30 skill check is required to overcome the delusion and see the truth of it (if a player gives reason for not trusting what their character sees; perhaps add subtle clues toward that end). The magic fades as soon as the hag enters combat.", "Fear: While engaged with this creature, enemies with 30 HP or fewer are Dazed and do not add the escalation die to their attacks.", "Hag Abilities: Choose TWO.", "[Hag Ability] Annis Illusions: The hag gains a +5 bonus to initiative checks due to being not quite where she seems. Hag Ability: As a distraction, the hag creates an illusion of her doing one thing, when she is in fact setting a trap. The hag throws out a bear-trap or other impediment and one nearby enemy becomes stuck (save ends). While stuck this way, the target takes 6 damage at the start of each of its turns.", "[Hag Ability] Annis Skin: On the hag's first round of combat each battle, she gains a +2 attack bonus due to her victims being shocked as she bursts out of her false outer skin. Hag ability: The hag coughs up a glob of liquid pseudo-flesh that globs onto a nearby enemy (no attack roll). The glob solidifies causing an effect of the hag's choice: the target is stuck (save ends); OR the target is unable to cast spells during its next turn (the pseudo-flesh covers their mouth and face).", "[Hag Ability] Blood Pact: Each creature allied to the hag through a pact gains a +2 bonus with their first attack each battle if the hag is present. Hag ability: The hag spits blood in the face of the target and makes a command. The target must roll an immediate save; on a failure, as a free action it makes basic attack against an ally or against itself (target's choice).", "[Hag Ability] Breath Stealing: The hag starts combat with 10 temporary hit points. Hag ability: The hag steals a recovery from the target and heals 20 hp.", "[Hag Ability] Death Shriek: When a melee attack hits the hag, she lets out a shriek as a free action and the attacker takes 2d4 thunder damage. Hag ability: The hag begins to shriek, and each enemy in the battle takes a -4 attack penalty with spells until the start of her next turn.", "[Hag Ability] Dusk Walk: Once per day the hag can implant a suggestion in the mind of a target sleeping within a day's travel of her. Hags use these suggestions to sow discord and suffering. The hag rolls an attack: +10 vs. MD; on a hit, she implants a suggestion in the target that they must obey when a condition she chooses is met (“When you see the mayor, loudly insult his ugly wife.” “When you pass the village smith, throw dung at him.” “At sunset walk into the deep swamp without a lantern.”) Suggested actions can't cause direct harm (the target can't be forced to fight another or harm themselves), can be no longer than 12 words, and affects the target for a week or until triggered. (GM, keep the roll hidden.) Hag ability: The hag becomes immaterial, pops free from all enemies engaged with her, and enters the land of dreams, re-appearing next to any nearby conscious creature (or a nearby or far away creature that is unconscious). The hag then makes the following attack: C: +10 vs. MD (each nearby unconscious enemy)—The hag implants a suggestion in the target that they must obey when they become conscious (usually “When you awake, flee this fight and discard your equipment.”) Suggested actions can't cause direct harm. The round after the target acts on the implanted suggestion it can start rolling normal saves to throw off the effect.", "[Hag Ability] Fateful Visions: The hag uses a +2 magical weapon traded to her for her services (she gains a +2 bonus to attack and damage with melee attacks). Hag ability: The hag has seen this fight in a vision. Her crit range expands by 2 until the end of the battle. Each increase is cumulative.", "[Hag Ability] Foul-touched: Just looking at the hag's true form causes mental anguish. When an enemy is battling the hag, at the start of each of its turns, it takes 2d6 psychic damage from the horror of the hag's visage unless it takes precautions to avoid directly glancing at her terrible face (mirror, blindfold, etc., which might cause attack penalties). Hag ability: The hag chooses a nearby enemy and glares at it. That target must roll an immediate save; on a failure, the target is stricken blind by her ugliness. While blinded this way, the target is hampered, weakened, and can't make ranged attacks. The target can end the effect by splashing liquid into its eyes or using a similar act to clear the ugly out as a standard action.", "[Hag Ability] Song of Dreams: Enemies take a -4 penalty to their initiative rolls in battles with the hag. Hag ability: The hag begins to sing and the two enemies closest to her (even if far away) must roll an immediate save; on a failure, the target is dazed (save ends). If the dazed target fails its first save, instead it's weakened (save ends). If the weakened target fails its second save, instead it's helpless (save ends).", "[Hag Ability] Thief of Mist: The hag ignores opportunity attacks and can't be intercepted while moving. Hag ability: The hag becomes a mist until the start of her next turn. While a mist, only spells cast with a +3 implement and attacks using a +3 magical weapon can harm her. (Some special story item might also allow attacks to hit if no PC has a +3 item.)", "[Hag Ability] Twist the Path: Once per day the hag can enspell an area to attract visitors, causing those traveling nearby to get lost and wander to that location. Alternately, the hag can cause the location to repel visitors. Finding the correct path to that location requires a DC 20 check if it is a familiar place, a DC 25 check if the travelers only have a map or guide, or a DC 30 check if the travelers are unfamiliar with the area. Hag ability: The target is also confused (easy save ends, 6+).", "[Hag Ability] Weakening Touch: Each enemy fighting the hag must roll a normal save at the start of the battle; on a failure, that creature starts the battle weakened (easy save ends, 6+). Hag ability: The target is dazed (save ends). If the dazed target fails its first save, instead it's weakened (save ends). When the target saves against this effect, it takes a -2 attack penalty until the end of its next turn. ", "[Hag Ability] Winter Breath: The hag’s attacks deal cold damage. Hag ability: The target takes 6 ongoing cold damage."],
    isStaggered: false,
    id: 211
},

// HAUNTED SKULLS

{
    name: "Watch Skull",
    level: 1,
    type: "troop",
    initiative: "+9",
    ac: 16,
    pd: 11,
    md: 16,
    hp: 20,
    health: 20,
    attacks: ["C: Screech +8 vs MD (1D3 random nearby creatures) - 4 psychic damage. Natural 16+: the target is Stuck (save ends). Natural Roll is Equal to or Lower than the Escalation Die: 1D3 nearby enemies hear the alarm and join the battle. The creatures attracted by the constant screeching are (usually) level 1 mooks of a type that would be appropriate for the skull's location."],
    abilities: ["Immobile: The skull can't hop, jump, roll, or fly. It can't even move its jaw.", "Lost Opportunity: This creature can't make opportunity attacks.", "[Nastier Special] Allies: Creatures that have been mystically 'keyed' to the skull aren't affected by its Screech attack.", "[Nastier Special] Gem Eyes: The skull can sense the unseen and things from beyond the world. A wizard using a blur spell, a rogue shadow walking, and other similar abilities offer no protection from the skull and its Screech attack. (If the PCs come up with a plausible tactic to bypass the skull, give the skull a normal save to detect them.)", "[Nastier Special] Move-triggered: When an enemy near the skull uses a move action to move, the skull can make a Screech attack against that creature as a free action that interrupts the move. The skull can use this ability twice per round. Shadow walking, teleporting, and other non-standard modes of movement will trigger the Screech attack."],
    isStaggered: false,
    id: 212
},

{
    name: "Slime-skull",
    level: 3,
    type: "spoiler",
    initiative: "+5",
    ac: 18,
    pd: 10,
    md: 18,
    hp: 36,
    health: 36,
    attacks: ["Slam +10 vs AC - 7 damage", "C: Grasping Slime Tendrils +10 vs PD (one nearby enemy) - 7 acid damage. Natural 16+: the target takes 3 extra acid damage and is Stuck (hard save ends)."],
    abilities: ["Acidic: When a creature is engaged with the slime-skull or Stuck from its Grasping Slime Tendrils attack at the start of its turn, it takes 3 acid damage.", "Slimy Blastback: When an enemy engaged with the slime-skull hits it with a melee attack, the slime-skull fires a blast of acidic slime back at that creature, which takes 1D4 acid damage.", "Slow: This creature is slow. It only moves when the escalation die is odd or 6+.", "Wall-crawler: A slime-skull can climb on ceilings and walls as easily as it moves on the ground.", "[Nastier Special] Breeder: If the slime-skull kills a creature, it takes that creature's head as a standard action and attempts to escape (it can squeeze through gaps as small as the skull). The slain creature can't be resurrected until its skull is recovered because its spirit is now trapped within the skull. If the PCs don't track down the slime-skull before the next full heal up (or within a day), the stolen skull will transform into another slime-skull. Attempts to resurrect the creature become much more difficult, perhaps even impossible, at that point."],
    isStaggered: false,
    id: 213
},

{
    name: "Jest Bones",
    level: 4,
    type: "spoiler",
    initiative: "+8",
    ac: 19,
    pd: 11,
    md: 19,
    hp: 41,
    health: 41,
    attacks: ["C: Puns +11 vs PD (1D4 nearby enemies) - 5 psychic damage, plus 1D6 ongoing psychic damage if the GM makes a horrible pun while rolling the attacks. Bad Puns: Creatures that can't hear or that have attempted to reduce their hearing are only affected by a jest bones' Puns attack if the natural roll is odd."],
    abilities: ["Limited Flight: The haunted skull can glide and hover, always within seven or eight feet of the ground. It also performs barrel rolls.", "Lost Opportunity: This creature can't make opportunity attacks."],
    isStaggered: false,
    id: 214
},

{
    name: "Screaming Skull",
    level: 4,
    type: "troop",
    initiative: "+7",
    ac: 19,
    pd: 11,
    md: 19,
    hp: 45,
    health: 45,
    attacks: ["C: Treacherous Scream +11 vs MD (up to 2 nearby or far away enemies) - 6 psychic damage, and the target takes 2D6 psychic damage the first time it succeeds at a save before the end of its next turn."],
    abilities: ["Limited Flight: The haunted skull can glide and hover, always within seven or eight feet of the ground.", "Lost Opportunity: This creature can't make opportunity attacks."],
    isStaggered: false,
    id: 215
},

{
    name: "Flaming Skull",
    level: 5,
    type: "caster",
    initiative: "+10",
    ac: 20,
    pd: 12,
    md: 20,
    hp: 54,
    health: 54,
    attacks: ["R: Burning Gaze +12 vs PD (1D3 nearby enemies or one far away enemy) - 10 fire damage. First Natural Even Hit Each Battle: the target is Confused (easy save ends).", "C: Smoldering Flames +11 vs PD (one nearby enemy) - 14 fire damage, and each time the target fails a save this battle, it bursts into flames and takes 5 ongoing fire damage."],
    abilities: ["Vulnerability: Holy OR Negative Energy, depending on the skull", "Resist Fire 16+", "Limited Flight: The haunted skull can glide and hover, always within seven or eight feet of the ground.", "Lost Opportunity: This creature can't make opportunity attacks."],
    isStaggered: false,
    id: 216
},

{
    name: "Black Skull",
    level: 8,
    type: "caster",
    initiative: "+13",
    ac: 23,
    pd: 15,
    md: 23,
    hp: 110,
    health: 110,
    attacks: ["R: Telekinetic Grasp +15 vs PD (1D3 nearby enemies) - 28 force damage. Natural Even Hit: the target is Stuck (save ends). Telekinetic Crush: When the escalation die is even, one enemy of the skull's choice that is Stuck from its Telekinetic Grasp takes 18 force damage at the start of the skull's turn. When the escalation die is odd, one such Stuck enemy of its choice is Hampered (save ends)."],
    abilities: ["Limited Flight: The haunted skull glides and hovers, always within seven or eight feet of the ground. If the skull is incognito, its empty clothing moves around beneath it, held in the shape of a person by telekinesis and it stays closer to the ground to appear normal.", "Lost Opportunity: This creature can't make opportunity attacks."],
    isStaggered: false,
    id: 217
},

{
    name: "Skull of the Beast",
    level: 9,
    type: "wrecker (large)",
    initiative: "+10",
    ac: 21,
    pd: 13,
    md: 21,
    hp: 400,
    health: 400,
    attacks: ["Huge Club +17 vs AC - 50 damage. Miss: 18 thunder damage to 1D3 nearby enemies (the beast screams and bellows in disappointment).", "C: Baleful Gaze +15 vs PD (1D3 nearby enemies) - 25 negative energy damage. Natural Odd Hit: The target is Stuck (save ends) from looking into the void within it. Limited Use: 1/battle."],
    abilities: ["Fear: While engaged with this creature, enemies that have 60 HP or fewer are Dazed and do not add the escalation die to their attacks."],
    isStaggered: false,
    id: 218
},

// HELLBUGS

{
    name: "Boombug",
    level: 2,
    type: "troop",
    initiative: "+5",
    ac: 16,
    pd: 15,
    md: 11,
    hp: 36,
    health: 36,
    attacks: ["Gnawing Teeth +6 vs AC - 5 damage. Miss: 2 damage. Puff Go Boom: When an enemy's attack hits the boombug and leaves it Staggered with an odd number of hit points, it explodes and dies. (Even hit points? No problem). When it explodes, each nearby creature not engaged with it takes 1D4 thunder damage, and it makes the following attack against each creature engaged with it.", "[Special Trigger] C: Thunderous Explosion +9 vs PD - 12 thunder damage. Miss: 5 thunder damage."],
    abilities: ["[Nastier Special] Latches On: When the boombug hits with Gnawing Teeth, the target takes a -5 penalty to disengage checks until it's no longer engaged with the boombug."],
    isStaggered: false,
    id: 222
},

{
    name: "Hellwasp",
    level: 2,
    type: "spoiler",
    initiative: "+8",
    ac: 18,
    pd: 16,
    md: 12,
    hp: 28,
    health: 28,
    attacks: ["Necrotizing Stinger +6 vs PD - 5 damage. Natural Even Hit: 5 ongoing acid damage (easy save ends), and the hellwasp can pop free from the target."],
    abilities: ["Virulent Injection: When a creature fails a save against the hellwasp's ongoing acid damage, it gains a random condition until it saves against that damage. Have the player roll a D4 to determine the condition: 1. Confused, 2. Weakened, 3. Dazed, 4. Vulnerable.", "Flight: Hellwasps are adroit flyers that can hover and even fly backward.", "[Nastier Special] Lethal Injection: The save versus the stinger's ongoing acid damage is a normal save instead of an easy save."],
    isStaggered: false,
    id: 223
},

{
    name: "Hook Scuttler",
    level: 2,
    type: "blocker",
    initiative: "+5",
    ac: 20,
    pd: 15,
    md: 14,
    hp: 30,
    health: 30,
    attacks: ["Claws and Mandibles +7 vs AC - 8 damage"],
    abilities: ["Spiky Bits: When a hook scuttler moves to engage an enemy it wasn't engaged with at the start of its turn, that enemy takes 1D6 damage. When an enemy tries to disengage from the hook scuttler and fails, it takes 1D6 damage.", "[Nastier Special] Corpse Eater: When a nearby enemy drops to 0 HP or below in battle, the hook scuttler will ignore other enemies and move to attack that unconscious enemy until that enemy is dead."],
    isStaggered: false,
    id: 224
},

{
    name: "Swarming Maw",
    level: 2,
    type: "wrecker",
    initiative: "+6",
    ac: 17,
    pd: 15,
    md: 14,
    hp: 38,
    health: 38,
    attacks: ["Serrated Maw +8 vs AC - 6 damage. Natural Even Hit: The swarming maw can teleport to engage a nearby enemy it can see that is already engaged by at least one other hellbug. Miss: The first time each battle the serrated maw misses, the target takes 1D4 damage for each hellbug engaged with it."],
    abilities: ["[Nastier Special] Ongoing Swarm: The serrated maw also deals miss damage the second time it misses with a Serrated Maw attack each battle."],
    isStaggered: false,
    id: 225
},

// INTELLECT DEVOURERS

{
    name: "Intellect Devourer",
    level: 3,
    type: "spoiler",
    initiative: "+5",
    ac: 19,
    pd: 15,
    md: 19,
    hp: 56,
    health: 56,
    attacks: ["C: Recall Trauma +8 vs MD (one nearby enemy) - 16 psychic damage. Natural Even Hit: the target can't add the escalation die to its attacks (save ends).", "C: Ego Scourge +8 vs MD (one nearby or far away enemy) - 10 psychic damage, and the target must choose one: take 10 extra damage, OR lose two points (cumulative) from its highest current background (min 0) until the next full heal up.", "C: Mind Wipe +10 vs MD (one nearby enemy per point on escalation die) - The target can neither detect the intellect devourer's presence nor remember it was ever there to begin with. If no enemy in the battle remembers the devourer is there, remove it from play. Each nearby enemy immediately detects the devourer's presence if it makes an attack or if it doesn't leave the battle by the end of its next turn. Limited Use: 1/battle."],
    abilities: ["Exploit Trauma: The intellect devourer's crit range with attacks against MD expands by 2.", "Lost Opportunity: This creature can't make opportunity attacks.", "Psychovore: An intellect devourer remembers the current escalation die value the first time its host body drops to 0 hit points in a battle and gains a bonus equal to that value to all attacks and defenses until the end of the battle.", "[Nastier Special] Increased Trauma: Add the following extra effect trigger to the intellect devourer's Recall Trauma attack. Natural 5, 10, 15, 20: The target can't cast spells until the end of its next turn."],
    isStaggered: false,
    id: 226
},

{
    name: "Intellect Assassin",
    level: 6,
    type: "blocker",
    initiative: "+9",
    ac: 22,
    pd: 16,
    md: 20,
    hp: 90,
    health: 90,
    attacks: ["Formless Fist +9 vs PD (one enemy) - 25 damage; OR if the target is fighting a Psychic Duel (see below), it can choose to take a -4 penalty to its next check instead. Quick Use: The assassin can take 15 damage to make this attack as a quick action (once per round).", "C: Insidious Domination +11 vs MD (one enemy) - 14 damage, and the opponent is locked in a psychic duel with the assassin (see below).", "C: Mind Thrust +10 vs MD (one Confused enemy) - 35 damage (but only 50 damage on a crit)."],
    abilities: ["Exploit Trauma: An intellect assassin's crit range with attacks against MD expands by 2.", "Lost Opportunity: This creature can't make opportunity attacks.", "Psychovore: An intellect devourer remembers the current escalation die value the first time it becomes unhosted in a battle and gains a bonus equal to that value to all attacks and defenses until the end of the battle.", "Psychic Duel: A psychic duel occurs when the intellect assassin hits with an Insidious Domination attack against a creature. At the start of the creature's next turn, it must make an Intelligence skill check and can use a background that applies to psychic ability (if any). The result of this check determines that creature's status until the start of its next turn. To maintain the psychic duel, the assassin must spend a move action each turn.", "[Psychic Duel Results - Status] 15 or less: the creature is Confused until the end of its turn. It also can't make opportunity attacks until the start of its next turn and takes a -2 penalty to its next Psychic Duel check.", "[Psychic Duel Results - Status] 16-22: The creature is pressured - it takes a -2 penalty to attacks against any enemy except the assassin (dueling opponent).", "[Psychic Duel Results - Status] 23-27: The creature steadies itself and can use a move action this turn to escape the Psychic Duel. If the creature chooses not to (or can't) escape the duel, it gains a +2 bonus to its next Psychic Duel check.", "[Psychic Duel Results - Status] 28+: As 23-27, but the creature takes advantage and gains a +4 bonus to its next Psychic Duel check instead of +2. In addition, the assassin takes a -2 penalty to attack rolls that target other creatures."],
    isStaggered: false,
    id: 227
},

// JOROGUMO

{
    name: "Spinneret Doxy",
    level: 3,
    type: "spoiler",
    initiative: "+5",
    ac: 19,
    pd: 17,
    md: 13,
    hp: 45,
    health: 45,
    attacks: ["Bite of the Love Bug +8 vs AC (or automatic critical hit vs. an Infatuated enemy) - 10 damage, and the target is Infatuated (save ends). Infatuated: Infatuated enemies can't attack the spinneret doxy or her Woven, but can convince themselves that other allies of the doxy don't love her properly and should be slain. They also prattle on about how their friends shouldn't attack her, but are too love-smitten to properly prevent it - they won't attack their real allies.", "R: Bring me Flowers +8 vs MD (one Infatuated enemy) - The target chooses one: it takes 6D6 psychic damage; OR as a free action, it moves next to the spinneret doxy (possibly provoking opportunity attacks), who engages is.", "C: Stop in the Name of Love +8 vs MD (each nearby Infatuated enemy) - The target chooses one: it takes 6D6 psychic damage; OR it's Stuck (save ends)."],
    abilities: ["Give Me Your Heart: When the doxy drops an enemy to 0 hit points or lower, she will move next to that creature and attempt to remove the target's heart. The creature must begin making last gasp saves as she cuts their chest open. On the fourth failure, the doxy takes the heart and the target dies and becomes undead under her control. If the doxy is Stunned or moved away from the creature and can't return to it on her turn, the creature doesn't have to make a last gasp save that turn."],
    isStaggered: false,
    id: 228
},

{
    name: "Lethal Lothario",
    level: 4,
    type: "leader",
    initiative: "+7",
    ac: 20,
    pd: 18,
    md: 17,
    hp: 50,
    health: 50,
    attacks: ["Brutal Kiss +9 vs AC - 10 damage. Natural Even Hit: any woven engaged with the target can attack it as a free action.", "C: Unhealthy Attraction +9 vs MD (nearby enemy with the fewest hit points) - 10 psychic damage and the target is Hampered until the end of the battle or until it takes one turn as if it were Confused. Miss: 5 ongoing psychic damage."],
    abilities: ["Give Me Your Heart: When the lothario drops an enemy to 0 hit points or lower, he will move next to that creature and attempt to remove the target's heart. The creature must begin making last gasp saves as he cuts their chest open. On the fourth failure, the lothario takes the heart and the target dies and becomes undead under his control. If the lothario is Stunned or moved away from the creature and can't return to it on his turn, the creature doesn't have to make a last gasp save that turn."],
    isStaggered: false,
    id: 229
},

{
    name: "Binding Bride",
    level: 5,
    type: "spoiler",
    initiative: "+8",
    ac: 21,
    pd: 15,
    md: 19,
    hp: 72,
    health: 72,
    attacks: ["Biting Kiss +10 vs AC - 18 damage. Natural 16+: The target takes 10 ongoing poison damage.", "Unwrapping My Gift +10 vs AC - 18 damage. Natural Even Hit or Miss: The binding bride can make a Biting Kiss attack as a free action.", "R: A Bouquet of Webs +10 vs PD (up to 2 enemies in a group) - The target is Hampered (save ends).", "R: You Ruined My Special Day +10 vs MD - The target takes 18 psychic damage each time it attacks the binding bride (save ends). Limited Use: 1/battle, as a quick action."],
    abilities: ["Give Me Your Heart: When the binding bride drops an enemy to 0 hit points or lower, she will move next to that creature and attempt to remove the target's heart. The creature must begin making last gasp saves as she cuts their chest open. On the fourth failure, the bride takes the heart and the target dies and becomes undead under her control. If the bride is Stunned or moved away from the creature and can't return to it on her turn, the creature doesn't have to make a last gasp save that turn."],
    isStaggered: false,
    id: 230
},

{
    name: "Swarm Prince",
    level: 5,
    type: "spoiler",
    initiative: "+9",
    ac: 19,
    pd: 18,
    md: 16,
    hp: 80,
    health: 80,
    attacks: ["Palm Strike +10 vs PD - 10 damage, and 10 ongoing poison damage. Miss: 5 damage.", "R: Royal Blessing +10 vs MD - 15 negative energy damage, and if one or more woven have been slain this battle, return one woven to life in the location where it died. Limited Use: The swarm prince can use this ability only when the escalation die is even.", "C: Hush My Darling +10 vs MD (the nearby conscious enemy with the fewest hit points) - 5 psychic damage, and the target is unconscious (hard save ends; it also ends if the target takes 15 damage). Limited Use: 1/battle, and the ability recharges when the swarm prince hits with a Palm Strike."],
    abilities: ["Surrounded by Friends: The swarm prince gains a +1 bonus to all defenses for each nearby woven.", "Give Me Your Heart: When the swarm prince drops an enemy to 0 hit points or lower, he will move next to that creature and attempt to remove the target's heart. The creature must begin making last gasp saves as he cuts their chest open. On the fourth failure, the prince takes the heart and the target dies and becomes undead under his control. If the prince is Stunned or moved away from the creature and can't return to it on his turn, the creature doesn't have to make a last gasp save that turn."],
    isStaggered: false,
    id: 231
},

{
    name: "The Woven",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+6",
    ac: 18,
    pd: 16,
    md: 12,
    hp: 13,
    health: 13,
    attacks: ["Clumsy Strike +9 vs AC - 7 damage", "R: Why Aren't You Happy for Usssss +8 vs MD (1D3 nearby enemies) - 5 psychic damage as the target's mind reels against the horror of the truth."],
    abilities: ["none"],
    isStaggered: false,
    id: 232
},

// KOBOLDS

{
    name: "Kobold Grand Wizard",
    level: 0,
    type: "mook",
    mookNumber: 1,
    initiative: "+8",
    ac: 15,
    pd: 13,
    md: 9,
    hp: 5,
    health: 5,
    attacks: ["Static Jolt +5 vs AC - 2 lightning damage", "R: Painful Liver Inversion Hex +4 vs PD - 4 poison damage, or 6 poison damage against dwarves."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks."],
    isStaggered: false,
    id: 233
},

{
    name: "Kobold Skyclaw",
    level: 2,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 18,
    pd: 16,
    md: 13,
    hp: 7,
    health: 7,
    attacks: ["Spike-toed Boots +5 vs AC - 4 damage", "C: Alchemical Flask +6 vs PD (one nearby enemy or a far away enemy at -2 attack) - 3 damage, and roll a D4 for the effect of the flask's contents. 1. Distilled Ankheg Spit: The target takes 3 ongoing acid damage. 2. Reconstituted Remorhaz Lymph: The target takes 3 ongoing fire damage. 3. Essence of Giant Spider Web: The target is Stuck (save ends). 4. Kobold Blasting Powder: There's a loud bang and the battlefield is obscured with thick smoke. Each non-kobold creature takes a -2 attack penalty during its next turn. Natural 1: The kobold explodes."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Erratic Flight: The kobold flings itself from a trebuchet or ignites an unstable alchemical propellant and lands among its enemies. Each time the kobold uses a move action to fly, roll a D20. 1. It crashes and explodes. 2-15: It lands safely. 16+: It stays aloft and can keep flying.", "Mook: If an attack roll against a skyclaw is a natural 20 or a skyclaw rolls a natural 1 attack roll or flight roll, it triggers a chain reaction that ripples through all nearby skyclaws in the mob; each one makes an Alchemical Flask attack as a free action as it explodes and dies."],
    isStaggered: false,
    id: 234
},

{
    name: "Kobold Engineer",
    level: 3,
    type: "leader",
    initiative: "+8",
    ac: 19,
    pd: 17,
    md: 13,
    hp: 45,
    health: 45,
    attacks: ["Wrench, Pick, or Shovel +8 vs AC - 8 damage. Natural 16+: the engineer's kobold allies gain a +2 attack bonus against the target until the start of the engineer's next turn.", "R: Explosive Flask +5 vs PD - The target is Vulnerable to non-magical attacks (easy save ends). Natural Roll is Above Target's Wisdom (Trapster): The blast knocks the target into a trap. See 'Trapster' on Bestiary page 128 for trap examples."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks."],
    isStaggered: false,
    id: 235
},

{
    name: "Kobold Dog Rider",
    level: 3,
    type: "troop",
    initiative: "+8",
    ac: 19,
    pd: 16,
    md: 12,
    hp: 41,
    health: 41,
    attacks: ["Flaming Lance +8 vs AC - 6 damage, and 3 ongoing fire damage. Natural 16+: The kobold and its steed pop free from all enemies and can move as a free action.", "R: Tiny Crossbow +8 vs AC - 9 damage, and the kobold and its steed can move as a free action. Natural Roll is Above Target's Wisdom (Trapster): There is a line tied to the barbed dart, pulling/tripping the target into a trap. See 'Trapster' on Bestiary page 128 for trap examples."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Canine Steed: The steed can't be targeted separately from the kobold. If the kobold dies the dog runs away."],
    isStaggered: false,
    id: 236
},

{
    name: "Kobold Bravescale",
    level: 4,
    type: "blocker",
    initiative: "+9",
    ac: 20,
    pd: 18,
    md: 14,
    hp: 55,
    health: 55,
    attacks: ["Spear +9 vs AC - 13 damage. Natural Roll is Above Target's Wisdom (Trapster): The kobold pushes or trips the target into a trap. See 'Trapster' on Bestiary page 128 for example traps.", "[Special Trigger] Spear Porcupine +11 vs AC - 10 damage."],
    abilities: ["Disciplined Maneuver: If the escalation die is 3+ and this creature has at least 2 bravescale allies in the battle, whenever an enemy moves to engage the bravescale, it can make a Spear Porcupine attack against that enemy as a free action.", "Lock Shields: For each other kobold bravescale next to the bravescale or engaged with a creature that this bravescale is engaged with, the bravescale gains a +2 bonus to AC (maximum of +4), and each enemy engaged with the bravescale takes a -2 penalty (maximum of -4) to disengage checks."],
    isStaggered: false,
    id: 237
},

{
    name: "Kobold Dungeon Shaman",
    level: 4,
    type: "caster (double strength)",
    initiative: "+9",
    ac: 19,
    pd: 17,
    md: 15,
    hp: 110,
    health: 110,
    attacks: ["Bear Traps on Chains +9 vs AC (2 attacks) - 13 damage. Natural Roll is Above Target's Wisdom (Trapster): The kobold drags the target into a trap. See 'Trapster' on Bestiary page 128 for trap examples.", "R: Hex of Entrapment +9 vs MD - 26 damage. Natural Roll is Above Target's Wisdom (Trapster): The kobold summons a trap that was not previously there, which the target triggers. See 'Trapster' on Bestiary page 128 for trap examples. Miss: The target is Stuck and Hampered (save ends both)."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks."],
    isStaggered: false,
    id: 238
},

{
    name: "Kobold Shadow Warrior",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 20,
    pd: 13,
    md: 17,
    hp: 14,
    health: 14,
    attacks: ["C: Throwing Star +9 vs AC (one nearby enemy) - 7 damage.", "C: Stinging Dust +6 vs PD (up to two nearby enemies in a group) - 5 damage, and the target takes a -1 penalty to attacks until the end of its next turn.", "[Special Trigger] C: Elusive Strike +13 vs AC (one nearby creature) - 18 damage."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Elusive: If a shadow warrior hasn't been attacked since the end of its last turn, it can spend all of its actions on its turn to disappear from sight (remove it from play as it gets into position). At the start of its next turn, it reappears (dropping down from the ceiling or springing out of cover and re-entering play) and can make an Elusive Strike attack as a standard action.", "Wall-crawler: A kobold shadow warrior can climb on ceilings and walls as easily as it moves on the ground."],
    isStaggered: false,
    id: 239
},

{
    name: "Kobold Dragon Soul",
    level: 5,
    type: "troop",
    initiative: "+10",
    ac: 22,
    pd: 19,
    md: 14,
    hp: 70,
    health: 70,
    attacks: ["Claws +10 vs AC - 17 damage. Natural Even Hit: The target also takes 8 ongoing acid damage.", "R: Fire Spit +10 vs PD - 18 fire damage. Natural Even Hit: If flying, the kobold can remain in the air until the end of its next turn if it would normally have to land at the end of this turn."],
    abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Flight: A dragon soul's wings aren't strong enough for sustained flapping flight, but with a headwind and a tall place to launch from it can glide for hours. During battle, however, it must land at the end of its turn if the escalation die is even (but see Fire Spit)."],
    isStaggered: false,
    id: 240
},

// LAMMASU

{
    name: "Lammasu Warrior",
    level: 7,
    type: "troop (large)",
    initiative: "+10",
    ac: 23,
    pd: 20,
    md: 17,
    hp: 220,
    health: 220,
    attacks: ["Hooves +12 vs AC (2 attacks) - 28 damage, and the lammasu can pop free from the target. Natural Even Hit or Miss While the Warrior is Staggered: The target is Hampered (save ends).", "Roaring Impact +12 vs PD - 35 damage, and 1D4 nearby enemies each take 2D10 thunder damage. Miss: 1D4 nearby enemis take 2D6 thunder damage. Limited Use: The lammasu warrior can make this attack only when it starts its turn flying and unengaged. It engages the target as it lands and ends its turn on the ground."],
    abilities: ["Flight: All lammasu fly. Warrior lammasu fly with upright dignity, sometimes a bit slower than is wise. Fallen lammasu fly well enough to keep up with all but the quickest demons. Lammasu wizards and priests fly more gracefully than the warriors, but only because they're less eager to run into things.", "Refuge of Stone: When the lammasu fails a save, it becomes a creature of living stone until the ends of its next turn. While made of living stone, the lammasu warrior gains Resist Damage 16+ to all attacks against AC and PD. If it's flying when it becomes living stone, its magic allows it to remain in the air if it wishes.", "[Nastier Special] On the Crusade: When an enemy misses the lammasu warrior with a melee attack, that enemy takes 2D10 damage from the lammasu's Crusader-forged spiked armor."],
    isStaggered: false,
    id: 241
},

{
    name: "Fallen Lammasu",
    level: 7,
    type: "wrecker (large)",
    initiative: "+11",
    ac: 22,
    pd: 16,
    md: 21,
    hp: 205,
    health: 205,
    attacks: ["Fiery Hoof +12 vs AC - 30 damage. Natural Even Hit: The target takes 20 ongoing fire damage. Natural Odd Hit: The fallen lammasu can make a second Fiery Hoof attack (but not a third) as a free action.", "R: Rain of Hellfire +11 vs PD (1D4 random nearby creatures) - 20 fire damage. Natural Even Hit Against an Ally: The target takes 10 ongoing damage instead of 20 fire damage, and until that ally saves against that damage, it adds the escalation die to its attacks. Natural Even Hit Against an Enemy: The target also takes 15 ongoing fire damage.", "[Nastier Special] C: Abyssal Curse +12 vs MD (1 nearby enemy) - the target takes 10 ongoing negative energy damage each time the fallen lammasu hits it with an attack (hard save ends). Limited Use: When the escalation die is odd, as a quick action (once per round)."],
    abilities: ["Flight: All lammasu fly. Warrior lammasu fly with upright dignity, sometimes a bit slower than is wise. Fallen lammasu fly well enough to keep up with all but the quickest demons. Lammasu wizards and priests fly more gracefully than the warriors, but only because they're less eager to run into things.", "Blessing of Hellfire: When the fallen lammasu fails a save against an effect created by an enemy, each enemy engaged with it takes 3D10 fire damage.", "[Nastier Special] Curse of the Fallen: The lammasu gains an Abyssal Curse attack.", "[Nastier Special] The Fire That Burns: When the fallen lammasu makes an attack that deals fire damage and the attack roll beats the target's fire resistance, the target loses its fire resistance until the end of the battle."],
    isStaggered: false,
    id: 242
},

{
    name: "Lammasu Wizard",
    level: 8,
    type: "spoiler (large)",
    initiative: "+14",
    ac: 22,
    pd: 18,
    md: 23,
    hp: 275,
    health: 275,
    attacks: ["Disdainful Hoof +12 vs AC - 60 damage", "R: Perfect Energy Sphere +13 vs PD (1D3 nearby or far away enemies in a group) - 40 damage of an energy type of the lammasu's choice: cold, fire, lightning, or thunder. Natural 18+: The target can't cast spells (easy save ends).", "C: Superior Words of Power +13 vs MD (one nearby or far away enemy) - 65 psychic damage. Natural Even Hit: One spell or effect created by the target this battle is cancelled (lammasu's choice).", "[Special Trigger] C: Master Wizard's Rejoinder +12 vs MD (one enemy spellcaster) - 30 damage, the triggering attack misses and has no effect against the lammasu wizard, and the target is Hampered (save ends). Limited Use: 1/round, as an interrupt action when an enemy attacks the lammasu wizard with a spell and rolls a natural odd attack roll."],
    abilities: ["Flight: All lammasu fly. Warrior lammasu fly with upright dignity, sometimes a bit slower than is wise. Fallen lammasu fly well enough to keep up with all but the quickest demons. Lammasu wizards and priests fly more gracefully than the warriors, but only because they're less eager to run into things.", "Refuge of Stone: When the lammasu fails a save, it becomes a creature of living stone until the end of its next turn. While made of living stone, the lammasu wizard gains Resist Damage 16+ to all attacks against AC and PD. If it's flying when it becomes living stone, its magic allows it to remain in the air if it wishes."],
    isStaggered: false,
    id: 243
},

{
    name: "Lammasu Priest",
    level: 9,
    type: "caster (large)",
    initiative: "+13",
    ac: 25,
    pd: 17,
    md: 23,
    hp: 330,
    health: 330,
    attacks: ["Hooves of Command +14 vs AC (2 attacks) - 40 damage, and the target can't attack the lammasu priest until the end of its next turn.", "R: Righteous Ray of Faith +13 vs PD (one nearby or far away enemy) - 80 holy damage. Natural 16+: The lammasu priest can make a Righteous Ray of Faith attack against a different target.", "C: Judgement of the Lammasu +14 vs MD (each nearby conscious enemy that's Staggered) - 50 holy damage. Natural Even Miss: Half Damage. Limited Use: 2/battle.", "[Special Trigger] C: Overworld's Rebuke +13 vs PD (one nearby enemy) - 25 holy or lightning damage, and the target can't move to engage an enemy until the end of its next turn (it can move if it doesn't engage). Natural Even Miss: Half damage."],
    abilities: ["Flight: All lammasu fly. Warrior lammasu fly with upright dignity, sometimes a bit slower than is wise. Fallen lammasu fly well enough to keep up with all but the quickest demons. Lammasu wizards and priests fly more gracefully than the warriors, but only because they're less eager to run into things.", "Invocation of the World Unseen: Once per battle, the lammasu priest can make this invocation as a quick action. At the start of each of the lammasu priest's turns until the roll succeeds, roll a D4. If the roll is less than or equal to the escalation die, each nearby enemy is Hampered (easy save ends).", "Invocation of the Highest Court: Once per battle, the lammasu priest can make this invocation as a quick action if it has used Invocation of the World Unseen. At the start of each of the lammasu priest's turns, roll a D8. If the roll is less than or equal to the escalation die, the lammasu can make an Overworld's Rebuke attack as a free action that turn.", "Refuge of Stone: When the lammasu fails a save, it becomes a creature of living stone until the end of its next turn. While made of living stone, the lammasu wizard gains Resist Damage 16+ to all attacks against AC and PD. If it's flying when it becomes living stone, its magic allows it to remain in the air if it wishes."],
    isStaggered: false,
    id: 244
},

// LICH

{
    name: "Lich Baroness",
    level: 4,
    type: "spoiler",
    initiative: "+6",
    ac: 20,
    pd: 14,
    md: 18,
    hp: 54,
    health: 54,
    attacks: ["Crystal Scepter +9 vs AC - 12 damage. Natural Even Hit: The target is Dazed (save ends).", "R: Soul Blast +9 vs PD - 10 negative energy damage, and 5 ongoing psychic damage (hard save ends).", "C: Shroud of Souls +9 vs MD (each enemy engaged with it) - 5 psychic damage, and the target takes 10 psychic damage each time it attacks the baroness (save ends)."],
    abilities: ["I Drink Your Death Save: When the lich baroness scores a critical hit, the target loses a death save until the end of the battle (effectively, it now dies after failing three death saves, and the effect is cumulative). In addition, the crit range of attacks by the lich against her target expands by the escalation die.", "Immortality: When the lich drops to 0 hit points, it crumbles to dust but does not die. It begins to reform near its phylactery, taking a number of days to regain its full strength equal to its level. If the phylactery has been destroyed, the lich dies when it drops to 0 hit points."],
    isStaggered: false,
    id: 245
},

{
    name: "Lich Count",
    level: 8,
    type: "spoiler (double strength)",
    initiative: "+11",
    ac: 24,
    pd: 18,
    md: 22,
    hp: 240,
    health: 240,
    attacks: ["Touch of the Grave +13 vs AC - 50 cold damage, and the target is Dazed (hard save ends). Natural Even Hit: The target is Weakened instead of Dazed (Hard Save Ends). Miss: 25 cold damage.", "R: Shadow Rays +12 vs PD (2 attacks) - 35 negative energy damage. Natural 16+: The target is encased in shadows (save ends). While under this effect, it's Weakened and takes 10 ongoing cold damage.", "R: Empowered Fireball +12 vs PD (1D3 +1 nearby creatures in a group) - 35 fire damage, and 10 ongoing fire damage. Natural Even Hit: The target takes 20 ongoing fire damage instead of 10. Miss: 15 fire damage, and 5 ongoing fire damage. Limited Use: 2/battle.", "[Nastier Special] C: Look Upon Your Doom +13 vs MD (up to 3 nearby enemies) - The lich gains a Fear aura against the target until the end of the battle. Fear Aura: While engaged with this creature, if the target has 48 HP or fewer, it's Dazed and does not add the escalation die to its attacks."],
    abilities: ["Thank You For the Best Ten Years of Your Life: When the lich count scores a critical hit, the target loses a death save until the end of the battle (effectively, it now dies after failing three death saves, and the effect is cumulative). In addition, the crit range of attacks by the lich against the target expands by the escalation die and the lich heals 40 hit points.", "Immortality: When the lich drops to 0 hit points, it crumbles to dust but does not die. It begins to reform near its phylactery, taking a number of days to regain its full strength equal to its level. If the phylactery has been destroyed, the lich dies when it drops to 0 hit points."],
    isStaggered: false,
    id: 246
},

{
    name: "Lich Prince",
    level: 12,
    type: "spoiler (double-strength)",
    initiative: "+17",
    ac: 28,
    pd: 24,
    md: 26,
    hp: 620,
    health: 620,
    attacks: ["Draining Bone Rod +17 vs AC - 40 damage, 60 negative energy damage, and the target is Dazed (hard save ends). Natural Even Hit: The target is Weakened instead of Dazed (hard save ends). Miss: 40 damage.", "R: Arcane Blast +16 vs PD (up to 3 nearby or far away enemies in a group) - 50 force damage, and the target must roll a normal save; on a failure, it loses its next move action. Natural Even Hit or Miss: Each enemy engaged with the lich prince pops free from it as a bubble of arcane energy pushes them away.", "C: Soul Rend +17 vs PD (each nearby enemy) - 30 negative energy damage, and ghostly hands reach up from the ground and grab the target (as they try to pull the target's spirit out of its body). Ghostly Grasping Hands: When a creature is being grabbed by the ghostly hands, it takes 30 negative energy damage at the start of its turn and it must make a last gasp save. On the fourth failed last gasp save, the creature's soul is torn from it and it dies. Unconscious creatures take a -4 penalty to their last gasp saves. Note, grabbed creatures take a -5 penalty to disengage checks. Limited Use: 2/battle.", "[Nastier Special] C: Look Upon Your Doom +17 vs MD (each enemy engaged with the lich's allies) - The lich gains a Fear aura against the target until the end of the battle. Fear Aura: While engaged with this creature, if the target has 120 HP or fewer, it's Dazed and does not add the escalation die to its attacks."],
    abilities: ["Blink and You Missed It: Once per battle when an attack would hit the lich prince, the attack misses instead and the lich teleports to a nearby location it can see as a free action.", "Heartstopper: When the lich prince scores a critical hit, if after taking damage the target still has hit points, it drops to 0 HP, falls onconscious, and begins making death saves. When the target saves against this effect, it regains hit points equal to the amount it had before dropping to 0 HP (after the crit damage). In addition, the crit range of attacks by the lich against the target expands by an amount equal to the escalation die and the lich heals 60 hit points.", "Immortality: When the lich drops to 0 hit points, it crumbles to dust but does not die. It begins to reform near its phylactery, taking a number of days to regain its full strength equal to its level. If the phylactery has been destroyed, the lich dies when it drops to 0 hit points."],
    isStaggered: false,
    id: 247
},

// MANTICORES

{
    name: "Manticore Bard",
    level: 5,
    type: "caster (large)",
    initiative: "+12",
    ac: 21,
    pd: 19,
    md: 15,
    hp: 150,
    health: 150,
    attacks: ["Battering Paws +10 vs AC (2 attacks) - 18 damage. Natural 16+: The manticore can make a single Volley of Tail Spikes attack (one attack roll) against a different target as a free action without taking an opportunity attack.", "Crushing Leonine Jaws +10 vs AC - 30 damage, or 40 damage against a creature taking poison damage.", "C: Musical Voice +13 vs MD (1D3 nearby enemies) - 20 psychic damage, and the target is Dazed (hard save ends). Natural 16+: In addition, the target can't use the escalation die until it saves. Intermittent Song: The manticore can use Musical Voice only 1D4 times during the battle, and never two turns in a row.", "R: Volley of Tail Spikes +11 vs AC (1D3 nearby or far away enemies in a group) - 5 ongoing poison damage (hard save ends)."],
    abilities: ["Poison Reservoirs: Each time the manticore uses its Volley of Tail Spikes attack, it takes 1D6 damage, or 2D6 damage if it's Staggered.", "[Nastier Special] Battle Music: The manticore has songs for many different purposes. When the manticore makes a Musical Voice attack and rolls a natural even hit, choose one song (or roll a D4): 1. Fortissimo - Each of the manticore's allies gains a +2D6 damage bonus with attacks that hit until the end of the battle (non-cumulative). 2. Profundo - The manticore's Musical Voice attack now deals 40 psychic damage instead of 20 until the end of the battle. 3. Furioso - The target is Confused instead of Dazed. 4. Largo - The manticore can make a Musical Voice attack during its next turn as a free action, but with a +3 attack bonus. This free attack won't trigger another Battle Music effect."],
    isStaggered: false,
    id: 248
},

{
    name: "Mantikumhar",
    level: 5,
    type: "spoiler (large)",
    initiative: "+14",
    ac: 23,
    pd: 19,
    md: 15,
    hp: 119,
    health: 119,
    attacks: ["Pincer Claws +11 vs AC (2 attacks) - 18 damage. Natural 16+: The mantikumhar pulls its target under the soil/ground. The target is Stuck, Hampered, and takes 5 ongoing damage from suffocation (save ends all). Miss: The target must roll an immediate save; on a failure, it's Dazed until the end of its next turn from dirt or sand thrown in its face.", "Crushing Leonine Jaws +10 vs AC - 30 damage, or 40 damage against a creature taking ongoing poison damage.", "C: Serpent Sting +12 vs AC - 10 damage, and 5 ongoing poison damage (hard save ends).", "[Nastier Special] C: Serpent Sting +15 vs AC (one nearby enemy) - 10 damage, and 5 ongoing poison damage (hard save ends)."],
    abilities: ["Burrowing: The mantikumhar can move rapidly through sand, loose soil, or dry eroded earth. It prefers to dig out a wide pit and lie in wait for prey.", "Can't Be Blinded: Between nictitating membranes that keep its eyes from being scratched out by the sand and its weird burrowing echolocation sense, the mantikumhar can't be blinded.", "Poison Reservoirs: Each time the mantikumhar uses its Serpent Sting attack, it takes 1D6 damage, or 2D6 damage if it's Staggered.", "[Nastier Special] Hunker Down: A mantikumhar can burrow into the soil as a move action, concealing itself from attacks. A hunkered mantikumhar gains a +3 bonus to AC and PD, but it can't use Crushing Leonine Jaws.", "Sand Ambush: The mantikumhar's extensible tail can strike by surprise like a cobra from anywhere in its pit."],
    isStaggered: false,
    id: 249
},

{
    name: "Coursing Manticore",
    level: 6,
    type: "spoiler (large)",
    initiative: "+13",
    ac: 23,
    pd: 21,
    md: 15,
    hp: 170,
    health: 170,
    attacks: ["Battering Paws +11 vs AC (2 attacks) - 20 damage. Natural 16+: The manticore can make a Scorpion Sting attack against a different target as a free action.", "Crushing Leonine Jaws +11 vs AC - 30 damage, or 50 damage against a creature taking poison damage.", "C: Scorpion Sting +13 vs AC - 10 damage, and 5 ongoing poison damage (hard save ends).", "[Nastier Special] R: Volley of Tail Spikes +13 vs AC (1D3 nearby or far away enemies in a group) - 5 ongoing poison damage (hard save ends)."],
    abilities: ["Fly-by Attack: While flying, the manticore can make a Scorpion Sting attack, pop free from the target, and keep flying to somewhere nearby.", "Flight: Giant batlike dragon wings put the final horrid touch on the coursing manticore's 'everything awful' design aesthetic.", "Poison Reservoirs: Each time the manticore uses its Scorpion Sting attack, it takes 1D6 damage, or 2D6 damage if it's Staggered.", "[Nastier Special] Aerial Archer: Instead of a scorpion tail, the manticore has a spiked tail full of quills and can make Volley of Tail Spikes attacks instead of Scorpion Sting attacks.", "Diving Leap: The manticore leaps toward its prey, using its wings to arrow into battle at tremendous speed. During its first turn only, add +6 to its initiative count. After that, the beast returns to its normal initiative order."],
    isStaggered: false,
    id: 250
},

// NAGA

{
    name: "Swaysong Naga",
    level: 5,
    type: "leader (large)",
    initiative: "+8",
    ac: 21,
    pd: 16,
    md: 18,
    hp: 144,
    health: 144,
    attacks: ["Bite +10 vs AC - 24 damage. Natural 16+: The target also takes 15 ongoing poison damage.  Miss: 12 damage.", "R: Song of Reversals +10 vs MD (1D3 nearby or far away enemies) - 25 psychic damage. Natural 16+: The target is Confused (save ends). Miss: 10 psychic damage. Limited Use: 1/battle.", "C: Hypnotic Movements +10 vs MD (one nearby enemy, or one nearby enemy per point of escalation die if Mystic Escalator benefit is active) - 10 psychic damage, an the target is Hampered (save ends)."],
    abilities: ["Arcane Mirror: When an enemy targets the swaysong naga with a spell, the naga regains the use of Song of Reversals if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per-battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been targeted by an enemy's spell since the last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 254
},

{
    name: "Sparkscale Naga",
    level: 6,
    type: "leader (large)",
    initiative: "",
    ac: 21,
    pd: 20,
    md: 16,
    hp: 190,
    health: 190,
    attacks: ["Bite +11 vs AC - 30 damage. Natural 16+: Each nearby enemy takes 10 thunder damage. Miss: 20 damage.", "R: Bloom of Lightning +10 vs PD (1D3 nearby or far away enemies) - 30 lightning damage. Natural 16+: Each nearby enemy takes 10 thunder damage. Miss: Each nearby creature (including allies) takes 5 thunder damage. Limited Use: 1/battle.", "C: Sparking Aura +10 vs PD (one nearby enemy, or one nearby enemy per point of escalation die if Mystic Escalator benefit is active) - 20 lightning damage, and the target is Vulnerable (save ends)."],
    abilities: ["Arcane Mirror: When an enemy targets the sparkscale naga with a spell, the naga regains the use of Sparking Aura if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been targeted by an enemy's spell since the last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 255
},

{
    name: "Manafang Naga",
    level: 7,
    type: "leader (large)",
    initiative: "+14",
    ac: 23,
    pd: 17,
    md: 21,
    hp: 210,
    health: 210,
    attacks: ["Bite +12 vs AC - 45 damage. Natural 16+: The naga gains Resist Spell Damage 16+ against the target's spells until the end of the battle. Miss: 25 damage.", "R: Force Missiles (1D4 nearby or far away enemies) - 25 force damage. Limited Use: 1/battle.", "C: Ritual Movements +12 vs MD (one nearby enemy, or one nearby enemy per point of escalation die if Mystic Escalator benefit is active) - 40 psychic damage, and the target can't cast spells or use the activated powers of true magic items (save ends)."],
    abilities: ["Arcane Mirror: When an enemy targets the manafang naga with a spell, the naga regains the use of Force Missiles if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been targeted by an enemy's spell since the last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 256
},

{
    name: "Elder Swaysong Naga",
    level: 8,
    type: "leader",
    initiative: "+12",
    ac: 24,
    pd: 19,
    md: 21,
    hp: 144,
    health: 144,
    attacks: ["Bite +13 vs AC - 24 damage. Natural 16+: The target also takes 15 ongoing poison damage. Miss: 12 damage.", "R: Song of Reversals +13 vs MD (1D3 nearby or far away enemies) - 25 psychic damage. Natural 16+: The target is confused (save ends). Miss: 10 psychic damage. Limited Use: 1/battle.", "C: Hypnotic Movements +13 vs MD (one nearby enemy, or one nearby enemy per point of escalation die if Supreme Mystic Escalator benefit is active) - 15 psychic damage, and the target is Hampered (save ends); until the target saves, it takes 15 psychic damage each time it attacks the naga."],
    abilities: ["Arcane Mirror: Whenever an enemy targets the elder swaysong naga with a spell, the naga regains the use of Song of Reversals if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Supreme Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been hit by two enemy spells since its last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 257
},

{
    name: "Elder Sparkscale Naga",
    level: 9,
    type: "leader",
    initiative: "+15",
    ac: 24,
    pd: 23,
    md: 19,
    hp: 190,
    health: 190,
    attacks: ["Bite +14 vs AC - 30 damage. Natural 16+: Each nearby enemy takes 10 thunder damage. Miss: 20 damage.", "R: Bloom of Lightning +14 vs PD (1D3 nearby or far away enemies) - 30 lightning damage. Natural 16+: Each nearby enemy takes 10 thunder damage. Miss: Each nearby creature (including allies) takes 5 thunder damage. Limited Use: 1/battle.", "C: Sparking Aura +14 vs PD (one nearby enemy, or one nearby enemy per point of escalation die if Supreme Mystic Escalator benefit is active) - 40 lightning damage, and the target is Vulnerable (save ends)."],
    abilities: ["Arcane Mirror: Whenever an enemy targets the elder sparkscale naga with a spell, the naga regains the use of Bloom of Lightning if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Supreme Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been hit by two enemy spells since its last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 258
},

{
    name: "Elder Manafang Naga",
    level: 10,
    type: "leader",
    initiative: "+18",
    ac: 26,
    pd: 20,
    md: 24,
    hp: 210,
    health: 210,
    attacks: ["Bite +15 vs AC - 45 damage. Natural 16+: The naga gains Resist Spell Damage 16+ against the target's spells until the end of the battle. Miss: 25 damage.", "R: Force Missiles (1D4 nearby or far away enemies) - 45 force damage. Limited Use: 1/battle.", "C: Ritual Movements +15 vs MD (one nearby enemy, or one nearby enemy per point of escalation die if Supreme Mystic Escalator benefit is active) - 45 psychic damage, and the target can't cast spells or use the activated powers of true magic items (save ends). Miss: 20 psychic damage."],
    abilities: ["Arcane Mirror: Whenever an enemy targets the elder manafang naga with a spell, the naga regains the use of Force Missiles if it's expended. In addition, if that spell is a recharge spell, roll its recharge check immediately after the spell is cast. If the spell is a per battle or daily spell, roll a hard save immediately after the spell is cast; on a success, the spellcaster doesn't expend the spell.", "Supreme Mystic Escalator: The naga and each of its nearby allies can use the escalation die unless the naga has been hit by two enemy spells since its last turn.", "[Nastier Special] Arcane Balance: Whenever the naga rolls a natural 1-5 with an attack roll, it can cancel one magical effect created by a spell or magic items that is affecting the naga or a nearby creature (including a beneficial effect on a PC). It can be an ongoing effect, and effect that only lasts a round, or even an effect that was supposed to last until the end of the battle. Use your sense of what is magical and what isn't; a bard's song is clearly magical, but a rogue's shadow walk talent probably isn't, despite the wizard's arguments that it should be."],
    isStaggered: false,
    id: 259
},

// OGRES

{
    name: "Ogre Penitent",
    level: 3,
    type: "blocker (large)",
    initiative: "+4",
    ac: 18,
    pd: 16,
    md: 14,
    hp: 100,
    health: 100,
    attacks: ["Remorseful Flail +6 vs AC - 20 damage. Natural 5, 10, 15, or 20: Until the end of the battle, when an enemy engaged with the ogre mage attacks it, that enemy can't target other enemies with that attack. Miss: Half damage to a different nearby enemy."],
    abilities: ["Closer My Death to Thee: While Staggered, the ogre penitent gains a +4 attack bonus.", "Crumbling Ego: Each time the ogre fails a save, it takes 1D8 psychic damage.", "[Nastier Special] Frenzied Disappointment: If the ogre penitent rolls a natural 1 or 2 with an attack roll, it can take an extra standard action during its next turn."],
    isStaggered: false,
    id: 260
},

{
    name: "Demonic Ogre",
    level: 4,
    type: "spoiler (large)",
    initiative: "+8",
    ac: 20,
    pd: 16,
    md: 16,
    hp: 100,
    health: 100,
    attacks: ["Demon-kissed Blade +9 vs AC - 24 damage. Natural 5, 10, 15, or 20: The ogre gains a random demonic advantage (see below) until the end of the battle. All demonic advantages end if the ogre experiences a demonic eruption. Miss: Half damage.", "R: Flaming Spear +9 vs AC - 20 damage. Natural 5, 10, 15, or 20: The target takes 10 ongoing fire damage."],
    abilities: ["Demonic Advantage: Roll a D6 to determine which demonic ability the ogre gains. 1: The ogre gains Resist Energy 16+. 2: Once per battle, the ogre can teleport anywhere it can see as a move action. 3: The ogre's attacks deal +1D8 damage, hit or miss. 4: At the start of the ogre's turn, each enemy engaged with it takes 2D6 negative energy damage. 5: The ogre gains a +5 bonus to saves this battle. 6: The ogre begins making Demonic Eruption rolls when the escalation die is 4+ instead of 6+.", "Demonic Eruption: When the escalation die is 6+, the demonic ogre rolls a normal save at the start of each of its turns. On a success, roll a D6 and replace the demonic ogre with a new undamaged demon. 1-2: Imp; 3-4: Despoiler; 5: Frenzy demon; 6: Cambion sickle.", "[Nastier Special] Early Eruption: Begin making demonic eruption rolls when the escalation die is 5+ instead of 6+. Also use stronger demons for the options that the ogre could turn into."],
    isStaggered: false,
    id: 261
},

{
    name: "Ogre Berserker",
    level: 4,
    type: "wrecker (large)",
    initiative: "+9",
    ac: 18,
    pd: 18,
    md: 15,
    hp: 120,
    health: 120,
    attacks: ["Giant Axe or Sword +8 vs AC - 28 damage. Natural 5, 10, 15, or 20: The ogre berserker gains the Escalator ability (it adds the escalation die to its attacks) until the end of the battle. Miss: Half damage, and the ogre berserker takes 1D6 damage."],
    abilities: ["You Shouldn't Have Done That: When an enemy engaged with the berserker scores a critical hit against it, that enemy takes 7D6 damage.", "Incidental Damage: When an enemy makes an opportunity attack against the berserker, hit or miss, that enemy takes 2D6 damage.", "Rauguguggh: Once per battle as a free action, when the ogre berserker fails a save, it can take 3D6 damage to succeed at the save instead."],
    isStaggered: false,
    id: 262
},

{
    name: "Ogre Crusader",
    level: 4,
    type: "troop (large)",
    initiative: "+6",
    ac: 21,
    pd: 17,
    md: 15,
    hp: 106,
    health: 106,
    attacks: ["Jagged Greatsword or Greataxe +10 vs AC (2 attacks) - 18 damage. Natural 5, 10, 15, or 20: The ogre crusader can make a War-Curse attack as a free action. Miss: Half damage.", "R: War Javelin +8 vs AC - 18 damage.", "C: War-Curse +10 vs MD (the nearby conscious enemy with the lowest hit points) - 10 psychic damage."],
    abilities: ["Special Hate: When the ogre crusader attacks an enemy that has a positive or conflicted relationship with either the Diabolist or the Great Gold Wyrm, it adds the escalation die to the attack roll."],
    isStaggered: false,
    id: 263
},

{
    name: "Ogre Champion",
    level: 5,
    type: "wrecker (large)",
    initiative: "+10",
    ac: 21,
    pd: 19,
    md: 18,
    hp: 140,
    health: 140,
    attacks: ["Champion's Battle-axe +10 vs AC - 30 damage. Natural 5, 10, 15, or 20: The ogre champion gains a second standard action this turn, but not a third. Miss: Half damage.", "R: Heavy Javelin +10 vs AC (one nearby or far away enemy) - 26 damage. Miss: 10 damage."],
    abilities: ["Orc Lord's Enemies: Whenever a nearby dwarf or elf enemy attempts to use their racial power, they must roll a hard save. On a failure, the power fails and has no effect that turn (but they can try again next turn).", "Slayer of Wizards: Creatures engaged with the ogre champion take opportunity attacks from it when casting close spells as if they were casting ranged spells.", "[Nastier Special] Escalating Danger: The ogre champion adds the escalation die to the damage it deals with its attacks, hit or miss."],
    isStaggered: false,
    id: 264
},

{
    name: "Ogre Minion (large mook)",
    level: 9,
    type: "mook",
    mookNumber: 1,
    initiative: "+11",
    ac: 24,
    pd: 23,
    md: 19,
    hp: 80,
    health: 80,
    attacks: ["Ogre-sized Chopper +14 vs AC - 35 damage. Miss: Half damage.", "R: Ogre-sized Javelin +14 vs AC (one nearby or far away enemy) - 20 damage."],
    abilities: ["Incidental Damage: When an enemy makes an opportunity attack against the ogre minion, hit or miss, that enemy takes 4D6 damage.", "Double-strength Mook: The ogre minion mook counts as two 9th level mooks when you're building battles.", "[Nastier Special] Punching Above Its Weight: Once per round, the ogre minion mob can take 5D10 damage to reroll an attack (a member of the mob takes one for the team)."],
    isStaggered: false,
    id: 265
},

// OGRE MAGI

{
    name: "Ogre Mage Knight",
    level: 6,
    type: "wrecker (large)",
    initiative: "+13",
    ac: 22,
    pd: 19,
    md: 17,
    hp: 160,
    health: 160,
    attacks: ["Naginata +11 vs AC - The effect depends on the roll. Natural Even Hit: 25 damage, and the ogre mage knight can use Lightning Pulse as a free action. Natural Odd Hit: 20 damage, and the ogre mage knight can use Voice of Thunder as a free action. Natural Even Miss: 10 damage, and the ogre mage knight can teleport to any nearby location it can see before using Magi's Lightning Chain as a free action. Natural Odd Miss: The ogre mage knight can use Cone of Cold as a free action.", "R: Magi's Lightning Chain +11 vs PD - 15 lightning damage, and each time this attack has a natural even attack roll, the ogre mage knight can target a different creature with the ability.", "C: Cone of Cold +11 vs PD (up to 3 nearby enemies in a group, also target's the ogre's allies engaged with the targets) - 20 cold damage. Miss: 10 cold damage.", "C: Lightning Pulse +11 vs PD (one random nearby or far away enemy) - 20 lightning damage. Natural Even Hit: The target is Weakened (save ends).", "C: Voice of Thunder +11 vs PD (1D3 nearby enemies) - 15 thunder damage."],
    abilities: ["Resist Exceptional Attacks 16+: When a limited attack (not an at-will attack) targets this creature, the attacker must roll a natural 16+ on the attack roll or it only deals half damage.", "Trollish Regeneration 15: While an ogre mage is damaged, its uncanny flesh heals 15 hit points at the start of the ogre mage's turn. It can regenerate five times per battle. If it heals to its maximum hit points, then that use of regeneration doesn't count against the five-use limit. When the ogre mage is hit by an attack that deals fire or acid damage, it loses one use of its regeneration, and it can't regenerate during its next turn. Dropping an ogre mage to 0 HP doesn't kill it if it has any uses of regeneration left.", "[Nastier Special] Ki: Gain 1D4 ki at the start of each battle. Spend a point of ki as a free action, once per round, to change the ogre mage knight's natural attack result by one; a natural 1 could become a 2, a natural 19 could become a 20, and so on."],
    isStaggered: false,
    id: 266
},

{
    name: "Ogre Lightning Mage",
    level: 8,
    type: "caster (large)",
    initiative: "+15",
    ac: 24,
    pd: 20,
    md: 22,
    hp: 230,
    health: 230,
    attacks: ["Naginata +14 vs AC (2 attacks) - 40 damage. Miss: 15 damage.", "R: Lightning From Torn Sky +14 vs PD (up to 2 nearby enemies, plus one far away enemy, if any) - 52 lightning damage. Limited Use: 1/battle, but the ogre lightning mage regains the use of this attack if it's expended each time it uses its Naginata attack.", "R: Past Master's Judgement +14 vs MD (1D3 nearby enemies) - 25 psychic damage. First Natural Even Hit Each Attack: The ogre lightning mage can cancel one spell or magical effect created by the target."],
    abilities: ["Flight: The ogre lightning mage flies well using the sheer power of its superior mind.", "Invisibility: While not engaged, the ogre lightning mage can turn invisible as an at-will standard action. It becomes visible when it attacks. The ogre mage takes 1D10 damage each time it uses Invisibility while it's Staggered.", "Resist Exceptional Attacks 16+: When a limited attack (not an at-will attack) targets this creature, the attacker must roll a natural 16+ on the attack roll or it only deals half damage.", "Trollish Regeneration 20: While an ogre mage is damaged, its uncanny flesh heals 20 hit points at the start of the ogre mage's turn. It can regenerate five times per battle. If it heals to its maximum hit points, then that use of regeneration doesn't count against the five-use limit. When the ogre mage is hit by an attack that deals fire or acid damage, it loses one use of its regeneration, and it can't regenerate during its next turn. Dropping an ogre mage to 0 HP doesn't kill it if it has any uses of regeneration left."],
    isStaggered: false,
    id: 267
},

{
    name: "Prismatic Ogre Mage",
    level: 9,
    type: "caster (large)",
    initiative: "+16",
    ac: 25,
    pd: 22,
    md: 18,
    hp: 360,
    health: 360,
    attacks: ["Horns and Claws +15 vs AC - 75 damage. Natural 2-5: The prismatic ogre mage can use Prismatic Blast as a free action without provoking an opportunity attack.", "Force Shove +15 vs PD (each enemy engaged with the ogre) - 10 force damage, and the target pops free from the ogre mage. Quick Use: This power only requires a quick action (once per round) instead of a standard action when the escalation die is odd.", "R: Prismatic Blast +15 vs PD (1D3 nearby or far away enemies in a group) - Roll a D8 against each hit target to determine the type of ray and effect. 1. Red: 75 fire damage. Miss: 40 fire damage. 2. Orange: 50 damage, and the target is Confused (save ends). 3. Yellow: 40 ongoing poison damage. 4. Green: The target loses a recovery, and the prismatic ogre mage heals 70 HP. 5. Blue: 60 lightning damage, and make a secondary attack. 6. Cyan: The target is Stunned (save ends). 7. Purple: The target is Dazed and Confused (save ends both). When the target saves, it takes 40 psychic damage. 8. Magenta: The target is transported into the future. Remove that creature from play, returning it to the battle in (or near) its previous location at the end of its next turn. No time seems to pass for the target while it's gone.", "[Special Trigger] Blue Ray +15 vs PD (one enemy near the target) - 20 lightning damage."],
    abilities: ["Resist Exceptional Attacks 16+: When a limited attack (not an at-will attack) targets this creature, the attacker must roll a natural 16+ on the attack roll or it only deals half damage.", "Warp: The prismatic ogre mage warps reality with its presence. Each character hit by the Prismatic Blast attack during battle must write down one true personal trait or preference about their character, such as: 'yellow hair,' 'afraid of spiders,' 'prefers white wine to red,' or 'tattoo of a halfling on left bicep.' These personal traits are shuffled and randomly distributed equally by the GM after the battle is over. Whichever trait each player receives is now true for their character as well as for the character of the player who wrote it down (unless there has somehow turned out to be a swap...). These traits don't alter game mechanics (feats, powers, backgrounds, icon relationships, attributes, bonuses, etc.). They are personal details that have been warped and scrambled by the prismatic ogre mage's magic."],
    isStaggered: false,
    id: 268
},

// ORCS

{
    name: "Pit-Spawn Orc (double-strength mook)",
    level: 2,
    type: "mook",
    mookNumber: 1,
    initiative: "+2",
    ac: 17,
    pd: 15,
    md: 12,
    hp: 18,
    health: 18,
    attacks: ["Punch or Bludgeon +7 vs AC - 5 damage"],
    abilities: ["Mob Attack: The crit range for pit-spawn orcs is 17+. Whenever a pit-spawn orc scores a critical hit, each pit-spawn orc mook in the battle gains a +1 cumulative bonus to damage until the end of the battle.", "[Nastier Special] Boiling Rage: When an enemy engaged with the orc hits it with an attack, the enemy takes 4 damage as the orc bites and claws it back."],
    isStaggered: false,
    id: 142
},

{
    name: "Orcish Archer",
    level: 2,
    type: "archer",
    initiative: "+5",
    ac: 18,
    pd: 17,
    md: 11,
    hp: 32,
    health: 32,
    attacks: ["Scimitar +6 vs AC - 6 damage", "R: Short Bow +6 vs AC - 7 damage. Natural 1-5: reroll the attack against a random nearby creature. If the rerolled attack is also a natural 1-5, the orcish archer takes 3 damage from sheer agonized frustration, but it doesn't get to make another attack."],
    abilities: ["Final Frenzy: When the escalation die is 3+, the orcish archer gains a +3 bonus to melee attacks and melee damage."],
    isStaggered: false,
    id: 143
},

{
    name: "Cave Orc",
    level: 3,
    type: "mook",
    mookNumber: 1,
    initiative: "+6, or +12 at night or in dark caves",
    ac: 19,
    pd: 18,
    md: 12,
    hp: 10,
    health: 10,
    attacks: ["Obsidian Knife +8 vs AC - 4 damage, and +1d4 damage for each other orc engaged with the target (max +4d4).", "R: Rock +7 vs AC - 5 damage"],
    abilities: ["Hears Everything: Increase the DC to sneak past cave orcs silently by +5.", "Nocturnal Predator: If the battle is at night (or in darkness), the orc gains a +2 attack bonus. If the battle is during the day (or in daylight) it takes a -2 penalty to all defenses."],
    isStaggered: false,
    id: 144
},

{
    name: "Death-Plague Orc",
    level: 3,
    type: "spoiler (large)",
    initiative: "+2",
    ac: 20,
    pd: 18,
    md: 12,
    hp: 90,
    health: 90,
    attacks: ["Huge Spiked Flail +8 vs AC - 21 damage. Natural Roll Above Target's Constitution: the target catches a disease."],
    abilities: ["[Disease Type 1 (d4)] Filthy Fever (d6 roll for symptoms that day). 1: slight temperature, 2-3: the runs. You gain 1 fewer recovery than normal after a full heal up due to fluid loss, 4+: you have a hacking cough that sounds like insane laughter and are losing fluids. You gain 2 fewer recoveries than normal after a full heal up and can't remain silent.", "[Disease Type 2 (d4)] Chatter Pox (d6 roll for symptoms that day). 1: unsightly and painful sores, occasional shivers, 2-3: running sores, shivering, and chattering teeth. You take a -3 penalty to social skill checks and to attack rolls with spells, 4+: infected sores, fever dreams. Your constitution is weakened. After each full heal up, roll 1d4+3 to determine your starting maximum recoveries for that day. Each time you cast a spell that isn't at-will, there's a 25% chance it fails (but you don't expend the spell).", "[Disease Type 3 (d4)] Slug Scourge (d6 roll for symptoms that day). 1: extreme appetite, nausea, 2-3: vomiting up slugs. Whenever you make a non-combat Charisma check, roll 2d20 and take the lower result, 4+: the slugs are inside your lungs! After each quick rest, you lose 25% of your maximum HP. If you drop down to 0 HP this way, you enter into a coma until the next day.", "[Disease Type 4 (d4)] Red Fever (d6 roll for symptoms that day). 1: scarlet stripes on the eyeballs, itching, buzzing in ears, 2-3: blurred vision. You take a -3 penalty to ranged attacks, 4+: fever, rage, and confusion. Whenever you roll a natural odd attack roll, you are confused until the end of your next turn. Ranged attacks have a 25% chance of accidentally targeting a random ally (check before making the attack roll)."],
    isStaggered: false,
    id: 145
},

{
    name: "Orc Battle Screamer",
    level: 3,
    type: "leader",
    initiative: "+8",
    ac: 22,
    pd: 15,
    md: 15,
    hp: 33,
    health: 33,
    attacks: ["Sharpened Flute or Club-like Drumstick +9 vs AC - 10 damage", "R: Skull Drum +7 vs MD - 8 damage, and as a free action, one nearby orc ally can move or make a basic attack (doesn't trigger special abilities).", "R: Bone Flute +7 vs MD - 8 damage, and one nearby orc ally deals +1d6 damage on a hit during its next turn.", "R: War Bagpipes - 1d3 nearby or far away enemies that can hear the bagpipes must immediately roll a normal save; on a failure, the target is hampered until the end of its next turn."],
    abilities: ["Orcish Instruments: Choose ONE of the above instrument attacks."],
    isStaggered: false,
    id: 146
},

{
    name: "Orc Tusker",
    level: 3,
    type: "troop",
    initiative: "+7",
    ac: 22,
    pd: 17,
    md: 13,
    hp: 45,
    health: 45,
    attacks: ["Club'n'Tusk +5 vs AC - 7 damage. Furious Charge: the attack instead deals 12 damage on a hit if the orc tusker first moves before attacking an enemy it was not engaged with at the start of its turn. Miss: 4 damage, and the orc tusker pops free from all enemies."],
    abilities: ["No Abilities"],
    isStaggered: false,
    id: 147
},

// PREDATORY PLANTS

{
    name: "Claw Flower",
    level: 2,
    type: "spoiler",
    initiative: "+6",
    ac: 16,
    pd: 12,
    md: 15,
    hp: 40,
    health: 40,
    attacks: ["Serrated Claw +7 vs AC - 8 damage. Natural 1-5: The claw flower takes 1D4 damage from burst roots.", "C: Bumble Spores +4 vs MD (1D2 nearby random non-plant creatures) - The effect depends on the roll. Natural Even Hit: 4 psychic damage, and the target is Confused until the end of its next turn. Natural Odd Hit: 3 psychic damage, and the target is Stuck until the end of its next turn. Miss: 2 psychic damage."],
    abilities: ["Immobile Until Pressed: The claw flower has roots and normally can't move, but when it takes 10 or more damage from a single attack it can move normally during its next turn.", "Spore Escalator: The claw flower adds the escalation die to its Bumble Spores attack rolls.", "[Nastier Special] Gentle Roar: Once per battle, the claw flower can make a Bumble Spores attack as a quick action."],
    isStaggered: false,
    id: 269
},

{
    name: "Pixie Pod",
    level: 3,
    type: "leader (double-strength)",
    initiative: "+7",
    ac: 17,
    pd: 13,
    md: 16,
    hp: 40,
    health: 40,
    attacks: ["C: Peripheral Summoning +8 vs MD (one random nearby enemy) - 8 psychic damage. Natural Even Hit: Add a new podling into the battle in a random location."],
    abilities: ["Release the Pods: Once per battle when the pixie pod rolls a natural even hit with Peripheral Summoning, it adds a number of podlings into the battle equal to the escalation die instead of only 1.", "Immobile: Although its podlings occasionally pick up and move it around out of combat, in battle the pixie pod can't move and is Stuck except for its teleport ability.", "Lost Opportunity: This creature can't make opportunity attacks.", "Lurching Teleport: Once per battle as a move action, the pixie-pod can teleport to a nearby location. But its control sucks. The teleport goes in a random direction. Roll it using a D8 for direction.", "Magical Concealment: As long as one or more of its podlings are nearby, the pixie pod is invisible and extremely difficult to even detect. A PC who wants to locate the pixie pod must spend a standard action searching and succeed at a DC 25 skill check using Wisdom. Backgrounds connected to plants and the wildnerness help normally, and general searching skills and magic talents might help a bit but not at full strength. Once located, the plant can be attacked like a normal invisible creature. When it teleports, however, it must be located all over again.", "Start With Mooks: The pixie pod is normally accompanied by five active podlings that don't count toward the total when building a battle with the pod. Additional podlings do count, however."],
    isStaggered: false,
    id: 270
},

{
    name: "Podling",
    level: 3,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 18,
    pd: 17,
    md: 13,
    hp: 10,
    health: 10,
    attacks: ["Needle Sword +8 vs AC - 6 damage. Natural Even Hit: The target can't choose to search for the pixie-pod plant until all podlings in the battle are slain.", "R: Tiny Green Bow +8 vs AC - 5 damage."],
    abilities: ["[Nastier Special] Flight: A podling that can fly, hovering out of reach and firing arrows, can be a real pain in the pate."],
    isStaggered: false,
    id: 271
},

// PURPLE WORMS

{
    name: "Purple Worm",
    level: 8,
    type: "wrecker (huge)",
    initiative: "+11",
    ac: 23,
    pd: 22,
    md: 17,
    hp: 440,
    health: 440,
    attacks: ["Devouring Maw +13 vs PD - 50 damage. Natural Even Hit: The target is swallowed whole if it's smaller than the worm (see below). Miss: Half damage.", "Tail Sting +13 vs AC (one random nearby enemy) - 20 damage, and 20 ongoing poison damage.", "C: Mighty Thrash +13 vs AC (1D3 random nearby enemies) - 30 damage. Miss: Half damage. Natural 1-5: The worm takes 10 damage (but still deals miss damage on a 2-5). Limited Use: The worm can make this attack as a free action if it has no enemies swallowed after using its standard action during its turn."],
    abilities: ["Swallow Whole: While a creature is swallowed whole, it takes 7D10 acid damage at the start of its turn and is Stuck, Hampered, and unable to attack or affect anything outside of the worm's stomach (and vice versa). Most teleport abilities don't work because you're Hampered and you can't see the location out of the worm you want to teleport to. There are two ways out. Cut Your Way Out: Deal 40 damage to the worm with a single attack and you can cut your way out. All edged or bladed weapons are reduced to D6 damage dice (at most) inside the worm's gullet, so good luck. At least you'll be damaging the worm attacking it from within. Get Upchucked: While the worm is Staggered, you can use a standard action to try and crawl out of its mouth. Roll a hard save; on a success, the worm vomits you out and spits you somewhere nearby. The worm also vomits out all creatures it has swallowed when it drops to 0 HP.", "Burrow: As the standard monster ability (13th Age core rulebook, page 200).", "[Nastier Special] Larval Feeding: The worm's stomach also includes a mob of larval mooks (purple larvae or parasitic lightning beetles). Feel free to add this nastier special if a PC acts dismissive about the possibility of being swallowed by the worm.", "[Nastier Special] Resist Most Energy Damage 16+: Purple worms generate weird energy resistances thanks to underworld radiation and their odd diets. Roll a D8 twice, in secret, to determine what energy types the worm is not resistant to. The PCs probably have to find out what energy works best against the worm the hard way, though you might have mercy and allow a DC 35 Wisdom skill check to figure out what energy types work against the worm. 1: acid; 2: cold; 3: fire; 4: lightning; 5: thunder; 6: holy; 7: negative energy; 8: poison."],
    isStaggered: false,
    id: 272
},

{
    name: "Parasitic Lightning Beetle",
    level: 8,
    type: "mook",
    mookNumber: 1,
    initiative: "+14",
    ac: 27,
    pd: 22,
    md: 17,
    hp: 36,
    health: 36,
    attacks: ["Mouthparts +12 vs AC - 10 damage. Natural Even Hit or Miss: The target also takes 5 lightning damage.", "R: Lightning Zap +12 vs PD (one nearby enemy not engaged with a purple worm, purple larvae, or parasitic beetle) - 20 lightning damage. Natural Even Hit or Miss: The target takes 5 extra lightning damage."],
    abilities: ["Flight: The beetles fly badly, usually just enough to get back to the worm when they've been shaken off from their hiding spots in its segments.", "Scaredy Bugs: Whenever one or more parasitic lightning beetles drop to 0 HP, roll a D6. If you roll less than or equal to the number of beetles that were destroyed by that attack, all beetles in the battle stop fighting, using all their actions during their next turn to disengage and fly away."],
    isStaggered: false,
    id: 273
},

{
    name: "Purple Larva",
    level: 8,
    type: "mook",
    mookNumber: 1,
    initiative: "+9",
    ac: 22,
    pd: 20,
    md: 16,
    hp: 44,
    health: 44,
    attacks: ["Bitey Maw +13 vs AC - 20 damage. Natural Even Hit or Miss: The larva can make a Tail Stinger attack against a random enemy engaged with it as a free action.", "[Special Trigger] Tail Sting +13 vs AC - 5 damage, and 10 ongoing poison damage."],
    abilities: ["Merge with Worm: Purple larvae can dig quickly in and out of the skin of the purple worm as if they were burrowing but without needing die rolls to succeed."],
    isStaggered: false,
    id: 274
},

{
    name: "Ancient Purple Worm",
    level: 12,
    type: "wrecker (huge)",
    initiative: "+17",
    ac: 27,
    pd: 25,
    md: 21,
    hp: 1200,
    health: 1200,
    attacks: ["Devouring Maw +18 vs PD - 100 damage. Natural Even Hit: The target is swallowed whole if it's smaller than the worm (see below). Miss: Half damage.", "Tail Sting +18 vs AC (up to 2 random nearby enemies) - 40 damage, and 40 ongoing poison damage. Miss: 20 damage.", "Prodigious Thrash +18 vs AC (1D4 random nearby enemies) - 50 damage. Miss: Half damage. Natural 1-2: The worm and any creatures it has swallowed take 8D6 damage (but it still deals miss damage on a 2). Limited Use: The worm can make this attack as a free action if it has one enemy swallowed or less after using its standard action during its turn."],
    abilities: ["Swallow Whole: While a creature is swallowed whole, it takes 10D12 acid damage at the start of its turn and is Stuck, Hampered, and unable to attack or affect anything outside of the worm's stomach (and vice versa). Most teleport abilities don't work because you're Hampered and you can't see the location out of the worm you want to teleport to. There are two ways out. Cut Your Way Out: Deal 80 damage to the worm with a single attack and you can cut your way out. All edged or bladed weapons are reduced to D6 damage dice (at most) inside the worm's gullet, so good luck. At least you'll be damaging the worm attacking it from within. Get Upchucked: While the worm is Staggered, you can use a standard action to try and crawl out of its mouth. Roll a hard save; on a success, the worm vomits you out and spits you somewhere nearby. The worm also vomits out all creatures it has swallowed when it drops to 0 HP.", "Burrow: As the standard monster ability (13th Age core rulebook, page 200), but with a +5 bonus to the check.", "[Nastier Special] Resist Most Energy Damage 16+: Purple worms generate weird energy resistances thanks to underworld radiation and their odd diets. Roll a D8 twice, in secret, to determine what energy types the worm is not resistant to. The PCs probably have to find out what energy works best against the worm the hard way, though you might have mercy and allow a DC 35 Wisdom skill check to figure out what energy types work against the worm. 1: acid; 2: cold; 3: fire; 4: lightning; 5: thunder; 6: holy; 7: negative energy; 8: poison."],
    isStaggered: false,
    id: 275
},

// RED DRAGONS

{
    name: "Volcano Dragon",
    level: 7,
    type: "wrecker (large)",
    initiative: "+12",
    ac: 23,
    pd: 22,
    md: 16,
    hp: 220,
    health: 220,
    attacks: ["Fangs, Claws, and Wings +12 vs AC (2 attacks) - 18 damage. Natural 16+: The target takes 5 extra damage from a wing buffet. Natural 18+: The target takes 10 extra damage from a claw strike.", "[Special Trigger] Tail Smash +12 vs PD (one nearby enemy) - 18 damage. Miss: 9 damage. Limited Use: When a nearby enemy attacks and rolls a natural even hit against the dragon, the dragon can make a Tail Smash attack against it as a free action.", "C: Volcanic Breath +12 vs PD (each nearby enemy) - 20 fire damage, and 5 ongoing fire damage. Natural 18+: The target takes 10 ongoing fire damage instead of 5."],
    abilities: ["Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile flyers.", "Vulnerability: Cold.", "Burning Skin: When an enemy is engaged with the volcanic dragon at the start of its turn, it takes 5 fire damage.", "Continuous Breath: A volcanic dragon can use Volcanic Breath 1D3 times per battle, but if it does not use its breath weapon on consecutive rounds, it loses its remaining Volcanic Breath attacks for the battle.", "Resist Fire 14+"],
    isStaggered: false,
    id: 276
},

{
    name: "Hoardsong Dragon",
    level: 9,
    type: "spoiler (large)",
    initiative: "+13",
    ac: 25,
    pd: 24,
    md: 18,
    hp: 360,
    health: 360,
    attacks: ["Fangs and Claws +14 vs AC (3 attacks) - 30 damage. Natural 16+: The target takes 15 extra damage from a precise strike.", "C: Hoardsong +14 vs MD (one nearby enemy in the dragon's lair) - 10 psychic damage, and the target is Confused (save ends). Limited Use: 2/battle, as a quick action (once per round).", "C: Precise Breath +14 vs PD (1D4 + 1 nearby enemies, or one enemy) - 20 fire damage, and 10 ongoing fire damage; OR 80 fire damage, and 20 ongoing fire damage if used against a single enemy. Natural 18+: If the breath targeted multiple enemies, the target takes 20 ongoing fire damage instead of 10. If the breath targeted a single enemy, the target takes 40 ongoing fire damage instead of 20."],
    abilities: ["Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile flyers.", "Vulnerability: Cold", "Intermittent Breath: A hoardsong dragon can use Precise Breath 1D4 times per battle, but never two turns in a row.", "Known to an Ounce: The dragon knows where every treasure in its hoard is located, allowing it to detect any movement or shifting of the coins and valuables. While in its lair with its hoard, the hoardsong dragon is immune to invisibility and ignores illusions, and creatures attempting to hide from it take a -5 penalty to their checks.", "Resist Fire 16+", "[Nastier Special] Hoard Minions: The dragon's connection to its hoard is so strong that it has some control over the souls of those it previously killed who owned the treasures. Once per round as a quick action, the hoardsong dragon can summon 1D4 hoard spirits that take form by surrounding themselves in coins, wear empty suits of armor, etc., and defend the dragon's hoard. Roll initiative for the minions once and use that count for all additional minions.", "[Nastier Special] The Call of the Hoard: The connection of a hoardsong dragon to its hoard imparts the dragon's magic upon the hoard. Before battle, if the PCs are able to see the hoard while the dragon speaks to them, each PC that can hear the dragon must roll a Wisdom check. On a result of 24 or less, that PC is charmed as per the Charm Person spell and considers the dragon a friend. On a result of 25-29, the PC is lulled by the dragon's words and the sight of the hoard; if combat occurs, the PC will be Stunned during their first round. The dragon will make a suggestion to charmed PCs to leave and bring it more treasure for its hoard (while it prepares surprises for their return). Charmed PCs won't attack the dragon, but can make a normal save each round in battle to break the charm effect (or every day outside of combat)."],
    isStaggered: false,
    id: 277
},

{
    name: "Hoard Spirit",
    level: 9,
    type: "mook",
    mookNumber: 1,
    initiative: "+15",
    ac: 24,
    pd: 22,
    md: 18,
    hp: 50,
    health: 50,
    attacks: ["Hoard-fueled Strike +14 vs AC - 35 damage. Natural 16+: The target is Stuck under a pile of treasure until the end of its next turn."],
    abilities: ["N/A"],
    isStaggered: false,
    id: 278
},

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
//     abilities: ["Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile flyers."],
//     isStaggered: false,
//     id: 279
// },

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
//     abilities: ["Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile flyers."],
//     isStaggered: false,
//     id: 280
// },

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
//     abilities: ["Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile flyers."],
//     isStaggered: false,
//     id: 281
// },

// REDCAPS



// REMORHAZ



// RUST MONSTERS



// SAHUAGIN



// SHADOW DRAGONS



// STIRGES



// TARRASQUE



// THE SAVED



// WARBANNERS



// WENDIGO



// WHISPERING PROPHET



// WHITE DRAGONS



// WIBBLE



// ZORIGAMI

{
    name: "Dawn Zorigami",
    level: 3,
    type: "spoiler",
    initiative: "+6",
    ac: 22,
    pd: 13,
    md: 17,
    hp: 30,
    health: 30,
    attacks: ["Headbutt +8 vs AC - 10 damage, and the target moves down 1D6 points in initiative order.", "R: Ray of Wasted Time +8 vs MD (1D3 nearby enemies or one far away enemy) - 5 psychic damage, and 5 ongoing psychic damage. Natural 16+: The target also moves down 1D6 points in initiative order."],
    abilities: ["A Moment of Silence: The escalation die does not increase the round after a dawn zorigami drops to 0 HP.", "On Pause: A creature that is reduced to negative initiative count in a battle involving one or more dawn zorigami moves forward in time, reappearing somewhere nearby in a number of minutes equal to their negative initiative count, presumably long after the current battle is over. The target may be confused by this effect, since the ways of zorigami are mysterious."],
    isStaggered: false,
    id: 251
},

{
    name: "Apex Zorigami",
    level: 6,
    type: "spoiler",
    initiative: "+11",
    ac: 24,
    pd: 17,
    md: 19,
    hp: 75,
    health: 75,
    attacks: ["Multi-geared Mace +11 vs AC - 20 damage. Natural Even Hit or Miss: The target can't use bonuses and powers of one of its randomly determined true magic items until the end of the battle.", "R: Spray of Sharpened Gears +11 vs AC (1D3 nearby enemies or one far away enemy) - 15 damage. Miss: 8 damage."],
    abilities: ["Lethal Parries: When an enemy engaged with the apex zorigami misses it with an attack, the apex zorigami rolls a normal save; on a success, it can make a Multi-geared Mace attack as a free action.", "Take Five: The escalation die does not increase the round after an apex zorigami is Staggered or drops to 0 HP."],
    isStaggered: false,
    id: 252
},

{
    name: "Dusk Zorigami",
    level: 10,
    type: "wrecker",
    initiative: "+18",
    ac: 28,
    pd: 23,
    md: 23,
    hp: 200,
    health: 200,
    attacks: ["Arm Full of Blades +15 vs AC (2 attacks) - 30 damage. Natural Even Hit: The target is Hampered (save ends). Natural Odd Hit: The target can't heal using its own recoveries (save ends). Natural 1-5: The dusk zorigami can make a Shaking the Hourglass attack against a single target as a free action.", "C: Shaking the Hourglass +15 vs MD (each nearby enemy not engaged with a zorigami) - 20 psychic damage, and the target is Vulnerable (save ends). Natural Even Hit: The escalation die increases by one. Natural Odd Hit: The escalation die decreases by one."],
    abilities: ["The Ticking Clock of Its Own Mortality: While it's Staggered, the dusk zorigami uses the escalation die."],
    isStaggered: false,
    id: 253
}

]

export default bestiaryMonsterData