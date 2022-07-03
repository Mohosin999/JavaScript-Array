/**
 * forEach vs for loop
 * First we separated iterating logic by passing the array
 * Secondly we separated business logic by passing the function
 * - because business logic can be different
 */

// Iterating Logic -> Business Logic
function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

// Another Function for Writting Logic
function logic(value, index, array) {
  console.log(value, index, array);
}

// Also Another Function for taking Value
function log(value) {
  console.log(value);
}

reuse([1, 2], log);
reuse(["One", "Two", "Three"], logic);

// forEach method Implementation
function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const nums = [1, 2, 3, 4];
let sum = 0;

myForEach(nums, function (v) {
  sum += v;
});
console.log(sum);

const names = ["Mohosin Hasan Akash", "Ariful Islam Rasel", "Robin Sikdar"];
myForEach(names, (value, index) => {
  console.log(`${index + 1}. ${value}`);
});
