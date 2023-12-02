/*
Problem Description
For an input year N, find whether the year is a leap or not.

Prerequisite : Knowledge of modulus operation.

Input format
First line contains an integer - N.

Output format
Print "true" if it is a leap year otherwise "false".
*/

function leapYearBasic(N) {
  return (N % 4 == 0 && N % 100 != 0) || N % 400 == 0;
}

console.log("Is 1600 a leap yaer : ", leapYearBasic(1600));
