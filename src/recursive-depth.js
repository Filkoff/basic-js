const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  constructor() { 
    
    }

    calculateDepth(arr) {
      if (Array.isArray(arr)) {
      return Math.max(0, ...arr.map((i)=>this.calculateDepth(i)))+1
      } else {
        return 0
      }
}};




