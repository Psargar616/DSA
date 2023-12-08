/*
Problem Description
Given two arrays A and B, write a function to compute their intersection.

Note: Each element in the result should appear as many times as it shows in both arrays. The result needs to be in sorted order.

Input format

First line contains one integer N denoting the number of elements in array A

Next line contains N integers denoting the elements of array A

Next line contains one integer M denoting the number of elements in array B

Next line contains M integers denoting the elements of array B

Output format
Single line containing the intersection elements of the two arrays in sorted order.

Sample Input 1

4

1 2 2 1

2

2 2

Sample Output 1
2 2
*/

// Approach 1 => use Map to find intersection

function intersectionOfTwoArraysBasic(n, nums1, m, nums2) {
  let map = new Map();
//  iterate over 1st array and add elements with their count in the map
  for (let i = 0; i < n; i++) {
    let ele = nums1[i];

    if (map.has(ele)) {
      let prevCount = map.get(ele);
      map.set(ele, prevCount + 1);
    } else {
      map.set(ele, 1);
    }
  }
  let ans = [];

  console.log(map)
//   iterate over 2nd array and push the overlapping elements in ans array
  for (let i = 0; i < m; i++) {
    let num = nums2[i];
    let count = map.get(num);
    if (count > 0) {
      ans.push(num);
      map.set(num, count - 1);
    }
  }

    console.log(ans)
    // sorting ans array
  return ans.sort((a, b) => b - a);
}

let arr1 = [1 ,2 ,2 ,1,1,2]
let arr2 = [2,2,1,1]

let ans = intersectionOfTwoArraysBasic(6,arr1,4,arr2)
console.log("Intersections of two arrays [1 ,2 ,2 ,1] and [2,2] is : ", ans)