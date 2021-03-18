const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
        this.direction = bool;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
    }
  encrypt(word, code) {
    let lowWord = word.toLowerCase()
    let lowCode = code.toLowerCase()
    let nWord =""
    let add = 0
    for (let i=0; i<word.length; i++) {
        if (!this.alphabet.includes(lowWord[i])) {
            nWord+=lowWord[i]
            add += 1
        }

        else {
            let a =this.alphabet.indexOf(lowWord[i])
            let b = this.alphabet.indexOf(lowCode[(i-add)%(lowCode.length)])
            nWord += this.alphabet[(a+b)%26]
        } 
    }
    if (this.direction === true || this.direction === undefined) {
        return nWord.toUpperCase()
    } else if (this.direction === false) {
        return nWord.toUpperCase().split("").reverse().join("")
        }
    }
      
  decrypt(word, code) {
    let lowWord = word.toLowerCase()
    let lowCode = code.toLowerCase()
    let nWord =""
    let add = 0
    for (let i=0; i<word.length; i++) {
        if (!this.alphabet.includes(lowWord[i])) {
            nWord+=lowWord[i]
            add += 1
        }

        else {
            let a =this.alphabet.indexOf(lowWord[i])
            let b = this.alphabet.indexOf(lowCode[(i-add)%(lowCode.length)])
            nWord += this.alphabet[(26 + (a-b))%26]
        } 
    }
    if (this.direction === true || this.direction === undefined) {
        return nWord.toUpperCase()
    } else if (this.direction === false) {
        return nWord.toUpperCase().split("").reverse().join("")
        }
    }
}

module.exports = VigenereCipheringMachine;
