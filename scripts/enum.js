"use strict";
// enum eyeColor{brown,black,blue}
//can assign values
var eyeColor;
(function (eyeColor) {
    eyeColor[eyeColor["brown"] = 1] = "brown";
    eyeColor[eyeColor["black"] = 0] = "black";
    eyeColor[eyeColor["blue"] = 2] = "blue";
})(eyeColor || (eyeColor = {}));
let myEyeColor = eyeColor.brown;
console.log(myEyeColor); //result will be 1
console.log(eyeColor[myEyeColor]); //brown
