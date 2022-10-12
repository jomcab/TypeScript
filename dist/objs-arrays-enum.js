"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Jomer',
    age: 29,
    hobbies: ['Working out', 'Reading'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports', 1];
let favoriteActivities2;
favoriteActivities2 = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
