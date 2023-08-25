function pickingNumbers(a) {
  // Write your code here
  // Create a frequency map of the array elements
  const frequencyMap = new Map();
  for (let i = 0; i < a.length; i++) {
    const num = a[i];
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let maxCount = 0;

  // Iterate through the frequency map and check for valid pairs
  for (const [num, count] of frequencyMap) {
    const countWithNext = count + (frequencyMap.get(num + 1) || 0);
    maxCount = Math.max(maxCount, count, countWithNext);
  }

  return maxCount;
}

const test = [1, 1, 2, 2, 4, 2, 1];
console.log(pickingNumbers(test));
