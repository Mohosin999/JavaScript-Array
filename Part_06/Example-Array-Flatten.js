/**
 * Example Array Flatten
 */

let nastedArray = [[1, 2], 3, [4, 5]];

// Array Flat Method
const flatArray1 = nastedArray.flat();
console.log(flatArray1);

// we can do the same using reduce method
const flatArray2 = nastedArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flatArray2);
