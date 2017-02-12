function logIt(message){
  console.log(JSON.stringify(message));
}

class calculator {

  constructor(){
    this.total = 0;
    this.lastNumber = "";
    this.lastOperation = "ADD";
    this.reset();
  }

  add(){
    this.doOperation();
    this.lastOperation = "ADD";
    this.clearLast();
  }

  subtract(){
    this.doOperation();
    this.lastOperation = "SUB";
    this.clearLast();
  }

  multiply(){
    this.doOperation();
    this.lastOperation = "MULT";
    this.clearLast();
  }

  divide(){
    this.doOperation();
    this.lastOperation = "DIV";
    clearLast();
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
    number = Number.parseFloat(this.lastNumber);
    if (Number.isNaN(number)){
      return;
    }
    switch(this.lastOperation){
      case "ADD":
        this.total = this.total + number;
      case "SUB":
        this.total =  this.total - number;
      case "MULT":
        this.total = this.total * number;
      case "DIV":
        this.total = this.total / number;
      default:
        this.total = this.total;
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
}


function setOutput(value){
  $("#output").val(value);
}

function appendSymbol(symbol, str){
  if(str.match(/x|\+|\/|-/) || str.length == 0){
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
    logIt("lastNumber: " + calc.lastNumber);
    logIt("lastOperation: " + calc.lastOperation);
    logIt("total: " + calc.total);
  })
});

