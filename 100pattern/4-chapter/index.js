const user = {
    id: 1,
    profile: {
       //fullname: 'John Doe', 
       address: {
            city: 'Ubon'
        }
    }
};
// if (user && user.profile.fullname !== undefined) {
// console.log(user.profile.fullname); }
//const fullname = user?.profile?.fullname;
//console.log(fullname);
console.log(user?.profile?.fullname);
