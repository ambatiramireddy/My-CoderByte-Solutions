function FibonacciChecker(num) {
  function Recursive(n1, n2) {
    var n = n1 + n2;
    if (n == num)
      return true;
    else if (n < num)
      return Recursive(n2, n);
  }
  if (Recursive(0, 1))
    return 'yes'
  else
    return 'no';
}
