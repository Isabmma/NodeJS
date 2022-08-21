function getFlagValue(flag){
  // getting the position of the flag string
  const index = process.argv.indexOf(flag) + 1
  return process.argv[index]
}

module.exports = getFlagValue;