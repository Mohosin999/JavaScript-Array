/**
 * Traverse Array Elements
 */

 const arr = [1, 2, 3, 4, 5];


 // Simple Treverse
 for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
 }
 
 
 // Array Sum & Avg
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
 }
 
 console.log(sum);
 console.log(sum / arr.length);
 
 
 
 // Find Largest Num
 const arr1 = [18, 23, 13, 34, 25, 32, 22];
 
 let largestNum = arr1[0];
 for (i = 1; i < arr1.length; i++) {
   if (arr1[i] > largestNum) {
     largestNum = arr1[i];
   }
 }
 console.log(largestNum);



 // Find the Smallest Number
const arr2 = [18, 23, 13, 34, 25, 32, 22];

let smallestNum = arr2[0];
for (i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallestNum) {
    smallestNum = arr2[i];
  }
}
console.log(smallestNum);



// Find the Second Smallest Number
const arr3 = [18, 23, 13, 34, 25, 32, 22];

let minNum = arr3[0],
  secondMinNum = Infinity;
for (i = 1; i < arr3.length; i++) {
  if (arr3[i] < minNum) {
    secondMinNum = minNum;
    minNum = arr3[i];
  } else if (arr3[i] < secondMinNum) {
    secondMinNum = arr3[i];
  }
}

console.log(minNum);
console.log(secondMinNum);



// Find the Second Largest Number
const arr4 = [18, 23, 13, 34, 25, 32, 22];

let maxNum = arr4[0],
  secondMaxNum = Infinity;
for (i = 1; i < arr4.length; i++) {
  if (arr4[i] > maxNum) {
    secondMaxNum = maxNum;
    maxNum = arr4[i];
  } else if (arr4[i] > secondMaxNum) {
    secondMaxNum = arr4[i];
  }
}

console.log(maxNum);
console.log(secondMaxNum);


