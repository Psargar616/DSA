/*
Problem Description
The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Input format
An integer n.

Output format
An integer Tn.

Sample Input 1
4

Sample Output 1
4

Explanation
T4= T3 + T2 +T1 = 2 + 1 + 1 = 4 T3= T2 + T1 +T0 = 1 +1 + 0 = 2
*/

// T.C = O(N)
// S.C = O(N)

function tribonacciBasic(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  }

  return (
    tribonacciBasic(n - 3) + tribonacciBasic(n - 2) + tribonacciBasic(n - 1)
  );
}


let result = tribonacciBasic(4)
console.log("Fourth tribonacii number is : ", result)
