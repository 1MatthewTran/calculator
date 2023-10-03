const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-everything');

let num1 = '';
let num2 = '';
let operator = '';

function reset(){
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '';
}

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
        if(!operator){
            num2 = null;
        }
        concat = num1.toString() + button.textContent;
        display.textContent = concat;
        num1 = parseFloat(display.textContent);
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click', function(e){
        if(!num2){
            num2 = num1;
            num1 = '';
        }
        else if(num1===''){
        }
        else{
            if(operator==='/' && num1===0){
                alert("DIVIDING BY 0? SHAME ON YOU");
                reset();
                return;
            }
            rslt = operate(operator, num2, num1);
            display.textContent = rslt;
            num2 = rslt;
            num1 = '';
        }
        operator = button.textContent;
    })
});

equalsButton.addEventListener('click', function(e){
    if(operator && (num1 || num1===0)){
        rslt = operate(operator, num2, num1)
        if(operator==='/' && num1===0){
            alert("DIVIDING BY 0? SHAME ON YOU");
            reset();
            return;
        }
        display.textContent = rslt;
        num2 = rslt;
        num1 = '';
        operator = '';
    }
});

clearButton.addEventListener('click', function(e){
    reset();
});

