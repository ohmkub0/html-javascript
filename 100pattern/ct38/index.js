const parentObj = {
    address: 'address from prototype'
}

const childObj = Object.create(parentObj);
childObj.province = 'province is an own property';

// ใช้ for...in โดยไม่ตรวจสอบ (bad) จะได้ address มาด้วย!
for (const key in childObj) {
    console.log(`${key}: ${childObj[key]}`);
}
console.log("---good----")
// good ใช้ hasOwnProperty()
for (const key in childObj) {
    if (Object.prototype.hasOwnProperty.call(childObj, key)) {
        const element = childObj[key];
        console.log(element);
    }
}
// good
for (const key in childObj) {
    if (childObj.hasOwnProperty(key)) {
        const element = childObj[key];
        console.log(element);
    }
}
console.log("---best---")
// ไม่ต้องใช้ hasOwnProperty เลย
Object.keys(childObj).forEach((key) => {
    console.log(`${key} ${childObj[key]}`);
})

for (const [key, value] of Object.entries(childObj)) {
    console.log(`${key} ${value}`);
}