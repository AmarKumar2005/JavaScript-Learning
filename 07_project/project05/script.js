function simpleCalculator(num1, num2) {
  num1 =parseInt(prompt("Enter first number: "));
  num2 =parseInt(prompt("Enter second number: "));

  let addition = num1 + num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;

  alert(`Addition: ${addition}, Subtraction: ${subtraction}, Multiplication: ${multiplication}, Division:  ${division}`);
}
