

const cart = ["shoes", "watch", "belt", "pen"];

function validCart(cart){
    return true;
}

function validOrder(orderId){
    return true;
}

function validPayment(paymentInfo){
    return true;
}

function createOrder (cart){
    const promise = new Promise ((resolve, reject) =>{
        if (!validCart(cart)){
            const error = new Error("Cart is not valid");
            reject(error);
        }
        const orderId = "1234";
        if (orderId){
            setTimeout(function(){
                resolve(orderId);
            },3000);
        }
    })
    return promise;
}


function proceedToPayment (orderId){
    const promise = new Promise ((resolve, reject) => {
        if (!validOrder(orderId)){
            const error = new Error ("Order is not valid");
            reject(error);
        }
        const paymentInfo = "payment_success";
        if (paymentInfo){
            setTimeout(function(){
                resolve(paymentInfo);
            }, 3000);
        }
    });
    return promise;
}


function showOrderSummary (paymentInfo){
    const promise = new Promise ((resolve, reject) => {
        if (!validPayment(paymentInfo)){
            const error = new Error ("Invalid payment details");
            reject(error);
        }
        if (paymentInfo){
            setTimeout(function(){
                resolve(paymentInfo);
            }, 1000);
        }
    });
    return promise;
}


function updateWallet (paymentInfo){
    const promise = new Promise ((resolve, reject) => {
        if (!validPayment(paymentInfo)){
            const error = new Error ("Payment failed");
            reject (error);
        }

        if (paymentInfo){
            setTimeout(function(){
                resolve(paymentInfo);
            }, 1000);
        }
    });
    return promise;
}

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWallet(paymentInfo);
})
.catch(function(error){
    console.log(error.message);
})
.then(function(orderId){
    console.log("The end");
});