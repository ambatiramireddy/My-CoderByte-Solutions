function MeanMode(arr) { 
  arr.sort(function (a, b) { return a - b; });
  var runChar = arr[0], runCount = 1;
  var longRunChar = arr[0], longRunCount = 1;
  for (var i = 1; i < arr.length; i++) {
    var v = arr[i];
    if (runChar == v)
      runCount++;
    else {
      if (runCount > longRunCount) {
        longRunChar = runChar;
        longRunCount = runCount;
      }
      runChar = v;
      runCount = 1;
    }
  }

  var mode = longRunChar;
  var mean = arr.reduce(function (pv, v) { return pv + v; }) / arr.length;

  if (mode == mean)
    return 1;
  else
    return 0;
}
