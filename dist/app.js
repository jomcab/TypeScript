"use strict";
let user1;
user1 = {
    name: 'Jomer',
    age: 29,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
