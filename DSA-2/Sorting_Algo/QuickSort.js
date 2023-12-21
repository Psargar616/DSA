/**
 QUICKSORT 
 
Partition Algorithm:
    The logic is simple, we start from the leftmost element and keep track of the index of smaller (or equal) elements as i. While traversing, if we find a smaller element, we swap the current element with arr[i]. Otherwise, we ignore the current element.

As the partition process is done recursively, it keeps on putting the pivot in its actual position in the sorted array. Repeatedly putting pivots in their actual position makes the array sorted.

Time Complexity:

    Best Case: Ω (N log (N))
    The best-case scenario for quicksort occur when the pivot chosen at the each step divides the array into roughly equal halves.
    In this case, the algorithm will make balanced partitions, leading to efficient Sorting.


    Average Case: θ ( N log (N))
    Quicksort’s average-case performance is usually very good in practice, making it one of the fastest sorting Algorithm.


    Worst Case: O(N2)
    The worst-case Scenario for Quicksort occur when the pivot at each step consistently results in highly unbalanced partitions. When the array is already sorted and the pivot is always chosen as the smallest or largest element. To mitigate the worst-case Scenario, various techniques are used such as choosing a good pivot (e.g., median of three) and using Randomized algorithm (Randomized Quicksort ) to shuffle the element before sorting.


    Auxiliary Space: O(1), if we don’t consider the recursive stack space. If we consider the recursive stack space then, in the worst case quicksort could make O(N).
 */

// Function to partition the array and return the partition index
function partition(arr, low, high) {
  // Choosing the pivot
  let pivot = arr[high];

  // Index of smaller element and indicates the right position of pivot found so far
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot

    if (arr[j] < pivot) {
      // Increment index of smaller element
      i++;
      // Swap elements
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Swap pivot to its correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  // Return the partition index
  return i + 1;
}

// The main function that implements QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is the partitioning index, arr[pi] is now at the right place
    let pi = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// QuickSort 2 with extra space
// link : https://www.youtube.com/watch?v=XE4VP_8Y0BU
// https://www.youtube.com/watch?v=P6XGSKO2RzI
/**
 * 
 * The time complexity of the quickSort function is O(n log n) in the average case and O(n^2) in the worst case. This is because the function recursively partitions the array into smaller subarrays and then combines them back together. Each partitioning step takes O(n) time, and there are log n levels of recursion in the average case. However, in the worst case where the pivot is always the smallest or largest element, the function may only partition the array into subarrays of size 1, resulting in O(n) levels of recursion and a total time complexity of O(n^2).
 * link : https://www.youtube.com/watch?v=-qOVVRIZzao

The space complexity of the quickSort function is O(log n) in the average case and O(n) in the worst case. This is because the function uses additional space for the recursive calls and the temporary arrays used for partitioning. In the average case, the maximum depth of recursion is log n, so the space complexity is O(log n). However, in the worst case where the pivot is always the smallest or largest element, the function may only partition the array into subarrays of size 1, resulting in O(n) levels of recursion and a total space complexity of O(n).
 */
function quickSort2(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[0];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort2(lesser), ...equal, ...quickSort2(greater)];
  }
}
// Driver code
let arr = [10, 7, 8, 9, 1, 5];
let arr2 = [10, 7, 6, 9, 1, 5];
let N = arr.length;
console.log("Unsorted array:");
console.log(arr);
// Function call
quickSort(arr, 0, N - 1);
console.log("Sorted array:");
console.log(arr);

console.log("Unsorted array:");
console.log(arr2);
// Function call

console.log("Sorted array:");
console.log(quickSort2(arr2));
