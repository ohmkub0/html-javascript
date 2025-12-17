const numbers = [1, 2];

const result = numbers.map(function(num){
    return num * 2;
});
console.log(result);

const result2 = numbers.map(num => num * 2);
console.log(result2);