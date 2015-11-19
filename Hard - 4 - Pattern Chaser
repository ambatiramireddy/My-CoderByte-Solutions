function PatternChaser(str) {
  var patterns = [];
  var i = 2; j = Math.floor(str.length / 2);
  while (i <= j) {
    FindPattern(i++);
  }

  function FindPattern(num) {
    for (var i = 0; i < str.length - num; i++) {
      var pattern = str.slice(i, i + num);
      var index = str.lastIndexOf(pattern);
      if (index != -1 && index != i) {
        patterns.push(pattern);
        break;
      }
    }
  }

  var largestPattern = patterns.sort(function (a, b) { return a.length - b.length }).pop();
  if (largestPattern)
    return 'yes ' + largestPattern;
  else
    return 'no null';
}
