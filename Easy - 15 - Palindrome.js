function Palindrome(str) { 
  var input='',reverse='';
  for(var i=0;i<str.length;i++)
  {
     var c=str[i];
     if( c!=' ')
     {
       input=input+c;
       reverse=c+reverse;
     }
  }
  
  if(input===reverse)
    return 'true';
  else
    return 'false';       
}
