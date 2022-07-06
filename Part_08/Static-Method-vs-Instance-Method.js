/**
 * Static Method vs Instance Method
 */

const arr = [];
// arr.concat(); // Instance Method
// Array.from(); // Static Method

// Example of Javascript Static Method
/**
 * Array.from()
 * Passing the iterable object inside Array.from() returns the array
 */

const set = new Set(["foo", "bit", "buz", "foo"]);
const s1 = Array.from(set);
console.log(s1); //There are many examples to watch from the video

// Array.isArray();

// Array.of();
