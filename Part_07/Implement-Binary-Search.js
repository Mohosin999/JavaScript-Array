/**
 * Implement Binary Search ( Divorce Search )
 */

// Binary Search is a Algorithm
// Binary = something having two parts

let myArray = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];

// lowest = 0 means 0 number index
const binarySearch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);
    if (arr[mid] == key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }
  return -1;
};

// firstly, must sort this array
myArray.sort((a, b) => a - b);

// then apply
const index = binarySearch(myArray, 9);
console.log(index);
