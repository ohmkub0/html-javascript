function testVar(){
    if (true){
        var message = 'this is var message';

    }
    console.log(message);
}

testVar();
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log("==========")
for (let j = 0; j < 5; j++) {
    console.log(j);
}
