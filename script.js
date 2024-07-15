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
        case "×":
            return multiply(firstNumber, secondNumber);
        case "÷":
            return divide(firstNumber, secondNumber);
    }
}

const smallInput = document.querySelector(".small-input");
const outputDisplay = document.querySelector(".large-input");
smallInput.textContent = "";

document.querySelectorAll(".button.number").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        smallInput.textContent += value;
    })
})

document.querySelectorAll(".button.symbol").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        smallInput.textContent += " " + value + " ";
    })
})

document.querySelector("#clear").addEventListener("click", () => {
    smallInput.textContent = "";
    outputDisplay.textContent = "0";
})


document.querySelector("#del").addEventListener("click", () => {
    const value = smallInput.textContent;
    if (value[value.length - 1] === " ") {
        smallInput.textContent = value.substring(0, value.length - 3);
    } else {
        smallInput.textContent = value.substring(0, value.length - 1);
    }
})

document.querySelector("#equals").addEventListener("click", () => {
    const input = smallInput.textContent;
    const splitInput = input.split(" ");
    const numberOne = Number(splitInput[0]);
    const numberTwo = Number(splitInput[2]);
    const operator = splitInput[1];
    const result = operate(numberOne, numberTwo, operator);
    if (result % 1 != 0) {
        outputDisplay.textContent = result.toFixed(2);
    } else {
        outputDisplay.textContent = result;
    }
})