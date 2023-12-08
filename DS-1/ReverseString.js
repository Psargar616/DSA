/*
Problem Description
Write a function that reverses a string.

Input format
First line will be a single string

Output format
Print the reverse of the string in a single line.

Sample Input 1
abc

Sample Output 1
cba

Explanation
Reverse of string abc is cba

Sample Input 2
aaa

Sample Output 2
aaa


*/

function reverseString(s) {
  let stack = [];
  for (let ch of s) {
    stack.push(ch);
  }
  let ans = "";

  while (stack.length > 0) {
    let ch = stack.pop();
    ans += ch;
  }

  return ans;
}

console.log("Reverse of 'abc' is " + reverseString('abc'));
