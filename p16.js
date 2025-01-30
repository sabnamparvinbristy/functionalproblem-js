function checkTime(num) {
  if (num >= 6 && num < 12) {
    return "Morning";
  } else if (num >= 12 && num < 18) {
    return "Noon";
  } else {
    return "Night";
  }
}

console.log(checkTime(9));
console.log(checkTime(19));
console.log(checkTime(14));
