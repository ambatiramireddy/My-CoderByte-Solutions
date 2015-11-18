function AdditivePersistence(num) { 
  var additiveCount = 0;
  function Add(num) {
    var result = 0;
    var arr = num.toString().split('');
    for (var i = 0; i < arr.length; i++) {
      result += parseInt(arr[i]);
    }
    additiveCount++;
    if (result > 9)
      Add(result);
  }

  if (num <= 9)
    return 0;
  else {
    Add(num);
    return additiveCount;
  }
}
