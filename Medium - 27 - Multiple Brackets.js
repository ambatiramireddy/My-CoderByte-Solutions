function MultipleBrackets(str) {
   var openBrackets = [], unmatchedBracketfound = false, bracketsCount = 0;
   for (var i = 0; i < str.length; i++) {
     var c = str[i];
     if (c == '(' || c == '[') {
       openBrackets.push(c);
       bracketsCount++;
     }
     else if (c == ')' || c == ']') {
       var lastOpenBracket = openBrackets.pop();
       if ((c == ')' && lastOpenBracket != '(') ||
           (c == ']' && lastOpenBracket != '['))
         unmatchedBracketfound = true;
     }
   }

   if (unmatchedBracketfound || openBrackets.length > 0)
     return 0;
   else
     return 1 + ' ' + bracketsCount;
 }
