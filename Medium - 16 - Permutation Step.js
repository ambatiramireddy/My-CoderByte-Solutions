function PermutationStep(num) {
  var arr = num.toString().split('');
  var usedChars = [];
  var greaterNumbers = [];
  function permute() {
    var i, ch;
    for (i = 0; i < arr.length; i++) {
      ch = arr.splice(i, 1)[0];
      usedChars.push(ch);
      if (arr.length == 0) {
        var n = parseInt(usedChars.join(''))
        if (n > num) {
          greaterNumbers.push(n);
        }
      }
      permute(arr);
      arr.splice(i, 0, ch);
      usedChars.pop();
    }
  }

  permute();
  var result = greaterNumbers.sort(function (a, b) { return b - a; }).pop();
  if (result)
    return result;
  else
    return -1;
}
