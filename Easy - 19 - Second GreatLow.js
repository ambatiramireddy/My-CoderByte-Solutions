function SecondGreatLow(arr) { 
  var distinct=[];
  for(var i=0;i<arr.length;i++)
  {
    var v=arr[i];
    if(distinct.indexOf(v) == -1)
      distinct.push(v);
  }
  distinct.sort(function(a,b){ return a-b; })
  var secondLowest=distinct[1];
  var secondHighest=distinct[distinct.length-2];
  return secondLowest+' '+secondHighest;
}
