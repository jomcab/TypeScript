function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

// extractAndConvert({ name: 'Joms'}, 'age'); // will produce an error because 'age' is not akey of obj
extractAndConvert({ name: 'Joms'}, 'name'); // OK