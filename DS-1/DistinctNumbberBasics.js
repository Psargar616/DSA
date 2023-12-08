/*
Problem Description
You are given a list of n integers, and your task is to calculate the number of distinct values in the list.

Input format
The first input line has an integer n: the number of values.

The second line has n integers x1,x2,…,xn.

Output format
Print number of distinct values in the list.

Sample Input 1
5

2 3 2 2 3

Sample Output 1
2
*/

// Approach 1
// T.C = O(N)
// S.C = O(N)

function distinctNumbersBasic(n, nums) {
  const set = new Set(nums);
  return set.size;
}

let arr = [2, 3, 2, 2, 3];

let result = distinctNumbersBasic(5,arr)
console.log("Nummbber of distinct elements in array [2, 3, 2, 2, 3] are : ", result)

