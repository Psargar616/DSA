/**
 * Problem Description
Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

Input format
First line contains an integer N, indicating the number of meetings.

Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

Output format
Print the minimum number of rooms required.

Constraints
N <= 100000

0 <= S,E <= 1000000000 (10^9)

Si < Ei

Sample Input 1
3

0 20

5 10

10 15

Sample Output 1
2

Explanation 1
One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

So, only 2 rooms are required if total for the 3 meetings.
 */

// link : https://codereview.stackexchange.com/questions/221927/given-time-intervals-find-the-minimum-number-of-conference-rooms-required
// video soln : https://www.youtube.com/watch?v=ATzqMCYXz0Q

function meetingRooms(meetings) {
  if (meetings.length <= 1) {
    return meetings.length;
  }
  //   console.log(meetings)
  const startTimesArr = [];
  const endTimesArr = [];
  meetings.forEach((x) => {
    startTimesArr.push(x[0]);
    endTimesArr.push(x[1]);
  });
  //   console.log("startTime " , startTimes)
  startTimesArr.sort((a, b) => a - b);
  //   console.log("endTimes " ,endTimes )
  endTimesArr.sort((a, b) => a - b);
  //    console.log("after sorting ")
  //   console.log("startTime " , startTimes)
  
  //    console.log("endTimes " ,endTimes )

  let endPtr = 0;
  let rooms = 0;
  for (let startPtr = 0; startPtr < meetings.length; startPtr++) {
    if (startTimesArr[startPtr] < endTimesArr[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
  }
  return rooms;
}

intervals = [[0, 30],[5, 10],[15, 20]]
let ans = meetingRooms(intervals) 
console.log(ans)