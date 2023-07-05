// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII" currIndex -> 2
// Output: 58         val -> [50, 5, 1, 1, 1]
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV" currIndex -> 5
// Output: 1994         vals -> '1000900904' [1000, 900, 90, 4]
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Input s = 'IV'
// Output = 4

//

function romanToInteger(s) {
  // Things we know, M will always be 1000
  const intVals = {
    M: "1000",
    D: "500",
    C: "100",
    L: "50",
    X: "10",
    V: "5",
    I: "1",
    IV: "4",
    IX: "9",
    XL: "40",
    XC: "90",
    CD: "400",
    CM: "900",
  };
  const currIndex = 0;
  let vals = [];

  while (currIndex < s.length) {
    if (intVals[s[currIndex] + s[currIndex + 1]]) {
      vals.push(Number(intVals[s[currIndex] + s[currIndex + 1]]));
      currIndex += 2;
    } else {
      // we know that it is not a combo, we can just add this number
      vals.push(Number(intVals[s[currIndex]]));
      currIndex++;
    }
  }

  const sum = vals.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum;
}

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

/**
 * Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
 * 
 * 
 */

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX.
// There are six instances where subtraction is used:
