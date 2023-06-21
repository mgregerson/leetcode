var removeTrailingZeros = function (num: string): string {
  let stack: string[] = num.split("");

  while (stack[stack.length - 1] === "0") {
    stack.pop();
  }

  return stack.join("");
};

console.log(removeTrailingZeros("12332400202000"));
