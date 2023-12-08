/*
Problem Description
Given a sorted array of N distinct integers and a target value X, return the index if the target is found. If not found then return -1.

Note - Try implementing with O(logN) runtime complexity = Binary Search.

Input format
First line contains N, the number of distinct integers. Second line contains N space separated integers.

Output format
Print the index of target element if found else return -1.

Sample Input 1
5 7

1 3 5 7 13

Sample Output 1
3

Explanation
Target integer 7 is at index 3.
*/

// binary search algo 
// TC => O(log(n)) 
// SC => O(1)

function searchTarget(N,A,X) {
    let l = 0 , r = N-1
    while(l <= r){
        const mid = Math.floor((l+r)/2)
        if(A[mid] == X){
            return mid
        }else if(X > A[mid]){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }

    return -1
}

let arr = [1, 3 ,5, 7, 13]

let result = searchTarget(5,arr,7)
console.log("7 is at index : " , result)