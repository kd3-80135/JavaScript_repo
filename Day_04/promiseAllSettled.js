const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve ("P1 success");
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        reject ("P2 failure");
    }, 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve ("P3 success");
    }, 5000);
});



Promise.allSettled([p1, p2, p3])
.then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});