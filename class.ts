class Student{
    constructor(name){
        this.name = name;
        
console.log(this.name + " Constructor called")
    }
    greet(){} //methd

    static staticMethod(){
        console.log("Static method");
    }
}

let s = new Student("john");

console.log(s.greet === Student.prototype.greet) //true

Student.staticMethod();