function calculateProductArray(input = []) {
  const n = input.length;
  const output = new Array(n);
  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < n; i++) {
    output[i] = leftProduct;
    leftProduct = leftProduct * input[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[i] = output[i] * rightProduct;
    rightProduct = rightProduct * input[i];
  }

  return output;
}
const output = calculateProductArray([1, 2, 3, 4]);
console.log("Output:", output);
