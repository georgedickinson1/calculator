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

const smallInput = document.querySelector(".small-input");
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
})


document.querySelector("#del").addEventListener("click", () => {
    let value = smallInput.textContent;
    if (value[value.length - 1] === " ") {
        smallInput.textContent = value.substring(0, value.length - 3);
    } else {
        smallInput.textContent = value.substring(0, value.length - 1);
    }
})

