// old way
function User(fullname) {
    this.fullname = fullname;
}
User.prototype.getFullname = function(){
    return this.fullname;
}
const u = new User('A');                                       
console.log(u.getFullname());

//new
class User2 {
    constructor(fullname) {
        this.fullname = fullname;
    }
    getFullname(){
        return this.fullname;
    }
}
const u2 = new User2('B');                                       
console.log(u2.getFullname());