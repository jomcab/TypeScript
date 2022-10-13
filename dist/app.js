"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Jomer');
console.log(user1);
let addF;
addF = (n1, n2) => {
    return n1 + n2;
};
