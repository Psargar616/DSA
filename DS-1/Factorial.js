/*
Problem Description
Given a number n, you have to calculate the factorial of that number.

Note : No inbuilt function to be used

Input format
First line contains an integer - n.

Output format
Print the factorial of the given number.

Sample Input 1
3

Sample Output 1
6

Explanation 1
3! = 3.2.1 = 6
*/

// Recursive method
function factorial(n) {
  if (n == 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

let result = factorial(3);
console.log("Factorial of 3 is ", result);

// iterative
function factorial2(n) {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans *= i;
  }

  return ans;
}

let result2 = factorial2(5);
console.log("Factorial of 5 is ", result2);
