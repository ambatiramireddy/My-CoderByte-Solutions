function NumberEncoding(str) {
  var encodedStr = '';
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c >= 'a' && c <= 'z') {
      var n = str.charCodeAt(i);
      encodedStr += n - 96;
    }
    else
      encodedStr += c;
  }
  return encodedStr;
}
