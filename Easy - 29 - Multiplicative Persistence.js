function MultiplicativePersistence(num) { 
  var multiplicativeCount = 0;
  function Multiply(num) {
    var result = 1;
    var arr = num.toString().split('');
    for (var i = 0; i < arr.length; i++) {
      result *= parseInt(arr[i]);
    }
	  multiplicativeCount++;
    if (result > 9)
      Multiply(result);
  }

  if (num <= 9)
    return 0;
  else {
    Multiply(num);
    return multiplicativeCount;
  }
}
