/**
 * Problem Description
Given a column title as it appears in an Excel sheet, return its corresponding column number.

For example:

A -> 1

B -> 2

C -> 3

...

...

...

Z -> 26

AA -> 27

AB -> 28

...

...

...

Input format
You will be given a string of Capital English Letters.

Output format
Print the column number corresponding to this string.

Sample Input 1
A

Sample Output 1
1

Sample Input 2
AB

Sample Output 2
28

Sample Input 3
ZY

Sample Output 3
701
 */

// Approach:
// A val in excel is 1, B value is 2, CharCodeAt(A) == 65
// A can be obtained by => 26^0 * (charCodeAt(A) - 64) = 1 
// similarly way AB => 26^1 * (charCodeAt(A) - 64) + 26^0 * (charCodeAt(b) - 64) => 26 + 2 => 28

function excelSheetColumnNumber(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
    const num = s.charCodeAt(i) - 64;
    console.log(num)
    ans = ans * 26 + num;
    console.log(ans)
  }

  return ans;
}

excelSheetColumnNumber('ZY')