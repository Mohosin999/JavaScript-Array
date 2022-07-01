/**
 * Slice Array into Multiple Arrays
 */

const arr = [1, 2, 3, 4, 5, 6];

/**
 * Slice( start, end)
 * start - inclusive
 * end - exclusive
 */
const sliced = arr.slice(0, 3);
console.log(sliced);

// Clone Array
const cloned = arr.slice();
console.log(arr == cloned);

// Array Like Objects to Array
function toArray() {
  return Array.prototype.slice.call(arguments);
}

const argArray = toArray(1, 2, 3, "test", 4, false, 5, 6);
console.log(argArray);
