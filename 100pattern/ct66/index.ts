// bad 
interface Example {
    showMessage(m:number): string;
    showMessage(m:string): string;
    showMessage(m:boolean): string;
}

// good
interface Example2 {
    showMessage(m: number | string | boolean): string
}