let firstname = "indka";
let lastname = "n kumara";

let Person = {
     firstname : firstname,
     lastname: lastname
}

console.log(`Your name is ${Person.firstname} ${Person.lastname}`);

//when the property name is same as variablename name

let Person1 = {
    firstname,
    lastname
}

console.log(`Your name is ${Person.firstname} ${Person.lastname}`);

/*
    in es6 we can have object properties with spaces


let variable = "last line"
let Person = {
     "first name" : firstname,
     lastname: lastname
     [variable]:"new line"
}
when access p["first name"]

*/

