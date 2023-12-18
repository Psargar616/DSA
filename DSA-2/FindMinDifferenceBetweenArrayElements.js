/**
 * Problem Description
Find the minimum difference possible between any two elements in the given array.

Input format
There are 2 lines of input.

First line will contain a single integer n representing the size of the array.

Second line will contain n space separated integers representing the array.

Output format
Output the answer in single line.

Sample Input 1
3

1 2 4

Sample Output 1
1

Explanation 1
2 - 1 = 1 minimum difference
 */

// link : https://www.geeksforgeeks.org/find-minimum-difference-pair/

// Follow the given steps to solve the problem:
// 1. Sort array in ascending order
// 2. Initialize difference as infinite
// 3. Compare all adjacent pairs in a sorted array and keep track of the minimum difference

// Time Complexity: O(N log N)
// Auxiliary Space: O(1)
function findMinDiff(arr, n) {
  // Sort array in
  // non-decreasing order
  arr.sort(function (a, b) {
    return a - b;
  });

  // Initialize difference
  // as infinite
  let diff = Number.MAX_VALUE;

  // Find the min diff by
  // comparing adjacent pairs
  // in sorted array
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] < diff) {
      diff = arr[i + 1] - arr[i];
    }
  }
  // Return min diff
  return diff;
}

let arr = [1, 19, -4, 31, 38, 25, 100];
console.log("Minimum difference is " + findMinDiff(arr, arr.length));
