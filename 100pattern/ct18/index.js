/**
 * @typedef {Object} User
 * @property {string} fullname - ชื่อนาม สกุล
 * @property {number} age - อายุ
 */

/**
 * แสดงข้อมูล user
 * @param {User} user - ข้อมูลผู้ใช้
 * @param {boolean} IsActive - สถานะ
 */
function printUser(user, IsActive) {
  console.log(user.fullname);
  console.log(user.age);
  console.log(IsActive ? "true" : "false");
}
printUser({ fullname: "B", age: 10 }, false);
