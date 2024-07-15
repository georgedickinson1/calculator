function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

let inputDisplay = "";

const smallInput = document.querySelector(".small-input");
smallInput.textContent = inputDisplay;

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        smallInput.textContent += value;
    })
})