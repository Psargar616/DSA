/**
 * Problem Description
The sports teacher told the students of a class to assemble in the playground. The order in which the students are standing in the playground is given in an array where each element of the array represents the height of student[i]. Rahul, the class leader, is asked to check if the heights of students at even positions are monotonic (i.e either in non-decreasing order or non-increasing order). Say "increasing" if the students at even positions are standing in non-decreasing order of their heights. Else say “decreasing” if the students at even positions are standing in non-increasing order. Else, say “none”.


Non-decreasing order, for example, is 1,1,2,3,4,4. This basically means increasing order, but a number can also be equal to the previous number.
Similarly non-increasing order means decreasing order, where a number can be equal to the previous number.


Input format
First line contains an integer n (number of students)

Second line contains n space separated integers.


Output format
A string, can be "decreasing", “increasing” or “none”


Sample Input 1
6

12 65 15 72 19 72


Sample Output 1
increasing


Explanation
Students on even positions are student[0], student[2], and student[4], i.e., 12, 15, and 19. Since 12 < 15 < 19, the answer is "increasing".
 */

function classRepresentative(numbers) {
  var nonInc = false;
  var nonDec = false;
  for (let i = 2; i < numbers.length; i++) {
    if (i % 2 == 0) {
      if (numbers[i] > numbers[i - 2]) {
        nonDec = true;
      } else if (numbers[i] < numbers[i - 2]) {
        nonInc = true;
      }
    }
  }

  if (nonInc && nonDec) {
    return "none";
  } else if (nonDec) {
    return "increasing";
  } else {
    return "decreasing";
  }
}

let numbers = [12, 65, 15, 72, 19, 72];
let result = classRepresentative(numbers)
console.log("Result ", result)
