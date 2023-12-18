/**
 * Given an array of numbers where every number is represented as string. The numbers may be very large (may not fit in long long int), the task is to sort these numbers.
Examples: 
 

Input : arr[] = {"5", "1237637463746732323", "12" };
Output : arr[] = {"5", "12", "1237637463746732323"};

Input : arr[] = {"50", "12", "12", "1"};
Output : arr[] = {"1", "12", "12", "50"};
 * 
 */

// JavaScript program to sort large numbers
// represented as strings.

// Function for sort an array of large numbers
// represented as strings
function sortLargeNumbers(arr) {
  // Refer below post for understanding
  // below expression:
  // https://www.geeksforgeeks.org/lambda-expressions-java-8/

  for (let i = 0; i < arr.length - 1; i++) {
    /* If length of left != right, then
			return the diff of the length else 
			use compareTo function to compare values.*/
    let left = arr[i],
      right = arr[i + 1];
    if (left.length > right.length) {
      arr[i] = right;
      arr[i + 1] = left;
      i -= 2;
    }
  }
}

// Driver Code
let arr = ["5", "1237637463746732323", "97987", "12"];
sortLargeNumbers(arr);
for (let s in arr) console.log(arr[s] + " ");
