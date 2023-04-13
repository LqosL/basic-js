const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];
  if (!Array.isArray(members)) {
    return false
  } else {
    members.forEach((element)=>{
      if (typeof element == "string"){
        teamName.push(element.trim()[0].toUpperCase())
      }
    })
  }
  return teamName.sort().join("")
}

module.exports = {
  createDreamTeam
};
