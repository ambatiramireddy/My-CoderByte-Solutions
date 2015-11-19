function Calculator(str) { 
  var arithmeticOperators = ['+', '-', '/', '*'];
  var replacedStr = str.replace(/(.)\(/g, function (match, g1) {
    if (arithmeticOperators.indexOf(g1) != -1)
      return match;
    else
      return match.replace(g1, g1 + '*');
  });
  return eval(replacedStr);
}
