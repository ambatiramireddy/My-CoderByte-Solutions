function ParseTime(time) {
  var timeParts = time.split(':');
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1].substr(0, 2));
  var AMPM = timeParts[1].substr(2, 2).toUpperCase();
  var totalMinutes = hours * 60 + minutes;
  if (AMPM == 'PM' && hours < 12)
    totalMinutes += 12 * 60;

  return { hours: hours, minutes: minutes, AMPM: AMPM, totalMinutes: totalMinutes };
}

function FormatTime(time) {
  return (time < 10) ? '0' + time : time;
}

function MostFreeTime(strArr) {
  var startTimes = [];
  for (var i = 0; i < strArr.length; i++) {
    var period = strArr[i];
    var times = period.split('-')
    var time1 = ParseTime(times[0]);
    var time2 = ParseTime(times[1]);
    time1.endTime = time2
    startTimes.push(time1);
  }
  startTimes.sort(function (a, b) { return a.totalMinutes - b.totalMinutes });

  //to find difference between times
  var diff = 0; mostDiff = 0;
  for (var i = 0; i < startTimes.length - 1; i++) {
    var endTimeOfEvent = startTimes[i].endTime;
    var startTimeOfNextEvent = startTimes[i + 1];
     var diff = startTimeOfNextEvent.totalMinutes - endTimeOfEvent.totalMinutes;
    if (diff > mostDiff)
      mostDiff = diff;
  }

  var output;
  if (mostDiff < 60)
    output = '00:' + FormatTime(mostDiff);
  else {
    var hours = parseInt(mostDiff / 60);
    var minutes = mostDiff % 60;
    output = FormatTime(hours) + ':' + FormatTime(minutes);
  }
  return output;
}
