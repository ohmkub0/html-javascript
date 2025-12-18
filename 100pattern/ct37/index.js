function showMessage() { 
   // setInterval('console.log(test")',3000); // bad
   setInterval(() => {
    console.log('hello'); // good เป็นการส่งฟังชั่นเข้าไปในสตริงแทน
   },3000)


setTimeout(() => {
    console.log('fello');
},3000)
}
showMessage();