/*
Problem Description
Given an array of numbers, find GCD of the array elements.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Input format
First line contains n, the number of integers. Second line contains n space separated integers.

Output format
Return the gcd of array.

Sample Input 1
4

4 6 8 16

Sample Output 1
2
 */

// Approach 1

// Time Complexity: O(N * log(X)), where X is the largest element of the array
// Auxiliary Space: O(1)


function gcd(a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}

function gcdOfArray(n, arr) {
  let res = arr[0];
  for (let i = 1; i < n; i++) {
    res = gcd(res, arr[i]);
  }

  return res;
}

var arr1 = [ 1, 2, 3 ]; 
console.log(gcdOfArray(3, arr1)); 


// Approach 2
// recursive implementation 
// Time Complexity: O(N * log(N)), where N is the largest element of the array
// Auxiliary Space: O(N)
function GcdOfArray(arr, idx) 
{ 
    if (idx == arr.length - 1) { 
        return arr[idx]; 
    } 
    var a = arr[idx]; 
    var b = GcdOfArray(arr, idx + 1); 
    return gcd(a, b);  
} 
  
var arr = [ 2, 4, 6 ]; 
console.log(GcdOfArray(arr, 0)); 

