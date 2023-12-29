/**
 * Problem Description
Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

Input format
There are 2 lines of input

First line will contain a single integer n.

Next line will contain n space separated integers.

Output format
Print the index of first occuring if present, otherwise print -1.

Sample Input 1
4

0 0 1 1

Sample Output 1
2
 */

function zeroOnes(n, arr) {
  let target = 1;
  let l = 0,
    r = n - 1;
// use binary search
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
        // the speciality of first occurab=nce is element before it will be smaller
        // so if mid becomes 0 or mid -1 val is less than mid we found our ans
      if (mid === 0 || arr[mid - 1] < target) {
        return mid;
      } else {
        // updating end pointer as we well find our target in left of array
        r = mid - 1;
      }
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}

let arr = [0,0,1,1]
console.log("first occurance of one is at index  " + zeroOnes(arr.length, arr))

