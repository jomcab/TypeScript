function displayType2<T, U>(id:T, name:U): void { 
  console.log(typeof(id) + ", " + typeof(name));  
}

displayType2<number, string>(1, "Steve"); // number, string

// Another Generic Function
interface Properties {
  length: number;
}

function countAndDescribe<T extends Properties>(element: T): [T, string] {
  let descText = 'Got no value.';
  if (element.length === 1) {
    descText = 'Got 1 element.';
  } else if (element.length > 1) {
    descText = 'Got ' + Element.length + ' elements.';
  }

  return [element, descText];
}

console.log(countAndDescribe('Hi There!'));