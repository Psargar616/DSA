/**
 Problem Description
Given a string, convert lowercase to uppercase without using any inbuilt function.

Input format
First line contains a string.

Output format
Print the required string.

Sample Input 1
hello WOrld

Sample Output 1
HELLO WORLD
 */

function capitaliseEachCharacter() {
  let str = "hello WOrld";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }

    let capitalizedChar = String.fromCharCode(charCode);
    result += capitalizedChar;
  }
  console.log(result);
}

capitaliseEachCharacter()