/**
 * 1. forEach
 * 2. Map
 * 3. Filter
 * 4. Every
 * 5. Some
 * 6. Reduce
 * 7. Bubble Sort
 * 8. Bubble Sort with Callback
 * 9. Linear Search
 * 10. Binary Search
 * 11. Find
 * 12. Two Array Compare
 */

/**
 * 1. forEach method Implementation
 */

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

/**
 * 2. Map Method Implementation
 */

function myMap(arr, cb) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(cb(arr[i], i, arr));
  }
  return store;
}

/**
 * 3. Filter Method Implementation
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

/**
 * 4. Every Method Implementation
 */

function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

/**
 * 5. Some Method Implementation
 */

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

/**
 * 6. Reduce Method Implementation
 */

function myReduce(arr, cb, init) {
  let acc = init,
    start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}

/**
 * 7. Bubble Sort Implementation
 */

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

/**
 * 8. Implement Bubble Sort with Callback
 */

const bubbleSort1 = (arr, cb) => {
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

/**
 * 9. Linear Search Implementation
 */

// 1. for array
const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return i;
    }
  }
  return -1;
};

// 2. ( for array of object / array of all ) with callback
const mySearch = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

/**
 * 10. Binary Search Implementation
 */

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

/**
 * 11. Find Method Implementation
 * like linear search but some changes
 */

const myFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
};

/**
 * 12. Two Array Compare Function Implement
 */

const compare = (arr1, arr2) => {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;
};
