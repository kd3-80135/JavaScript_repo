
console.log("Start");

setTimeout(function(){
    console.log("Callback");
}, 1000);

console.log("End");

let startDate = new Date().getTime;
let endDate = startDate;
while (endDate < startDate + 5000){
    endDate = new Date().getTime();
    console.log(endDate);
}

console.log("While expires");