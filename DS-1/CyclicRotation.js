/*
Problem Description
Given an array of n integers and an integer k, rotate the array k times in clockwise order.

Input format
There are three lines of input.

First line contains integer n.

Next line contains n space separated integers.

Next line contains the value of k.

Output format
Print the rotated array.

Sample Input 1
5

1 2 3 4 5

2

Sample Output 1
4 5 1 2 3
*/


/*
Approach 1:

1. We will first take mod of K by N (K = K % N) because after every N rotation array will become the same as the initial array. 
2.Now, we will iterate the array from i = 0 to i = N-1 and check, 
If i < K, Print rightmost Kth element (a[N + i -K]). 
Otherwise, Print array after ‘K’ elements (a[i – K]). 
*/

// Javascript implementation of right rotation
// of an array K number of times

// Function to rightRotate array
function RightRotate1(a, n, k)
{

	// If rotation is greater
	// than size of array
	k = k % n;
    let result = []

	for (let i = 0; i < n; i++) {
		if (i < k) {

			// Printing rightmost
			// kth elements
			result.push(a[n + i - k]);
		}
		else {

			// Prints array after
			// 'k' elements
			result.push((a[i - k]));
		}
	}
	// document.write("<br>");
    return result
}

// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;

let result = RightRotate1(Array, N, K);
console.log("Rotetated Array [1, 2, 3, 4, 5] when k=2 : ", result)


/*
Method 2: Reversing the array 
// TC => O(1) 
// SC => O(1)

Approach: The approach is simple yet optimized. The idea is to reverse the array three times. For the first time we reverse only the last k elements. Second time we will reverse first n-k(n=size of array) elements. Finally we will get our rotated array by reversing the entire array.
*/

// Javascript program to rotate right an array by K times
let arr = [ 1, 3, 5, 7, 9, 11 ];
let n = arr.length;
let k = 3; //No. of rotations
k = k % n;
let i, j;

// Reverse last k numbers using 2 pointers
for (i = n - k, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Reverse the first n-k terms
for (i = 0, j = n - k - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// Reverse the entire array
for (i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Print the rotated array
for (let i = 0; i < n; i++) {
    console.log(arr[i]+ " ");
}





