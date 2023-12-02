/*
Problem Description
Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.

Note: The problem provides floating point numbers as inputs.

Input format
First line contains 2 space separated real numbers - x coordinate, y coordinate.

Output format
Print 1, 2, 3 or 4 depending on in which quadrant does the point lie.

Sample Input 1
-5.5 2

Sample Output 1
2
*/


// TODO: Implement this method
function findQuadrant(x,y) {
  if(x > 0 && y > 0){
      return 1
  }else if(x < 0 && y > 0){
      return 2
  }else if(x < 0 && y < 0){
      return 3
  }else if(x > 0 && y < 0){
      return 4
  }

}

console.log(findQuadrant(5.5,-2))


