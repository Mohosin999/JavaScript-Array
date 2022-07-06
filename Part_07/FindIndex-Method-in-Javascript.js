/**
 * FindIndex Method in Javascript
 * findIndex always return a number
 */

const myArray = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];

let todos = [
  { name: "Project 1", isDone: true },
  { name: "Project 2", isDone: true },
  { name: "Project 3", isDone: false },
  { name: "Project 4", isDone: true },
  { name: "Project 5", isDone: false },
];

const index1 = myArray.findIndex((item) => item == 4);
console.log(index1);

const index2 = todos.findIndex((item) => item.name == "Project 5");
console.log(index2);
