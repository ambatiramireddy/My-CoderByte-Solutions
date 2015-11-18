function NumberSearch(str) { 
  var letterCount=0;
  var numbers=[0];
  for(var i=0;i<str.length;i++)
  {
    var c=str[i];
    if((c>='a' && c<='z') || (c>='A' && c<='Z'))
      letterCount++;
    else
    {
      var n=parseInt(c);
      if(n)
       numbers.push(n);
    }
  }
  var sum=numbers.reduce(function(pv,v){return pv+v;})
  return Math.round(sum/letterCount);         
}
