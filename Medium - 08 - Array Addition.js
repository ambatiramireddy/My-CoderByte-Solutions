function ArrayAddition(arr) {
    var largest = arr.sort(function (a, b) {
        return a - b;
    }).pop();

    //to iterate through all possible subsets of the array
    var ps = [[]];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            var subset = ps[j].concat(arr[i]);
            if (subset.length > 1 && subset.reduce(function (pv, v) { return pv + v; }) === largest) {
                return true;
            }
            else {
                ps.push(subset);
            }
        }
    }

  return false;
}
