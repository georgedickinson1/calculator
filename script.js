// Operation Functions
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

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
    };
};

// Selecting & Assigning Input/Output Display 
const smallInput = document.querySelector(".small-input");
const outputDisplay = document.querySelector(".large-input");
smallInput.textContent = "";

// Connecting Display with Numbers
document.querySelectorAll(".button.number").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        smallInput.textContent += value;
    });
});

let error = false;
let alreadySymbol = false;

// Connecting Display with Symbols
function symbolCall(symbolValue) {
        error = false;
        if (alreadySymbol === true) {
            const result = equals();
            clearAll();
            smallInput.textContent += result + " " + symbolValue + " ";
            alreadySymbol = true;
            console.log("Supposed to be symbol already")
        } else if (alreadySymbol === false) {
            smallInput.textContent += " " + symbolValue + " ";
            alreadySymbol = true;
            console.log("not a symbol")
        };
}

document.querySelectorAll(".button.symbol").forEach(button => {
    button.addEventListener("click", () => {
        const symbolValue = button.textContent;
        symbolCall(symbolValue);
    });
});

// Reset Calculator Function and Assigning to "Clear" Button
function clearAll() {
    alreadySymbol = false;
    if (error === false ) {
        smallInput.textContent = "";
        outputDisplay.textContent = "0";
    } else if (error === true) {
        smallInput.textContent = "";
        outputDisplay.textContent = "ERROR";
        error = false;
    }
};
document.querySelector("#clear").addEventListener("click", () => {
    clearAll();
});

// Backspace Function and Assigning to "Del" Button
function deleteKey() {
    const value = smallInput.textContent;
    if (value[value.length - 1] === " ") {
        smallInput.textContent = value.substring(0, value.length - 3);
    } else {
        smallInput.textContent = value.substring(0, value.length - 1);
    
}};
document.querySelector("#del").addEventListener("click", () => {
    deleteKey();
});

// Equals Function and Assigning to "Equals" Key
function equals() {
    error = false;
    const input = smallInput.textContent;
    const splitInput = input.split(" ");
    // Check if the input forms a valid expression
    if (splitInput.length < 3 || isNaN(Number(splitInput[0])) || isNaN(Number(splitInput[2]))) {
        outputDisplay.textContent = "ERROR";
        error = true;
        clearAll();
        return;
    };
    const numberOne = Number(splitInput[0]);
    const numberTwo = Number(splitInput[2]);
    const operator = splitInput[1];
    const result = operate(numberOne, numberTwo, operator);
    if (!Number.isFinite(result)) {
        outputDisplay.textContent = "ERROR";
        error = true;
        clearAll();
        return;
    } else if (result % 1 != 0) {
        outputDisplay.textContent = result.toFixed(2);
        return result.toFixed(2);
    } else {
        outputDisplay.textContent = result;
        return result;
    }
};
document.querySelector("#equals").addEventListener("click", () => {
    equals();
});

// Key Press Actions
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        smallInput.textContent += event.key;
    } else if (event.metaKey && event.key === "Backspace") {
        clearAll();
    } else if (event.key === "Backspace") {
        deleteKey();
    } else if (event.key === "+" || event.key === "-") {
        symbolCall(event.key);
    } else if (event.key === "/") {
        symbolCall("÷");
    } else if (event.key === "*") {
        symbolCall("×")
    } else if (event.key === "Enter") {
        equals();
    } else if (event.key === ".") {
        smallInput.textContent += ".";
    }
});
