/**
 * Problem Description
Given a string, find the length of the longest substring that contains at most K distinct characters.

Note:

Uppercase and Lowercase characters should be considered as different characters.

There can be numbers and special characters as well.

Input format
There are 2 lines of input.

First-line contains two space-separated integers representing the value of N and K.

The next line contains the string S of length N.

Output format
The length of the longest substring T that contains at most K distinct characters.

Constraints
1 <= N <= 10^5

0 <= K <= 256

Sample Input 1
5 3

abacd

Sample Output 1
4

Explanation 1
The longest substring that has 3 distinct characters, "abac", is of length 4.

Sample Input 2
6 3

Xyyzya

Sample Output 2
5

Explanation
There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.
 */

// Approach => using sliding window and hashmap
// TC = O(n)
// SC = O(k)
function lengthOfLongestSubstringKDistinct(s, k) {
  // define map to store character and its count
  let map = new Map();
  //   initialize start and end pointers and maxLength
  let start = 0,
    end = 0,
    maxLen = 0;
  // iterate end pointers until end of string
  while (end < s.length) {
    // map.size <= k means map has less than or equal to k distinct character
    if (map.size <= k) {
      let c = s.charAt(end);
      //  if c is new add it to map, given its size is less than k
      map.set(c, (map.get(c) || 0) + 1);
      //   update end pointer(sliding window length) until we reach k distinct characters
      end++;
    } else {
      // if map.size > k => then remove count of start index pointer character
      let c = s.charAt(start);
      map.set(c, map.get(c) - 1);
      // if count becomes 0 , then delete char from map
      if (map.get(c) === 0) {
        map.delete(c);
      }
      //   update start pointer
      start++;
    }

    // update maxlength based on start and end pointers
    if (map.size <= k) {
      maxLen = Math.max(maxLen, end - start);
    }
  }
  return maxLen;
}

let s = "Xyyzya";
let k = 3;

console.log(
  "the length of the longest substring that contains at most K distinct characters in string 'Xyyzya' is " +
    lengthOfLongestSubstringKDistinct(s, k)
);
