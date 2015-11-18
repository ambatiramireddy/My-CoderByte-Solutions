function LetterCountI(str) { 
  var arr = str.match(/\w+/g);
  var duplicateCount = 0, largestDuplicateCount = 0, largestDuplicateIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    var distinctArray = []
    for (var j = 0; j < arr[i].length; j++) {
      var char = arr[i][j];
      if (distinctArray.indexOf(char) == -1)
        distinctArray.push(char);
    }
    duplicateCount = arr[i].length - distinctArray.length;
    if (duplicateCount > largestDuplicateCount) {
      largestDuplicateCount = duplicateCount;
      largestDuplicateIndex = i;
    }
  }

  if (largestDuplicateCount == 0)
    return -1;
  else
    return arr[largestDuplicateIndex];
}
