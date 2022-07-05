/**
 * Combining Data from Different Sources
 */

const courses = [
  {
    id: "OC1",
    name: "Javascript All You Need to Know",
    topic: "javascript",
    price: 2599,
  },
  {
    id: "OC2",
    name: "Dive into NodeJS",
    topic: "nodejs",
    price: 2599,
  },
  {
    id: "OC3",
    name: "Understand ReactJS Core Features",
    topic: "javascript",
    price: 1799,
  },
  {
    id: "OC4",
    name: "Make Fun of Javascript Array",
    topic: "mern",
    price: 1899,
  },
];

const discountedPrice = {
  OC1: 2099,
  OC2: 1899,
  OC3: 1299,
  OC4: 1399,
};

const updatedPrice = courses.reduce((acc, cur) => {
  if (discountedPrice[cur.id]) {
    cur.discountedPrice = discountedPrice[cur.id];
  } else {
    cur.discountedPrice = 0;
  }
  acc.push(cur);
  return acc;
}, []);

console.log(updatedPrice);
