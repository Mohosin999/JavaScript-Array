/**
 * Map and Filter using Reduce
 */

const numbers = [1, 2, 3, 4, 5];

// Mapped
const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);

// console.log(squares);

// Filter
const filtered = numbers.reduce((acc, cur) => {
  if (cur > 3) {
    acc.push(cur);
  }
  return acc;
}, []);

// console.log(filtered);

// Big Array
const bigArray = [];

for (let i = 0; i < 5000000; i++) {
  bigArray.push(i);
}

// Map and Filter Chain using Main Method - Time Efficiency
console.time("Both");

bigArray.filter((v) => v % 2 == 0).map((v) => v * 2);

console.timeEnd("Both");

/**
 * Map and Filter using Reduce - Time Efficiency
 * Note - If we need to use the map and filter at the same time, we will do it
 *  using Reduce. Using Reduces in this situation will save a lot of time.
 */

console.time("Don");

bigArray.reduce((acc, cur) => {
  if (cur % 2 == 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);

console.timeEnd("Don");
