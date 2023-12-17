/**
 * Problem Description
Partitioning an array means to split an array along an element, such that it divides the array into two parts with some specific property. The element that partitions the array is called the partitioning element.

Given an array, find the element, partitioning along which, the sum of elements to its left, equals the sum of elements to its right. The partition element itself is to be excluded from both sums.

Return the index of the partitioning element. If no such element exists, return -1.

Input format
There are N+1 lines of input.

First line will contain a single integer N.

Second line will contain n space separated integer representing array elements.

Output format
Output the index of the partitioning element.

Constraints
2 <= N <= 10^6

1 <= Arr[i] <= 10^9

Sample Input 1
4

1 4 2 5

Sample Output 1
2

Explanation 1
Since 1 + 4 = 5 where 2 is such an element.
 */

// using prefix  sum
function equalPartition(n, arr) {
  let pre = [];
  let leftSum = 0;
  // calculate prefix sum in a array
  for (let i = 0; i < n; i++) {
    pre[i] = arr[i] + leftSum;
    leftSum = pre[i];
  }

  console.log("Prefix sum array" + pre);

  for (let i = 0; i < n; i++) {
    // calculating right sum after the index
    let rightSum = pre[n - 1] - pre[i];
    if (i !== 0) {
      // if leftsum === rightSum
      if (pre[i - 1] == rightSum) {
        return i;
      }
    }
  }
  return -1;
}

// using prefix and suffix sum
function equalPartition2(n, arr) {
  // Forming prefix sum array from 0
  var prefixSum = Array(n).fill(0);
  prefixSum[0] = arr[0];
  for (i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  // Forming suffix sum array from n-1
  var suffixSum = Array(n).fill(0);
  suffixSum[n - 1] = arr[n - 1];
  for (i = n - 2; i >= 0; i--) {
    suffixSum[i] = suffixSum[i + 1] + arr[i];
  }

  // Find the point where prefix and suffix
  // sums are same.
  for (i = 1; i < n - 1; i++) {
    if (prefixSum[i] == suffixSum[i]) return arr[i];
  }

  return -1;
}

let arr = [1, 4, 2, 5];
console.log("Array partitions at index : " + equalPartition(4, arr));
console.log("Array partitions at index : " + equalPartition2(4, arr));
