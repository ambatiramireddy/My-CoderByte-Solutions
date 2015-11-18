//Without using regular expressions
function ABCheck(str) { 
   for (var i = 0; i < str.length - 4; i++) 
   {
     var c1 = str[i].toLowerCase();
     var c2 = str[i + 4].toLowerCase();
     if (c1 == 'a' && c2 == 'b')
       return 'true';
     else if (c1 == 'b' && c2 == 'a')
       return 'true';
   }
  return 'false';       
}
