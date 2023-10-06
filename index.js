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

function handleDamageClick(monsterCardId) {
    const index = monsterCardId
    const damage = document.getElementById(`dmg${index}`).value

    selectedMonsters[index].health = selectedMonsters[index].health - damage

    if (selectedMonsters[index].health <= selectedMonsters[index].hp / 2) {
        selectedMonsters[index].isStaggered = true
    } else {
        selectedMonsters[index].isStaggered = false
    }

    if (selectedMonsters[index].type === "mook") {
        selectedMonsters[index].mookNumber = Math.ceil(selectedMonsters[index].health / selectedMonsters[index].hp)

        document.getElementById(`mookstatus${index}`).innerHTML = `
        Number of Mooks: ${selectedMonsters[index].mookNumber}`
    }

    render()
}

function checkStaggeredClass(index) {
    if (selectedMonsters[index].isStaggered) {
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

function handleMookNumber(monsterCardId) {
    const index = monsterCardId
    const input = document.getElementById(`mooks${index}`)

    selectedMonsters[index].mookNumber = input.value

    selectedMonsters[index].health = selectedMonsters[index].health * selectedMonsters[index].mookNumber

    document.getElementById(`mookstatus${index}`).innerHTML = `
    Number of Mooks: ${selectedMonsters[index].mookNumber}
    `
    render()
}

// ========================
//     HTML FUNCTIONS
// ========================


function getMonsterDropdownHtml () {
    let monsterDropdownHtml = `
    <option value="">Please Select a Monster</option>
    `

    const filteredMonsterData = filterMonsterData()

    filteredMonsterData.forEach(function(monster) {
        monsterDropdownHtml += `
        <option value="${monster.name}">${monster.name}, Level ${monster.level} ${monster.type}</option>
        `
    })

    document.getElementById('monsters-dropdown').innerHTML = monsterDropdownHtml
}

function getMonsterCardHtml () {
    let monsterCardHtml = ``

    for (let i = 0; i < selectedMonsters.length; i++) {

        if (selectedMonsters[i].type === "mook") {
            monsterCardHtml += `
            <div class="monster-card" id="monster-card${i}">
                <div class="card-header card-sctn">
                    <h3>${selectedMonsters[i].name}</h3>
                </div>
                <div class="card-subheader card-sctn card-sctn-light">
                    <p>Level ${selectedMonsters[i].level} ${selectedMonsters[i].type}</p>
                    <p>Initiative: ${selectedMonsters[i].initiative}</p>
                    <div class="mook-container">
                        <label for="mooks${i}">Enter number of mooks</label>
                        <input type="number" step="1" class="mooks-input" id="mooks${i}" name="mooks${i}" data-mookinput="${i}">
                        <p id="mookstatus${i}">Number of Mooks: ${selectedMonsters[i].mookNumber}</p>
                    </div>
                </div>
                <div class="defense-block card-sctn card-sctn-dark">
                    <ul class="defense-list">
                        <li>AC: ${selectedMonsters[i].ac}</li>
                        <li>PD: ${selectedMonsters[i].pd}</li>
                        <li>MD: ${selectedMonsters[i].md}</li>
                    </ul>
                    <div class="health-container">
                        <p>Total HP: ${selectedMonsters[i].hp}</p>
                        <p><span id="accent${i}" class=${checkStaggeredClass(i)}>Current HP: ${selectedMonsters[i].health}</span></p>
                    </div>
                </div>
                <div class="damage-block card-sctn card-sctn-light">
                    <div class="dmg-input-container">
                        <label for="dmg${i}">Damage</label>
                        <input type="number" step="1" id="dmg${i}" 
                        name="dmg${i}" class="dmg-input" data-dmginput="${i}">
                    </div>
                    <div class="dmg-btn-container">
                        <button id="dmg${i}-btn" class="btn dmg-btn" data-dmgbtn="${i}">Deal Damage</button>
                    </div>
                </div>
                <div class="attack-block card-sctn card-sctn-dark">
                    <p>Attacks:</p>
                    <ul class="attack-list"><li>${selectedMonsters[i].attacks.join("</li><li>")}</li></ul>
                </div>
                <div class="ability-block card-sctn card-sctn-light">
                    <p>Abilities:</p>
                    <ul class="ability-list"><li>${selectedMonsters[i].abilities.join("</li><li>")}</li></ul>
                </div>
            </div>
            `
        } else {
            monsterCardHtml += `
            <div class="monster-card" id="monster-card${i}">
                <div class="card-header card-sctn">
                    <h3>${selectedMonsters[i].name}</h3>
                </div>
                <div class="card-subheader card-sctn card-sctn-light">
                    <p>Level ${selectedMonsters[i].level} ${selectedMonsters[i].type}</p>
                    <p>Initiative: ${selectedMonsters[i].initiative}</p>
                </div>
                <div class="defense-block card-sctn card-sctn-dark">
                    <ul class="defense-list">
                        <li>AC: ${selectedMonsters[i].ac}</li>
                        <li>PD: ${selectedMonsters[i].pd}</li>
                        <li>MD: ${selectedMonsters[i].md}</li>
                    </ul>
                    <div class="health-container">
                        <p>Total HP: ${selectedMonsters[i].hp}</p>
                        <p><span id="accent${i}" class=${checkStaggeredClass(i)}>Current HP: ${selectedMonsters[i].health}</span></p>
                    </div>
                </div>
                <div class="damage-block card-sctn card-sctn-light">
                    <div class="dmg-input-container">
                        <label for="dmg${i}">Damage</label>
                        <input type="number" step="1" id="dmg${i}" 
                        name="dmg${i}" class="dmg-input" data-dmginput="${i}">
                    </div>
                    <div class="dmg-btn-container">
                        <button id="dmg${i}-btn" class="btn dmg-btn" data-dmgbtn="${i}">Deal Damage</button>
                    </div>
                </div>
                <div class="attack-block card-sctn card-sctn-dark">
                    <p>Attacks:</p>
                    <ul class="attack-list"><li>${selectedMonsters[i].attacks.join("</li><li>")}</li></ul>
                </div>
                <div class="ability-block card-sctn card-sctn-light">
                    <p>Abilities:</p>
                    <ul class="ability-list"><li>${selectedMonsters[i].abilities.join("</li><li>")}</li></ul>
                </div>
            </div>
            `
        }
    }

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