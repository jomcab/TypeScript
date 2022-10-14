"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function addv2(a, b) {
    return a + b;
}
addv2("Hello ", "Jomer");
addv2(10, 20);
