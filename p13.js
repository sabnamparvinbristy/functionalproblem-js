function checkNum(subject) {
  for (let i = 0; i < subject.length; i++) {
    if (subject[i] < 33) {
      return "Fail";
    }
  }
  return "Pass";
}
console.log(checkNum([50, 60, 70, 80, 90]));
console.log(checkNum([50, 60, 70, 80, 30]));
