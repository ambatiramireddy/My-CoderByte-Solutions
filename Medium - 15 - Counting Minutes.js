function CountingMinutes(str) {

  function ParseTime(time) {
    var timeParts = time.split(':');
    var hours = parseInt(timeParts[0]);
    var minutes = parseInt(timeParts[1].substr(0, 2));
    var totalMinutes = hours * 60 + minutes;
    var AMPM = timeParts[1].substr(2, 2).toUpperCase();
    return { AMPM: AMPM, minutes: totalMinutes };
  }

  var times = str.split('-')
  var time1 = ParseTime(times[0]);
  var time2 = ParseTime(times[1]);

  if (time1.AMPM != time2.AMPM) {
    time2.minutes += 12 * 60;
  }
  else if (time1.AMPM == time2.AMPM && time1.minutes > time2.minutes) {
    time2.minutes += 24 * 60;
  }

  return time2.minutes - time1.minutes;
}
