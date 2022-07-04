/**
 * Example Array Flatmap
 */

const numbers = [1, 2, 3, 4];

// Flatmap = Map -> Flat

// First Map, Then Flat
const mapped = numbers.map((x) => [x * 2]).flat();
console.log(mapped);

// Do It Using Flatmap
const flatmapped = numbers.flatMap((x) => [x * 3]);
console.log(flatmapped);

// Do It Using Reduce
const flatmapReduced = numbers.reduce((acc, cur) => {
  return acc.concat([cur * 2]);
}, []);
console.log(flatmapReduced);
