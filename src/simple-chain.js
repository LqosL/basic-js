const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: [],

  copy() {
    const newOne = {}
    Object.assign(newOne, this)
    newOne.result = Array.from(this.result)
    return newOne
  },

  getLength() {
    return this.result.length;
  },

  addLink(value) {
    const newOne = this.copy()
    if (value != null){
      newOne.result.push(value)
    }else{
      newOne.result.push("null")
    }
    return newOne
  },

  removeLink(position) {
    const newOne = this.copy()
    if (position != null && !isNaN(position) && typeof position === "number" && position > 0 && position <= newOne.result.length) {
      newOne.result.splice(position-1, 1)
    } else {
      throw new Error("You can't remove incorrect link!");
    }
    return newOne
  },

  reverseChain() {
    const newOne = this.copy()
    if (newOne.result.length > 1) {
      newOne.result.reverse()
    }
    return newOne
  },

  finishChain() {
    return "( " + this.result.join(" )~~( ") + " )"
  },

};
module.exports = {
  chainMaker
};
