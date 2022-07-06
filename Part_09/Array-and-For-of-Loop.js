/**
 * Array and For of Loop
 */

const arr = ["a", "b", "c"];
const keys = arr.keys();
const values = arr.values();
const entries = arr.entries();

// for of function
const loop = (it, name) => {
  for (let v of it) {
    console.log(`${name} - ${v}`);
  }
};

loop(keys, "KEY");
loop(values, "VALUE");
loop(entries, "ENTRY");

/**
 * for of loop for array
 */
const array = [1, 5, 4, 2, 3, 6];

// array method
for (let value of array) {
  console.log(value);
}

// our method
loop(array, "MyMethod");
