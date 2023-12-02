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
