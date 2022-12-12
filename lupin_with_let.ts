//hoisting

function FullMoon(fullMoon: any){
    if (fullMoon){
        let greet = "Lupin is a wearwolf !"
        
    }else{
        let greet = "Hi ! Professor !"
        
    }

    //console.log(greet) //let has a block scope not a function scope

    // solution is to remove the let decl in block scope and add it to the top once and reuse
    
}

FullMoon(true)