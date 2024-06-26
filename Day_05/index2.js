
const promise1 = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Data after promise is resolved");
    }, 2000)
});

const promise2 = new Promise ((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Data after promise is resolved");
    }, 4000)
});

async function abc(){
    console.log("Start");
    console.log(await promise1);
    console.log("uncertainity");

    console.log(await promise2);
    console.log("uncertainity part 2");
}

abc();