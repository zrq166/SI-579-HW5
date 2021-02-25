/*
In HW5, I used two 3rd-party libraries.

1. lodash
    I used lodash to perform calculations. I used _.round(), _divide(), _multiply() functions.
2. bootstrap
    I used bootstrap to create the navbar.
    For example, I used class="navbar navbar-expand-lg navbar-light bg-light", the classes in bootstrap are very useful.
 */


function divide() {
    let num1 = document.getElementById("first-number").value;
    let num2 = document.getElementById("second-number").value;
    document.getElementById("divide-output").innerHTML = _.round(_.divide(num1, num2), 2);
}

function multiply() {
    let num1 = document.getElementById("first-number1").value;
    let num2 = document.getElementById("second-number1").value;
    document.getElementById("multiply-output").innerHTML = _.multiply(num1, num2);
}


const add_button = document.getElementById('divide-button');
add_button.addEventListener('click', divide);

const multiply_button = document.getElementById('multiply-button');
multiply_button.addEventListener('click', multiply);

