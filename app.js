var person = {
    name: 'Jomer',
    age: 29,
    hobbies: ['Working Out', 'Reading'],
    role: [2, 'developer']
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
