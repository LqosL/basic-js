const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let counter = -1;
    let str1 = JSON.stringify(arr);
    let arr1 = [...str1];
    let arr2 = arr1.filter(i =>(i=="[", i=="]"))
    let str2 =arr2.join("")
    for (str2;  str2.length >0; counter++){
      str2 = str2.replace(/\[\]/g, "")
    };

    return counter
  }
}

module.exports = {
  DepthCalculator
};
