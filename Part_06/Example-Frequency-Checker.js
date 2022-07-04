/**
 * Example Frequency Checker
 */

const votes = [
  "javascript",
  "python",
  "python",
  "java",
  "javascript",
  "java",
  "java",
  "python",
];

// acc[cur] = If you want to check the property inside the object,
// you have to use array notation []

const result = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(result);
