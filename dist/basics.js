"use strict";
function add_ns(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const showResult = true;
const resultPhrase = 'Result is: ';
const result = add_ns(number1, number2, showResult, resultPhrase);
console.log(result);
