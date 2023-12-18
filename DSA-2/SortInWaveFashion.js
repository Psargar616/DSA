/**
 * Problem Description
Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Input format
There are 2 lines of input.

First line contains an integer N ,the number of input integers in the array.

Second line contains N space separated integers.

Output format
N space separated elements which satisfy the given condition.

Sample Input 1
6

1 5 1 1 6 4

Sample Output 1
1 4 1 5 1 6

Explanation 1
nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].
 */

// Approach 1 => sort array and swap odd indexes with their next indexs
// Time Complexity: O(N*log(N))
// Auxiliary Space: O(1)
function swap(arr, x, y) {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// This function sorts arr[0..n-1] in
// wave form, i.e.,
// arr[0] >= arr[1] <= arr[2] >=
// arr[3] <= arr[4] >= arr[5]..
function sortInWave(arr, n) {
  // Sort the input array
  arr.sort((a, b) => a - b);

  // Swap adjacent elements
  for (let i = 0; i < n - 1; i += 2) swap(arr, i, i + 1);
  return arr;
}

let arr = [1, 5, 1, 1, 6, 4];
let n = arr.length;

console.log(
  "Array [1, 5, 1, 1, 6, 4] sorted in wiggle/wave fashion " + sortInWave(arr, n)
);

// Approach 2 =>
// The idea is based on the fact that if we make sure that all even positioned (at index 0, 2, 4, ..) elements are greater than their adjacent odd elements, we don’t need to worry about oddly positioned elements.

// Time Complexity: O(N)
// Auxiliary Space: O(1)
function sortInWave2(arr, n) {
  // Traverse all even elements
  for (let i = 0; i < n; i += 2) {
    // If current even element
    // is smaller than previous
    if (i > 0 && arr[i - 1] > arr[i]) {
      swap(arr, i - 1, i);
    }

    // If current even element
    // is smaller than next
    if (i < n - 1 && arr[i] < arr[i + 1]) {
      swap(arr, i, i + 1);
    }
    return arr;
  }
}

console.log(
    "Array [1, 5, 1, 1, 6, 4] sorted in wiggle/wave fashion optimized " + sortInWave2(arr, n)
  );