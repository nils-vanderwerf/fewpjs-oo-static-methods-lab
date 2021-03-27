class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
  
    let nonAlphaNum = ["!", "@", "#", "&", "(", ")", "[", "{", "}", "]", ":", ";", ",", "?", "/", "*", "`", "~", "$", "^", "+", "=",
    "<", ">", '"'];
    let newString = string.split("")
    console.log(newString)
    newString = newString.filter(l => !nonAlphaNum.includes(l))
    return newString.join('')
  }

  

  static titleize (string) {
    
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let result = []

    let splitString = string.split(" ")

    for (let n=0; n < splitString.length; n++) {
      if (n==0) {
        result.push( this.capitalize(splitString[n]) )
      } else if (exceptions.includes(splitString[n])) {
          result.push(splitString[n])
      } else {
          result.push( this.capitalize(splitString[n]) )
      }
    }
    
    return result.join(" ")
  }
}

console.log(Formatter.titleize('in the night kitchen'))

console.log(`No 44: ${Formatter.sanitize('ca$@#tching cold')}`)