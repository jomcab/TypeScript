function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedNums = combine(30, 26);
console.log(combinedNums);
var combinedNames = combine('Joms', 'James');
console.log(combinedNames);
