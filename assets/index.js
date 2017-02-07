total = 0;
lastNumber = "";
lastOperation = "";
$(function() {
  clearOutput();
  $("button").on("click", function(){
    currentOutput = $("#output").val();
    buttonValue = $(this).text();

    switch(buttonValue){
      case "ac":
        clearOutput();
        total = 0;
        clearLast();
        break;
      case "+":
        setOutput(appendSymbol("+", currentOutput));
        lastOperation = "ADD";
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        clearLast();
        break;
      case "-":
        setOutput(appendSymbol("-", currentOutput));
        lastOperation = "SUB";
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        clearLast();
        break;
      case "/":
        setOutput(appendSymbol("/", currentOutput));
        lastOperation = "DIV";
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        clearLast();
        break;
      case "x":
        setOutput(appendSymbol("x", currentOutput));
        lastOperation = "MULT";
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        clearLast();
        break;
      case "=":
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        clearLast();
        clearOutput();
        setOutput(total);
        break;
      default:
        setOutput(currentOutput + buttonValue);
        lastNumber = lastNumber + buttonValue;
    }
    logIt("lastNumber: " + lastNumber);
    logIt("lastOperation: " + lastOperation);
    logIt("total: " + total);
  })
});

function doOperation(operand, runningTotal, number){
  switch(operand){
    case "ADD":
      return runningTotal + number;
    case "SUB":
      return runningTotal - number;
    case "MULT":
      return runningTotal * number;
    case "DIV":
      return runningTotal / number;
    default:
      return runningTotal;
   }
}

function appendSymbol(symbol, str){
  if(str.match(/x|\+|\/|-/) || str.length == 0){
    return str
  } else {
    return str + symbol;
  }
}

function clearLast(){
  lastNumber = "";
}

function setOutput(value){
  $("#output").val(value);
}

function clearOutput(){
  setOutput("");
}

function logIt(message){
  console.log(JSON.stringify(message));
}
