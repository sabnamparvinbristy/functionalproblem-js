function checkNum(num1, num2) {
  let a = Math.max(num1, num2);
  // Math.max method onekgula number er moddhe max num ber kore
  var mul = num1 * num2;

  if (mul % a == 0) {
    return "can be devided by large number";
  } else {
    return "can not be devided by large number";
  }
}

console.log(checkNum(20, 10));
console.log(checkNum(7, 5));
