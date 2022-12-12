// syntax = ...[anyname]
// spread operator is opposite of rest

let displayColors = function(message:String, ...colors:string[]) {
    console.log(message)

    
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = "List of Colors:"
let colorArr = ['Orange','Yellow','Indigo'];
displayColors(message,'RED');
displayColors(message,'RED','BLUE');
displayColors(message,'RED','GREEN',"BLUE");

//spread operator is on function call

displayColors(message,...colorArr);

