function FormattedDivision(num1,num2) { 
  var res = num1 / num2;
  res = res.toFixed(4);
  var arr = res.toString().split('.');
  var str = arr[0], output = '';
  if (str.length < 4) {
    output = str;
  }
  else {
    var commaPos = 4;
    for (var i = str.length - 1, pos = 1; i >= 0; i--, pos++) {
      if (pos == commaPos) {
        output = str[i] + ',' + output;
        commaPos += 3;
      }
      else {
        output = str[i] + output;
      }
    }
  }
  var outputWIthDecimals = output + '.' + arr[1];
  return outputWIthDecimals;
}
