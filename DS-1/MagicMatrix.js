/*

Problem Description
Given a matrix of dimensions n x n having elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

Magic square is a square that has the same sum along all rows, columns and diagonals.

Input format
There are n + 1 lines of input.

First line contains integer n.

The next n lines contain n space separated elements.

Output format
Print "Yes" if it is a magic square , "No" otherwise.

Sample Input 1
3

4 9 2

3 5 7

8 1 6

Sample Output 1
Yes

Explanation 1
All rows, columns and diagonals have sum 15.

*/

// Javascript program to check whether a given
// matrix is magic matrix or not

// Returns true if mat[][] is magic
// square, else returns false.
function isMagicSquare(mat) {
  var N = mat.length;
  // sumd1 and sumd2 are the sum of the two diagonals
  var sumd1 = 0,
    sumd2 = 0;
  for (var i = 0; i < N; i++) {
    // (i, i) is the diagonal from top-left -> bottom-right
    // (i, N - i - 1) is the diagonal from top-right -> bottom-left
    sumd1 = sumd1 + mat[i][i];
    sumd2 = sumd2 + mat[i][N - 1 - i];
  }
  // if the two diagonal sums are unequal then it is not a magic square
  if (sumd1 != sumd2) return false;

  for (var i = 0; i < N; i++) {
    var colSum = 0;
    var rowSum = 0;
    for (var j = 0; j < N; j++) {
      rowSum += mat[i][j];
      colSum += mat[j][i];
    }
    if (rowSum != colSum || colSum != sumd1) return false;
  }
  return true;
}

// driver program to
// test above function
var mat = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

if (isMagicSquare(mat)) console.log("Magic Square");
else console.log("Not a magic Square");
