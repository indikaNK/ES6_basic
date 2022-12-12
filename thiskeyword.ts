const Employee = {
    id:1,
    greet:function(){
        //to tacle this we need to add the outer value 'this' to inner scope
        let self = this
        setTimeout(function(){
            // console.log(this.id);
            console.log(self.id);
        },1000)  //cou;dnt use arrowF here ?

        setTimeout(()=>{ //possible becouse af does not create its own this and its using parent this
            console.log(this.id);
        },1000)  
    }
}

Employee.greet();