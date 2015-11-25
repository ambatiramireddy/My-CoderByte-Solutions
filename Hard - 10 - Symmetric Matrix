function SymmetricMatrix(strArr) {
  var arr = [], startIndex = 0, prevRowLength = 0;
  for (var i = 0; i < strArr.length; i++) {
    var item = strArr[i];
    if (item == '<>') {
      var row = strArr.slice(startIndex, i);
      prevRowLength = (prevRowLength == 0) ? row.length : prevRowLength;
      //to determine if input matrix is a square matrix
      if (row.length == 1 || row.length != prevRowLength)
        return 'not possible';
      else {
        arr.push(row);
        startIndex = i + 1;
      }
    }
  }
  //to add last row as there wont be '<>' symbol at end
  var row = strArr.slice(startIndex);
  if (row.length == 1 || row.length != prevRowLength)
    return 'not possible';
  else {
    arr.push(row);
  }
  //to check if no.of rows and columns are euual
  if (arr[0].length != arr.length)
    return 'not possible';
  
  //if a matrix equal to its transpose, then its symmetric
  //to compare if nth row values are equal to nth column values
  for (var rowIndex = 0; rowIndex < arr.length; rowIndex++) {
    var arrRow = arr[rowIndex];
    for (var colIndex = 0; colIndex < arr.length; colIndex++) {
      if (arrRow[colIndex] != arr[colIndex][rowIndex])
        return 'not symmetric';
    }
  }

  return 'symmetric';
}
