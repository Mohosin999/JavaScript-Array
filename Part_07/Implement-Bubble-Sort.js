/**
 * Implement Bubble Sort
 * Two types of sorting available
 * 1. Ascending - small to large
 * 2. Descending - large to small
 */

let myArray = [5, 2, 7, 1, 4, 9, 6, 15, 10, 25, 13, 22, 19];

// arr[j] = 5, arr[j+1] = 2

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

bubbleSort(myArray);

console.log(myArray);
