/**
 * Concat Multiple Arrays
 * Concat() method = Immutable
 */

// Way - 01
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// Way - 02 ( Easy Way)
const arr4 = [...arr1, ...arr2];
console.log(arr4);

// Way - 03
const arr5 = [].concat(arr1, arr2);
console.log(arr5);
