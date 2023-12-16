/**
 * Problem Description
Given two strings s and t, write a function to determine if t is an anagram of s.

Note: You may assume the string contains only lowercase alphabets.

Note:-
There's a test case where both the strings are empty but the js compiler is treating one as empty and other as undefined. So, update the readline function accordingly.

Input format
You will be given two strings in two separate lines.

Output format
Print "true" if both the strings are anagram otherwise “false”.

Constraints
Length of string <= 100000

Sample Input 1
anagram

nagaram

Sample Output 1
true

Sample Input 2
rat

car

Sample Output 2
false
 */

function validAnagram(s, t) {
  // if s is empty and t is undefined return true
  if (s == "" && t == undefined) return true;
  // if s is undefined and t is undefined return false
  if (s == undefined || t == undefined) return false;
  
  let n = s.length;
  let m = t.length;
  // compare length of strings
  if (n !== m) {
    return false;
  }
  // use split() sort() and join() to check if strings are anagrams of each other
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  // if(str1 === str2) also works
  for (let i = 0; i < n; i++) {
    if (str1[i] != str2[i]) {
      return false;
    }
  }

  return true;
}


console.log("Are 'anagram' and 'nagaram' anagrams of each other : " + validAnagram("nagaram", "anagram" ))
console.log("Are 'cat' and 'rat' anagrams of each other : " + validAnagram("cat", "rat" ))