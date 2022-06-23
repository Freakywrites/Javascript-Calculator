let number1 = parseFloat(prompt("Enter first Number"));
let number2 = parseFloat(prompt("Enter second Number"));
let operator = prompt("Enter operator ( either *,/,-,+,&)");
let result;
if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else if (operator == "/") {
  result = number1 / number2;
} else if (operator == "&") {
  result = number1 & number2;
}

alert(number1 + operator + number2 + "=" + result);
