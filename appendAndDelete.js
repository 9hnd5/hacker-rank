function appendAndDelete(s, t, k) {
  const source = s,
    dest = t,
    step = k;

  if (step >= source.length + dest.length) return "Yes";

  if (source === dest && step % 2 === 0) return "Yes";

  let count = 0;
  for (let i = 0; i < dest.length; i++) {
    if (source[i] === dest[i]) {
      count++;
    } else break;
  }

  const sourceStep = source.length - count;
  const destStep = dest.length - count;
  const minStep = sourceStep + destStep;
  if (minStep % 2 === 0 && step % 2 === 0 && step >= minStep) return "Yes";
  if (minStep % 2 != 0 && step % 2 != 0 && step >= minStep) return "Yes";
  return "No";
}

console.log(appendAndDelete("aaaaaaaaaa", "aaaaa", 7));
console.log(appendAndDelete("zzzzz", "zzzzzzz", 4));
console.log(appendAndDelete("ashley", "ash", 2));
console.log(appendAndDelete("aaa", "a", 5));
console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
console.log(appendAndDelete("aba", "aba", 7));
console.log(appendAndDelete("abcd", "abcdert", 10));
console.log(
  appendAndDelete(
    "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv",
    "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv",
    20
  )
);
