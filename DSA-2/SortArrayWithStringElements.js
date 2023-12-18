/**
 * Problem Description
Given an array, where integers are written as strings, sort the array and return it, with the elements still being strings.

Note that the number of digits in each element may go up to 10^6.

Input format
There are 2 lines of input.

First line will contain a single integer n, the size of array.

Second line will contain n space separated integers.

Output format
Return n space separated integers in a single line

Sample Input 1
5

3 30 1 124 54644

Sample Output 1
1 3 30 124 54644
 */

function numSort(n, numbers) {
  // console.log(numbers)
  numbers.sort((a, b) => {
    // for large numbers
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
        // for regular numbers
      return a.localeCompare(b);
    }
  });

  return numbers;
}

let str = "3 30 1 124 54644"
let numbers = str.split(" ")

console.log("Given an array, where integers are written as strings, sort the array " + numSort(numbers.length,numbers))