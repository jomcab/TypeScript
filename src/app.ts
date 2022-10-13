interface Named {
  name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;
user1 = new Person('Jomer');

console.log(user1);

// type AddFn = (a: number, b: number) => number;
// Interfaces as Function Types:
interface AddFn {
  (a: number, b: number): number;
}

let addF: AddFn;

addF = (n1: number, n2: number) => {
  return n1 + n2;
};