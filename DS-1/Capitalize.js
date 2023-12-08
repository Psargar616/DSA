/*
Problem Description
Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.

Note : No inbuilt function such as split() to be used.

Input format
One line of input which contains a string, the paragraph.

Output format
Return the paragraph after capitalising each word.

Sample Input 1
the quick Brown fox jumps over The lazy dog.

Sample Output 1
The Quick Brown Fox Jumps Over The Lazy Dog.

Constraints
Length of paragraph < 100

The paragraph contains spaces, lowercase, uppercase characters and ‘.’.
*/

function toUpparCase(c) {
  const ascii = c.charCodeAt(0);
  return String.fromCharCode(ascii - 32);
}

// TODO: Implement this method
function Capitalise(paragraph) {
  let n = paragraph.length;
  let arr = Array.from(paragraph);
  //  console.log(arr)
  for (let i = 0; i < n; i++) {
    // check for first letter or space or period
    if (i == 0 || arr[i - 1] == " " || arr[i - 1] == ".") {
         // check if letter is a lowercase letter
      if (arr[i] >= "a" && arr[i] <= "z") {
        // capitalize using another function
        arr[i] = toUpparCase(arr[i]);
        // direct approach
        // arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
      }
    }
  }
  //  console.log(arr)

  return arr.join("");
}

let ans = Capitalise("The quick brown fox jumps over the lazy dog.")
console.log(ans)