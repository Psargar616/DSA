/**
 * Problem Description
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

Pascal’s triangle is a pattern in which a number in a row b, is the sum of the number exactly above it a, and the number to the left of a, c.

Input format
One line of input, containing the non negative integer N.

Output format
Print the first N rows of Pascal’s triangle.

Sample Input 1
5

Sample Output 1
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
 */

// Approach :
// use two loops
// the inner loop runs j <= i
// the outer elements of pascal triangle are 1
// the middle elements are calculated as sum element in row above + left element of top element
// 1
// 1[i-1][j-1]     1[i-1][j]
// 1               2         1
// 2 = 1([i-1][j-1]) + 1([i-1][j]) 
// This way all the elements are calculated

function pascalsTriangle(n) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push([]);
    for (let j = 0; j <= i; j++) {
      if (ans[i - 1] && ans[i - 1][j] && ans[i - 1][j - 1]) {
        ans[i].push(ans[i - 1][j] + ans[i - 1][j - 1]);
      } else {
        ans[i].push(1);
      }
    }
  }

  return ans;
}

let result = pascalsTriangle(7)
console.log(result)
