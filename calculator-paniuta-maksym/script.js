'use strict'

function calculate() {
    let result;
    let num1 = +(document.querySelector('.num1').value);
    let num2 = +(document.querySelector('.num2').value);
    let operator = document.querySelector('.operator_select').value;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break
    }
    if (result % 1 == 0) {
        document.querySelector('.output_res').innerHTML = 'Result is: ' + result
        document.querySelector('.output_res').style.backgroundColor = 'green'
    } else if (result == Infinity || result == -Infinity) {
        document.querySelector('.output_res').innerHTML = 'Hey! It is impossible to divide by zero!';
        document.querySelector('.output_res').style.backgroundColor = '#dd1b1b'
    }
    else {
        document.querySelector('.output_res').innerHTML = 'The result is not an integer! The closest value is ' + Math.round(result) + '.'
        document.querySelector('.output_res').style.backgroundColor = 'orange'

    }
}