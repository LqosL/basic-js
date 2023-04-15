const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let separator = options.separator ?? "+";
  let additionSeparator = options.additionSeparator ?? "|";
  let additionRepeatTimes = options.additionRepeatTimes ?? 1;
  let repeatTimes = options.repeatTimes ?? 1;

  let addition;
  let additioner = []

  switch(options.addition) {
    case undefined:
      addition = ""
      break
    case null:
      addition = "null"
      break
    default:
      addition = options.addition
  }
  if (typeof addition === "object"){
    addition = String(addition)
  }

  for (let i = 0; i < additionRepeatTimes; i++) {
    additioner.push(addition.toString())
  }
  if (str === null){
    str="null"
  }
  if (typeof str === "object"){
    str = String(str)
  }
  let basicStr = str.toString() + additioner.join(additionSeparator)
  let mainer = [];
  for (let i = 0; i < repeatTimes ; i++) {
    mainer.push(basicStr)
  }
  return mainer.join(separator)
}
module.exports = {
  repeater
};
