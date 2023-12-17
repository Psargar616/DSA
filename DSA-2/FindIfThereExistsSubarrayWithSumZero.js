/**
 * Problem Description
Given an array of positive and negative numbers, you need to find if there is any subarray with 0 sum.

Note: A subarray of an array is a set of contiguous elements having a size of at least 1.

Input format
First line contains a single integer T denoting the number of test cases.

For each test case, an integer N will be given on one line and the next line will contain the N numbers of the array.

Output format
For each test case, print "Yes" if a subarray exists and "No" otherwise, on a single line.

Constraints
1 <= T <= 1000

1<= N <= 100000

Sum of N for all test cases will be <=200000

-10^5 <= Array element values <= 10^5

Sample Input 1
2

4

4 2 -2 5

3

3 2 -1

Sample Output 1
Yes

No

Explanation 1
For the first test case {2,-2} will be the subset that sums to 0.

For the second test case, there is no such subarray that can sum to 0.
 */

// using set and prefix sum approach
function subarraySumZero(n, arr) {
  let sum = 0;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    // prefix sum calculate
    sum += arr[i];
    // if sum == 0 or prefix sum repeats we know their is subarray with sum zero
    if (sum === 0 || set.has(sum)) {
      return "Yes";
    }

    set.add(sum);
  }

  return "No";
}

let arr = [4, 2, -2, 5];
console.log(
  "is there is any subarray with 0 sum in  [4 ,2 ,-2, 5] : " +
    subarraySumZero(arr.length, arr)
);
let arr2 = [3 ,2 ,-1]
console.log(
    "is there is any subarray with 0 sum in [3 ,2 ,-1] : " +
      subarraySumZero(arr2.length, arr2)
  );
