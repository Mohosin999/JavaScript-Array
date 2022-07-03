/**
 * Some and Every in Array
 * Some - If any one condition is true, it will return true
 * Every - If every condition is true, it will return true
 */

// Every Method
let productReview = [
  { name: "Mohosin Hasan", response: "positive", ratting: "4" },
  { name: "Mohosin Mondol", response: "negative", ratting: "4" },
  { name: "Nayeem Hasan", response: "positive", ratting: "5" },
  { name: "Roni Talukdar", response: "positive", ratting: "4" },
];

const positive = productReview.every((value) => value.ratting > 3);
if (positive) {
  console.log("100% Positive Reviews");
} else {
  console.log("Some Customers Not Satisfied");
}

/**
 * Every Method Implementation
 */

function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (!cb(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

const akash = myEvery(productReview, (value) => value.ratting > 3);
console.log(akash);

// Some Method
let testRunInSingleMatch = [
  { name: "Sakib Al Hasan", runs: 300 },
  { name: "Mahmudulla Riyad", runs: 350 },
  { name: "Joy Hasan", runs: 311 },
  { name: "Mohosin Hasan Akash", runs: 420 },
];

const atLeastOne = testRunInSingleMatch.some((value) => value.runs >= 400);
console.log(atLeastOne);

/**
 * Some Method Implementation
 */

function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

const atLeastOne1 = mySome((value) => value.runs > 400);
console.log(atLeastOne);
