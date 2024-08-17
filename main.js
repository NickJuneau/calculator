//VARIABLES
let firstNumber;
let operator;
let secondNumber;

//MATH FUNCTIONS
function add(a, b) {
    return  a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

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

//DOM MANIPULATOR VARIABLES
const clearButton = document.querySelector('#clear');
const zeroButton = document.querySelector('#zero');
const equalsButton = document.querySelector('#equals');
const oneButton = document.querySelector('#one');
const twoButton = document.querySelector('#two');
const threeButton = document.querySelector('#three');
const subtractButton = document.querySelector('#subtract');
const fourButton = document.querySelector('#four');
const fiveButton = document.querySelector('#five');
const sixButton = document.querySelector('#six');
const multiplyButton = document.querySelector('#multiply');
const sevenButton = document.querySelector('#seven');
const eightButton = document.querySelector('#eight');
const nineButton = document.querySelector('#nine');
const divideButton = document.querySelector('#divide');

const allButtons = document.querySelectorAll('.button');

//ADDING EVENTS

allButtons.forEach((button) => {
    //CHANGING COLOR WHEN HOVERING OVER BUTTON
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgb(225,225,225)';
    });

    button.addEventListener('mouseout', ()  => {
        button.style.backgroundColor = "white";
    });

    //DISPLAYING NUM WHEN DETECTING CLICK
    

});



//DISPLAY FUNCTIONS




