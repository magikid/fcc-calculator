function logIt(message){
  console.log(JSON.stringify(message));
}

class calculator {
  var total, lastNumber, lastOperation;

  calculator(){
    reset();
  }

  doOperation(operand, runningTotal, number){
    if (Number.isNaN(number)){
      return runningTotal;
    }
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

  appendSymbol(symbol, str){
    if(str.match(/x|\+|\/|-/) || str.length == 0){
      return str
    } else {
      return str + symbol;
    }
  }

  clearLast(){
    lastNumber = "";
  }

  setOutput(value){
    $("#output").val(value);
  }

  reset(){
    total = 0;
    lastNumber = "";
    lastOperation = "ADD";
    setOutput("");
  }
}

$(function() {
  var calc = new calculator();

  $("button").on("click", function(){
    currentOutput = $("#output").val();
    buttonValue = $(this).text();

    switch(buttonValue){
      case "ac":
        calc.reset();
        break;
      case "+":
        calc.add(total, Number.parseFloat(lastNumber));
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        setOutput(appendSymbol("+", currentOutput));
        lastOperation = "ADD";
        calc.clearLast();
        break;
      case "-":
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        setOutput(appendSymbol("-", currentOutput));
        lastOperation = "SUB";
        calc.clearLast();
        break;
      case "/":
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        setOutput(appendSymbol("/", currentOutput));
        lastOperation = "DIV";
        calc.clearLast();
        break;
      case "x":
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        setOutput(appendSymbol("x", currentOutput));
        lastOperation = "MULT";
        calc.clearLast();
        break;
      case "=":
        total = doOperation(lastOperation, total, Number.parseFloat(lastNumber));
        setOutput(String(total));
        lastNumber = "";
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

