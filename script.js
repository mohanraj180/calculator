function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}


function operate(a, operator, b){
switch (operator) {
        case "+":
            return add(a, b)
    
        case "-":
            return subtract(a, b)
    
        case "*":
            return multiply(a, b)
    
        case "/":
            return divide(a, b)
        }
    }
    
    function display(e){
        const display = document.querySelector("#display");
        display.textContent += e.target.textContent;
    }

    function getOperatorIndex(str){
        switch (true) {
            case str.includes("+"):
                return str.indexOf("+")
        
            case str.includes("-"):
                return str.indexOf("-")
        
            case str.includes("*"):
                return str.indexOf("*")
        
            case str.includes("/"):
                return str.indexOf("/")
        }
        
    }
    
    function addOperator(e){
        const display = document.querySelector("#display");
        display.textContent += e.target.textContent;
    }
    
    let num1 = 0, num2 = 0, operator ="";

    // listen number buttons
    const numbers = document.querySelectorAll(".num");
    numbers.forEach(function(number){
        number.addEventListener("click", (e) => display(e));
    });

    // listen operators
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function(operator){
        operator.addEventListener("click", (e) => addOperator(e))
    });

    // listen equals
    const equals = document.querySelector("#equals");
    equals.addEventListener("click", (e) => {
        const display = document.querySelector("#display");
        display.textContent += e.target.textContent;
        
        // get operands and operator values
        let input = display.textContent;
        let operatorIndex = getOperatorIndex(input);
        operator = input.slice(operatorIndex, operatorIndex + 1);
        num1 = parseInt(input.slice(0, operatorIndex));
        num2 = parseInt(input.slice(operatorIndex + 1, input.length - 1));

        // dispplay result
        display.textContent = operate(num1, operator, num2);

    })

// let s = "123+456";
// let opIn = getOperatorIndex(s)
// console.log(opIn);
// let op = s.slice(opIn, opIn + 1);
// console.log(op);