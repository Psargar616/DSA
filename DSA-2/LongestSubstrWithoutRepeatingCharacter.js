/**
 * Problem Description
Given a string, find the length of the longest substring which has no repeating characters.

Input format
Input is a string.

Output format
Output is an integer representing the longest substring with no repeating characters.

Sample Input 1
aabcccbcb

Sample Output 1
3

Explanation 1
"abc" is the longest substring with no repeating characters.

Sample Input 2
cdddddd

Sample Output 2
2

Explanation 2
"cd" is the longest substring with no repeating characters.
 */

var lengthOfLongestSubstring = function (s) {
  let set = new Set();

  let st = 0,
    e = 0;
  let maxLen = 0;

  while (e < s.length) {
    let c = s.charAt(e);

    if (set.has(c)) {
      let c = s.charAt(st);
      set.delete(c);
      st++;
      // e = st
    } else {
      set.add(c);
      maxLen = Math.max(maxLen, set.size);
      e++;
    }
  }

  return maxLen;
};


// SOLUTION2 
/**
 * Window Sliding Technique is a computational technique which aims to reduce the use of nested loop and replace it with a single loop, thereby reducing the time complexity.
The Sliding window technique can reduce the time complexity to O(n).

Below are some basic tips for identifying this kind of problem where we could use the sliding window technique:

The problem will be based on an array, string, or list data structure.
You need to find the subrange in this array or string that should provide the longest, shortest, or target values.
A classic problem: to find the largest/smallest sum of given k (for example, three) consecutive numbers in an array.
The length can be fixed, as in the example above, or it can be dynamic, just like in this problem.

So to solve this problem, we can use the hash table and iterate over our term. Let's do two checks on 0 and 1 so as not to waste extra time. Now we can start, in the picture above you can see our window (blue rectangle) and its movement during the scan. We gradually add our letters to the hash table, and if it already contains this letter, we delete the letter corresponding to the leftmost index, do this until we get to the desired one and delete the repetition. Only after that we add our new element.
The maximum length is found by comparing our current length with the new one, using Math.max.

In the picture you can see all the movement of the window and the state of our hash table.
 */

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}