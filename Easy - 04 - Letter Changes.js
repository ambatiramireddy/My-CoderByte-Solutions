function CapitalizeVowels(str)
{
  var res='';
  for(var i=0;i<str.length;i++)
  {
   var c=str[i];
   if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
     res+=str[i].toUpperCase();
    else
      res+=str[i];
  }
  return res;
}

function LetterChanges(str) { 
  var res='';
  for(i=0;i<str.length;i++)
  {
    var c=str.charCodeAt(i);
    if(c>=97 && c<122)
    {
      res+=String.fromCharCode(c+1);
    }
    else if(c==122)
    {
      res+=String.fromCharCode(97);
    }
    else
    {
      res+=str[i];
    }
  }
  return CapitalizeVowels(res);         
}
