/**
 * Problem Description
You are given a list of words present in a book. Your younger brother is really curious to know the frequencies of each word present inside the book.

Write a program to calculate the frequencies of each word present in the book in sorted order.

Input format
The first line of each test case is N, N is the number of input strings. The second line of each test case contains N input S[i].

Output format
Print the frequency of strings in lexicographical sorted order.

Sample Input 1
5

aman

aman

aa

aman

aa

Sample Output 1
aa 2

aman 3

Explanation 1
In the given input, the frequency of aa is 2 and that of aman is 3.
 */

function wordFrequencies(words) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      let prevCount = map.get(words[i]);
      map.set(words[i], prevCount + 1);
    } else {
      map.set(words[i], 1);
    }
  }
  console.log(map)
  let ans = [];
  map.forEach((key, val) => {
    ans.push([val, key]);
  });
  return ans.sort();
}

let wordArr = ["aman", "aman", "aa", "aman", "aa"];
let result = wordFrequencies(wordArr)
console.log(result)
