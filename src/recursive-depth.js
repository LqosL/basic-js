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

    // if (!Array.isArray(arr)) {
    //   return 0
    // }
    //
    // let counter = 0;
    // let current = [];
    // let next = [arr];
    //
    // while (next.length > 0) {
    //   current = next;
    //   next = [];
    //   counter++;
    //
    //   while (current.length > 0) {
    //     const first = current.shift()
    //
    //     first.forEach(element => {
    //       if (Array.isArray(element)) {
    //         next.push(element)
    //       }
    //     })
    //   }
    // }

    if (Array.isArray(arr)) {
      let resultCounter = 1

      arr.forEach(element => {
        const elementCounter = 1 + this.calculateDepth(element)
        resultCounter = Math.max(elementCounter, resultCounter)
      })

      return resultCounter
    } else {
      return 0
    }
  }
}

module.exports = {
  DepthCalculator
};
