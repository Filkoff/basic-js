const CustomError = require("../extensions/custom-error");

const chainMaker = {
    
  content: [],
    

  getLength() {
    return this.content.length
  },
  addLink(value = " ") {
    if (String(value) !== " " ) {
            this.content.push(`( ${String(value)} )`)
            return this
    }
    else {
            this.content.push(`( )`)
            return this
        }
        
  },
  removeLink(position) {
      if (position > 0 && position <= this.content.length && Number.isInteger(position)) {
        this.content.splice(position-1, 1)
        return this
        } else {
            this.content.length=0
            throw new Error("invalid position")
            
        }
        
  },
  reverseChain() {
    this.content.reverse()
        return this
  },
  finishChain() {
    let tempArr = [...this.content]

        this.content.length=0
        return tempArr.join('~~')
        
        
  
  }
};

module.exports = chainMaker;
