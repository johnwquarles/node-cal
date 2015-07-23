var zeller = require('./zeller');

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

var days_of_week = {
  0: "Su",
  1: "Mo",
  2: "Tu",
  3: "We",
  4: "Th",
  5: "Fr",
  6: "Sa"
}

var month_name = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

export_obj.numDays = function(month, year){
  return (month === 2 && year % 4 === 0) ? 29 : days_in_month[month];
}

export_obj.writeMonth = function(month, year){
  var j = 1;
  var numDays = this.numDays(month, year);
  var firstIs = (zeller.calculate(parseInt(month), 1, parseInt(year)) + 6) % 7;
  // let's get the first day into format: 0 is Sun, 1 is Mon, 6 is Sat.
  console.log(makeHeader());
  console.log("Su Mo Tu We Th Fr Sa");
  console.log(makeFirstLine());
  while (j <= numDays) {
    console.log(makeOtherLine());
  }

  function makeHeader() {
    var line = "";
    var monthTitle = month_name[month];
    var content = monthTitle + " " + year;
    var leading_spaces = Math.floor((20 - content.length) / 2);
    for (var i = 0; i < leading_spaces; i++) {
      line += " ";
    }
    line += content;
    return line;
  }

  function makeFirstLine () {
    var line = "";
    for (var i = 0; i < firstIs; i++) {
      line += "   ";
    }
    for (var i = firstIs; i <= 6; i++) {
      if (i.toString().length === 1) {line += " ";}
      line += j
      if (i !== 7) {line += " ";}
      j++;
    }
    return line;
  }

  function makeOtherLine() {
    var line = "";
    for (var i = 0; i < 7; i++) {
      if (j <= numDays && j.toString().length === 1) {
        line += " " + j;
      } else if (j <= numDays) {
        line += j;
      } else {
        line += "  ";
      }
      if (i !== 7) {line += " ";}
      j++
    }
    return line;
  }

}

module.exports = export_obj;
