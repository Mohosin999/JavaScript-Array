/**
 * Compare Two Arrays
 */

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 5, 4];

// Way - 01
if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
  console.log("EQUAL");
} else {
  console.log("NOT EQUAL");
}

// Way - 02 (make a function)
const compare = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
};

const result = compare(arr1, arr2);
console.log(result);

/**
 * Important Question
 * Why can't we compare two arrays or objects?
 * array or object এর ক্ষেত্রে ভেরিয়েবলগুলো ধারন করে রাখে রেফারেন্স
 * দুইটা ভিন্ন instance এর রেফারেন্স কখনো এক হতে পারেনা
 */

console.log(arr1 == arr2); // false, but why? The answer is above -

// but we write
const arr3 = arr1;
console.log(arr1 == arr3); // true
