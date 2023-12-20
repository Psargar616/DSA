/**
 * Problem Description:
An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.

Input format
There are N+1 lines of input.

First line contains N, the number of intervals

Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

Output format
For the X merged intervals, print each interval (the start and end being space separated) on a separate line

Constraints
1 <= N <= 50000

0 <= A, B <= 1e9

B >= A

Sample Input 1
4

1 3

2 6

8 10

15 18

Sample Output 1
1 6

8 10

15 18

Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

Sample Input 2
2

1 4

4 5

Sample Output 2
1 5

Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]
 */
// solution link : https://www.youtube.com/watch?v=IexN60k62jo
                //:https://www.youtube.com/watch?v=XK_T3ejbK2I
/**
 * 
 * Approach
 * 
        This is based on Python code. Other languages might be different.

        The merge method takes a list of lists as an argument. Each inner list represents an interval, and the first element of the inner list is the start point, and the second element is the end point.

        Check if the given list is empty, if yes, return an empty list.

        Initialize an empty list named merged to store the merged intervals.

        Sort the given list of intervals by the first element of each interval using the sort method and a lambda function.

        Set the variable prev to the first interval of the sorted intervals list.

        Iterate over the sorted intervals list, starting from the second interval.

        Check if the start point of the current interval is less than or equal to the end point of the previous interval.

        If yes, then update the end point of the previous interval with the maximum of the current interval's end point and the previous interval's end point.

        If no, then append the previous interval to the merged list and set prev to the current interval.

        After the loop, append the last interval (prev) to the merged list.
        Return the merged list containing the merged intervals.
 */

// TC O(n)

function mergeIntervals(n, intervals) {
  // [[1 3], [2 6], [8 10] ,[15 18]]

  // sort intervals based on their first indexes

  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals)
  // initialize previous as 1st interval from sorted intervals
  let previous = intervals[0];
  //   add it to result array
  let res = [previous];
  //   define starting and ending indexes
  let st = 0,
    en = 1;
  //
  //   iterate through loop
  for (let current of intervals) {
    // if starting index of current interval <= ending index of previous interval => they overlap
    if (current[st] <= previous[en]) {
      // update starting and ending indexes of previous interval
      previous[st] = Math.min(current[st], previous[st]);
      previous[en] = Math.max(current[en], previous[en]);
    } else {
      // no overlap
      res.push(current);
      //   update previous interval
      previous = current;
    }
  }

  return res;
}
