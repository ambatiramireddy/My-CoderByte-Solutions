function ExOh(str) { 
  var countOfX = 0;
  var matches = str.match(/x/g);
  if (matches) {
    countOfX = matches.length;
  }
  var countOfO = str.length - countOfX;
  if (countOfX == countOfO)
    return 'true';
  else
    return 'false';
}
