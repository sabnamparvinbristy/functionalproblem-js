function checkWeight(num) {
  if (num >= 50) {
    return "more then 50kg";
  } else {
    return "not more then 50kg";
  }
}
console.log(checkWeight(50));
console.log(checkWeight(40));
console.log(checkWeight(60));
