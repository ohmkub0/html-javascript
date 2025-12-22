// bad
type userRole = {
  role: string;
};
function assigRole(userRole: userRole) {
  const r = (userRole.role = "member");
  console.log(userRole);
}
assigRole({ role: "member" });

// good
export enum userRole2 {
  Member = "member",
  Admin = "admin",
  Manager = "manager",
}
function assigRole2(userRole: userRole2) {
  console.log(userRole);
}
let x = userRole2.Member;
assigRole2(x);
