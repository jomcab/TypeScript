function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')
class Person2 {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person2();

console.log(pers);

// function Logger(logString: string) {
//   return function(constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger('LOGGING - PERSON')
// class Person2 {
//   name = 'Max';

//   constructor() {
//     console.log('Creating person object...');
//   }
// }

// const pers = new Person2();

// console.log(pers);
