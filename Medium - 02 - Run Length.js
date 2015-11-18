function RunLength(str) {
  var runChar = str[0], runCount = 1, res = '';
  for (var i = 1; i < str.length; i++) {
    if (runChar == str[i]) {
      runCount++;
    }
    else {
      res += runCount + runChar;
      runChar = str[i];
      runCount = 1;
    }
  }
  res += runCount + runChar;
  return res;
}
