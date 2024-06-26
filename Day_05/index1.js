const promise = new Promise((resolve, reject) =>{
    resolve ("Resolved promise's data");
})

async function sample(){
    return "This is wrapped in a promise";
}

console.log(sample());

sample().then((res) =>{
    console.log(res);
})

async function abc(){
    console.log(await promise);
}

abc();