function PalindromeTwo(str) { 
  var input = '', reverse = '';
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    //to ignore spaces and symbols in the input string
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
      input = input + c;
      reverse = c + reverse;
    }
  }

  if (input.toLowerCase() === reverse.toLowerCase())
    return 'true';
  else
    return 'false';        
}
