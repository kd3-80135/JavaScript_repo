const user_api =  "https://api.github.com/users/kd3-8013622";

async function handlePromise(){
    try{
        const data = await fetch(user_api);
        console.log(await data.json());    
    }
    catch (err){
        console.log(err);
    }
}

handlePromise();