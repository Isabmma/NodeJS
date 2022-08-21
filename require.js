// native modules
const path = require('path')

console.log(path.basename(__filename))

// my modules
const myModule = require('./exports')

console.log(myModule)