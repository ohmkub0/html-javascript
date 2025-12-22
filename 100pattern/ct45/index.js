function badFuntion(a,a){
    console.log(a);
    return a+a;
}
console.log(badFuntion(10,4)); // badddddddddddddddd หากตัวแปลซ้ำจะนำค่าตัวหลังมาใช้


function goodFuntion(a,b){
    return a+b;
}
console.log(goodFuntion(10,4)); // ระวังเรื่องการกำหนดตัวแปลใน func