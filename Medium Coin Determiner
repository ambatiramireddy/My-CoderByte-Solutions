function CoinDeterminer(num) {
  var arr = [1, 5, 7, 9, 11];
  var ps = [[]];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = ps.length; j < len; j++) {
      var subset = ps[j].concat(arr[i]);
      if (subset.reduce(function (pv, v) { return pv + v; }) == num)
        return subset.length;
      else
        ps.push(subset)
     }
  }

  var divTimes = []; leastDivTimes = 0;
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i];
    var rem = num % n;
    var dividedTimes = parseInt(num / n);
    if (rem == 0) {
      divTimes.push(dividedTimes);
    }
    else if (arr.indexOf(rem) != -1) {
      divTimes.push(dividedTimes + 1);
    }
  }

  return divTimes.sort(function (a, b) { return b - a; }).pop();
}
