"use strict";
function displayType2(id, name) {
    console.log(typeof (id) + ", " + typeof (name));
}
displayType2(1, "Steve");
function countAndDescribe(element) {
    let descText = 'Got no value.';
    if (element.length === 1) {
        descText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descText = 'Got ' + Element.length + ' elements.';
    }
    return [element, descText];
}
console.log(countAndDescribe('Hi There!'));
