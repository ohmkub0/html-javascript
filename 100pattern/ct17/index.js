console.log(Number.MAX_SAFE_INTEGER);
console.log(JSON.parse('{"id": 9007199254740992 }')); //ปัดค่าได้ไม่แม่น

const json = '{"id": 9007199254740992 }';
const data = JSON.parse(json, (key, value) => {
  if (key === "id") {
    return value.toString();
  }
  return value;
});
console.log(data);

const json2 = '{"id": "9007199254740992" }';
const data2 = JSON.parse(json2, (key, value) => {
  if (key === "id") {
    return BigInt(value);
  }
  return value;
});
console.log(data2);
