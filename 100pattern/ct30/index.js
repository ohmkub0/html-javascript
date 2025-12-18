console.log('5'+ 10); //bad

console.log(Number('5')+10); // good

console.log('5' - 2); //bad

console.log(true + 1); //bad

console.log(false + 1); //bad

//good
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean('aaaaaaa'));