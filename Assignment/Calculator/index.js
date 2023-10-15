let currentInput = '';
let previousInput = '';
let operator = '';
let view = '';

function appendToDisplay(value) {
    view += value;
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else {
        currentInput += value;
    }
    document.getElementById('display').value = view;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    const result = performOperation(previousInput, currentInput, operator);
    currentInput = result.toString();
    document.getElementById('display').value = currentInput;
    previousInput = "";
    operator = "";
    view = "";
    currentInput = "";
    console.log(previousInput, currentInput, operator, view)
}

function performOperation(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a);
    console.log(b);
    if (isNaN(a) || isNaN(b)) {
        return 'Invalid Input';
    }

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return 'Cannot divide by zero';
            }
            return a / b;
        default:
            return 'Invalid Operator';
    }
}