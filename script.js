// let one = document.querySelector('#one');
// let screen = document.querySelector('#screen')

// one.addEventListener(click, display);





//functions
let calcAdd = (a,b) => a+b;
let calcSubtract = (a,b) => a-b;
let calcMultiply = (a,b) => a*b;
let calcDivide = (a,b) => a/b;
let calcPercentage = (a) => a*(.01);
let calcExponent = (a,b) => a**b;




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




// function equal() {


// }

// function clear() {


// }