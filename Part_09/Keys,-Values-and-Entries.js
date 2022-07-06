/**
 * Keys, Values and Entries
 */

const arr = ["a", "b", "c"];

// Keys
const keys = arr.keys(); // 0, 1, 2 Iterator
console.log(keys);
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());

// Values
const values = arr.values(); // 'a', 'b', 'c' Iterator
console.log(values);
console.log(values.next());
console.log(values.next());
console.log(values.next());

// Entries
const entries = arr.entries(); // [0, 'a'], [1, 'b'], [2, 'c'] Iterator
console.log(entries);
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
