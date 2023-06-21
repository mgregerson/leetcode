// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

function stringIncrementer(string) {
  // we need to check if the last character in the string is a number
  // if it is, we need to iterate across the end of the string, adding these values;
  let currIndex = string.length - 1;
  if (isNaN(Number(string[currIndex]))) {
    return string.concat(1);
  } else {
    while (isNaN(Number(string[currIndex])) === false) {
      currIndex--;
    }
  }
  let currNumber = string.slice(currIndex + 1, string.length);
  let numberType = Number(string.slice(currIndex + 1, string.length));

  if (currNumber[0] === "0") {
    while (currNumber[0] === "0" && currNumber.length > 1) {
      currNumber = currNumber.slice(1);
      numberType = Number(currNumber);
    }
  }
  if (currNumber === "0") {
    let result = string.slice(0, -1) + "1";
    return result;
  }

  return string.replace(currNumber, numberType + 1);
}

console.log(stringIncrementer("foo000"));
