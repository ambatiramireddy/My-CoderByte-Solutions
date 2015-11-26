function WeightedPath(strArr) {
  var nodeCount = Number(strArr.splice(0, 1));
  var nodes = strArr.splice(0, nodeCount);
  var connections = strArr.map(function (v) { return v.split('|'); })
  var startNode = nodes[0];
  var endNode = nodes[nodes.length - 1];

  var paths = [], pathWeights = [];
  findPaths([startNode], []);

  function findPaths(pathSoFar, weightSoFar) {
    // pathSoFar = [a, b, ... n] where a is start node and n is current node
    var currentNode = pathSoFar[pathSoFar.length - 1];
    if (currentNode === endNode) { // if(current == endNode), path complete
      paths.push(pathSoFar.slice());
      pathWeights.push(weightSoFar.slice());
      return;
    }

    for (var i = 0; i < connections.length; i++) {
      var connection = connections[i];
      if (currentNode === connection[0] || currentNode === connection[1]) {
        var nextNode = (currentNode === connection[0]) ? connection[1] : connection[0];
        if (pathSoFar.indexOf(nextNode) === -1) {
          pathSoFar.push(nextNode);
          weightSoFar.push(Number(connection[2]));
          findPaths(pathSoFar.slice(), weightSoFar.slice());
          pathSoFar.pop();
          weightSoFar.pop();
        }
      }
    }
  };

  if (paths.length > 0) {
    pathWeights = pathWeights.map(function (element) {
      return element.reduce(function (pv, v) { return pv + v; });
    });

    var minWeight = pathWeights[0]; minWeightIndex = 0;
    for (var i = 1; i < pathWeights.length; i++) {
      var weight = pathWeights[i];
      if (weight < minWeight) {
        minWeight = weight
        minWeightIndex = i;
      }
    }
    return paths[minWeightIndex].join('-');
  }
  else
    return -1;
}
