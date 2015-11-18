function SimpleMode(arr) {
  arr.sort(function (a, b) { return a - b; });
  var runChar = arr[0], runCount = 1;
  var longRunChar = arr[0], longRunCount = 1;
  for (var i = 1; i < arr.length; i++) {
    var v = arr[i];
    if (runChar == v)
      runCount++;
    else {
      if (runCount > longRunCount) {
        longRunCount = runCount;
        longRunChar = runChar;
      }
      runChar = v;
      runCount = 1;
    }
  }

  if (longRunCount > 1)
    return longRunChar;
  else
    return -1;
}
