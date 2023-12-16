/**
 * Problem Description
Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

Input format
There are 2 lines of input.

First line contains 1 integer N - Number of elements in the array.

Second line contains space separated N integers.

Output format
Print the smallest missing positive integer.

Sample Input 1
4

3 4 -1 1

Sample Output 1
2

Explanation 1
2 is the smallest positive integer which is missing as 1 is already present in the
 */

// Approach 1 => sort array and find missing element by iterating and checking after we find 1 TC= O(nlogn)
// Approach 2 => use 2 for loops one for all +ve elements and another for iterating and checking element in array TC => O(n^2)
// approach 3 => use set for searching elements with O(1) TC instead of linear search
// TC = O(N) SC=> O(N)
function firstMissingPositive(n, arr) {
  // define set and add just +ve element
  let set = new Set(arr);
  // iterate and check for missing number
  for (let i = 1; i < n + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return n + 1;
}
let arr = [3, 4, -1, 1];
console.log(
  "Missing +ve number in [3, 4 , -1, 1] array is : " +
    firstMissingPositive(4, arr)
);
