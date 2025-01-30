function compare(num1, num2, num3) {
  const a = num1 + num2 + num3;
  if (a > 100) {
    return "greater then 100";
  } else {
    return "less then 100";
  }
}
console.log(compare(50, 30, 40));
console.log(compare(50, 30));
