// without type casting
let userInputElement = document.getElementById('user-input');
//userInputElement.value = 'Hi there!'; // will produce an error: Property 'value' does not exist on type 'HTMLElement'.

// with type casting
let userInputElement2 = document.getElementById('user-input') as HTMLInputElement;
userInputElement2.value = 'Hi there!'; // OK