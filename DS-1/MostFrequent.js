/*
Problem Description
You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

Input format
One line of input containing the string S.

Output format
You will have to output two space separated values:

The character which occurs the maximum number of times.

The number of its occurrence.

Sample Input 1
Statements are unique.

Sample Output 1
e 4
*/

function mostFrequent(text) {
  // create new map
  let map = new Map();
  // for each char in text
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    // if char is already present = update its count
    if (map.has(c)) {
      let prevCount = map.get(c);
      map.set(c, prevCount + 1);
    } else {
      // if char is not present = create new entry in map
      map.set(c, 1);
    }
  }

  let c = ".", count = 0;
  // for each entry in map
  for (const [currentKey, currentValue] of map) {
    // if count char entry in map  > count
    if (currentValue > count) {
      c = currentKey;
      count = currentValue;
    } else if (currentValue == count) {
      // if count char entry in map == count , then check if key has lower ascii val and update
      if (currentKey < c) {
        c = currentKey;
      }
    }
  }

  return [c, count];
}

let ans = mostFrequent("aaaaAAAA");
console.log("Most frequent letter in string 'aaaaAAAA' : ", ans);
