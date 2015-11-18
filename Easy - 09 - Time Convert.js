function TimeConvert(num) { 
  var minutes=num%60;
  var hours=parseInt(num/60);
  return hours+':'+minutes;       
}
