// bad 
interface Example {
    diff(one: string): number;
    diff(one: String, two:string): number;
    diff(one: String, two:string, three:string): number;
}

// good
interface Example2 {
    diff(one: string, two?: string, three?: boolean): number;
}