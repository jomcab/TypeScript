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
var person = {
    name: 'Jomer',
    age: 29,
    hobbies: ['Working out', 'Reading'],
    role: Role.ADMIN
};
//mixed array - not advisable to use everytime
var favoriteActivities;
favoriteActivities = ['Sports', 1];
//array of string
var favoriteActivities2;
favoriteActivities2 = ['Sports'];
console.log(person.name);
//loop through array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is Admin');
}
