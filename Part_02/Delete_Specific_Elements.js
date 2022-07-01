/**
 * Delete Specific Elements
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Remove First Element
numbers.shift();

// Remove Last Element
numbers.pop(); // way - 01
numbers.length = numbers.length - 1; // way - 02

// Remove Inside Elements - Splice using Index
numbers.splice(11, 1); // remove 13

// Remove Inside Elements - Splice using Value
const toBeDeleted = 10;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] == toBeDeleted) {
    numbers.splice(i, 1);
  }
}

/**
 * Filter Array
 * It return new Array
 * So use let, not const
 */
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toBeDeleted1 = 8;
numbers1 = numbers1.filter((item) => item != toBeDeleted1);

// console.log(numbers1);

// Reset Whole Array
let x = [1, 2, 3];
let y = x;
x = [];
console.log(x, y);
// Alternative way
let xx = [1, 2, 3];
let yy = xx;
xx.length = 0;
console.log(xx, yy);

// Reset Array using While Loop
while (xx.length) xx.pop();
console.log(xx);
