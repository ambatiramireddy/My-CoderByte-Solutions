function WordCount(str) { 
  var count=0;
  for(var i=0;i<str.length;i++)
  {
    if(str[i]==' ')
      count++;
  }
  return count+1;
}
