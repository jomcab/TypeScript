const person = {
  name: 'Jomer',
  age: 29,
  hobbies: ['Working Out', 'Reading']
};

//mixed array - not advisable to use everytime
let favoriteActivities: any[];
favoriteActivities = ['Sports', 1]

//array of string
let favoriteActivities2: string[];
favoriteActivities2 = ['Sports']

console.log(person.name);

//loop through array
for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}