function OffLineMinimum(strArr) { 
  var output = [];
  recursion();
  return output.join(',');

  function recursion() {
    for (var i = 0; i < strArr.length; i++) {
      var v = strArr[i];
      if (v == 'E') {
        //to create subset with all integers before 'E'
        var arr = strArr.slice(0, i);
        //to sort in descending order and return minimum value
        var item = arr.sort(function (a, b) { return parseInt(b) - parseInt(a); }).pop();
        output.push(item);
        //to remove 'E' element
        strArr.splice(i, 1);
        //to remove minimum integer found in the subset from inpur array
        strArr.splice(strArr.indexOf(item), 1);
        break;
      }
    } //for end
    if (strArr.indexOf('E') == -1)
      return;
    else
      recursion();
  }      
}
