
// data file split by book to aid future maintainability

import crbMonsterData from '/data-crb.js'
import bestiaryMonsterData from '/data-bestiary.js'
import thirteenTrueWaysMonsterData from '/data-13tw.js'

const monsterData = [ ...crbMonsterData, ...bestiaryMonsterData, ...thirteenTrueWaysMonsterData ]

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