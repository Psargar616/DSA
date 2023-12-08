/**
 * Problem Description
Tesla is testing their new car which they will be launching soon. The driver of the car started recording the speed of the car. Let’s assume he always starts with a speed of 1500. Whenever his speed changed, he recorded this change in an array. This array is given to you as input. You have to return a result array with two numbers - the highest speed he ever reached and his final speed.


Input format
First line contains an integer n.

Second line contains n space separated integers.


Output format
Return an array with 2 integers


Sample Input 1
5

100 -200 350 100 -600


Sample Output 1
1850 1250
 */

function tesla(diffs, n) {
  let max = diffs[0];
  let res = [];
  res[0] = 1500 + diffs[0];
  for (let i = 1; i < diffs.length; i++) {
    res[i] = res[i - 1] + diffs[i];
    max = Math.max(max, res[i]);
  }

  return [max, res[res.length - 1]];
}

let diffs = [100, -200, 350, 100, -600];

console.log("Tesla speeds : " + tesla(diffs,5));
