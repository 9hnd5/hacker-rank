function repeatedString(s, n) {
  let count = 0;
  const repeatCount = Math.floor(n / s.length);
  const partialCount = n % s.length;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") count++;
  }
  count *= repeatCount;

  for (let i = 0; i < partialCount; i++) {
    if (s[i] === "a") count++;
  }
  return count;
}

console.log(repeatedString("aab", 882787));
