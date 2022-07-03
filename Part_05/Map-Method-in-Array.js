/**
 * Map Method in Array
 */

let names = [
  "stack school",
  "stack learner",
  "stack consultancy",
  "stack library",
];

// Extract Length

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

let arr2 = [];
reuse(names, (value) => {
  arr2.push(value.length);
});
console.log(arr2);

// Get UpperCase Version
let arr3 = [];
reuse(names, (value) => {
  arr3.push(value.toUpperCase());
});
console.log(arr3);

// Get Sliced Version
let arr4 = [];
reuse(names, (value) => {
  arr4.push(value.substr(6)); //
});
console.log(arr4);

/**
 * Map Method Implementation
 * As seen above, the same code seems to be written again and again,
 * As a programmer we will never do that,
 * So below we have implemented our own map method.
 */

function myMap(arr, cb) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(cb(arr[i], i, arr));
  }
  return store;
}

let result = myMap(names, (v) => v.length);
console.log(result);

// Official Map Method
let result1 = names.map((v) => v.toUpperCase());
console.log(result1);

const studentArray = [
  { id: 1, name: "Mohosin Hasan", gpa: 4.17, email: "mohosin@gmail.com" },
  { id: 2, name: "Nayem Khan", gpa: 3, email: "mohosin@gmail.com" },
  { id: 3, name: "Rasel Mondol", gpa: 5, email: "mohosin@gmail.com" },
  { id: 4, name: "Robin Sikdar", gpa: 3.5, email: "mohosin@gmail.com" },
  { id: 5, name: "Akash Mondol", gpa: 5, email: "mohosin@gmail.com" },
];

const mappedStudents = studentArray.map((value) => {
  return {
    ...value,
    title: `Hello ${value.name} - your result has been published.`,
    message: `Hello ${value.name}, you have got gpa-${value.gpa}. You have ${
      value.gpa > 4 ? "Passed" : "Failed"
    }.`,
  };
});

console.log(mappedStudents);
