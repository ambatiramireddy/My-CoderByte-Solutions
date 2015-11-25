function HamiltonianPath(strArr) {
  var inVertices = strArr[0].replace(/[\(,\)]/g, '').split('');
  var edges= strArr[1].replace(/[\(\)]/g, '').split(',');
  var outVertices = strArr[2].replace(/[\(,\)]/g, '').split('');
  for (var i = 0; i < outVertices.length - 1; i++) {
    var edgeR = outVertices[i] + '-' + outVertices[i + 1];
    var edgeL = outVertices[i + 1] + '-' + outVertices[i];
    if (edges.indexOf(edgeR) == -1 && edges.indexOf(edgeL) == -1)
      return outVertices[i];
  }
  return 'yes';
}
