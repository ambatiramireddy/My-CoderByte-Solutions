function LongestWord(sen) { 
  var words = sen.replace(/[^0-9A-Za-z\s]/g, "").split(" ");
  var longestWord = words.reduce(function(longestSoFar, currentWord ) {
    return currentWord.length > longestSoFar.length ? currentWord : longestSoFar;
  });
  return longestWord;      
}
