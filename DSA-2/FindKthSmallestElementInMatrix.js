/**
 * Problem Description
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Input format
First line contains two integers. N, denoting the size of the square matrix and K where we have to find the Kth Smallest element.

Next N lines contain N integers each denoting the elements of the matrix.

Output format
Single containing one integer denoting the Kth smallest element.

Sample Input 1
3 8

1 5 9

10 11 13

12 13 15

Sample Output 1
13

Explanation 1
If written in non-decreasing order, elements are,

1 5 9 10 11 12 13 13 15

Hence, 8th smallest element is 13.
 */


// find element count row by row
function findCountLessThanOrEqual(matrixrow, element) {
  let count = 0;
  for (let col = 0; col < matrixrow.length; col++) {
    if (matrixrow[col] > element) {
      break;
    }
    count++;
  }

  return count;
}

// counting elements less than mid val element
function countElementsLessThanOrEqual(matrix, element) {
  let n = matrix.length;
  let count = 0;

  for (let row = 0; row < n; row++) {
    // if 1st element of row > element  return count = 0
    if (matrix[row][0] > element) {
      break;
    } else if (matrix[row][n - 1] <= element) {
        // if last element of row <  element  add length of row to count =>  count += n
      count += n;
    } else {
        // if above conditions dont meet find element count row by row
      count += findCountLessThanOrEqual(matrix[row], element);
    }
  }

  return count;
}
function kthSmallestElementInMatrix(matrix, k) {
  // find range of binary search based on matrix[0][0] and matrix[n-1][n-1]

  let n = matrix[0].length;
  let beg = matrix[0][0],
    end = matrix[n - 1][n - 1],
    ans = end;

  // binary search
  while (beg <= end) {
    // find mid based on range beg and end
    let mid = Math.floor((beg + end) / 2);
    // find no of elements less than mid value
    let count = countElementsLessThanOrEqual(matrix, mid);

    // if count == target kth element => assign it to answer and keep searching in lower range in case we get same count elements less range
    if (count == k) {
      ans = mid;
      // check in lower range
      end = mid - 1;
    } else if (count < k) {
      // if count is less shift beg pointer
      beg = mid + 1;
    }
    // in case of repetations we check in lower range
    else if (count > k) {
      // if count is more shift end pointer
      ans = mid;
      end = mid - 1;
    }
  }

  return ans;
}
