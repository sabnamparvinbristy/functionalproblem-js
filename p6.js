function checkNum(num) {
  if (num % 10 == 0) {
    return "can be devided by 10";
  } else {
    return "can not be devided by 10";
  }
}
console.log(checkNum(25));
console.log(checkNum(30));
