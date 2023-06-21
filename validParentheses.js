const pairs = {
  "(": ")",
  "[": "]",
  "{": "}"
}

function validParentheses(string) {
  // check if length is an odd number. if it is, return false
  // if there is an odd number, it means that at least one bracket is missing a pair
  if (string.length % 2 === 1) {
    return false
  }
  // if the first element is a closing bracket, it doesn't matter what follows
  if (string[0] === ')' || string[0] === '}' || string[0] === ']') {
    return false;
  }
  // same goes for last element, we are just dealing with opening bracket
  if (string[0] === '(' || string[0] === '{' || string[0] === '[') {
    return false;
  }

  let stack = [];
  // if it's an opening bracket, push into stack
  // else, assume it's closing bracket and check if it matches anything
}

console.log(validParentheses("(){[]}"));
