function reverseArray(array, m) {
  let j = 1;
  let n = array.length;
  const output = [];

  for (let i = 0; i < n; i++) {
    if (i <= m) {
      output[i] = array[i];
    } else {
      output[i] = array[n - j];
      j++;
    }
  }

  return output;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6], 2));
