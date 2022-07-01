/**
 * Update Existing Elements
 */

/**
 * Easy One
 * If we want to update, we must khow the index
 */
const numbers = [1, 2, 3, 7, 5, 6];
numbers[3] = 4;
// console.log(numbers);

// Array of Objects
const students = [
  { id: 1, name: "Mohosin" },
  { id: 2, name: "Hasan" },
  { id: 3, name: "Akash" },
  { id: 4, name: "Nayeem" },
  { id: 5, name: "Rasel" },
];

const givenID = 4;
const updatedName = "Al Nayeem Khan";

for (let i = 0; i < students.length; i++) {
  if (givenID == students[i].id) {
    students[i].name = updatedName;
    break;
  }
}

console.log(students);
