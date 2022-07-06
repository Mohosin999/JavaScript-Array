/**
 * Copy Array Elements
 */

const arr = [1, 2, 3, 4];

// worst
const arr2 = arr;
arr2.push(5);
console.log(arr, arr2);

// Coping Using ES6 Spread Operator [Shallow Copy]
const arr3 = [...arr];
arr3.push(6);
console.log(arr, arr3);

// Shallow Copy vs Deep Copy
const points = [
  [10, 12],
  [2, 55],
  [67, 31],
];

const pointsCopy = [...points];
pointsCopy.push([1, 3]);

// Changing the shallow copy index, changes both places
// But deep copy never change
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 120;

console.log(points);
console.log(pointsCopy);

// [].map [Shallow Copy
const arr4 = arr.map((x) => x);
console.log(arr4);
console.log(arr == arr4); // false, good working

// [].filter [Shallow Copy]
const arr5 = arr.filter(() => true);
console.log(arr5);
console.log(arr == arr5); // false, good working

// [].slice [Shallow Copy]
const arr6 = arr.slice();
console.log(arr6);
console.log(arr == arr6); // false, good working

// [].concat [Shallow Copy]
const arr7 = arr.concat();
console.log(arr7);
console.log(arr == arr7); // false, good working

// Array.from() [Shallow Copy]
const arr8 = Array.from(arr);
console.log(arr8);
console.log(arr == arr8); // false, good working

// JSON.stringify and JSON.parse [Deep Copy]
const pointsDeepCopy = JSON.parse(JSON.stringify(points));

// Want to changes but not working, because it's Deep Copy
pointsDeepCopy[0][0] = 10;
pointsDeepCopy[0][1] = 12;

console.log(points);
console.log(pointsDeepCopy);
