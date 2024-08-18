
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



//DOM MANIPULATOR VARIABLES
const clearButton = document.querySelector('#clear');
const zeroButton = document.querySelector('#zero');
const equalsButton = document.querySelector('#equals');
const plusButton = document.querySelector('#plus');
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
const numButtons = document.querySelectorAll('.num');

const display = document.querySelector('#value-output')


//CHANGING COLOR WHEN HOVERING OVER BUTTON
allButtons.forEach((button) => {
    
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = 'rgb(225,225,225)';
    });
    button.addEventListener('mouseout', ()  => {
        button.style.backgroundColor = "white";
    });
});


//DISPLAYING VALUE WHEN BUTTON CLICKED
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

//SPECIAL FUNCTION KEYS
clearButton.addEventListener('click', () => {
    display.textContent = '';
});

equalsButton.addEventListener('click', () => {
    operate(display.textContent);
});


//MATH LOGIC AND UPDATES DISPLAY
function operate(input){
    let num1;
    let operator;
    let num2;
    let splitInput;

    //Addition
    splitInput = input.split('+');
    if(splitInput.length > 1){
        num1 = Number(splitInput[0]);
        num2 = Number(splitInput[1]);
        display.textContent = add(num1, num2);
    }

    //Subtraction
    splitInput = input.split("-");
    if(splitInput.length > 1){
        num1 = Number(splitInput[0]);
        num2 = Number(splitInput[1]);
        display.textContent = subtract(num1, num2);
    }

    //Multiplication
    splitInput = input.split("×");
    if(splitInput.length > 1){
        num1 = Number(splitInput[0]);
        num2 = Number(splitInput[1]);
        display.textContent = multiply(num1, num2);
    }

    //Division
    splitInput = input.split("÷");
    if(splitInput.length > 1){
        num1 = Number(splitInput[0]);
        num2 = Number(splitInput[1]);
        display.textContent = divide(num1, num2);
    }

}