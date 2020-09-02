var input = document.getElementById("input");
var text = document.getElementById("result");
var equation = "";
var number1 = 0;
var number2 = 0;
var result = 0;



function onSumbit() {
    equation = input.value;
    check();
}

function check() {
    if (equation.includes("=")){
        if(equation.includes("X")){
            if (equation.includes("+") || equation.includes("*") || equation.includes("-") || equation.includes("/")){
                if(equation.indexOf("=") > equation.indexOf("X")){
                    math();
                }
                else {
                    syntaxError("Indexing Error, the syntax must be X +,-,*,/ number = number, X is capital");
                }
            }
            else{
                syntaxError("can't get currently operation,  the syntax must be X +,-,*,/ number = number, X is capital");
            }
        }
        else{
            syntaxError("Equation must contain capital X letter,  the syntax must be X +,-,*,/ number = number, X is capital");
        }
    }
    else {
        syntaxError("Enter '=' and try agian , the syntax must be X +,-,*,/ number = number, X is capital");
    }
}

function syntaxError(Message){
    alert(Message)
    text.innerHTML = "Syntax Error"
}

function math() {
    try{
        if (equation.includes("+")) {
            number1 = parseFloat(equation.substr(equation.indexOf("+") + 1, equation.indexOf("=") - 2))
            number2 = parseFloat(equation.substr(equation.indexOf("=")+1,equation.length))
            result = number2 - number1;
            text.innerHTML = result
        }
        if (equation.includes("-")) {
            number1 = parseFloat(equation.substr(equation.indexOf("-") + 1, equation.indexOf("=") - 2))
            number2 = parseFloat(equation.substr(equation.indexOf("=")+1,equation.length))
            result = number2 + number1;
            text.innerHTML = result
        }
        if (equation.includes("*")){
            number1 = parseFloat(equation.substr(equation.indexOf("*") + 1, equation.indexOf("=") - 2))
            number2 = parseFloat(equation.substr(equation.indexOf("=")+1,equation.length))
            result = number2 / number1;
            text.innerHTML = result
        }
        if (equation.includes("/")){
            number1 = parseFloat(equation.substr(equation.indexOf("/") + 1, equation.indexOf("=") - 2))
            number2 = parseFloat(equation.substr(equation.indexOf("=")+1,equation.length))
            result = number2 * number1;
            text.innerHTML = result
        }
    }
    catch (e) {
        alert(e)
        text.innerHTML = "error";
    }
}
