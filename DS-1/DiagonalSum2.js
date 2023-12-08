/**
 * Problem Description
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Input format
A single integer n. A input matrix of size n x n.

Output format
A single integer denoting the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

Sample Input 1
3

1 2 3

4 5 6

7 8 9

Sample Output 1
25

Explanation
Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25 Notice that element mat[1][1] = 5 is counted only once.
 */

function diagonalSumII(mat) {
  let n = mat.length;
  let d1 = 0,
    d2 = 0;
  for (let i = 0; i < n; i++) {
    // i == j first diagonal
    d1 += mat[i][i];
    // excluding middle element commen to both diagonals
    // {i == n-1-i} ==> second diagonal
    if (i !== n - 1 - i) {
      d2 += mat[i][n - 1 - i];
    }
  }

  return d1 + d2;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let result = diagonalSumII(matrix);
console.log("Diagonal sum is : ", result);
