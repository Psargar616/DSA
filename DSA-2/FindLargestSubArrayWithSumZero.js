/**
 * Problem Description
Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

If there is no such sub-array print -1.

Input format
There are 2 lines of input.

First line contains an integer N.

Next line consists of N integers, the values of the array.

Output format
Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

Sample Input 1
6

2 3 1 -4 0 6

Sample Output 1
3 1 -4 0

Explanation
The largest subarray with sum zero is (3, 1, -4, 0)
 */

// Approach => using prefix sum and hashmap
function largestSubarraySumZero(n, arr) {
  // use map to store prefix sums corresponding to indexes
  let map = new Map();
  map.set(0, -1);
  let maxSize = 0,
    stIdx = -1;
  // initialize prefixSum = 0
  let sum = 0;
  // iterate through array
  for (let i = 0; i < n; i++) {
    // calculate prefix sum at index i
    sum = sum + arr[i];
    // if map already has sum as key => we have found a subarry with sum 0
    if (map.has(sum)) {
      // find size of subarray = i - oldIndex
      let size = i - map.get(sum);

      // check if size > maxsize
      if (size > maxSize) {
        maxSize = size;
        // update startIndex = oldIndex + 1
        stIdx = map.get(sum) + 1;
      }
    } else {
      map.set(sum, i);
    }
  }
  // console.log(map)
  let ans = [];
  for (let i = stIdx; i <= stIdx + maxSize - 1; i++) {
    ans.push(arr[i]);
  }
  // if there is no subarray
  if (ans.length === 0) {
    ans.push(-1);
  }

  return ans;
}

let arr = [2, 3, 1, -4, 0, 6];
let n = arr.length;

console.log(
  "The largest subarray with sum 0 in array [2 ,3, 1 ,-4 ,0 ,6] is :  " +
    `[${largestSubarraySumZero(n, arr)}]`
);
