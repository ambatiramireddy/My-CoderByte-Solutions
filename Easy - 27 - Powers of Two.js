function PowersofTwo(num) { 
  var p=1,i=0;
  while(p<=num)
  {
     var p=Math.pow(2,i);
     if(p==num) return 'true';
     i++;
  }  
  return 'false'; 
}
