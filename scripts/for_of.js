"use strict";
let colors = ['red', 'green', 'blue'];
for (let index in colors) {
    console.log(colors[index]);
}
for (let color of colors) {
    console.log(color);
}
//string with for of
let letters = "ABC";
for (let letter of letters) {
    if (letter === 'A') {
        console.log('Found A');
    }
    console.log(letter);
}
