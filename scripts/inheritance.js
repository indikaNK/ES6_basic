"use strict";
class Parent {
    constructor() {
        console.log(name + " Parent Constructor");
    }
    getID() {
        return 10;
    }
}
class Child extends Parent {
    constructor(names) {
        super(name);
        console.log(name + " child Constructor");
    }
    getID() {
        return super.getID();
    }
}
let c = new Child("junior");
console.log(c.getID());
