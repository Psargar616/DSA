/*
Problem Description
Given 2 numbers a and b, you have to find the gcd of these 2 numbers using recursion.

Input format
First line contains an integer t - Number of test cases.

First line of each test contains 2 integers - a and b.

Output format
Print the gcd of each test in a separate line.

Sample Input 1
2

8 20

80 80

Sample Output 1
4

80
*/
// Recursive approach
// TC = O(log(min(a,b))) == SC
function gcdBasic(a, b) {
  if (b == 0) {
    return a;
  }

  return gcdBasic(b, a % b);
}

let result = gcdBasic(24,36)
console.log("GCD of 24 and 36 is : ", result)
