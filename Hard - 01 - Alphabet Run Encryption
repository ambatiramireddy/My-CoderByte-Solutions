function ReturnSequenceStartChar(arr) {
  var code1 = arr[0].charCodeAt(0);
  var code2 = arr[1].charCodeAt(0);
  var result;
  if (code1 + 1 == code2) {
    result = String.fromCharCode(code1 - 1);
  }
  else {
    result = String.fromCharCode(code1 + 1);
  }
  return result;
}

function ReturnSequenceEndChar(arr) {
  var code1 = arr[arr.length - 2].charCodeAt(0);
  var code2 = arr[arr.length - 1].charCodeAt(0);
  var result;
  if (code1 + 1 == code2) {
    result = String.fromCharCode(code2 + 1);
  }
  else {
    result = String.fromCharCode(code2 - 1);
  }
  return result;
}

function AlphabetRunEncryption(str) {
  var arr = [str[0]], prevCode = str.charCodeAt(0);
  var decoded = '', nextChar;
  for (var i = 1; i < str.length; i++) {
    var c = str[i];
    var code = str.charCodeAt(i);
    var len = arr.length;
    if (c == 'S') {
      if (len > 2) {
        decoded += ReturnSequenceStartChar(arr.slice(0, len - 2));
        decoded += arr[len - 2];
        nextChar = arr[len - 1];
      }
      else {
        decoded += arr[0];
        nextChar = arr[1];
      }
      arr = [];
    }
    else if (c == 'N') {
      if (len > 1) {
        decoded += ReturnSequenceStartChar(arr.slice(0, len - 1));
        decoded += arr[len - 1];
        nextChar = arr[len - 1];
      }
      else {
        decoded += arr[0];
        nextChar = arr[0];
      }
      arr = [];
    }
    else if (c == 'R') {
      decoded += String.fromCharCode(arr[0].charCodeAt(0) - 1);
      nextChar = String.fromCharCode(arr[0].charCodeAt(0) + 1);
      arr = [];
    }
    else if (c == 'L') {
      decoded += String.fromCharCode(arr[0].charCodeAt(0) + 1);
      nextChar = String.fromCharCode(arr[0].charCodeAt(0) - 1);
      arr = [];
    }
    else if (prevCode + 1 != code && prevCode - 1 != code && len > 2) {
      decoded += ReturnSequenceStartChar(arr);
      nextChar = ReturnSequenceEndChar(arr);
      arr = [];
      prevCode = code;
      arr.push(c);
    }
    else if (i == str.length - 1) {
      arr.push(c);
      decoded += ReturnSequenceStartChar(arr);
      nextChar = ReturnSequenceEndChar(arr);
      arr = [];
    }
    else {
      prevCode = code;
      arr.push(c);
    }
  }

  return decoded + nextChar;
}
