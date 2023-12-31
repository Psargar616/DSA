/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

//  // TC: O(n) || SC: O(1);
var singleNumber = function (nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }

  return ans;
};

// Approach 2 = hashmap
var singleNumber = function (nums) {
  let ht = {};
  for (let num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (let key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {


//   TC: O(nlogn) || SC: O(1);
  let n = nums.length;
  if(n===1) return nums[0];
  nums.sort((a, b)=> a-b);
  if(nums[0]!==nums[1]) return nums[0];
  for(let i = 1;i<n-1;i++){
      if(nums[i]!==nums[i+1] && nums[i]!=nums[i-1]){
          return nums[i];
      }
  }
  if(nums[n-1]!==nums[n-2]) return nums[n-1];


};
