function LookSaySequence(num) {
  var result = "";
  num = num.toString();
  var previousNum = num[0], count = 1;
  for (var i = 1; i < num.length; i++) {
    var n = num[i];
    if (previousNum == n) {
      count++;
    } else {
      result += count + '' + previousNum;
      previousNum = n;
      count = 1;
    }
  }
  //to concatenate last digit result
  result += count + '' + previousNum;
  return result;
}
