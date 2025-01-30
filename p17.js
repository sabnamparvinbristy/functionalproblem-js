function checkPass(pass) {
  let passStr = pass.toString();
  /*count it as strings for this use .toString. long songkha er input nicchi
  tai etake string hisebe count korbo
  */

  if (passStr.length > 8) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(checkPass("124657845"));
console.log(checkPass("1246"));
