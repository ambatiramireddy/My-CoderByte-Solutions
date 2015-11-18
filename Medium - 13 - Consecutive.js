function Consecutive(arr) { 
  arr.sort(function(a,b) {return a-b;});
  var minValue=arr[0];
  var maxValue=arr[arr.length-1];
  var missingCount=0;
  for(var i=minValue;i<=maxValue;i++)
  {
    if(arr.indexOf(i)==-1)
      missingCount++;
  }
  return missingCount;
}
