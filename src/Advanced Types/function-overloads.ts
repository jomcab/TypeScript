export { };
type Combinable = number | string;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

// OR
function addv2(a:string, b:string):string;
function addv2(a:number, b:number): number;
function addv2(a: any, b:any): any {
    return a + b;
}

addv2("Hello ", "Jomer"); // returns "Hello Jomer" 
addv2(10, 20); // returns 30 

