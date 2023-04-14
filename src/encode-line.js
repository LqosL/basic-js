const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let counter = 1;

  for(let i = 0; i<str.length; i++){
    if(str.charAt(i) == str.charAt(i+1)){
      counter+=1
    }else{
      if (counter==1){
        result+=str.charAt(i)
      }else{
        result+=counter + str.charAt(i)
      }
      counter=1
    }
  }
  return result
}

module.exports = {
  encodeLine
};
