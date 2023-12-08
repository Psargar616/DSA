/**
 * Problem Description
Rahul works as a secret agent. He wants to send a message to his teammates and at the same time he doesn’t want anyone else to understand his message, except his teammates.

So, he decided to reverse all the words in the message which have an odd length. Print the final message which he will be sending to his teammates.


Input format
Input message string


Output format
Print the string with all odd length words reversed


Sample Input 1
One Two three Four


Sample Output 1
enO owT eerht Four
 */

function secretAgentII(s) {
  let arr = s.split(" ");
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 != 0) {
      arr[i] = arr[i].split("").reverse().join("");
      console.log(arr[i])
    }
  }

  console.log(arr)
  return arr.join(" ");
}

let str = "One Two three Four"
let result = secretAgentII(str)
console.log("Coded string : ", result)