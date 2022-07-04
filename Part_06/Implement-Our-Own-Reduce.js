/**
 * Implement Our Own Reduce
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

// test
const arr1 = [1, 2, 3];

const result = myReduce(arr1, (acc, cur) => {
  return acc + cur;
});
console.log(result);
