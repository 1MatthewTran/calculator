const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');

let num1 = '';
let num2 = '';
let a;
let b;
let operator;
let isNum1 = true;

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){
        return undefined
    }
    return a/b;
}
function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a,b);
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return "Invalid Operator";
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', function(e){
        display.textContent += button.textContent;
    })
});

