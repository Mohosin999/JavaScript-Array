/**
 * Hands On Reduce
 */

let numbers = [1, 2, 3, 4, 5];

// Implementing Sum
function sumFunc(a, b) {
  return a + b;
}

const sum = numbers.reduce(sumFunc);
console.log(sum);

// Implementing Average
const avg = numbers.reduce((acc, cur, index, array) => {
  acc += cur;
  if (index == array.length - 1) {
    return acc / array.length;
  }
  return acc;
});

console.log(avg);
