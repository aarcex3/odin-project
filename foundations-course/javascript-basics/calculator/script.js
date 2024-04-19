document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let firstOperand = "";
    let secondOperand = "";
    let operator = "";
    let result = "";

    // Function to update display
    function updateDisplay() {
        display.textContent = result || secondOperand || firstOperand || "0";
    }

    // Function to handle digit button clicks
    function handleDigitClick(digit) {
        if (operator === "") {
            firstOperand += digit;
        } else {
            secondOperand += digit;
        }
        updateDisplay();
    }

    // Function to handle operator button clicks
    function handleOperatorClick(op) {
        if (firstOperand !== "" && secondOperand !== "") {
            operate();
        }
        operator = op;
        updateDisplay();
    }

    // Function to perform operation
    function operate() {
        const num1 = parseFloat(firstOperand);
        const num2 = parseFloat(secondOperand);
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "×":
                result = num1 * num2;
                break;
            case "÷":
                if (num2 === 0) {
                    result = "Error";
                } else {
                    result = num1 / num2;
                }
                break;
        }
        firstOperand = "";
        secondOperand = "";
        operator = "";
    }

    // Event listeners for digit buttons
    document.querySelectorAll(".btn:not(.operator)").forEach(button => {
        button.addEventListener("click", () => {
            if (result !== "") {
                result = "";
            }
            handleDigitClick(button.textContent);
        });
    });

    // Event listeners for operator buttons
    document.querySelectorAll(".operator").forEach(button => {
        button.addEventListener("click", () => {
            handleOperatorClick(button.textContent);
        });
    });

    // Event listener for equals button
    document.getElementById("equals").addEventListener("click", () => {
        if (firstOperand !== "" && secondOperand !== "") {
            operate();
            updateDisplay();
        }
    });

    // Event listener for clear button
    document.getElementById("clear").addEventListener("click", () => {
        firstOperand = "";
        secondOperand = "";
        operator = "";
        result = "";
        updateDisplay();
    });

    // Event listener for backspace button
    document.getElementById("backspace").addEventListener("click", () => {
        if (secondOperand !== "") {
            secondOperand = secondOperand.slice(0, -1);
        } else if (operator !== "") {
            operator = "";
        } else if (firstOperand !== "") {
            firstOperand = firstOperand.slice(0, -1);
        }
        updateDisplay();
    });

    // Event listener for decimal button
    document.getElementById("decimal").addEventListener("click", () => {
        if (operator === "") {
            if (!firstOperand.includes(".")) {
                firstOperand += ".";
            }
        } else {
            if (!secondOperand.includes(".")) {
                secondOperand += ".";
            }
        }
        updateDisplay();
    });
});
