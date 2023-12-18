/**
 * What is counting sort?
Counting sort is an integer sorting algorithm, which is used for sorting a collection of elements according to the keys that are small integers.

It sorts the array of elements by counting the frequency of each unique element in the array. The count is stored in another temporary array at the number’s index and using arithmetic on those frequencies to determine the positions of each key value in the sorted array.

Input:
[1, 3, 2, 8, 5, 1, 5, 1, 2, 7]

Output:
[1, 1, 1, 2, 2, 3, 5, 5, 7, 8]

How counting sort algorithm works?
1. Find out the maximum element from the array and store it in a variable say k.
2. Create a temporary array of the length of the maximum + 1 element and fill 0 at each index.
3. Store the frequency of each element in the array at that element’s index in the temporary array.

For example: if the count of element 1 is 3 then, 3 is stored in the 1st position of the temporary array. If the element is not present in the array, then 0 will be already present there as the default value.

4. Store the cumulative sum of the elements of the temporary array. It helps in placing the elements into the correct index of the sorted array.

e.g. At each index store its frequency + the frequency of its previous index.

 */

// link : https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-11.php


const countingSort = (arr, min, max) => {
    // count is object where i = key/element and count[i] = value/frequencyOfElement
  const count = {};
  // First populate the count object
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  console.log(count)
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  console.log(count)
  /* Now, count is indexed by numbers, with values corresponding to occurrences, eg:
   * {
   *   3: 1,
   *   4: 0,
   *   5: 2,
   *   6: 1,
   *   7: 0,
   *   8: 0,
   *   9: 1
   * }
   */

  // Then, iterate over count's properties from min to max:
  const sortedArr = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }
  return sortedArr;
};


console.log(countingSort([3, 6, 5, 5, 9], 3, 9));

// count sort using arrays
function countingSort2(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    console.log(count)
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    console.log(count)
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [3, 0, 2, 5, 4, 1]; 
console.log(arra.length);
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(countingSort2(arra, 0, 5));

