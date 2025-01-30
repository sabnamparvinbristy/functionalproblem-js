function checkNum(num) {
    if (num >= 0 && num <= 9) {
        return "Single digit";
    } else {
        return "Not a single digit";
    }
}
console.log(checkNum(7));
console.log(checkNum(10));
