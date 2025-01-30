function checkNum(num) {
  if (num > 0 && num % 2 == 0) {
    return "positive & even";
  } else {
    return "not positive or even";
  }
}
console.log(checkNum(10));
console.log(checkNum(-10));
console.log(checkNum(11));
