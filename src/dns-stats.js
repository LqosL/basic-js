const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = new Object();
  for (let i = 0; i < domains.length; i++ ){
    let check = domains[i];
    let checkArr = check.split(".").reverse()
    for (let j = 0; j< checkArr.length; j++){
      let variant ="."+ checkArr.slice(0, j+1).join(".")
      if (answer.hasOwnProperty(variant)){
        answer[variant] += 1
      }else{
        answer[variant] = 1
      }
    }
  }
  return answer
}

module.exports = {
  getDNSStats
};
