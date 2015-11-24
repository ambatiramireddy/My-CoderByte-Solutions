function GetPermutations(num) {
  function permute(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        permutations.push(usedChars.slice());
      }
      permute(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permutations;
  };
  var permutations = [], usedChars = [];
  permute(num);
  return permutations;
}

function OptimalAssignments(strArr) {
  var arr = [];
  for (var i = 0; i < strArr.length; i++) {
    arr.push(strArr[i].replace(/[\(\)]/g, '').split(','));
  }

  var input = []; //machine's default order
  for (var i = 0; i < arr.length; i++) {
    input.push(i);
  }

  var permutations = GetPermutations(input);
  var minCost = null, minCostCombination = null;
  permutations.forEach(function (element, index, array) { // check cost of each permutation
    var cost = 0;
    for (var i = 0; i < element.length; i++) {
      cost += Number(arr[i][element[i]]);
    }
    if (minCost == null || cost < minCost) {
      minCost = cost;
      minCostCombination = element;
    }
  });

  var assignment = "";
  for (var i = 0; i < minCostCombination.length; i++) {
    assignment += '(' + Number(i + 1) + '-' + Number(minCostCombination[i] + 1) + ')';
  }
  return assignment;
}
