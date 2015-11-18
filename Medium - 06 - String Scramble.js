function StringScramble(str1,str2) { 
  var arr=str1.split('');
  for(var i=0; i<str2.length;i++)
  {
    var index=arr.indexOf(str2[i]);
    if(index==-1)
      return 'false';
    else
      arr.splice(index,1);
  } 
  return 'true';        
}
