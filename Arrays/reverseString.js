function reverseString(s) {
  let front = 0;
  let back = s.length - 1;

  while (front < back) {
    let first = s[front];
    s[front] = s[back];
    s[back] = first;
    front++;
    back--;
  }
  return s;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["w", "h", "a", "t", "c", "h"]));
