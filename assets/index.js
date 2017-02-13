// Sets the output window of the calculator on the webpage
function setOutput(value){
  $("#output").val(value);
}

// Checks that the string isn't empty before adding an operand to it
function appendSymbol(symbol, str){
  if(str.length == 0){
    return str
  } else {
    return str + symbol;
  }
}

$(function() {
  setOutput("");
  var calc = new Calculator();

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
        calc.appendNumber(buttonValue);
    }
  })
});

