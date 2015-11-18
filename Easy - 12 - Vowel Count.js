function VowelCount(str) { 
  var count=0;
  for(var i=0;i<str.length;i++)
  {
    var c=str[i];
    if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
      count++;
  }
  return count; 
}
