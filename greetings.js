const getFlagValue = require('./flags')

console.log(`0i ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)