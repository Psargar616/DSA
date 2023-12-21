/**
 * Insertion Sort assumes that array is divided in two parts:
    Sorted (Initially the first element)
    Unsorted
Each pass, we select an element, and check it against the sorted array.

If the selected element is smaller than the last element of the sorted array then we shift the sorted array by 1 until we find the spot to insert the selected element.

 */

function insertionSort2(array) {
  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = curr;
  }
  return array;
}


// Function to sort an array using insertion sort
function insertionSort(arr, n) 
{ 
	let i, curr, j; 
	for (i = 1; i < n; i++) 
	{ 
		curr = arr[i]; 
		j = i - 1;
		/* Move elements of arr[0..i-1], that are 
		greater than key, to one position ahead 
		of their current position */
		while (j >= 0 && arr[j] > curr) 
		{ 
			arr[j + 1] = arr[j]; 
			j = j - 1; 
		} 
		arr[j + 1] = curr; 
	} 
} 

// A utility function to print an array of size n 
function printArray(arr, n) 
{ 
	let i; 
	for (i = 0; i < n; i++) 
		document.write(arr[i] + " "); 
	document.write("<br>"); 
} 

// Driver code 
	let arr = [12, 11, 13, 5, 6 ]; 
	let n = arr.length; 

	insertionSort(arr, n); 
	printArray(arr, n); 
	


