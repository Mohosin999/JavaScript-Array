/**
 * Prototype of an Array
 * Never Touch Original Prototype
 * You can see the below code just understand, nothing else
 */

const arr = [1, 2, 3, 4];

console.log(arr.constructor.prototype);
console.log(Array.prototype);

// to see all array method from prototype
console.log(Object.getOwnPropertyNames(Array.prototype));

// keep our own method inside prototype - 01
Array.prototype.log = function () {
  console.log(this.join(" | "));
};
arr.log();

const names = ["Mohosin", "Hasan", "Akash"];
names.log();

// keep our own method inside prototype - 02
Array.prototype.loop = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

names.loop((v) => {
  console.log(`My name is ${v}`);
});

arr.loop((v) => {
  console.log(`V = ${v}, V*2 = ${v * 2}`);
});
