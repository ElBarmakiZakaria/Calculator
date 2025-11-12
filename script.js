let operations = [3, "+", 4, "*", 2, "-", 1, "+", 5];
const count = (operations.length-1)/2
console.log(operations)

const add = function(firstNum, sencondNum){
    return firstNum + sencondNum;
}

const subtruct = function(firstNum, sencondNum){
    return firstNum - sencondNum;
}

const multiplly = function(firstNum, sencondNum){
    return firstNum * sencondNum;
}

const divide = function(firstNum, sencondNum){
    return firstNum / sencondNum;
}


function Calculate(){
    console.log("starting array", operations)
    let result;
    let firstNumber = operations[0];
    let operation = operations[1];
    let sencondNumber = operations[2];

    switch (operation) {
        case '+':
            result = add(firstNumber, sencondNumber);
            break;
        case '-':
            result = subtruct(firstNumber, sencondNumber);
            break;
        case '*':
            result = multiplly(firstNumber, sencondNumber);
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = divide(firstNumber, sencondNumber);
            break;
        default:
            return;
    }

    operations[0] = result;
    operations.splice(1,2)


    console.log("printing the log: ", operations)
}




for(let i = 0; i<count; i++){
    console.log(i)
    Calculate()
}

