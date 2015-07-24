var zeller = require('./zeller');

var export_obj = {};
var j = 1;
var monthIs;
var yearIs;
var numDays;
var firstIs;

export_obj.Y = false;
// buckets is outside of the scope of writeMonth and module is a singleton,
// so buckets should all get filled up when running writeMonth 12 times (as desired);
// writeYear should be able to use them as before.
export_obj.buckets = [[],[],[],[],[],[],[],[]];

var month_name = {1: "January", 2: "February", 3: "March",
                  4: "April",   5: "May",      6: "June",
                  7: "July",    8: "August",   9: "September",
                 10: "October",11: "November",12: "December"};

var days_in_month = {1: 31,  2: 28,  3: 31,  4: 30,  5: 31,  6: 30,
                     7: 31,  8: 31,  9: 30, 10: 31, 11: 30, 12: 31};

export_obj.numDays = function(month, year){
  return (month === 2 && this.isLeap(year)) ? 29 : days_in_month[month];
}

export_obj.isLeap = function(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {return true;}
  return false;
}

export_obj.writeMonth = function(month, year){
  j = 1;
  monthIs = parseInt(month);
  yearIs = parseInt(year);
  numDays = this.numDays(month, year);
  firstIs = (zeller.calculate(month, 1, year) + 6) % 7;
  // let's get the first day into format: 0 is Sun, 1 is Mon, 6 is Sat.
  if(!this.Y) {
    console.log(this.makeHeader());
    console.log("Su Mo Tu We Th Fr Sa");
    console.log(this.makeFirstLine());
    for (var i = 0; i < 5; i++) {
      console.log(this.makeOtherLine());
    }
  } else {
    this.buckets[0].push(this.makeHeader());
    this.buckets[1].push("Su Mo Tu We Th Fr Sa ");
    this.buckets[2].push(this.makeFirstLine());
    for (var i = 3; i < 8; i++) {
      this.buckets[i].push(this.makeOtherLine());
    }
  }
  return "worked";
}

export_obj.makeHeader = function() {
  var line = "";
  var spaces = "";
  var monthTitle = month_name[monthIs];
  var content = monthTitle;
  if (!this.Y) {content = content + " " + yearIs;}
  var spaces_num = Math.floor((20 - content.length) / 2);
  for (var i = 0; i < spaces_num; i++) {
    spaces += " ";
  }
  line = spaces + content + spaces;
  for (var i = 0; i < (20 - line.length) + 2; i++) {
    line += " ";
  }
  return line;
}

export_obj.makeFirstLine = function() {
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

export_obj.makeOtherLine = function() {
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

module.exports = export_obj;
