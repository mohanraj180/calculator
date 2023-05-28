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
    
    let num1, num2, operator;

    const numbers = document.querySelectorAll(".num");
    numbers.forEach(function(number){
        number.addEventListener("click", (e) => display(e));
    })
