function checkAge(age) {
  if (age >= 18) {
    return "can vote";
  } else {
    return "can not";
  }
}
console.log(checkAge(15));
console.log(checkAge(19));
