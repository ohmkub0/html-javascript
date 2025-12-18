let book = { tiltle: "s", price: 300 };
// book = "new book";
console.log(book); // bad

const book2 = { tiltle: "s", price: 300 };
// book2 = "new book";
book2.author = "SD";
console.log(book2); // error เพราะเราไม่สามารถ reaasign ตัวแปลได้

for (let index = 0; index < 5; index++) {
  let number = [];
  number.push(index);
  console.log(number);
}

for (let index = 0; index < 5; index++) {
  const number = [];
  number.push(index);
  console.log(number);
}

let arr = [1,2,3];
const arr2 = [1,2,3];
