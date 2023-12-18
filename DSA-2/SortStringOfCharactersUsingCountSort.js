/**\
 * Problem Description
A string S is given consisting of lowercase alphabetical characters only. You need to return a sorted string using Count Sort.

Input format
First line will contain a single integer n representing size of the given string.

Second line will contain a single string S of size n.

Output format
Output the string in a single line.

Sample Input 1
10

abcdeedcba

Sample Output 1
aabbccddee
 */

// javascript program to sort a string of characters

let MAX_CHAR = 26;

// function to print string in sorted order
function sortString(str) {
  // Hash array to keep count of characters.
  // Initially count of all characters is
  // initialized to zero.
  let charCount = new Array(MAX_CHAR);
  charCount.fill(0);
  console.log(charCount);
  // Traverse string and increment
  // count of characters
  for (let i = 0; i < str.length; i++) {
    // 'a'-'a' will be 0, 'b'-'a' will be 1,
    // so for location of character in count
    // array we will do str[i]-'a'.
    charCount[str[i].charCodeAt() - "a".charCodeAt()]++;
  }
  console.log(charCount);
  // Traverse the hash array and print
  // characters
  let res = "";
  for (let i = 0; i < MAX_CHAR; i++) {
    for (let j = 0; j < charCount[i]; j++) {
      res += String.fromCharCode("a".charCodeAt() + i);
    }
  }
  return res;
}

let s = "geeksforgeeks";
console.log("sort :" + s);
console.log(sortString(s));

// This code is contributed by vaibhavrabadiya117.
