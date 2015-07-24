var makeMonth = require('./writeMonth');

var export_obj = {};

export_obj.writeYear = function(year) {
  var year = parseInt(year);
  makeMonth.Y = true;
  for (var i = 1; i < 13; i++) {
    makeMonth.writeMonth(i, year);
  }
  console.log(yearHeader());

  for (var j = 0; j <= 9; j+=3) {
    for (var i = 0; i < makeMonth.buckets.length; i++) {
      console.log(makeMonth.buckets[i][j] + " " + makeMonth.buckets[i][j+1] + " " + makeMonth.buckets[i][j+2]);
    }
  }

  function yearHeader(){
    var spaces_num = Math.floor((64 - year.toString().length) / 2);
    var spaces = "";
    for (var i = 0; i < spaces_num - 1; i++) {
      spaces += " ";
    }
    return spaces + year + spaces + "\n";
  }
}

module.exports = export_obj;
