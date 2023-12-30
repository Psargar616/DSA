/**
 * 
 * Problem Description
Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.

Input format
There are 2 lines of input.

First line contains 2 space separated integers n, k - Number of elements, the integer k.

Second line contains n space separated integers - The integer array.

Output format
Print the number of occurrences of the integer k.

Sample Input 1
5 2

-1 2 2 4 7

Sample Output 1
2

Explanation 1
The integer 2 occurs 2 times in the given array.
 */

// Approach 1 =
// find first and last occurance using BS
// return last - first + 1
// TC = log(n) SC = O(1)

function first(n, k, arr) {
  let l = 0,
    h = n - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (arr[mid] == k && (mid == 0 || arr[mid - 1] < k)) {
      return mid;
    } else if (k <= arr[mid]) {
      h = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}
function last(n, k, arr) {
  let l = 0,
    h = n - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);

    if (arr[mid] == k && (mid == n - 1 || arr[mid + 1] > k)) {
      return mid;
    } else if (k >= arr[mid]) {
      l = mid + 1;
    } else {
      h = mid - 1;
    }
  }
  return -1;
}
function countOccurrences(n, k, arr) {
  let i = first(n, k, arr);
  if (i == -1) {
    return 0;
  }

  let j = last(n, k, arr);

  return j - i + 1;
}

// Approach 2

// Javascript program to count occurrences
// of an element
// Time Complexity: O(n)
// Space Complexity: O(1), as no extra space is used

// Returns number of times x occurs in arr[0..n-1]
function countOccurrences(arr, n, x) {
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (x == arr[i]) res++;
  }
  return res;
}

arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let n = arr.length;
let x = 2;
document.write(countOccurrences(arr, n, x));

/**
 * Method 3: Using Hashing
We can also use hashing method to count occurrences (or frequency) of a specific element in a sorted array.

Steps:
We use following steps to find occurrence-

        First we create an unsorted_map to store elements with their frequency.

        Now we iterate through the array and store its elements inside the map.

        Then by using map.find() function, we can easily find the occurrences (or frequency) of any element.
        Below is the implementation:


 */

function countOccurrences(arr, x, N) {
  let mp = new Map();
  for (let i = 0; i < N; i++) {
    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
  }
  if (!mp.has(x)) return 0;
  return mp.get(x);
}

// Driver Code
let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let target = 2;
let N = arr.length;

// displaying the frequency of x in Array
console.log(target + " occurs " + countOccurrences(arr, x, N) + " times");
