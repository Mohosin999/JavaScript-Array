/**
 * Reduce Array Into Single Object
 */

const products = [
  { name: "Javascript Cookbook", price: 350 },
  { name: "Head First Python", price: 200 },
  { name: "Head First Java", price: 400 },
  { name: "Head First Python", price: 200 },
  { name: "Javascript Cookbook", price: 350 },
  { name: "Javascript Cookbook", price: 350 },
  { name: "Head First Python", price: 200 },
];

const result = products.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  return acc;
}, {});

console.log(result);
