const api = "https://jsonplaceholder.typicode.com/todos/1";

const user = fetch(api);

user.then(function(data){
    console.log(data);
})