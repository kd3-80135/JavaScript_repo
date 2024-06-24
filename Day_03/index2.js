const cart = ["shoes", "watch", "pen"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(error){
    console.log(error.message);
});

function createOrder(cart){
    const promise = new Promise((resolve, reject) => {
        if (!validCart(cart)){
            const error = new Error("Cart is not Valid");
            reject(error);
        }

        const orderId = "12345";
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 5000);
        }
    });
    return promise;
}

function validCart (cart){
    return false;
}