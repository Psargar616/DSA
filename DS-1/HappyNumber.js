/**
 * Problem Description
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Input format
First-line contains 1 integer N.

Output format
Print true or false.

Sample Input 1
19

Sample Output 1
true

Explanation 1
1^2 + 9^2 = 82

8^2 + 2^2 = 68

6^2 + 8^2 = 100

1^2 + 0^2 + 0^2 = 1
 */

// approach
// write function to calculate digit square
function digitSquare(n) {
  let sum = 0;
  while (n > 0) {
    let d = n % 10;
    sum += d * d;
    n = Math.floor(n / 10);
  }

  return sum;
}
function happyNumber(n) {
  // use set for storing unique numbers and if duplicate number is being generated we know that the given number is not happy number
  const seenNumber = new Set();

  //   loop runs until we get digit square sum == 1
  while (n != 1) {
    const newNum = digitSquare(n);
    // if digit square sum is repeated we know given number is not unique
    if (seenNumber.has(newNum)) {
      return false;
    }
    // adding digit square sum number to set
    seenNumber.add(newNum);
    // re-assigning number
    n = newNum;
  }

  return true;
}

let result = happyNumber(21)
console.log("Is 21 is happy number : ", result)

let result2 = happyNumber(19)
console.log("Is 19 is happy number : ", result2)