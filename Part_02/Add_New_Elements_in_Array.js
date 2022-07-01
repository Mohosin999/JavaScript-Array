/**
 * Add New Elements
 */

// Use push to insert at the end
const arrP1 = [1, 2, 3];
arrP1[arrP1.length] = 4;
arrP1.push(5);
// we have an arry named arrP2, we can push it two different way
const arrP2 = [6, 7, 8];
// way 01 - from es6 (use it always)
arrP1.push(...arrP2);
// way 02
Array.prototype.push.apply(arrP1, arrP2);
console.log(arrP1);

// Use unshift to insert at the beginning
const arrU1 = [5, 6, 7];
arrU1.unshift(4);
const arrU2 = [1, 2, 3];
arrU1.unshift(...arrU2);
// Array.prototype.unshift.apply(arrU1, arrU2);
console.log(arrU1);

/**
 * Use splice to insert at the given index
 * splice( which index, How many will be deleted, What will sit )
 * we can add any element any where using splice() method
 */
const arrS1 = [1, 2, 3, 5, 9];
arrS1.splice(3, 0, 4);
const arrS2 = [6, 7, 8];
arrS1.splice(5, 0, ...arrS2);
console.log(arrS1);
