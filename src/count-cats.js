const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0
    matrix.forEach(i => {
        i.forEach(k=> {
            if (k==="^^") {
                cats++
            }
        }) 
    });
    return cats
};
