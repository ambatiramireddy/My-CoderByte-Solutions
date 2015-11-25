//to find determinant of nxn square matrix
function MatrixDeterminant(strArr) {
  var arr = [], startIndex = 0, prevRowLength = 0;
  for (var i = 0; i < strArr.length; i++) {
    var item = strArr[i];
    if (item == '<>') {
      var row = strArr.slice(startIndex, i);
      prevRowLength = (prevRowLength == 0) ? row.length : prevRowLength;
      //to determine if input matrix is a square matrix
      if (row.length == 1 || row.length != prevRowLength)
        return -1;
      else {
        arr.push(row);
        startIndex = i + 1;
      }
    }
  }
  //to add last row as there wont be '<>' symbol at end
  var row = strArr.slice(startIndex);
  if (row.length != prevRowLength)
    return -1;
  else {
    arr.push(row);
  }
  //to check if no.of rows and columns are equal
  if (arr[0].length != arr.length)
    return -1;

  var res = '';
  FindDeterminant(arr);
  var determinant = eval(res);
  return determinant;

//recursive function to find Determinant of a matrix
  function FindDeterminant(array) {
    if (array.length == 2) {
      res += '(' + array[0][0] + ')*(' + array[1][1] + ')-(' + array[0][1] + ')*(' + array[1][0] + ')'; //ad-bc
      return;
    }

    var len = array[0].length;
    for (var i = 0; i < len; i++) {
      var ele = array[0][i];
      var subDetArray = [];
      for (var rowIndex = 1; rowIndex < array.length; rowIndex++) {
        var row = array[rowIndex];
        var temp = [];
        for (var col = 0; col < len; col++) {
          if (col != i)
            temp.push(row[col]);
        }
        subDetArray.push(temp);
      }
      var even = ((i + 1) % 2 == 0);
      res += (even ? '-(' : '+(') + ele + ')*(';
      FindDeterminant(subDetArray);
      res += ')';
    }
  }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MatrixDeterminant(readline());           
