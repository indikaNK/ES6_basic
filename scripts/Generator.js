"use strict";
function* createGenerator() {
    console.log("init ...");
    yield 1;
    console.log("Generator Running !");
    yield 2;
}
//init
let gen = createGenerator();
//start command
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
