const obj = {};
const hiddenKey = Symbol("hidden");

obj["fullname"] = "A";
obj[hiddenKey] = "secret password";

for (const key in obj) {
  console.log(key);
}
console.log(Object.values(obj));
console.log(Object.entries(obj));
const s = Object.getOwnPropertySymbols(obj);
const password = obj[s[0]];
console.log(password);

Object.getOwnPropertySymbols(obj).forEach((sym) => {
  console.log(obj[sym]);
});

const hiddenKey2 = Symbol("hidden2");
const map = new Map();
map.set(hiddenKey2, "my password");
for (const [key, value] of map) {
  console.log(key, value);
}

