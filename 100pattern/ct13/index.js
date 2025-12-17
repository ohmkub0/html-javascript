const amount1 = 123456.758;
const amount2 = amount1 / 35;
const formatter1 = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
});
console.log(formatter1.format(amount1));
console.log("to");
const formatter2 = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(formatter2.format(amount2));

const formatter3 = new Intl.NumberFormat("th-Th", {
  style: "decimal",
});
console.log(formatter3.format(amount1));

const currentDate = new Date();
const formatter4 = new Intl.DateTimeFormat("th-TH");
console.log(formatter4.format(currentDate));

const formatter5 = new Intl.DateTimeFormat("th-TH", {
  day: "numeric",
  month: "narrow",
  year: "2-digit",
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
});
console.log(formatter5.format(currentDate));
