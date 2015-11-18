function DistinctList(arr) { 
  var distinct=[];
  for(var i=0;i<arr.length;i++)
  {
    var n=arr[i];
    if(distinct.indexOf(n)==-1)
    	distinct.push(n);      
  } 
  return arr.length-distinct.length;       
}
