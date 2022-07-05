/**
 * Implement Bubble Sort with Callback
 */

const bubbleSort = (arr, cb) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (cb(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

// check by numbers array
const nums = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];

bubbleSort(nums, (a, b) => a - b);
console.log(nums);

// check by array with objects
const team = [
  { id: 5, name: "Mohosin" },
  { id: 2, name: "Rasel" },
  { id: 1, name: "Akash" },
  { id: 4, name: "Didar" },
  { id: 3, name: "Nayem" },
];

// id
bubbleSort(team, (a, b) => a.id - b.id);
console.log(team);

// name
bubbleSort(team, (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(team);
