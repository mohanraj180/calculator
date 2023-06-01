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
            add(a, b)
            break;
    
        case "-":
            subtract(a, b)
            break;
    
        case "*":
            multiply(a, b)
            break;
    
        case "/":
            divide(a, b)
            break;
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
        
        let input = display.textContent;
        let operatorIndex = getOperatorIndex(input);
        operator = input.slice(operatorIndex, operatorIndex + 1);
        console.log(operator);
    })

// let s = "123+456";
// let opIn = getOperatorIndex(s)
// console.log(opIn);
// let op = s.slice(opIn, opIn + 1);
// console.log(op);