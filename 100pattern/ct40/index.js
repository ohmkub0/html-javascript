// old way
const fruits = ["apple", "banana", "cherry"];

// console.log(fruits.indexOf('apple'));
if (fruits.indexOf("apple") !== 1) {
  console.log("hello apple");
} else {
  console.log("apple is not found");
}

// new way
console.log("==============new way=============");
console.log(fruits.includes("apple"));
if (fruits.includes("apple")) {
  console.log("hello apple");
} else {
  console.log("apple is not found");
}
console.log("=============filter==============");
// ระดับ filter
const fruitsToCheck = ['apple', 'banana', 'mango'];
let filterfruits = fruitsToCheck.filter(f => fruits.includes(f));
console.log(filterfruits);



