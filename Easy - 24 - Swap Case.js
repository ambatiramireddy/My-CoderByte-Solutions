function SwapCase(str) { 
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c >= 'a' && c <= 'z') {
      result += c.toUpperCase();
    }
    else if (c >= 'A' && c <= 'Z') {
      result += c.toLowerCase();
    }
    else
      result += c;
  }
  return result;
}
