function findDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((pre, curr) => {
      if (+curr === 0) return pre;
      if (number % curr === 0) {
        const newValue = pre + 1;
        return newValue;
      }
    }, 0);
}
console.log(findDigits(1012));
