import monsterData from '/data.js'

// ========================
//     GLOBAL VARIABLES
// ========================

let selectedMonsters = []

// =======================
//    EVENT LISTENERS
// =======================

// Select monsters button to pull up modal
document.getElementById('select-monsters-btn').addEventListener("click", function() {
    document.getElementById('selection-modal').style.display = "block"
})

// Close modal button
document.getElementById('close-modal-btn').addEventListener("click", function(){
    document.getElementById('selection-modal').style.display = "none"
})

// Clear monsters
document.getElementById('clear-monsters-btn').addEventListener("click", function(){
    selectedMonsters = []
    render()
})

// Adds monster selected from dropdown
document.getElementById('monsters-dropdown').addEventListener('change', function(e) {
    const targetMonsterObj = JSON.parse(JSON.stringify([monsterData.filter(function(monster){
        return monster.name === e.target.value
    })[0]]))

    selectedMonsters = [...selectedMonsters, ...targetMonsterObj]
    render()
})

// Handle damage
document.addEventListener("click", function(e) {
    if (e.target.dataset.dmgbtn) {
        handleDamageClick(e.target.dataset.dmgbtn)
    }
})

// Remove Monster Card
document.addEventListener("click", e => {
    if (e.target.dataset.rmvbtn) {
        removeMonsterCard(e.target.dataset.rmvbtn)
    }
})

// 
document.addEventListener("change", function(e) {
    if (e.target.dataset.level) {
        render()
    } else if (e.target.dataset.mookinput) {
        handleMookNumber(e.target.dataset.mookinput)
    }
})

// ========================
//    GENERAL FUNCTIONS
// ======================== 

function handleDamageClick(cardIndex) {
    const damage = document.getElementById(`dmg${cardIndex}`).value

    selectedMonsters[cardIndex].health = selectedMonsters[cardIndex].health - damage

    if (selectedMonsters[cardIndex].health <= selectedMonsters[cardIndex].hp / 2) {
        selectedMonsters[cardIndex].isStaggered = true
    } else {
        selectedMonsters[cardIndex].isStaggered = false
    }

    if (selectedMonsters[cardIndex].type === "mook") {
        selectedMonsters[cardIndex].mookNumber = Math.ceil(selectedMonsters[cardIndex].health / selectedMonsters[cardIndex].hp)

        document.getElementById(`mookstatus${cardIndex}`).innerHTML = `
        Number of Mooks: ${selectedMonsters[cardIndex].mookNumber}`
    }
    render()
}

function checkStaggeredClass(cardIndex) {
    if (selectedMonsters[cardIndex].isStaggered) {
        return "staggered"
    } else {
        return ""
    }
}

function filterMonsterData() {
    const selectedLevels = checkMonsterLevels()
    return monsterData.filter(monster => {
        return selectedLevels.includes(monster.level.toString())
    }).sort((a, b) => (a.name > b.name) ? 1 : -1)
}

function checkMonsterLevels() {
    const levelCheckboxes = document.querySelectorAll(".level-check")
    let selectedLevels = []
    levelCheckboxes.forEach(checkBox => {
        if (checkBox.checked) {
            selectedLevels.push(checkBox.dataset.level)
        }
    })
    return selectedLevels
}

// Needs to be refactored?
function handleMookNumber(cardIndex) {
    const input = document.getElementById(`mooks${cardIndex}`)

    selectedMonsters[cardIndex].mookNumber = input.value

    selectedMonsters[cardIndex].health = selectedMonsters[cardIndex].health * selectedMonsters[cardIndex].mookNumber

    document.getElementById(`mookstatus${cardIndex}`).innerHTML = `
    Number of Mooks: ${selectedMonsters[cardIndex].mookNumber}
    `
    render()
}

function removeMonsterCard(cardIndex) {
    selectedMonsters.splice(cardIndex, 1)
    render()
}

// ========================
//     HTML FUNCTIONS
// ========================


function getMonsterDropdownHtml () {
    const dropdownDefault = `<option value="">Please Select a Monster</option>`
    const filteredMonsters = filterMonsterData()
    const filteredMonstersHtml = filteredMonsters.map(monster => `<option value="${monster.name}">${monster.name}, Level ${monster.level} ${monster.type}</option>`)

    document.getElementById('monsters-dropdown').innerHTML = [dropdownDefault, ...filteredMonstersHtml].join("")
}


function getMonsterCardHtml () {
    const monsterCardHtml = selectedMonsters.map((monster, index) => {
        return `
        <div class="monster-card" id="monster-card${index}">
            <div class="card-header card-sctn">
                <h3>${monster.name}</h3>
                <button class="icon-btn rmvbtn" id="rmv${index}-btn" data-rmvbtn=${index}><i class="fa-regular fa-circle-xmark fa-xl" data-rmvbtn=${index}></i></button>
            </div>
            <div class="card-subheader card-sctn card-sctn-light">
                <p>Level ${monster.level} ${monster.type}</p>
                <p>Initiative: ${monster.initiative}</p>
            </div>
            <div class="defense-block card-sctn card-sctn-dark">
                <ul class="defense-list">
                    <li>AC: ${monster.ac}</li>
                    <li>PD: ${monster.pd}</li>
                    <li>MD: ${monster.md}</li>
                </ul>
                <div class="health-container">
                    <p>Total HP: ${monster.hp}</p>
                    <p><span id="accent${index}" class=${checkStaggeredClass(index)}>Current HP: ${monster.health}</span></p>
                </div>
            </div>
            <div class="damage-block card-sctn card-sctn-light">
                <div class="dmg-input-container">
                    <label for="dmg${index}">Damage</label>
                    <input type="number" step="1" id="dmg${index}" 
                    name="dmg${index}" class="dmg-input" data-dmginput="${index}">
                </div>
                <div class="dmg-btn-container">
                    <button id="dmg${index}-btn" class="text-btn dmg-btn" data-dmgbtn="${index}">Deal Damage</button>
                </div>
            </div>
            <div class="attack-block card-sctn card-sctn-dark">
                <p>Attacks:</p>
                <ul class="attack-list"><li>${monster.attacks.join("</li><li>")}</li></ul>
            </div>
            <div class="ability-block card-sctn card-sctn-light">
                <p>Abilities:</p>
                <ul class="ability-list"><li>${monster.abilities.join("</li><li>")}</li></ul>
            </div>

            ${monster.type === "mook" ? 
            `<div class="mook-container card-sctn card-sctn-dark">
                <label for="mooks${index}">Enter number of mooks</label>
                <input type="number" step="1" class="mooks-input" id="mooks${index}" name="mooks${index}" data-mookinput="${index}">
                <p id="mookstatus${index}">Number of Mooks: ${monster.mookNumber}</p>
            </div>` 
            : ""}
        </div>
        `
    }).join("")

    document.getElementById('statblock-container').innerHTML = monsterCardHtml
}

// =====================
//       RENDER
// =====================

function render () {
    getMonsterDropdownHtml()
    getMonsterCardHtml()
}

render()