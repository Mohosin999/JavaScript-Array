/**
 * Understand and Implement Linear Search
 */

// using array
let myArray = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
};

const x = linearSearch(myArray, 10);
console.log(x);

// using array with objects
const team = [
  { id: 5, name: "Mohosin" },
  { id: 2, name: "Rasel" },
  { id: 1, name: "Akash" },
  { id: 4, name: "Didar" },
  { id: 3, name: "Nayem" },
];

const mySearch = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

let m = mySearch(team, (item) => item.name == "Nayem");
console.log(m);

let n = mySearch(team, (item) => item.id == 4);
console.log(n);
