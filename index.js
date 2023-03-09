import monsterData from '/data.js'

// ========================
//     GLOBAL VARIABLES
// ========================

let selectedMonsters = []

// =======================
//    EVENT LISTENERS
// =======================

document.getElementById('select-monsters-btn').addEventListener("click", function() {
    document.getElementById('selection-modal').style.display = "block"
})

document.getElementById('close-modal-btn').addEventListener("click", function(){
    document.getElementById('selection-modal').style.display = "none"
})

document.getElementById('clear-monsters-btn').addEventListener("click", function(){
    selectedMonsters = []
    render()
})

document.getElementById('monsters-dropdown').addEventListener('change', function(e) {
    const targetMonsterObj = JSON.parse(JSON.stringify([monsterData.filter(function(monster){
        return monster.name === e.target.value
    })[0]]))

    selectedMonsters = [...selectedMonsters, ...targetMonsterObj]
    render()
})

document.addEventListener("click", function(e) {
    if (e.target.dataset.dmgbtn) {
        handleDamageClick(e.target.dataset.dmgbtn)
    }
})

document.addEventListener("change", function(e) {
    if (e.target.dataset.level) {
        render()
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
    let filteredMonsterData = []
    let selectedLevels = checkMonsterLevels()
    monsterData.forEach(function(monster) {
        if (selectedLevels.includes(monster.level.toString())) {
            filteredMonsterData.push(monster)
        }
    })

    return filteredMonsterData.sort((a, b) => (a.name > b.name) ? 1 : -1)
}

function checkMonsterLevels() {
    let levelCheckboxes = document.querySelectorAll(".level-check")
    let selectedLevels = []
    levelCheckboxes.forEach(function(box) {
        if (box.checked) {
            selectedLevels.push(box.dataset.level)
        }
    })
    return selectedLevels
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

// add if statement for mooks
// set mook number button should pull up a modal with an input, input will update SelectedMonsters[index].mookNumber and multiply health * mookNumber
// "Number of Mooks" will be on card, update handleDamageClick to update "Number of Mooks Left" each time current HP drops below damage threshold per mook.
// Math.ceil(health/hp)

function getMonsterCardHtml () {
    let monsterCardHtml = ``

    for (let i = 0; i < selectedMonsters.length; i++) {
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