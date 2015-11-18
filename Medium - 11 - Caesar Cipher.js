function CaesarCipher(str, num) {
  var res = '';
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c >= 'a' && c <= 'z') {
      res += ReturnEncodedChar(c, 97, 122, num);
    }
    else if (c >= 'A' && c <= 'Z') {
      res += ReturnEncodedChar(c, 65, 90, num);
    }
    else
      res += c;
  }
  return res;
}

function ReturnEncodedChar(char, aCode, zCode, num) {
   var code = char.charCodeAt(0);
   var newCode;
   if (code == zCode)
     newCode = aCode - 1 + num;
   else {
     var newCode = code + num;
     if (newCode > zCode) {
       newCode = aCode - 1 + (newCode - zCode);
     }
   }
   return String.fromCharCode(newCode);
 }
