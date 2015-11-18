function BinaryConverter(str) { 
  var decimal=0;
  for(var i=str.length-1,j=0;i>=0;i--,j++)
  {
    decimal+=parseInt(str[i])*Math.pow(2,j);
  }
  return decimal;        
}
