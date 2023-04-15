const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true){
    this.isDirect = isDirect != false
  }

  encrypt(message, key){
    if(!message || !key){
      throw new Error("Incorrect arguments!")
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result=[];
    let toCipher=[];

    let messageArr = message.toUpperCase().split("")
    messageArr.forEach((element) => {
      if(element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90){
        toCipher.push(element)
      }
    })

    let keyString= "".padEnd(toCipher.length, key.toUpperCase());
    for (let i = 0; i < toCipher.length; i++){
      if(toCipher[i].charCodeAt(0) >= 65 && toCipher[i].charCodeAt(0) <= 90){
        result.push(alphabet.charAt(((alphabet.indexOf(toCipher[i])) + alphabet.indexOf(keyString.charAt(i))) % 26))
      }else{
        result.push(toCipher[i])
      }
    }

    for (let i = 0; i <= message.length; i++){
      if (message.toUpperCase().charCodeAt(i) < 65 || message.toUpperCase().charCodeAt(i) > 90){
        if (i < result.length){
          result.splice(i, 0, message.charAt(i))
        }else{
          result.push(message.charAt(i))
        }
      }
    }

    if(this.isDirect === true){
      return result.join("")
    }else{
      return result.reverse().join("")
    }
  }

  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key){
      throw new Error("Incorrect arguments!")
    }
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result=[];
    let toCipher=[];

    let encryptedMessageArr = encryptedMessage.split("")
    encryptedMessageArr.forEach((element) => {
      if(element.charCodeAt(0) >= 65 && element.charCodeAt(0) <= 90){
        toCipher.push(element)
      }
    })

    let keyString= "".padEnd(toCipher.length, key.toUpperCase());

    for (let i = 0; i < toCipher.length; i++){
      if(toCipher[i].charCodeAt(0) >= 65 && toCipher[i].charCodeAt(0) <= 90){

        let indexCiphered = alphabet.indexOf(toCipher[i])
        let indexKey = alphabet.indexOf(keyString.charAt(i))

        result.push(alphabet.charAt(Math.abs((26 + indexCiphered - indexKey)% 26)))

      }else{
        result.push(toCipher[i])
      }
    }
    for (let i = 0; i <= encryptedMessage.length; i++){
      if (encryptedMessage.toUpperCase().charCodeAt(i) < 65 || encryptedMessage.toUpperCase().charCodeAt(i) > 90){
        if (i < result.length){
          console.log()
          result.splice(i, 0, encryptedMessage.charAt(i))
        }else{
          result.push(encryptedMessage.charAt(i))
        }
      }
    }
    
    if (this.isDirect){
      return result.join("")
    }else{
      return result.reverse().join("")
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
