function TripleDouble(num1, num2) {
  var str1 = num1.toString();
  var str2 = num2.toString();
  for (var i = 0; i <= 9; i++) {
    if (str1.indexOf(i + '' + i + '' + i) != -1) {
      if (str2.indexOf(i + '' + i) != -1) {
        return 1;
      }
    }
  }
  return 0;
}
