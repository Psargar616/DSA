/**
 * Problem Description
Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Input format
A 32 bit integer N

Output format
A single integer

Sample Input 1
12

Sample Output 1
21



Explanation
There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

IP2: 
1234 => 1243
 */

/**
 * 
 * Following is the algorithm for finding the next greater number:

    1. Traverse the given number from rightmost digit, keep traversing till you find a digit which is smaller than the previously traversed digit. For example, if the input number is “534976”, we stop at 4 because 4 is smaller than next digit 9. If we do not find such a digit, then output is “Not Possible”.

    2. Now search the right side of above found digit ‘d’ for the smallest digit greater than ‘d’. For “534976″, the right side of 4 contains “976”. The smallest digit greater than 4 is 6.
    Swap the above found two digits, we get 536974 in above example.

    3. Now sort all digits from position next to ‘d’ to the end of number. The number that we get after sorting is the output. For above example, we sort digits in bold 536974. We get “536479” which is the next greater number for input 534976.
 */
// link : https://www.geeksforgeeks.org/find-next-greater-number-set-digits/
// logic : https://www.youtube.com/watch?v=OESwQtfkBn0

// Time Complexity: O(N*logN)
// Auxiliary Space: O(1)
// n = “534976”
function nextGreaterElementWithSameSetOfDigits(n) {
  let arr = Array.from(String(n), Number);
  // arr = [5, 3, 4, 9, 7, 6]
  console.log(arr);
  // Iteratte array from end and find number from right end such that arr[curr] > arr[curr - 1]
  for (var i = n - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) break;
  }

  // if we reach beginning of array while iterating => array has sorted numbers in increasing order, => not possible to create greater number
  if (i == 0) {
    return -1;
  }

  // number to be swapped
  let num = arr[i - 1];

  // we need to find smallest number which is just greater than above  num from remaining elements
  // initializing smallest number at i
  let smallest = i;
  // finding smallest number in remaining array ie i+1 to array length
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > num && arr[j] < arr[smallest]) {
      smallest = j;
    }
  }

  // swap num with smallest
  let tmp = arr[i - 1];
  arr[i - 1] = arr[smallest];
  arr[smallest] = tmp;

  let res = 0;

  // Converting list upto i-1 into number
  for (let j = 0; j < i; j++) {
    res = res * 10 + arr[j];
  }
  // Sort the digits after i-1 in ascending order
  let part = arr.slice(i, arr.length + 1);
  part.sort();

  // Converting the remaining sorted
  // digits into number
  for (let j = 0; j < arr.length - i; j++) {
    res = res * 10 + part[j];
  }

  return res;
}

let digits = "534976";
console.log(
  "find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than 534976 is " +
    nextGreaterElementWithSameSetOfDigits(digits)
);

// solution 2 => for larger numbers > 2^32
/*
I will consider the given number as a sequence of numbers.

First thing to note is that for any sequence that is in descending order, there is no larger permutation.

1. Convert given number into an array of digits.
2. Iterate through the array from the back. We want to find the pivot point.
The pivot point is arr[i-1] where arr[i-1] < arr[i]. At this point, arr[i...end]
is in descending order because arr[i-1] is the first point where it is less than arr[i].

Hence, by rearranging arr[i...end], it isn't possible to find a greater number.
We should include the pivot point as well. Since we want to find the number just greater than given number, we will iterate from (end to i) and find the first number greater than pivot point.
We swap these two numbers. Now, we have a greater number. But, it isn't the next greater number yet because arr[i...end] is still in descending order.
In order to find the number just greater than given number, we have to turn this subarray
arr[i..end] into ascending order. We can do it by simply reversing it.

That's it!

Now, Convert the array back into number and return it.
*/

var nextGreaterElement = function (n) {
  let arr = n.toString().split("");
  let pivot = -1;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      pivot = i - 1;
      break;
    }
  }
  if (pivot === -1) return -1; // array is in descending order

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]]; // swap
      break;
    }
  }
  let left = arr.slice(0, pivot + 1);
  let right = arr.slice(pivot + 1);
  right.reverse();
  let res = Number(left.join("") + right.join(""));
  return res > Math.pow(2, 31) - 1 ? -1 : res;
  // T.C: O(N)
  // S.C: O(N)
};
