/**
 * Problem Description
Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.

First line contains an Integer N that represents the number of elements in the array.

Second line contains N space separated integers, which are members of the array.

Third line contains an integer X, which is the target value.

Output format
Print "Present" if there is such a pair present in the array otherwise print "Not Present".
 */

// using two pointer approach
// TC = O(N)
function twoSumInSortedArray(n, arr, target_sum) {
  let left = 0;
  let right = n - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target_sum) {
        console.log(`[${left}, ${right}]`)
      return true;
    } else if (sum > target_sum) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

let arr = [2, 4, 5 ,8 ,9]
console.log("is there is such a pair present in the array whose sum is 7 : " + twoSumInSortedArray(5,arr,7))