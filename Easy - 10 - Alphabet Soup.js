function AlphabetSoup(str) { 
  var arr=str.split('');
  arr.sort()
  return arr.join('');
}
