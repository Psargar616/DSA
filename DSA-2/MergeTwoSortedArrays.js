/**
 * Problem Description
Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

Input format
A single Integer M, that contains the number of elements in the first array.

A single Integer N, that contains the number of elements in the second array.

Next Line contains M space Integers of the array nums1.

Next Line contains N space Integers of the array nums2.

Output format
Print the array after merging.

Sample Input 1
3

3

1 2 3

2 5 6

Sample Output 1
1 2 2 3 5 6
 */

// using 2 pointer approach
// TC = O(n+m)
// SC = O(n+m)
function mergeSortedArray(m, nums1, n, nums2) {

  let p1 = 0,
    p2 = 0;
  let res = [];
//   add p1 and p2 at beginning og both arrays and compare its value. add smaller val to result array and incrase respective pointer 
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      res.push(nums1[p1]);
      p1++;
    } else {
      res.push(nums2[p2]);
      p2++;
    }
  }
//  adding remaining elements if elements are remaining in 1st array
  while (p1 < m) {
    res.push(nums1[p1]);
    p1++;
  }
//  adding remaining elements if elements are remaining in 2nd array
  while (p2 < n) {
    res.push(nums2[p2]);
    p2++;
  }

  return res;
}

let arr1 = [1,2,3]
let arr2 = [2,4,6]

console.log("mearged array of [1,2,3] and [2,4,6] is " + `[${mergeSortedArray(3,arr1,3,arr2)}]`)