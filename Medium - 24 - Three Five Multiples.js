function ThreeFiveMultiples(num) { 
  var res=0;
  for(var i=1;i<num;i++)
  {
    if(i%3==0 || i%5==0)
      res+=i;
  } 
  return res;      
}
