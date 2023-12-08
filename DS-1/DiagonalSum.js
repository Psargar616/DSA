/**
 * Problem Description
Given a matrix of dimensions n x m, you are tasked with finding the sum of elements by starting at the index (i, j) and moving in a diagonal order.

Write a function that takes the matrix, starting index (i, j), and returns the sum of the elements encountered while moving diagonally. If the starting index is invalid, return -1

Input format
First line contains integers n and m.

Second line contains starting index i and j.

In next n lines each line contains m elements.

Output format
An integer representing the sum.

Sample Input 1
4 4

0 1

1 2 3 4

1 2 4 5

2 3 3 4

1 1 2 3

Sample Output 1
10

Explanation
Diagonal elements starting at index (0,2) are 2,4,4.

Their sum is 10.
 */

function diagonalSum(matrix, i, j, m, n) {
  // check if loop goes out of bound
  if (i >= n || j >= m || i < 0 || j < 0) {
    return -1;
  }

  let diagonalSum = 0;
  let row = i;
  let col = j;

  while (row < n && col < m) {
    diagonalSum += matrix[row][col];
    row++;
    col++;
  }

  return diagonalSum;
}

let matrix = [
  [1, 2, 3, 4],

  [1, 2, 4, 5],

  [2, 3, 3, 4],

  [1, 1, 2, 3],
];

let result = diagonalSum(matrix,0,1,4,4)
console.log("Diagonal sum is : " , result)