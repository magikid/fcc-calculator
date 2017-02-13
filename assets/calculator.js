/*
 * A class which implements a calculator in Javascript.
 *
 * This works in a similar manner to a stack-based calculator but has been
 * modified to allow infix notation instead of postfix notation.  Each time
 * a math function is called, the previous operation is performed.
 *
 * Example:
 * // Sets the total to 0 and the last operation to addition.
 * var calc = new Calculator();
 * // Sets the previous number to the string "6"
 * calc.appendNumber("6");
 * // Sets the previous operation to mulitply.  Sets total equal to 0 + 6 since
 * // our previous total was 0 and our previous operation was addition.
 * calc.multiply();
 * // Sets the previos number to the string "3".
 * calc.appendNumber("3");
 * // Performs the previous operation of multiply to the previous number and
 * // returns 18 as the result.
 * calc.calculate();
 */
class Calculator {
  constructor(){
    // This stores the running total of calculations
    this.total = 0;

    /*
     * This is the string of the last numbers typed.  I found it easiest to use
     * a string since the user could type in multiple numbers and a string
     * allows me to simply add to the end of it and then parse it later.
     *
     */
    this.prevNumber = "";

    /*
     *  The last button operation button pushed.  At initialization, it's set to
     *  plus so that the first number entered will be added to the initial total
     *  of 0.  After that, it's set to the last operation button pressed.
     */
    this.lastOperation = "ADD";
  }

  // Add the previous and next numbers
  add(){
    this.calculateNewTotal();
    this.lastOperation = "ADD";
  }

  // Subtract the previous and next numbers
  subtract(){
    this.calculateNewTotal();
    this.lastOperation = "SUB";
  }

  // Multiply the previous and next numbers
  multiply(){
    this.calculateNewTotal();
    this.lastOperation = "MULT";
  }

  // Divide the previous and next numbers
  divide(){
    this.calculateNewTotal();
    this.lastOperation = "DIV";
  }

  // Perform the final calculation and return the result
  calculate(){
    this.calculateNewTotal();
    this.prevNumber = "";
    return this.total;
  }

  /*
   * Append the string representation of the number to the string
   * representation of the previous number.  This is used to handle
   * numbers larger than a single character.
   */
  appendNumber(number){
    this.prevNumber = this.prevNumber + number;
  }

  // Parse our string representation of the number into a float representation.
  parsePrevNumber(){
    var number = Number.parseFloat(this.prevNumber);
    this.prevNumber = "";
    return number;
  }

  // Perform the previous operation and update the total with the new total
  calculateNewTotal(){
    var number = this.parsePrevNumber();
    if (Number.isNaN(number)){
      return;
    }

    switch(this.lastOperation){
      case "ADD":
        this.total += number;
        break;
      case "SUB":
        this.total -= number;
        break;
      case "MULT":
        this.total *= number;
        break;
      case "DIV":
        this.total /= number;
        break;
      default:
        return;
    }
  }

  // Reset the calculator to its initial state for when the user hits clear
  reset(){
    this.total = 0;
    this.lastOperation = "ADD";
  }

  // A helper method for logging
  logIt(message){
    console.log(JSON.stringify(message));
  }

  // A helper method for printing the previous number, last operation, and total
  printCurrentState(){
    this.logIt("prevNumber: " + this.prevNumber);
    this.logIt("lastOperation: " + this.lastOperation);
    this.logIt("total: " + this.total);
  }
}
