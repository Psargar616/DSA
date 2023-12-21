/**
 * 
 *
 * Selection Sort is one of the easier sorting algorithm to understand and implement.
This algorithm splits the array in two parts:
    Sorted
    Unsorted

The Sorted part is at the beginning of the array and Unsorted part afterwards.

Each pass, initially we assume the first element to be the smallest then we loop through the whole array and select the smallest element. At the end of the pass we swap smallest element to the sorted array.

It has O(n2) time complexity.
 */

// Javascript program for implementation of selection sort
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
}

var arr = [64, 25, 12, 22, 11];
var n = 5;
selectionSort(arr, n);
console.log("Sorted array: ", arr);
