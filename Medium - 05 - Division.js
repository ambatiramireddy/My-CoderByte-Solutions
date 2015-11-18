function Division(num1,num2) { 
  var lowest = num1 > num2 ? num2 : num1;
  for (var i = lowest; i >= 1; i--) {
    if (num1 % i == 0 && num2 % i == 0)
      return i;
  }
}
