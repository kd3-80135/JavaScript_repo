
function attachEventListener (){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked " , ++count);
    });
}
attachEventListener();

console.log("Start of Promise object use case");

setTimeout(function cbT(){
    console.log("Call Back SetTimeout");}, 5000);

fetch ("themealdb.com").then(function(){
    console.log("Call Back function after google is called.");
});

console.log("End of Promise object use case");


