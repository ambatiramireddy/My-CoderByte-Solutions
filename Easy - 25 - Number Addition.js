function NumberAddition(str) { 
  var matches=str.match(/\d+/g);
  var count=0;
  for(var i=0;i<matches.length;i++)
  {
    count+=parseInt(matches[i]);
  }
  return count;       
}
