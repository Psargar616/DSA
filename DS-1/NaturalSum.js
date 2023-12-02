/*
Problem Description
You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers.

Input format
First line contains an integer - N.

Output format
Print the sum of first N natural numbers.

Sample Input 1
10

Sample Output 1
55
*/

// Approach 1 - O(n)

function naturalSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(naturalSum(10));

// Approach 2 = O(1)
function naturalSum2(n) {
  let sum = (n * (n + 1)) / 2;

  return sum;
}

console.log(naturalSum2(10));

// Approach 3 => recursion

function naturalSum3(n) {
    // base case
  if (n === 1) {
    return 1;
  }
// recursive call
  let sum = naturalSum3(n - 1) + n;

  return sum;
}

console.log(naturalSum3(10));
