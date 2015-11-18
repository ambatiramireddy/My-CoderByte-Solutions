function PrimeMover(num) { 
  var primeCount=0;
  for(i=2;i<=10000;i++)
  {
    var count=0;
    for(j=2;j<=i;j++)
    {
      if(i%j==0)
        count++;
    }
    if(count==1)
      primeCount++
      
    if(primeCount==num)
      return i;
  }
}
