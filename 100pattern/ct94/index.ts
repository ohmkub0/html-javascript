const roles = ['admin', 'user', 'guest'] as const;

console.log(roles[1]);

type Role = typeof roles[number];

const myRole: Role = 'user'

console.log(myRole.includes('user2'))

