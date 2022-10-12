"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuples
// } = {
//   name: 'Jomer',
//   age: 29,
//   hobbies: ['Working Out', 'Reading'],
//   role: [2, 'developer']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum Role { ADMIN=100, READ_ONLY=200, AUTHOR=300 }
const person = {
    name: 'Jomer',
    age: 29,
    hobbies: ['Working out', 'Reading'],
    role: Role.ADMIN
};
//mixed array - not advisable to use everytime
let favoriteActivities;
favoriteActivities = ['Sports', 1];
//array of string
let favoriteActivities2;
favoriteActivities2 = ['Sports'];
console.log(person.name);
//loop through array
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
