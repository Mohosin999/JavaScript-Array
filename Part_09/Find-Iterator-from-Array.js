/**
 * Find Iterator from Array
 */

const arr = ["a", "b", "c"];

/**
 * find iterator from array using "Symbol.iterator"
 * "arr[Symbol.iterator]" - since a function so call function like below
 * "arr[Symbol.iterator]()"
 */
const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
