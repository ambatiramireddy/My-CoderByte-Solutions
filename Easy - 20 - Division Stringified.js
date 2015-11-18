function DivisionStringified(num1,num2) { 
  var res = Math.round(num1 / num2);
  var str = res.toString();
  var output = '';
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
  return output;       
}
