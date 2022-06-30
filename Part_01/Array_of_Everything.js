/**
 * Array of Everything
 */

// Array of Objects
const favchannels = [
  { name: "Stack Learner", url: "https://youtube.com/stacklearner" },
  { name: "Procoder Bd", url: "https://youtube.com/procoderbd" },
  { name: "Learn with Sumit", url: "https://youtube.com/learnwithsumit" },
];

// Array of Functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, div, mod];
const a = 10,
  b = 20;
// Loop and call all functions from Array
for (i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  // console.log(`[${funcs[i].name}] Result - ${result}`);
}

/** Array of Arrays - Multi Dimensional Array
 * [value of 'x', value of 'y']
 */
const pointTable = [
  [0, 0],
  [2, 5],
  [6, 4],
  [10, 22],
];

/**
 * One Dimensional Traverse
 * pointTable[i] - returns this [0, 0], [2, 5] type of array from pointTable
 * pointTable[i][0] - means value of zero index
 * pointTable[i][1] - means value of one index
 */
for (let i = 0; i < pointTable.length; i++) {
  // console.log(`point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);
}

/**
 * Two Dimensional Traverse
 * numbers[0] = [1, 2, 3]
 * numbers[0][j] = 1, 2, 3
 * numbers[i] = [1, 2, 3] / [4, 5, 6] ...
 */
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    // console.log(numbers[i][j]);
  }
}

/**
 * Matrix Example
 */
const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];

const matrixB = [
  [2, 0],
  [5, 2],
  [7, 1],
];

/**
 * matrix works like that
 * [1+2, 3+0]
 * [1+5, 0+2]
 * [1+7, 2+1]
 * create a function named matrixSum
 */

const matrixSum = (A, B) => {
  const result = [];
  for (let i = 0; i < A.length; i++) {
    const row = [];
    for (let j = 0; j < A[i].length; j++) {
      row.push(A[i][j] + B[i][j]);
    }
    result.push(row);
  }
  return result;
};

const C = matrixSum(matrixA, matrixB);
console.log(C);
