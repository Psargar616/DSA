/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/



function rot13(str) {
    var result = ""
    for(let i = 0 ; i < str.length ; i++){
      var asciiNum = str[i].charCodeAt()
      if(asciiNum >= 65 && asciiNum <= 77){
        result += String.fromCharCode(asciiNum + 13)
      }else if(asciiNum >= 78 && asciiNum <= 90){
           result += String.fromCharCode(asciiNum - 13)
      }else{
        result += str[i]
      }
  
    }
   console.log(str + " : " + result)
    return result;
  }
  
  rot13("SERR PBQR PNZC");