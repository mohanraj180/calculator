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

        if(operator !== "") {
            display.textContent = ""
        }
        display.textContent += e.target.textContent;
    }

    
    
    function addOperator(e){
        const display = document.querySelector("#display");

        if(num1 !== 0) {
            num2 = parseInt(display.textContent);
            console.log(`num2 = ${num2}`);
            display.textContent = operate(num1, operator, num2);
            num1 = parseInt(display.textContent);
            console.log(`num1 = ${num1}`);
        }else {
            num1 = parseInt(display.textContent);
            console.log(`num1 = ${num1}`);
        }

        operator = e.target.textContent;
        console.log(`current operator = ${operator}`);
        

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
        operator.addEventListener("click", (e) => {
            addOperator(e);

        })
    });

    // listen equals
    const equals = document.querySelector("#equals");
    equals.addEventListener("click", (e) => {
        const display = document.querySelector("#display");
        num2 = parseInt(display.textContent);
        console.log(`num2 = ${num2}`);
        
        // dispplay result
        display.textContent = operate(num1, operator, num2);

    })

// let s = "123+456";
// let opIn = getOperatorIndex(s)
// console.log(opIn);
// let op = s.slice(opIn, opIn + 1);
// console.log(op);