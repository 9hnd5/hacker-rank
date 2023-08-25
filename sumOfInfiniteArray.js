function sumOfInfiniteArray(input, n, m) {
  const length = input.length;
  let result = 0;
  for (let i = n; i <= m; i++) {
    const value = input[i];
    if (value) result += input[i];
    else {
      const index = i % length;
      result += input[index];
    }
  }

  return result;
}

console.log(sumOfInfiniteArray([1, 2, 3], 1, 3));
