/**
 * Problem Description
Given an array of integers, sort the array based on the absolute value of the elements.

Input format
First line contains an integer n - The number of elements.

Second line contains n space separated integers - The array nums.

Output format
For each test case print the minimum changes required on a separate line.

Sample Input 1
5

2 -5 1 -2 4

Sample Output 1
1 2 -2 4 -5

Explanation 1
Absolute values of elements are [2,5,1,2,4] respectively, so in the sorted order based on absolute values elements will be [1,2,-2,4,-5] or [1,-2,2,4,-5]. Both are accepted answers.


 */

function sortArrayAbsolute(n, nums) {
  nums.sort((a, b) => {
    if (Math.abs(a) < Math.abs(b)) {
      return -1;
    } else if (Math.abs(a) > Math.abs(b)) {
      return 1;
    } else if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });

  return nums;
}

let arr = [2, -5, 1, -2, 4];
let n = arr.length;

console.log("Sort [2, -5, 1, -2, 4] based on absolute val : " + sortArrayAbsolute(n,arr))