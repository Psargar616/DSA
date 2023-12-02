function convertToRoman(num) {
  var romanNumToNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var roman = "";
  for (var key in romanNumToNumerals) {
    while (num >= romanNumToNumerals[key]) {
      roman += key;
      num -= romanNumToNumerals[key];
    }
  }
  return roman;
}

convertToRoman(36);
console.log(`convertToRoman(36)`)
console.log(convertToRoman(36))
