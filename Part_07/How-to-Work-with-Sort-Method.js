/**
 * How to Work with Sort Method
 * Sort Method = Mutable
 */

let numbers = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];
// a = 2, b = 5
numbers.sort((a, b) => a - b);
console.log(numbers);

// If we want to sort strings then what should we do?
let strings = ["apple", "Cat", "Ball", "Apple"];

strings.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(strings);

// what if we have two strings that start with same letter?
let strings2 = ["Apple", "Ant", "Cat", "Ball"];

strings2.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});
console.log(strings2);

// sort array with objects
const team = [
  { id: 5, name: "Mohosin" },
  { id: 2, name: "Rasel" },
  { id: 1, name: "Akash" },
  { id: 4, name: "Didar" },
  { id: 3, name: "Nayem" },
];

// sort by id
team.sort((a, b) => {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
});
console.log(team);

// sort by name
team.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});
console.log(team);
