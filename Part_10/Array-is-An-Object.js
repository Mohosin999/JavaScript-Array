/**
 * Array is An Object
 */

const arr = [1, 2, 3];
console.log(typeof arr); // object

// Array is a special object

console.log(arr instanceof Array); // true, means its array
console.log(Array.isArray(arr)); // true
console.log(Object.prototype.toString.call(arr) == "[object Array]"); // true
