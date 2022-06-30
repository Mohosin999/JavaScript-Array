/**
* To know
* arr[0]  means retype elements of this index
* arr[0] =  means update elements of this index
*/



/**
 * Update Array Elements and Fill Array
 */

// Array Fill Manual Away
const arr1 = new Array(10);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = false;
}



// Array Fill
const arr2 = new Array(10);
arr2.fill(false);



// Update
const names = ["Mohosin", "Nayem", "Abu"];
names[0] = "Mohosin Hasan Akash";
names[1] = "Al Nayem Khan";
names[2] = "Abu Toha Adnan";



// Array Fill and Update (Small Project)
const respons = new Array(9);
respons.fill(false);
for (let i = 0; i < respons.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  respons[i] = rand < 5 ? "X" : "Z";
}
console.log(respons);



// Array is Mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

const updatedNames = update(names);
console.log(names);
console.log(updatedNames);
