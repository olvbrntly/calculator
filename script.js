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

function operate(operator, num1, num2,) {
    switch (operator){
        case '+':
            return calcAdd(num1, num2);
        case '-':
            return calcSubtract(num1,num2); 
        case '*':
            return calcMultiply(num1, num2);
        case '/':
            if(num2===0) return null;
            else return calcDivide(num1,num2);
        case '%':
            return calcPercentage(num1);
        case 'x^y':
            return calcExponent(num1,num2);  
        default: 
            return null; 
    }
  };

//GETS NUMBERS--------------------------------------------------
numberButton.forEach((number)=>{
    number.addEventListener('click', function(){ 
        if(chosenOperator === ""){ 
        num1 += number.textContent;
        display.textContent = num1;
        console.log('num1: ' + num1);   
        } else {
        num2 += number.textContent;
        display.textContent = num1 +chosenOperator + num2;
        console.log('num2: ' + num2);     
        }
    })
});

//GETS OPERATOR----------------------------------------------------
operatorButton.forEach((operator)=>{
    operator.addEventListener('click', function(){
        chosenOperator = operator.textContent;
        if(chosenOperator === 'x^y'){
            display.textContent = num1 + "^";
        }else if(chosenOperator === '%'){
            calculate();
        }else{
        display.textContent = num1 + chosenOperator;
        console.log(`operator: ${chosenOperator}`);
        }
    })
    return chosenOperator;
});

//CALCULATES USING FUNCTIONS ABOVE---------------------------------
function calculate() {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = operate(chosenOperator, num1, num2)
    display.textContent =result
    num1 = result;
    num2 ='';
    console.log(result);
    
};

equalButton.addEventListener('click', calculate);

clearButton.addEventListener('click', clear);


function clear() {
    num1 = "";
    num2 = "";
    chosenOperator = "";
    display.textContent = "";
};
