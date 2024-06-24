// const arr = [2, 5, 7, 10];

// console.log(arr.map(function (x){
//     return x.toString(2)
// }))

// console.log(arr.map((x) => x.toString(2)));

// console.log(arr.filter((x) => x%2 === 0));

// console.log(arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
// }, 0));

// console.log(arr.reduce((acc, curr) => {
//     if (curr > acc){
//         acc = curr;
//     }
//     return acc;
// }, 0));

const users = [
    { firstName: "Ashish", lastName: "Gupta", age: 27},
    { firstName: "Tom", lastName: "Cruise", age: 62},
    { firstName: "Tom", lastName: "Riddle", age: 51},
    { firstName: "Sagar", lastName: "Kumar", age: 27}
]

console.log(users.reduce(function(acc, curr){
    if (acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {}))

console.log(users.filter(x => x.age<30).map(x => x.firstName + " " + x.lastName));

console.log(users.reduce((acc,curr) => {
    if (curr.age<30){
        acc.push(curr.firstName + " " + curr.lastName);
    }
    return acc;
}, []))















