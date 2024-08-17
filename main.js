//MATH FUNCTIONS
function add(a, b) {
    return  a+b;
}
// console.log(add(2,5));

function subtract(a, b){
    return a-b;
}
// console.log(subtract(5,2));

function multiply(a,b){
    return a*b;
}
// console.log(multiply(5,2));

function divide(a,b){
    return a/b;
}
// console.log(divide(10,2));

//VARIABLES
let firstNumber;
let operator;
let secondNumber;

//MAIN FUNCTIONS
function operate(op, num1, num2){
    if(op === "+"){
        add(num1, num2);
    } else if(op === "-"){
        subtract(num1, num2);
    } else if(op === "×"){
        multiply(num1, num2);
    } else if(op === "÷"){
        divide(num1, num2);
    }
}



