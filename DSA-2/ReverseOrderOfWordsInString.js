/**
 * Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.

The returned string should only have a single space separating the words.

Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world

Sample Output 1
world hello
 */

// TC = O(N) 
// SC = O(N) stack

function reverseWordsInAString(s) {
  let word = "";
  let stack = [];
  let ans = "";
  // iterate string character by character
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    // when you encounter space there are two possibilities:
    if (c == " ") {
        // a. if word.length > 0 => then you have reached the space after the word, so noe you can add it to stack
      if (word.length > 0) {
        stack.push(word);
        // reinitializing word to empty string
        word = "";
      }
    } else {
      word += c;
    }
  }

  // for the last word as there will be no space to add check to push it in stack
  if (word.length > 0) {
    stack.push(word);
  }

  // console.log(stack)
  while (stack.length) {
    // first word
    if (ans.length == 0) {
      ans += stack.pop();
    } else {
      // add space for rest of words
      ans += " " + stack.pop();
    }
  }

  return ans;
}

let str = "hello world"
console.log("Reversed order string of 'hello world' is : " + reverseWordsInAString(str))