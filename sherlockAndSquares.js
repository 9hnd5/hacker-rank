function sherlockAndSquares(a, b) {
  let count = 0;
  let num = 1;
  let square = num * num;
  while (square <= b) {
    if (square >= a && square <= b) count++;
    num++;
    square = num * num;
  }
  return count;
}

console.log(sherlockAndSquares(35, 70));
