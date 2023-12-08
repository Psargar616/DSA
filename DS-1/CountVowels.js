/*
Problem Description
Given a string, count the total number of vowels present in that string.

Note: The string contains uppercase and lowercase english alphabets only.

Input format
One line of input, which contains the given string.

Output format
Print the total number of vowels.

Sample Input 1
language

Sample Output 1
4
*/

// TODO: Implement this method
function countVowels(word) {
  let count = 0;
  let str = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count = count + 1;
    }
  }
  return count;
}

let ans = countVowels("language")
console.log("Count vowels in 'language' :",ans);

function countVowels2(s) {
  let m = new Map();
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let ch = s[i];

     if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' 
     || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'   )
      {
        if (m.has(ch)) {
          m.set(ch, m.get(ch) + 1);
        } else {
          m.set(ch, 1);
        }
      }
    }
    return m;
  }

  let ans2 = countVowels2("language")
console.log("Count vowels in 'language' :",ans2);