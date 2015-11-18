function SimpleSymbols(str) { 
  for(var i=0;i<str.length;i++)
  {
    if(str[i]>='a' && str[i]<='z')
    {
      if( (i-1 >=0) && (i+1<str.length) && (str[i-1]=='+') && (str[i+1]=='+'))
      {
        //do nothing
      }
      else
       return 'false';
    }  
  }
  return 'true';         
}
