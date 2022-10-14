function displayType<T extends number, U>(id:T, name:U): void { 
  console.log(typeof(id) + ", " + typeof(name));  
}

displayType<number, string>(1, "Steve"); // number, string
