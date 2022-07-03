/**
 * Filter Method
 * It returns a new array
 */

const studentArray = [
  { id: 1, name: "Mohosin Hasan", gpa: 4, email: "mohosin@gmail.com" },
  { id: 2, name: "Nayem Khan", gpa: 3, email: "mohosin@gmail.com" },
  { id: 3, name: "Rasel Mondol", gpa: 5, email: "mohosin@gmail.com" },
  { id: 4, name: "Robin Sikdar", gpa: 3, email: "mohosin@gmail.com" },
  { id: 5, name: "Akash Mondol", gpa: 5, email: "mohosin@gmail.com" },
  { id: 6, name: "Abid Mondol", gpa: 3, email: "abid@gmail.com" },
  { id: 7, name: "Nafis Hasan", gpa: 5, email: "nafis@gmail.com" },
  { id: 8, name: "Fakib Sheikh", gpa: 4, email: "fakib@gmail.com" },
];

/**
 * Now we want to filter the students who has gpa under 4
 * And send them inspiring message to study more
 */

const lowGpa = studentArray
  .filter((value) => value.gpa < 4)
  .map((value) => {
    return {
      ...value,
      message: `Hello ${value.name}, you result is not good.
       Read well so that you can make a good result in the next exam.`,
    };
  });

console.log(lowGpa);

/**
 * Task
 * Filter Method Implementation
 */

function myFilter(arr, cb) {
  let stored = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      stored.push(arr[i]);
    }
  }
  return stored;
}
