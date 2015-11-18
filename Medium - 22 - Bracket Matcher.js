function BracketMatcher(str) {
  var openBrackets = [];
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    if (c == '(' || c == '[') {
      openBrackets.push(c);
    }
    else if (c == ')' || c == ']') {
      var lastOpenBracket = openBrackets.pop();
      if ((c == ')' && lastOpenBracket != '(') ||
          (c == ']' && lastOpenBracket != '[') )
        return 0;
    }
  }

  if (openBrackets.length > 0)
    return 0;
  else
    return 1;
}
