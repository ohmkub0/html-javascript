const obj = {};
obj["fulname"] = "marry";
obj["age"] = 20;
console.log(obj);
console.log(Object.keys(obj).length);
delete obj["age"];
console.log(obj);

// new way

const map = new Map();
map.set("fullname", "bob");
map.set("age", 20);
console.log(map);
console.log(map.get("age"));
map.delete("age");
map.set("fullname", "Joe");
console.log(map);
console.log(map.size);
