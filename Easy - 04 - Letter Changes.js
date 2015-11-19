function LetterChanges(str) { 
  var vowels = 'aeiou', result = '', changedChar;
  for (i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 97 && c < 122)
      changedChar = String.fromCharCode(c + 1);
    else if (c == 122)
      changedChar = String.fromCharCode(97);
    else
      changedChar = str[i];

    if (vowels.indexOf(changedChar) != -1)
      changedChar = changedChar.toUpperCase();

    result += changedChar;
  }
  return result;
}
