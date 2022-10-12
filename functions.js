"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult; // ERROR!
// combineValues = 5 // ERROR!
console.log(combineValues(8, 8));
addAndHandle(10, 10, (result) => {
    console.log('Callback output: ' + result);
});
