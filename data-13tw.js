
// Data entry for 13 True Ways monsters is currently a work in progress
// Data based on 13 True Ways, 1st Edition

const thirteenTrueWaysMonsterData = [

// ANIMALS



// AZERS



// BAT DEMON



// CLOUD GIANTS



// DEVILS



// DRAGONS, METALLIC



// ELEMENTALS



// FLOWER OF UNLIFE



// GNOLLS



// MUMMY



// PIXIES



// SOUL FLENSERS



// SPECTERS



// TREANTS



// WEREBEASTS



// ZOMBIES

{
    name: "Zombie Beast",
    level: 2,
    type: "troop (large)",
    initiative: "+1",
    ac: 14,
    pd: 12,
    md: 8,
    hp: 110,
    health: 110,
    attacks: ["Smash +7 vs AC - 20 damage, and the zombie can only attack using Gutburst during its next turn. Natural 16+: both the zombie and its target take 2D6 damage.", "[Special Trigger] C: Gutburst +6 vs PD (up to 2 nearby enemies) - The target takes 3 ongoing acid damage from a spray of stinking zombified gut juice. The zombie takes 1D6 damage.", "[Nastier Special; Special Trigger] C: Thrash +7 vs PD (each enemy engaged with it) - 15 damage."],
    abilities: ["Headshot: The first time an enemy crits the zombie, the beast must roll a save. If it succeeds, it takes normal crit damage. If it fails, it drops to 0 HP. A second crit just drops the thing.", "[Nastier Special] Ghastly Thrashing: When the zombie beast is first Staggered, it makes a Thrash attack as a free action."],
    isStaggered: false,
    id: 219
},

{
    name: "Zombie of the Silver Rose",
    level: 4,
    type: "mook",
    mookNumber: 1,
    initiative: "+7",
    ac: 17,
    pd: 15,
    md: 11,
    hp: 20,
    health: 20,
    attacks: ["Iron-hard Hands +9 vs AC - 7 damage. Natural Even Hit or Miss: both the zombie and its target take 1D6 damage.", "[Nastier Special] C: Curse +4 vs MD (one nearby enemy) - The target is Weakened until the start of the zombie's next turn. Mob rule: the Curse gains an attack bonus equal to the number of Silver Rose zombies in the battle."],
    abilities: ["Hand of the Fallen: When a melee attack drops one or more Silver Rose mooks, the hand of one of those zombies ends up severed from its owner and latched onto a nearby enemy. The afflicted creature is Vulnerable to all attacks until the hand is removed, which takes a standard action by that creature or an ally next to them.", "Shot to the Head: When an attack drops this zombie and it had 2, 4, or 6 HP remaining, the attack deals the same amount of damage to another member of the mob. If this zombie has any other number of HP left? No hit to the head.", "[Nastier Special] Curse of Failure: Each round, one zombie mook in the Silver Rose mob can make a Curse attack as a quick action."],
    isStaggered: false,
    id: 220
},

{
    name: "Headless Zombie",
    level: 9,
    type: "troop",
    initiative: "+8",
    ac: 22,
    pd: 20,
    md: 17,
    hp: 270,
    health: 270,
    attacks: ["Flailing Fists +10 vs AC - 25 damage. Natural Even Hit or Miss: Both the zombie and the target take 3D10 damage.", "R: Mouthless Cry +10 vs MD (1D3 closest nearby enemies) - The target is Dazed (save ends). Natural 16+: the target takes 20 psychic damage."],
    abilities: ["Death Spasms: When a headless zombie drops to 0 HP, it flails with its fists and makes a Mouthless Cry attack as a free action before it dies.", "Inevitable Hunger: When a creature tries to affect the zombie's attack, such as forcing a reroll or applying a penalty, it must roll a normal save; on a failure, the effect is negated.", "[Nastier Special] Baleful Aura: While nearby a headless zombie, when a creature would heal, it only heals half the normal hit points.", "[Nastier Special] Necrotic Supremacy: When the escalation die increases to 6, each headless zombie in the battle is restored to maximum hit points, including the dead ones."],
    isStaggered: false,
    id: 221
}

]

export default thirteenTrueWaysMonsterData