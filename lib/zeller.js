// returns day of the week for month/day
// Sunday is 1, etc., Saturday is 0.
var export_obj = {};

export_obj.calculate = function (month, day, year) {
  //console.log(month, day, year);
  if (month === 1 || month === 2) {year--;}
  var m = this.convertM(month);
  var K = year % 100;
  var J = Math.floor(year/100);
  var q = day;
  return (q + Math.floor((13*(m + 1))/5) + K + Math.floor(K/4) + Math.floor(J/4) + 5*J) % 7;
};

export_obj.convertM = function (month) {
  return month === 1 ? 13: month === 2 ? 14: month;
};

module.exports = export_obj;
