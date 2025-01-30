function grade(num) {
  if (num >= 80 && num <= 100) {
    return "A+";
  } else if (num >= 70 && num <= 79) {
    return "A";
  } else if (num >= 60 && num <= 69) {
    return "A-";
  } else if (num >= 33 && num <= 59) {
    return "pass";
  } else {
    return "failed";
  }
}

console.log(grade(89));
console.log(grade(62));
console.log(grade(44));
console.log(grade(32));
