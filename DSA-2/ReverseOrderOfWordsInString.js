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
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c == " ") {
      if (word.length > 0) {
        stack.push(word);
        word = "";
      }
    } else {
      word += c;
    }
  }

  if (word.length > 0) {
    stack.push(word);
  }

  // console.log(stack)
  while (stack.length) {
    if (ans.length == 0) {
      ans += stack.pop();
    } else {
      ans += " " + stack.pop();
    }
  }

  return ans;
}

let str = "hello world"
console.log("Reversed order string of 'hello world' is : " + reverseWordsInAString(str))