interface User2 {
  fullname: String;
}
type User = {
  fullname: String;
};
const u: User = { fullname: "john" };
console.log(u.fullname);

type AdminUser = User & {
  role: string;
};
const adminUser: AdminUser = { fullname: "marry", role: "admin" };
console.log(adminUser.role);
