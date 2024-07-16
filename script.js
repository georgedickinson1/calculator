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


// Key Press Actions
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        smallInput.textContent += event.key;
    } else if (event.metaKey && event.key === "Backspace") {
        clearAll();
    } else if (event.key === "Backspace") {
        deleteKey();
    } else if (event.key === "+" || event.key === "-") {
        smallInput.textContent += " " + event.key + " ";
    } else if (event.key === "/") {
        smallInput.textContent += " " + "÷" + " ";
    } else if (event.key === "*") {
        smallInput.textContent += " " + "×" + " ";
    } else if (event.key === "Enter") {
        equals();
    } else if (event.key === ".") {
        smallInput.textContent += ".";
    }
});

document.querySelectorAll(".button.symbol").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        smallInput.textContent += " " + value + " ";
    })
})

function clearAll() {
    smallInput.textContent = "";
    outputDisplay.textContent = "0";
}

document.querySelector("#clear").addEventListener("click", () => {
    clearAll();
})

function deleteKey() {
    const value = smallInput.textContent;
    if (value[value.length - 1] === " ") {
        smallInput.textContent = value.substring(0, value.length - 3);
    } else {
        smallInput.textContent = value.substring(0, value.length - 1);
    
}}

document.querySelector("#del").addEventListener("click", () => {
    deleteKey();
})

function equals() {
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
}
document.querySelector("#equals").addEventListener("click", () => {
    equals();
})