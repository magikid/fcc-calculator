$(function() {
  clearOutput();
  $("button").on("click", function(){
    currentOutput = $("#output").val();
    buttonValue = $(this).text();
    switch(buttonValue){
      case "ac":
        clearOutput();
        break;
      case ".":
        if(!currentOutput.includes(".")){
          setOutput(currentOutput + buttonValue);
        }
        break;
      case "=":
        break;
      default:
        setOutput(currentOutput + buttonValue);
    }
  })
});


function setOutput(value){
  $("#output").val(value);
}

function clearOutput(){
  setOutput("");
}

function logIt(message){
  console.log(JSON.stringify(message));
}
