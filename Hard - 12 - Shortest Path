//Referred and improved the following solution https://github.com/wezleytsai/coderbyte/edit/master/hard%2003%20-%20shortest%20path.js
function ShortestPath(strArr) {
  var nodeCount = Number(strArr.splice(0, 1));
  var nodes = strArr.splice(0, nodeCount);
  var connections = strArr.map(function (v) { return v.split('-'); })
  var startNode = nodes[0];
  var endNode = nodes[nodes.length - 1];

  var bestPath = startNode + '-' + endNode;
  if (strArr.indexOf(bestPath) != -1)
    return bestPath;

  var paths = [];
  findPaths([startNode]);

  function findPaths(pathSoFar) {
    // pathSoFar = [a, b, ... n] where a is starting point and n is current node
    var currentNode = pathSoFar[pathSoFar.length - 1];
    if (currentNode === endNode) { // if(current == endNode), path complete
      paths.push(pathSoFar.slice());
      return;
    }

    for (var i = 0; i < connections.length; i++) {
      var connection = connections[i];
      if (currentNode === connection[0] || currentNode === connection[1]) {
        var nextNode = (currentNode === connection[0]) ? connection[1] : connection[0];
        if (pathSoFar.indexOf(nextNode) === -1) {
          pathSoFar.push(nextNode);
          findPaths(pathSoFar.slice());
          pathSoFar.pop();
        }
      }
    }
  };

  var shortestPathNodes = paths.sort(function (a, b) { return b.length - a.length; }).pop();
  if (shortestPathNodes)
    return shortestPathNodes.join('-');
  else
    return -1;
}
