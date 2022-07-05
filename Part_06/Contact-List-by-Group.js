/**
 * Contact List by Group
 */

const list = [
  { name: "Mohosin", email: "m@gmail.com" },
  { name: "Hasan", email: "h@gmail.com" },
  { name: "Akash", email: "a@gmail.com" },
  { name: "Mahin", email: "m@gmail.com" },
  { name: "Hasan", email: "h@gmail.com" },
  { name: "Aman", email: "a@gmail.com" },
  { name: "Hasanuzzam", email: "h@gmail.com" },
  { name: "Noyon", email: "n@gmail.com" },
  { name: "Babu", email: "b@gmail.com" },
  { name: "Hasibul", email: "h@gmail.com" },
  { name: "Hasan", email: "h@gmail.com" },
  { name: "Shanto", email: "s@gmail.com" },
  { name: "Bubli", email: "b@gmail.com" },
  { name: "Manik", email: "m@gmail.com" },
  { name: "Didarul", email: "d@gmail.com" },
  { name: "Likhon", email: "l@gmail.com" },
  { name: "Zerin", email: "z@gmail.com" },
  { name: "Labib", email: "l@gmail.com" },
  { name: "Zubaida", email: "z@gmail.com" },
  { name: "Hatun", email: "mohosin@gmail.com" },
];

// first sort this list
list.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

// then grouping using reduce
const group = list.reduce((acc, cur) => {
  const groupName = cur.name.charAt(0).toUpperCase();
  if (acc[groupName]) {
    acc[groupName].push(cur);
  } else {
    acc[groupName] = [cur];
  }

  return acc;
}, {});

// finally make table
const displayList = (group) => {
  const keys = Object.keys(group);
  keys.forEach((key) => {
    console.log(`Group: ${key}`);
    console.table(group[key]);
  });
};

displayList(group);
