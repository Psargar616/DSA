/**
    Merge Sort is a classic divide and conquer problem.
    The following steps are involved:
        Divide: We break the array from the middle using recursion until we’re left with 1 element.
        Conquer: Then we sort these small arrays.
        Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.
    Time complexity of Merge Sort is O(nlogn).
    Space complexity of Merge Sort is O(n).
    It’s a stable algorithm.
 */

// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
// JavaScript program for Merge Sort

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (var j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;
// merge ing 2 sorted array
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is
// right index of the sub-array
// of arr to be sorted
function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// Function to print an array
function printArray(A, size) {
  for (var i = 0; i < size; i++) console.log(A[i] + " ");
}

console.log("MergeSort 1");
var arr = [12, 11, 13, 5, 6, 7];
var arr_size = arr.length;

console.log("Given array is ", arr);

mergeSort(arr, 0, arr_size - 1);

console.log("Sorted array is ", arr);

// another method : https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-implement-merge-sort/301614
function mergeSort2(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitIndex = Math.floor(array.length / 2);
    return merge2(
      mergeSort2(array.slice(0, splitIndex)),
      mergeSort2(array.slice(splitIndex))
    );
  }
  // Merge two sorted arrays
  function merge2(array1, array2) {
    let merged = [];
    while (array1.length && array2.length) {
      if (array1[0] < array2[0]) {
        merged.push(array1.shift());
      } else if (array1[0] > array2[0]) {
        merged.push(array2.shift());
      } else {
        merged.push(array1.shift(), array2.shift());
      }
    }
    // After looping ends, one array is empty, and other array contains only
    // values greater than all values in `merged`
    return [...merged, ...array1, ...array2];
  }
}
console.log("MergeSort 2");
var arr2 = [12, 11, 15, 5, 6, 7];

console.log("Given array is ", arr2);

console.log("Sorted array is " + mergeSort2(arr2));

// Approrach 3:
//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
    else mergedArr.push(arr1[i++]);
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j++]);
  }
  return mergedArr;
}
function mergeSort3(array) {
  //Array of length 1 is sorted so we return the same array back
  if (array.length == 1) return array;

  //Break down the array to half from middle into left and right
  let middle = Math.floor(array.length / 2);
  let left = mergeSort3(array.slice(0, middle));
  let right = mergeSort3(array.slice(middle));

  //Return the merged sorted array
  return merger(left, right);
}
console.log("MergeSort 3");
var arr3 = [12, 11, 15, 5, 16, 7];

console.log("Given array is ", arr3);

console.log("Sorted array is " + mergeSort3(arr3));
