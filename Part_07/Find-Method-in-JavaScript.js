/**
 * Find Method in JavaScript
 */

let todos = [
  { id: "123", task: "code", time: "morning" },
  { id: "456", task: "workout", time: "afternoon" },
  { id: "789", task: "sleep", time: "night" },
];

const find1 = todos.find((item) => item.task == "workout");
console.log(find1);

let results = [
  { name: "Mohosin", score: 85 },
  { name: "Hasan", score: 70 },
  { name: "Akash", score: 92 },
];

const highest = 92;
const find2 = results.find((item) => item.score == highest);
console.log(find2);

// Find Method Implement
const myFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

const lowest = 70;
const find3 = myFind(results, (item) => item.score == lowest);
console.log(find3);
