/**
 * 338. Counting Bits
 * 
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105
 */

/**
 * Intuition
To count the number of 1's in the binary representation of each number from 0 to n, we can use a simple approach: for each number i, we can repeatedly right-shift it by one bit and check if the least significant bit is 1 (i.e., if n & 1 is 1). If it is, we increment a count variable. We continue this process until i becomes zero. This count represents the number of 1's in the binary representation of i.

Approach
    1. Initialize an empty array result to store the counts of 1's for each number from 0 to n.
    2. Define a helper function countBits that takes an integer n as input and returns the count of 1's in its binary representation using the right-shift operation.
    3. Initialize a count variable to 0.
    4. Use a while loop to check if n is greater than 0:
    5. Check if the least significant bit of n is 1 using the condition if (n & 1).
    6. If it is, increment the count variable.
    7. Right-shift n by one bit to the right (n >>= 1).
    8. Return the count.

    9. Iterate from 0 to n (inclusive) using a for loop:
    10. For each value of i, call the countBits function to calculate the number of 1's in the binary representation of i.
    11. Push the result of countBits(i) into the result array.
    Return the result array containing the counts of 1's for each number from 0 to n.
    Complexity

    Time complexity: O(n), as we iterate through all numbers from 0 to n once.
    Space complexity: O(n), as we store the results in the result array of length n+1.
 */

var countBits = function (n) {
  let result = [];

  function countBits(n) {
    let count = 0;

    while (n > 0) {
      if (n & 1) {
        count++;
      }
      n >>= 1;
    }

    return count;
  }

  for (let i = 0; i <= n; i++) {
    result.push(countBits(i));
  }

  return result;
};

// Approach 2 :
// https://www.youtube.com/watch?v=uAcxY2w-oGI
var countBits = function (n) {
  let res = [0];
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      res.push(res[Math.floor(i / 2)]);
    } else {
      res.push(res[Math.floor(i / 2)] + 1);
    }
  }
  return res;
};

// Approach 3 = using dp

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let dp = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};
