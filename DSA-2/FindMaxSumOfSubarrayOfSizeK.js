/**
 * Problem Description
Given an array of integers and a number k, find the maximum sum of a subarray of size k.

Input format
First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

Second line of input contains N integers denoting the array elements.

Output format
Print the maximum sum of a subarray of size k.

Sample Input 1
4 2

100 200 300 400

Sample Output 1
700

Explanation
We get maximum sum by adding subarray {300,400}

of size 2.
 */

// Time Complexity: O(n)
// Auxiliary Space: O(1)
//
// APPROACH ===========>
// An Efficient Solution is based on the fact that sum of a subarray (or window) of size k can be obtained in O(1) time using the sum of the previous subarray (or window) of size k. Except for the first subarray of size k, for other subarrays, we compute the sum by removing the first element of the last window and adding the last element of the current window.

// Returns maximum sum in a subarray of size k.
function maxSum(arr, n, k) {
  // k must be smaller than n
  if (n < k) {
    console.log("Invalid K");
    return -1;
  }

  // Compute sum of first window of size k
  let res = 0;
  for (let i = 0; i < k; i++) {
    res += arr[i];
  }

  // Compute sums of remaining windows by
  // removing first element of previous
  // window and adding last element of
  // current window.
  let curr_sum = res;
  for (let i = k; i < n; i++) {
    curr_sum += arr[i] - arr[i - k];
    res = Math.max(res, curr_sum);
  }

  return res;
}

/* Driver program to test above function */

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(
  "maximum sum in a subarray of size k = 4 in [1, 4, 2, 10, 2, 3, 1, 0, 20] " +
    maxSum(arr, n, k)
);

// This code is contributed by sravan kumar Gottumukkala
