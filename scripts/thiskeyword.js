"use strict";
const Employee = {
    id: 1,
    greet: function () {
        //to tacle this we need to add the outer value 'this' to inner scope
        let self = this;
        setTimeout(function () {
            // console.log(this.id);
            console.log(self.id);
        }, 1000); //cou;dnt use arrowF here ?
        setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};
Employee.greet();
