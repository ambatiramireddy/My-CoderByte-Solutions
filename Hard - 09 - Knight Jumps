function KnightJumps(str) {
  var s = str.replace(/[\(\)]/g, '').split(' ');
  var x = Number(s[0]);
  var y = Number(s[1]);

  var expressions = ["x + 2 < 9", "x - 2 > 0", "y + 2 < 9", "y - 2 > 0"];
  var results = [];
  for (var i = 0; i < expressions.length; i++) {
      results.push(eval(expressions[i]));
  }

  var trueCount = results.filter(function (v) { return v == true; }).length;
  if (trueCount == 4)
      return 8;
  else {
      results = [];
      for (var i = 0; i < expressions.length; i++) {
          results.push(eval(expressions[i].replace('2', '1')));
      }
      var modifiedTrueCount = results.filter(function (v) { return v == true; }).length;
      if (trueCount == 3)
          return modifiedTrueCount == 4 ? 6 : 4;
      else
          return modifiedTrueCount;
  }
}
