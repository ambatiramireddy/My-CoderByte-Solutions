function LetterCount(str) { 
  var words = str.match(/\w+/g);
  var duplicateCount = 0, largestDuplicateCount = 0, largestDuplicateIndex = 0;
  for (var i = 0; i < words.length; i++) {
    var distinct = []
    var word=words[i];
    for (var j = 0; j < word.length; j++) {
      var char = word[j];
      if (distinct.indexOf(char) == -1)
        distinct.push(char);
    }
    duplicateCount = word.length - distinct.length;
    if (duplicateCount > largestDuplicateCount) {
      largestDuplicateCount = duplicateCount;
      largestDuplicateIndex = i;
    }
  }

  if (largestDuplicateCount == 0)
    return -1;
  else
    return words[largestDuplicateIndex];
}
