"use strict";
function combine(input1, input2, resultType) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedNums = combine(30, 26, "as-number");
console.log(combinedNums);
const combinedNumsString = combine(30, "26", "as-number");
console.log(combinedNumsString);
const combinedNames = combine("Joms", "James", "as-text");
console.log(combinedNames);
