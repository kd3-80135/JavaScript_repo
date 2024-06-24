

const radius = [2, 3, 4, 5];

const calculateArea = function(radius){
    return Math.PI * radius * radius;
}

const calculateCircumference = function (radius){
    return Math.PI * 2 * radius;
}

const calculateDiameter = function (radius){
    return 2 * radius;
}

const calculate = function(radius, logic){
    const output = [];
    for (let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(radius);
console.log(calculate(radius, calculateArea));
console.log(calculate(radius, calculateCircumference));
console.log(calculate(radius, calculateDiameter));
