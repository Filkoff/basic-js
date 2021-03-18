const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Arr ia not an array!")
        
    }

  let newArr = []

  for (let i=0; i<arr.length; i++) {
    if (arr[i]==='--discard-prev') {
        newArr.pop()
    }
   else if (arr[i]==='--double-prev') {
       if (newArr[newArr.length-1] !=undefined) {
        newArr.push(newArr[newArr.length-1])
    }}
    else if (arr[i]==='--double-next') {
        if (arr[i+1] !=undefined) {
        newArr.push(arr[i+1])
    }}
    else if (arr[i]==='--discard-next' && (arr[i+2]==='--double-prev' || arr[i+2]==='--discard-prev')) {
        i+=2
    }
    else if (arr[i]==='--discard-next') {
        i++
    }
    else {newArr.push(arr[i])}
  }
  
  return newArr
  
};
