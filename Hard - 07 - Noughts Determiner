function NoughtsDeterminer(strArr) {
  var arr = [], startIndex = 0;
  for (var i = 0; i < strArr.length; i++) {
    var item = strArr[i];
    if (item == '<>') {
      arr.push(strArr.slice(startIndex, i));
      startIndex = i + 1;
    }

  }
  //to add last row as there wont be '<>' symbol at end
  arr.push(strArr.slice(startIndex));

  function MatchCheck(input) {
    var match = input.replace(/[\-]/, 'O').match(/O{3}/);
    match = (match) ? match : input.replace(/[\-]/, 'X').match(/X{3}/);
    return (match) ? true : false;
  }

  //diagnol check
  var diagnol1 = [arr[0][0], arr[1][1], arr[2][2]];
  var str = diagnol1.join('');
  var index = str.indexOf('-');
  if (index != -1 && MatchCheck(str)) {
    return index * (arr.length) + index + index;
  }

  var diagnol2 = [arr[0][2], arr[1][1], arr[2][0]];
  str = diagnol2.join('');
  index = str.indexOf('-');
  if (index != -1 && MatchCheck(str)) {
    return index * (arr.length) + (2 - index) + index;
  }

  //horizontal check
  for (var rowIndex = 0; rowIndex < 3; rowIndex++) {
    var row = arr[rowIndex];
    var str = row.join('');
    index = str.indexOf('-');
    if (index != -1 && MatchCheck(str)) {
      return rowIndex * (row.length) + index + rowIndex;
    }
  }

  //Vertical check
  for (var colIndex = 0; colIndex < 3; colIndex++) {
    var col = [arr[0][colIndex], arr[1][colIndex], arr[2][colIndex]];
    var str = col.join('');
    index = str.indexOf('-');
    if (index != -1 && MatchCheck(str)) {
      return index * (arr.length) + index + colIndex;
    }
  }
}
