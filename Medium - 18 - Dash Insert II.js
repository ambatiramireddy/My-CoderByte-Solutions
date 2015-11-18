function DashInsertII(num) { 
  var arr = num.toString().split('');
  var result = '';
  for (var i = 0; i < arr.length - 1; i++) {
    var i1 = parseInt(arr[i]);
    var i2 = parseInt(arr[i + 1]);
    if (i1 != 0 && i2 != 0) {
      if (i1 % 2 == 0 && i2 % 2 == 0)
        result += i1 + '*';
      else if (i1 % 2 != 0 && i2 % 2 != 0)
        result += i1 + '-';
      else
        result += i1;
    }
    else
      result += i1;
  }
  return result + arr[arr.length - 1];
}
