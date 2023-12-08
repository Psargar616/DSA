/*
Problem Description
Given a number, return the reverse of that number.

Input format
A single integer N.

Output format
Reverse the number and return the number. Note number must start with (1-9) digits only unless it is a single digit number.

Sample Input 1
15

Sample Output 1
51
 */

// Approach 1
// TC = O(log(n))

function reverseNum(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }

  return rev;
}

let ans = reverseNum(15);
console.log("Reverse of number 15 is ", ans);

// Approach 2
/* Recursive function to reverse digits of num*/
// Time Complexity: O(log(n))
// Auxiliary Space: O(log(n)),  where n is the input number.
var rev_num = 0;
var base_pos = 1;
function reverseDigits(num) {
  if (num > 0) {
    reverseDigits(Math.floor(num / 10));
    rev_num += (num % 10) * base_pos;
    base_pos *= 10;
  }
  return rev_num;
}

let num = 4562;
console.log("Reverse of no.  4562 is " + reverseDigits(num));

// Approach 3 - Using String
// Time Complexity: O(log10n) where n is the input number
// Auxiliary Space: O(1)

function reversDigits2(num) {
  // converting number to string
  let str = num.toString().split("").reverse().join("");

  // converting string to integer
  num = parseInt(str);

  // returning integer
  return num;
}

// Driver Code

let num2 = 1234;
console.log("Reverse of no. is 1234 " + reversDigits2(num2));
