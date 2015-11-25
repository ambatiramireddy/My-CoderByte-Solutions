function QueenCheck(strArr) {
  var arr = strArr[0].replace(/[\(\)]/g, '').split(',');
  var queen = { x: Number(arr[0]), y: Number(arr[1]) };
  arr = strArr[1].replace(/[\(\)]/g, '').split(',');
  var king = { x: Number(arr[0]), y: Number(arr[1]) };

  function isKingInCheck(king) {
    if (king.x == queen.x && king.y == queen.y)  //queen captured, not in check
      return false;
    if (king.x == queen.x || king.y == queen.y || 
        (Math.abs(king.x - queen.x) == Math.abs(king.y - queen.y)))
      return true;
    return false;
  }

  function isMoveOnBoard(a) {
    if (a.x > 0 && a.x < 9 && a.y > 0 && a.y < 9)
      return true;
    return false;
  }

  function getKingMovesCount() {
    var moves = [];
    //to iterate through all 8 places around the king
    for (var i = -1; i < 2; i++) {
      for (var j = -1; j < 2; j++) {
        if (i == 0 && j == 0)
          continue; //it gives the existing location of x
        var move = { x: king.x + i, y: king.y + j };
        if (isMoveOnBoard(move) && !isKingInCheck(move))
          moves.push(move);
      }
    }
    return moves.length;
  }

  if (isKingInCheck(king))
    return getKingMovesCount();
  else
    return -1;
}
