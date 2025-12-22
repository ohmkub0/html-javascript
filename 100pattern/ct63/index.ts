// bad
function processInput(input:any){ 
    console.log(input);
}
processInput(('100'));

//good
function processInput2(input:unknown){ 
    if (typeof input === "string"){
    console.log(input.toUpperCase());
    }
}
processInput2(('hello'));