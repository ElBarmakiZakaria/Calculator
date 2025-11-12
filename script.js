let operations = [];
let count = operations.length;

function addNumber(nummber){
    operations[count] = parseFloat(nummber);
    count++;
    console.log("numbers" ,operations)
    console.log("count: ", count)
    
}


function addSymble(symble){
    operations[count] = symble;
    count++;
    console.log("numbers" ,operations)
    console.log("count: ", count)
}


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
    count = operations.length


}



function equal(){
    for(let i = 0; i<count; i++){
        console.log(i)
        Calculate()
    }

    console.log(operations)
}

