class calculator {

  constructor(){
    this.total = 0;
    this.lastNumber = "";
    this.lastOperation = "ADD";
    this.reset();
  }

  add(){
    this.total = this.doOperation();
    this.lastOperation = "ADD";
    this.clearLast();
  }

  subtract(){
    this.total = this.doOperation();
    this.lastOperation = "SUB";
    this.clearLast();
  }

  multiply(){
    this.total = this.doOperation();
    this.lastOperation = "MULT";
    this.clearLast();
  }

  divide(){
    this.total = this.doOperation();
    this.lastOperation = "DIV";
    this.clearLast();
  }

  calculate(){
    this.total = this.doOperation();
    this.lastNumber = "";
    return this.total;
  }

  appendLastNumber(number){
    this.lastNumber = this.lastNumber + number;
  }

  doOperation(){
    var operand = this.lastOperation;
    var runningTotal = this.total;
    var number = Number.parseFloat(this.lastNumber);

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

  clearLast(){
    this.lastNumber = "";
  }

  reset(){
    this.total = 0;
    this.lastNumber = "";
    this.lastOperation = "ADD";
  }

  logIt(message){
    console.log(JSON.stringify(message));
  }

  printCurrentState(){
    this.logIt("lastNumber: " + this.lastNumber);
    this.logIt("lastOperation: " + this.lastOperation);
    this.logIt("total: " + this.total);
  }
}


function setOutput(value){
  $("#output").val(value);
}

function appendSymbol(symbol, str){
  if(str.length == 0){
    return str
  } else {
    return str + symbol;
  }
}



$(function() {
  setOutput("");
  var calc = new calculator();

  $("button").on("click", function(){
    currentOutput = $("#output").val();
    buttonValue = $(this).text();

    switch(buttonValue){
      case "ac":
        calc.reset();
        setOutput("");
        break;
      case "+":
        calc.add();
        setOutput(appendSymbol("+", currentOutput));
        break;
      case "-":
        calc.subtract();
        setOutput(appendSymbol("-", currentOutput));
        break;
      case "/":
        calc.divide();
        setOutput(appendSymbol("/", currentOutput));
        break;
      case "x":
        calc.multiply();
        setOutput(appendSymbol("x", currentOutput));
        break;
      case "=":
        total = calc.calculate();
        setOutput(String(total));
        break;
      default:
        setOutput(currentOutput + buttonValue);
        calc.appendLastNumber(buttonValue);
    }

    calc.printCurrentState();
  })
});

