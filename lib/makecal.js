var makeMonth = require('./writeMonth');
var makeYear = require('./writeYear');

var export_obj = {};

export_obj.makeCal = function(args_arr) {
  if (args_arr.length === 2) {
    if (args_arr[0] < 1 || args_arr[0] > 12 || args_arr[1] < 1754) {console.log("Invalid Input!"); return}
    makeMonth.writeMonth(args_arr[0], args_arr[1]);}
  else if (args_arr.length === 1) {
    if (args_arr[0] < 1754) {console.log("Invalid input!"); return}
    makeYear.writeYear(args_arr[0]);}
  else {
    var d = new Date();
    makeMonth.writeMonth(d.getMonth() + 1, d.getFullYear());
  }
}

module.exports = export_obj;
