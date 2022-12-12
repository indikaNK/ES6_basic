"use strict";
let emp = ["indika", 'kumara', 'MALE'];
//destructure the array to variables
//let[ fname , lname , gender] = emp
// console.log(fname);
// console.log(lname);
// console.log(gender)
//if need only one value gender
let [, , gender] = emp;
// console.log(fname);
// console.log(lname);
console.log(gender);
