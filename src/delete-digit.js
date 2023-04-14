const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let variants = [];
  let check = n.toString().split("")
  for(let i=0; i< check.length; i++){
    let variant = check.slice(0,i).concat(check.slice(i+1))
    variants.push(variant.join(""))
  }
  variants.sort((a,b) => b-a)
  return parseInt(variants[0])
}

module.exports = {
  deleteDigit
};
