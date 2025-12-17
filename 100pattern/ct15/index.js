const n1 = 0;
if (n1) {
  console.log("ไม่รันเพราะค่าเป็น falsy");
}

if (n1 === 0) {
  console.log("ไม่มีปัญหา จะรันแค่ n1 = 0");
}

const n2 = undefined; // สำหรับการเช็ค null และ undifined
if (n2 != null) {
  console.log("n2 is defined");
} else {
  console.log("n2 is null or undefined");
}

const text = "0";
if (text !== 0) {
  console.log("text is not empty");
} else {
  console.log("text is empty");
}

const input = 0;
if (typeof input === "number" && input !== 0) {
  console.log("valid number");
} else {
  console.log("invalid number or zero");
}

const obj = { a: 1, b: 2, c: 3 };
if (Object.keys(obj).length > 0) {
  console.log("object is not empty");
} else {
  console.log("object is empty");
}

const array = [];
if (Array.isArray(array)) {
  console.log("this is array");
} else {
  console.log("is not array");
}
