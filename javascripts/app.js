var num1;
var num2;
var operator;
var screen = document.getElementById('screen');

function getNum(n) {
  if (operator === undefined) {
    num1 = parseInt(n);
    screen.innerHTML = num1;
  } else {
    num2 = parseInt(n);
    screen.innerHTML = num2;
  }
}

// Do maths
function add() {
  screen.innerHTML = (num1 + num2);
}

function subtract() {
  screen.innerHTML = (num1 - num2);
}

function multiply() {
  screen.innerHTML = (num1 * num2);
}

function divide() {
  if (num2 == 0) {
    alert("You can't divide by 0. Because I said so!!");
  } else {
  screen.innerHTML = (num1 / num2);
  }
}


// Set an if statement that concatenate digits into num1 or num2 if an operator hasn't been picked yet.

function getOperator(o) {
  operator = o;
  screen.innerHTML = operator;
}


function calculate() {
  if (!num1 || !num2) {
    alert("You must pick a number!")
  } else {
    switch (operator) {
      case '+':
        add();
        break;
      case '-':
        subtract();
        break;
      case '*':
        multiply();
        break;
      case '/':
        divide();
        break;
      case 'CLR':
        erase();
        break;
    }
  }
}

function erase() {
  screen.innerHTML = '';
  num1 = undefined;
  operator = undefined;
  num2 = undefined;
}

//

// Let it get as many digits as the user hits until an operator is pressed.
// Show the user input on the 'screen'

// Get the operator
// Show the user input and operator on the 'screen' ()

// Get second user input
// Let it get as many digits as the user hits until an operator is pressed.
// Show user input on screen along with the operator.

// Getting user inputs should be a function with a loop that only stops when the equals sign is pressed.
