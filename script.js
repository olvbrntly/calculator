//VARIABLES (GLOBAL)-----------------------------------------
let storedNumber = ''
let num1 = '';
let num2 = '';
let chosenOperator = '';
let choosingNumber = false;
let currentNum = '';
let result = '';


//DOM ELEMENTS-------------------------------------------------
let clearButton = document.querySelector('.clear-button');
let decimalButton = document.getElementsByClassName('decimal-button');
let equalButton = document.querySelector('.equal-button');
let numberButton = document.querySelectorAll('.number');
let operatorButton = document.querySelectorAll('.operator')
let button = document.querySelectorAll('button');
let display = document.getElementById('display');
display.textContent = '';
//BASIC MATH FUNCTIONS--------------------------------------

let calcAdd = (a,b) => a+b;
let calcSubtract = (a,b) => a-b;
let calcMultiply = (a,b) => a*b;
let calcDivide = (a,b) => a/b;
let calcPercentage = (a) => a*(.01);
let calcExponent = (a,b) => a**b;

//OPERATE FUNCTION------------------------------------------

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.


function operate(operator, num1, num2,) {
    switch (operator){
        case '+':
            return calcAdd(num1, num2);
        case '-':
            return calcSubtract(num1,num2); 
        case '*':
            return calcMultiply(num1, num2);
        case '÷':
            return calcDivide(num1,num2);
        case '%':
            return calcPercentage(num1);
        case '**':
            return calcExponent(num1,num2);   
    }
  };

// Create the functions that populate the display when you click the 
// number buttons…

numberButton.forEach((number)=>{
    number.addEventListener('click', function(){
       if(num1 === ''){
        num1 += number.textContent;
        display.textContent = num1;
        console.log('num1: ' + num1);   
    }else {
        num2 += number.textContent;
        display.textContent = num2;
        console.log('num2:' + num2);
    }
    })
    
});

operatorButton.forEach((operator)=>{
    operator.addEventListener('click', function(){
        choosingNumber = false;
        chosenOperator = operator.textContent;
        display.textContent += chosenOperator
        console.log(chosenOperator);
    })
    return chosenOperator;
});

function calculate() {
    num1 = Number(num1);
    num2 = Number(num2);
    let result = operate(chosenOperator, num1, num2);
    display.textContent = result;
    num1 = result;
    num2 ='';
    console.log(result);
    
};

function clear() {
    num1 = "";
    num2 = "";
    chosenOperator = "";
    display.textContent = "";

};



equalButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clear);










//you should be storing the ‘display value’ in a variable 
// somewhere for use in the next step.









// Make the calculator work! You’ll need to store the first number that is 
// input into the calculator when a user presses an operator, and also save 
// which operation has been chosen and then operate() on them when the user 
// presses the “=” key.
// You should already have the code that can populate the display, so once 
// operate() has been called, update the display with the ‘solution’ to the 
// operation.
// This is the hardest part of the project. You need to figure out how to
//  store all the values and call the operate function with them. Don’t 
//  feel bad if it takes you a while to figure out the logic























    
