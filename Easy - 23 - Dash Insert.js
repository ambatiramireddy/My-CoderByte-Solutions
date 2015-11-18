function DashInsert(str) { 
  var output='';
  var len=str.length;
  for(var i=0;i<len-1;i++)
  {
    var n1=parseInt(str[i]);
    var n2=parseInt(str[i+1]);
    if(n1!=0 && n2!=0 && n1%2!=0 && n2%2!=0)
      output+=n1+'-';
    else
      output+=n1;
  }
  return output+str[len-1];       
}
