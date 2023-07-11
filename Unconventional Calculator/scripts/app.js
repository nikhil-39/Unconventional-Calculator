
let currentResult = 0;
let logEnteries = [];
//gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//generates result and description
function createAndWriteOutput(operator,resBerforCalc,calcNumber){
   
    const calcDescription= `${resBerforCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}    


function writeToLog( operator, prevResult, enteredNumber, result){

    let logEntery={
        operator: operator,
        prevResult: prevResult,
        enteredInput: enteredNumber,
        result: result
    };

    logEnteries.push(logEntery);
    console.log(logEnteries);

}






function add(){
    const enteredInput = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredInput;
    createAndWriteOutput('+',initialResult,enteredInput);
    writeToLog('ADD', initialResult, enteredInput, currentResult);
    
}

function subtract(){
    const enteredInput = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredInput;
    createAndWriteOutput('-',initialResult,enteredInput);
    writeToLog('SUBTRACT', initialResult, enteredInput, currentResult);
}

function multiply(){
    const enteredInput = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredInput;
    createAndWriteOutput('*',initialResult,enteredInput);
    writeToLog('MULTIPLY', initialResult, enteredInput, currentResult);
}

function divide(){
    const enteredInput = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredInput;
    createAndWriteOutput('/',initialResult,enteredInput);
    writeToLog('DIVIDE', initialResult, enteredInput, currentResult);
}


addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);






