function SwapII(inputStr) { 
  var parts = inputStr.split(' ');
  var result = [];

  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    var str = '';
    for (var j = 0; j < part.length; j++) {
      var c = part[j];
      if (c >= 'a' && c <= 'z')
        str += c.toUpperCase();
      else if (c >= 'A' && c <= 'Z')
        str += c.toLowerCase();
      else
        str += c;
    }
    var replacedStr=str.replace(/(\d)(\D+)(\d)/i, '$3$2$1');
    result.push(replacedStr);
  }
  return result.join(' '); 
}
