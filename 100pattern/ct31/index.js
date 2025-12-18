//bad
function getDayName(day) {
    switch(day) {
        case 1: return 'one chan';
        case 2: return 'one angkarn'
    }
}
console.log(getDayName(5));

//good
function getDayName(day) {
    switch(day) {
        case 1: return 'one chan';
        case 2: return 'one angkarn'; 
        default: return 'one nee maimee nai case';
        break;
    }
}
console.log(getDayName(5));
// อย่าลืม break ในกรณีที่ไม้ได้ return