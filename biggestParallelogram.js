const input = [
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 1],
];

function findBiggestParallelogram(matrix) {
  function isRightAngledParallelogram(matrix, row, col, x, y) {
    for (let i = row; i <= x; i++) {
      for (let j = col; j <= y; j++) {
        if (matrix[i][j] !== 1) {
          return false;
        }
      }
    }
    return true;
  }

  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        let area = 0;
        let x = row;
        let y = col;

        while (
          x < matrix.length &&
          y < matrix[row].length &&
          matrix[x][y] === 1 &&
          isRightAngledParallelogram(matrix, row, col, x, y)
        ) {
          let width = y - col + 1;
          let height = x - row + 1;

          if (width === height) {
            area = Math.max(area, width * height);
          }

          x++;
          y++;
        }

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return maxArea;
}

const largestParallelogramArea = findBiggestParallelogram(input);
console.log("Largest parallelogram area:", largestParallelogramArea);
