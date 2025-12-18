let users = ["j", "m", "b"];
let userCount = users.length;

// bad
for (let i = 0; i < userCount; i++) {
  console.log(users[i]);
}
console.log("---------for of----------");
// good
for (const user of users) {
  console.log(user);
}
let text = "hello JavaScript";
for (const element of text) {
  console.log(element);
}

let capitals = new Map([
  ["thailand", "bangkok"],
  ["japan", "tokyo"],
]);
for (const [c, cap] of capitals) {
  console.log(c + capitals);
}

let fruits = ["apple", "Banana"];
let colors = ["red", "yellow"];

for (const fruit of fruits) {
  for (const color of colors) {
    console.log((fruit) + " might be " + (color));
  }
}
