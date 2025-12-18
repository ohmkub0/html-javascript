// old
function add(a, b) {
  b = b !== undefined ? b : 10;
  return a + b;
}
console.log(add(5));

//new
function a(a, b = 10) {
  return a + b;
}
console.log(add(5));

//{}
function logMessage(message, ...moreMessage) {
  const message2 = moreMessage.length > 0 ? moreMessage : "default";
  console.log(message, message2);
}
logMessage("Hey");
logMessage('a','b','c')
