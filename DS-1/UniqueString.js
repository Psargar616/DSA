/**
 * Problem Description
Given a string S.Implement an algorithm to determine if a string has all unique characters.

Input format
A single line that contains the string S.

Output format
Print "Yes"(without quotes) if S has all unique characters "No"(without quotes) otherwise.

Sample Input 1
abcd

Sample Output 1
Yes
 */

function isUnique(s) {
  let st = new Set();
  let n = s.length;

  for (let i = 0; i < n; ++i) {
    st.add(s[i]);
  }

  if (st.size == s.length) {
    return true;
  } else {
    return false;
  }
}

let ans = isUnique("abcd");
console.log("Is 'abcd' is an unique string  : ", ans);

let ans2 = isUnique("abcc");
console.log("Is 'abcc' is an unique string  : ", ans2);
