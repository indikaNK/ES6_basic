"use strict";
//hoisting
function isFullMoon(fullMoon) {
    if (fullMoon) {
        var greet = "Lupin is a wearwolf !";
    }
    else {
        var greet = "Hi ! Professor !";
    }
    console.log(greet); //var has a functional scope not a block scope
    //var greet; any var declaration should move to top of the code
}
isFullMoon(true);
