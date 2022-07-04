/**
 * Reduce Right
 */

// Nasted Array Reduce Right
const nastedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const result = nastedArray.reduceRight((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(result);
