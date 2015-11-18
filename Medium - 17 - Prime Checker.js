function IsPrimeNumber(num) {
  if (num <= 1)
    return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}

function PrimeChecker(num) {
  var arr = num.toString().split('');
  var usedChars = [];
  var prime = false;
  function permute() {

    if (prime)
      return;

    var ch;
    for (var i = 0; i < arr.length; i++) {
      ch = arr.splice(i, 1)[0];
      usedChars.push(ch);
      if (arr.length == 0) {
        var n = parseInt(usedChars.join(''))
        prime = IsPrimeNumber(n);
        if (prime)
          return;
      }
      permute(arr);
      arr.splice(i, 0, ch);
      usedChars.pop();
    }
  }

  permute();

  if (prime)
    return 1;
  else
    return 0;
}
