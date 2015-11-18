function StringReduction(str) {
  var arr = str.split('');

  function Reduce() {
    var reduceCount = 0,c3;
    for (var i = 0; i < arr.length - 1; i++) {
      var c1 = arr[i];
      var c2 = arr[i + 1];
      if (c1 == 'a' && (c2 == 'b' || c2 == 'c')) {
        c3 = (c2 == 'b') ? 'c' : 'b';
      }
      else if (c1 == 'b' && (c2 == 'c' || c2 == 'a')) {
        c3 = (c2 == 'c') ? 'a' : 'c';
      }
      else if (c1 == 'c' && (c2 == 'a' || c2 == 'b')) {
        c3 = (c2 == 'a') ? 'b' : 'a';
      }

      if (c3) {
        reduceCount++;
        arr.splice(i, 2, c3);
      }
    }

    if (reduceCount == 0)
      return;
    else
      Reduce();
  }

  Reduce();
  return arr.length;
}
