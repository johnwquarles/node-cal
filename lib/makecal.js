var makeMonth = require('./writeMonth');
var makeYear = require('./writeYear');

var export_obj = {};

export_obj.makeCal = function(args_arr) {
  if (args_arr[0]){var a = parseInt(args_arr[0]);}
  if (args_arr[1]){var b = parseInt(args_arr[1]);}
  if (args_arr.length === 2) {
    if (a < 1 || a > 12 || b < 1754) {console.log("Invalid input!"); return "err"}
    makeMonth.writeMonth(a, b);
    return "worked";
  }
  else if (args_arr.length === 1) {
    if (a < 1754) {console.log("Invalid input!"); return "err"}
    makeYear.writeYear(a);
    return "worked";
  }
  else {
    var d = new Date();
    makeMonth.writeMonth(d.getMonth() + 1, d.getFullYear());
    return "worked";
  }
}

module.exports = export_obj;
