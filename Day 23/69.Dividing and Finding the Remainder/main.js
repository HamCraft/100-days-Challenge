"use strict";
function divide(num1, num2) {
    let quo = Math.floor(num1 / num2);
    let remainder = num1 % num2;
    return { quo, remainder };
}
console.log(divide(5, 2));
