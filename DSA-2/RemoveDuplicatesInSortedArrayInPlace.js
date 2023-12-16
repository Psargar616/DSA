/**
 * Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input format
There are two lines of input.

First line contains an integer n - Number of elements.

Second line contains n space separated integers - The array nums.

Output format
Print the new length in the first line.

In the second line print the nums array upto the new length.

Sample Input 1
7

2 2 2 3 4 4 9

Sample Output 1
6

2 2 3 4 4 9

Explanation 1
Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].
 */

function removeDuplicatesFromSortedArrayII(n, nums) {
  let count = 1;
  let idx = 1;
  // two pointer approach => one pointer to iterate and count and next to update elements
  for (let i = 1; i < n; i++) {
    // if curr_element == prev_element => increase count
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      // else reset count to 1, for different element
      count = 1;
    }
    // if count <= 2 update elements
    if (count <= 2) {
      nums[idx++] = nums[i];
    }
  }
  // return {idx, nums}
  return { newLength: idx, newArr: nums };
  // return nums
}

let arr = [2, 2, 2, 3, 4, 4, 9];

console.log(
  "array with removed duplicates for array [2, 2, 2, 3, 4, 4, 9] is :" +
    removeDuplicatesFromSortedArrayII(7, arr)
);
