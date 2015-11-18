function ArithGeoII(arr) {
  var diff = arr[1] - arr[0];
  var arithmetic = true;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] != diff)
      arithmetic = false;
  }

  var geometric = true;
  if (!arithmetic) {
    diff = arr[1] / arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] != diff)
        geometric = false;
    }
  }

  if (arithmetic)
    return 'Arithmetic';
  else if (geometric)
    return 'Geometric';
  else
    return -1;
}
