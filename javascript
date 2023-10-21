let expression = '';
let ans = '';

function appendNumber(number) {
    if (number === 'ans') {
        document.getElementById('result').value += ans;
    } else {
        document.getElementById('result').value += number;
    }
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function appendFunction(func) {
    document.getElementById('result').value += func + '(';
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    expression = document.getElementById('result').value;
    try {
        ans = eval(expression);
        document.getElementById('result').value = ans;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
