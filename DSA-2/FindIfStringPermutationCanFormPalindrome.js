/**
 * Problem Description
Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10

1 <= length(S) <= 100000

Sample Input 1
3

nnaamm

hello

Aab

Sample Output 1
True

False

False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome

hello is not a permutation of any palindrome

Aab is not a permutation of any palindrome
 */

//  TC = O(N) SC= O(26+26) = O(1) 
function isPermutationPalidrome(s) {
  let count = 0;
  let map = new Map();
  // find count of every char using map
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    // if char is already present = update its count
    if (map.has(c)) {
      let prevCount = map.get(c);
      map.set(c, prevCount + 1);
    } else {
      // if char is not present = create new entry in map
      map.set(c, 1);
    }
  }
  // console.log(map)
  // find number of chars with odd count
  // for each entry in map
  for (const [currentKey, currentValue] of map) {
    // if count char entry in map  > count
    if (currentValue % 2 != 0) {
      count++;
    }
  }

  // if count > 1 return false
  if (count > 1) {
    return false;
  }
  // if count <= 1 return true
  if (count <= 1) {
    return true;
  }
}

let str = "namman";
let str2 = "hello";
console.log(
  "can permutation of 'namman' can form its palindrome : " +
    isPermutationPalidrome(str)
);
console.log(
  "can permutation of 'hello' can form its palindrome : " +
    isPermutationPalidrome(str2)
);
