export type User = {
    fullname: string;
    age: number;
    salary: number;
}

const u: User = { fullname: "john", age: 10, salary: 10000 }

type User2 = Partial<User>;

const u2: User2 = { fullname: "john", salary: 20000 }

type User3 = Pick<User, "fullname" | "age">

const u3: User3 = { fullname: "mary", age: 30}

type User4 = Omit<User, "fullname">;

const u4: User4 = { salary: 50000, age: 50 }

