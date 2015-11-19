function GasStation(strArr) {
  var gasStationCount = parseInt(strArr.splice(0, 1)[0]);
  
  for (var i = 0; i < strArr.length; i++) {
    var startIndex = i, count = 0; inputGas = 0; //gallons
    
    while (count < strArr.length) {
      var station1 = strArr[startIndex].split(':');
      inputGas += parseInt(station1[0]);
      var gasNeeded = parseInt(station1[1]);

      if (inputGas < gasNeeded)
        break;
      else {
        inputGas -= parseInt(station1[1]);

        startIndex = startIndex + 1 == strArr.length ? 0 : startIndex + 1;
        count++;
      }
    }

    if (count == strArr.length)
      return i + 1;
  }

  return 'impossible';
}
   
