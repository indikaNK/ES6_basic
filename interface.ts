interface Person{
    fname:string;
    lname:string;
    age?:number //? makes age optional property
}

let employee : Person = {
    fname: "peter",
    lname: "parker"
    //age is optional
}