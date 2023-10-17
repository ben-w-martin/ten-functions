"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

let input;
const isTrue = (input) => {
    if (input === true) {
        return true;
    } else {
        return false;
    }
}

const isFalse = (input) => {
    if (input === false) {
        return true;
    } else {
        return false;
    }
}
console.log(isFalse(null));
console.log(null === false);

const not = (input) => !(input);

const addOne = (input) => parseFloat(input) + 1;

const isEven = (input) => (parseFloat(input) % 2 === 0);

const isIdentical = (x, y) => x === y;

const isEqual = (x, y) => x == y;

const or = (x, y) => x || y;

const and = (x, y) => x && y;

const concat = (x, y) => x.toString() + y.toString();
console.log(concat(4, 2));
