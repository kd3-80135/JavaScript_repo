//"use strict";

console.log(this);

function abc(){
    console.log(this)
}
abc();

const obj = {
    a : 10,
    x : function (){
        console.log(this);
    }
}
obj.x();