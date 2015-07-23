var zeller = require('./zeller.js');

var export_obj = {};

var days_in_month = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
}

export_obj.numDays = function(month, year){
  return (month === 2 && year % 4 === 0) ? 29 : days_in_month[month];
}

module.exports = export_obj;
