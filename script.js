//VARIABLES (GLOBAL)
let firstOperand = '';
let secondOperand = '';

//DOM---------------------------------------------------------
let clearButton = document.getElementsByClassName('clear-button');
let decimalButton = document.getElementsByClassName('decimal-button');
let equalButton = document.getElementsByClassName('equal-button');
let numberButton = document.getElementsByClassName('number-button');
let operatorButton = document.getElementsByClassName('operator-button');
let button = document.querySelectorAll('button');
let screen = document.getElementById('screen');

//BASIC MATH FUNCTIONS----------------------------------------
let calcAdd = (a,b) => a+b;
let calcSubtract = (a,b) => a-b;
let calcMultiply = (a,b) => a*b;
let calcDivide = (a,b) => a/b;
let calcPercentage = (a) => a*(.01);
let calcExponent = (a,b) => a**b;

//OPERATE FUNCTION--------------------------------------------
function operate(num1, num2, operator) {
    switch (operator){
        case '+':
            return calcAdd(num1, num2);
  
        case '-':
            return calcSubtract(num1,num2); 
        
        case '*':
            return calcMultiply(num1, num2);
  
        case '/':
            return calcDivide(num1,num2);
  
        case '%':
            return calcPercentage(num1,num2);
  
        case '**':
            return calcExponent(num1,num2);
          
    }
  }

  function calculate() {
     
  }


//EVENT LISTENERS--------------------------------------------
for(let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', clicked);
 }

// for(let i = 0; i < clearButton.length; i++) {
//    clearButton[i].addEventListener('click', clicked);
// }

// for(let i = 0; i < decimalButton.length; i++) {
//     decimalButton[i].addEventListener('click', clicked);
// }

// for(let i = 0; i < equalButton.length; i++) {
//     equalButton[i].addEventListener('click', clicked);
// }

// for(let i = 0; i < numberButton.length; i++) {
//     numberButton[i].addEventListener('click', clicked);
// }

// for(let i = 0; i < operatorButton.length; i++) {
//     operatorButton[i].addEventListener('click', clicked);
// }

//CLICK FUNCTIONS---------------------------------------------
function clicked(event) {
    screen.textContent = event.target.textContent;
    firstOperand = screen.textContent;
    console.log(firstOperand);
}




// function calculate
    //read which number user clicks
    //display number on screen
    //save that number
    
    //if user clicks an operator
    //when user clicks operate read which operator
    //display operator

    //read which number user clicks //SECOND NUMBER
    //display number on screen
    //save that number

    //if equal is clicked 
    //operate using correct function 
    //save result
    //display result

    //if user clicks clear, erase all data

    //solves in order entered not PEMDAS



// function equal() {


// }

// function clear() {


// }


//doesnt quite work

// for(let i=0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         screen.innerText += this.innerText;
//     });
// }
