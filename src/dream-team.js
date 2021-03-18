const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || members.constructor !== Array) {
    return false
  }
  const arr = []
    for (i of members) {
        if (typeof i === "string") {
          arr.push(i.trim()[0].toUpperCase())
        } 
    }
  
  
    return arr.sort().join('')
};
