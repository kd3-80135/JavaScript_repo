function x(){
    console.log("This is x");
}

function y (x){
    console.log("This is y");
    x();
}

y(x);
