function getMonsterCardHtml () {
    let monsterCardHtml = ``

    selectedMonsters.forEach(function(monster){
        monsterCardHtml +=`
        <div class="monster-card">
            <h3>${monster.name}</h3>
            <p>Level ${monster.level} ${monster.type}</p>
            <p>Initiative: ${monster.initiative}</p>
            <div class="defense-block">
                <ul class="defense-list">
                    <li>AC: ${monster.ac}</li>
                    <li>PD: ${monster.pd}</li>
                    <li>MD: ${monster.md}</li>
                </ul>
                <p>Total HP: ${monster.hp}</p>
            </div>
            <p>Attacks:</p>
            <ul class="attack-list"><li>${monster.attacks.join("</li><li>")}</li></ul>
            <p>Abilities:</p>
            <ul class="ability-list"><li>${monster.abilities.join("</li><li>")}</li></ul>
        </div>
        `
    })
    document.getElementById('statblock-container').innerHTML = monsterCardHtml
}

// refactor to for loop, assign card # based on index, save card # to local storage, save max HP to local storage.



function getMonsterCardHtml () {
    let monsterCardHtml = ``

    for (let i = 0; i < selectedMonsters.length; i++) {
        monsterCardHtml += `
        <div class="monster-card">
            <h3>${selectedMonsters[i].name}</h3>
            <p>Level ${selectedMonsters[i].level} ${selectedMonsters[i].type}</p>
            <p>Initiative: ${selectedMonsters[i].initiative}</p>
            <div class="defense-block">
                <ul class="defense-list">
                    <li>AC: ${selectedMonsters[i].ac}</li>
                    <li>PD: ${selectedMonsters[i].pd}</li>
                    <li>MD: ${selectedMonsters[i].md}</li>
                </ul>
                <p>Total HP: ${selectedMonsters[i].hp}</p>
                <div class="damage-track-container">
                    <label for="dmg${i}">Damage</label>
                    <input type="number" step="1" id="dmg${i}" name="dmg${i}" class="dmg-input">
                    <button id="dmg${i}-btn">Deal Damage</button>
                    <p>Current HP: ${selectedMonsters[i].health}</p>
                </div>
            </div>
            <p>Attacks:</p>
            <ul class="attack-list"><li>${selectedMonsters[i].attacks.join("</li><li>")}</li></ul>
            <p>Abilities:</p>
            <ul class="ability-list"><li>${selectedMonsters[i].abilities.join("</li><li>")}</li></ul>
        </div>
        `
    }

    document.getElementById('statblock-container').innerHTML = monsterCardHtml
}

// =======================
//  CONSTRUCTOR FUNCTION
// =======================

// function Monster(data) {
//     Object.assign(this, data)

//     this.getMonsterHtml = function() {
//         const { name, level, type, initiative, ac, pd, md, hp, health, attacks, abilities, id } = this

//         return `
//         <div class="monster-card">
//             <h3>${name}</h3>
//             <p>Level ${level} ${type}</p>
//             <p>Initiative: ${initiative}</p>
//             <div class="defense-block">
//                 <ul class="defense-list">
//                     <li>AC: ${ac}</li>
//                     <li>PD: ${pd}</li>
//                     <li>MD: ${md}</li>
//                 </ul>
//                 <p>Total HP: ${hp}</p>
//                 <div class="damage-track-container">
//                     <label for="dmg${id}">Damage</label>
//                     <input type="number" step="1" id="dmg${id}" name="dmg" class="dmg-input">
//                     <button id="dmg${id}-btn">Deal Damage</button>
//                     <p>Current HP: ${health}</p>
//                 </div>
//             </div>
//             <p>Attacks:</p>
//             <ul class="attack-list"><li>${attacks.join("</li><li>")}</li></ul>
//             <p>Abilities:</p>
//             <ul class="ability-list"><li>${abilities.join("</li><li>")}</li></ul>
//         </div> 
//         `
//     }
// }
