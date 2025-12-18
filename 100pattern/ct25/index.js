let obj = { a: 1, b: 2, c: 3 };
console.log(obj.a, obj.b, obj.c);

function getObj(obj) {
  const a = obj.a;
  const b = obj.b;
  const c = obj.c;
  console.log(a, b);
}
getObj(obj);

// new
const { a, b, c, d } = obj;
console.log(a, b, c);
const arr = [1, 2, 3];

//old2
const first = arr[0];
const second = arr[1];
//new
const [first2, second2] = arr;
console.log(first2, second2);

// newway write func
function getObj2(obj) {
  const { a, b } = obj;
  console.log(a, b);
}
getObj2(obj);

// bested
function getObj3({ a, b, d = 10 }) {
  console.log(a, b, d);
}
getObj3(obj);

const user = { profile: { name: "a", age: 20 } };
const { profile: { name, age }} = user;
console.log(name, age);
