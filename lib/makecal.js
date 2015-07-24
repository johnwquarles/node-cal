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
  return (month === 2 && this.isLeap(year)) ? 29 : days_in_month[month];
}

export_obj.isLeap = function(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {return true;}
  return false;
}

export_obj.writeYear = function(year) {
  var year = parseInt(year);
  this.buckets = [[],[],[],[],[],[],[],[]];
  for (var i = 1; i < 13; i++) {
    this.writeMonth(i, year, true);
  }
  //console.log(this.buckets);
  console.log(yearHeader());

  for (var j = 0; j <= 9; j+=3) {
    for (var i = 0; i < this.buckets.length; i++) {
      console.log(this.buckets[i][j] + " " + this.buckets[i][j+1] + " " + this.buckets[i][j+2]);
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



// Y is a flag to pass in to tell this to generate a whole year's calendar.
export_obj.writeMonth = function(month, year, Y){
  var j = 1;
  var month = parseInt(month);
  var year = parseInt(year);
  var numDays = this.numDays(month, year);
  //console.log(numDays, month, year);
  var firstIs = (zeller.calculate(month, 1, year) + 6) % 7;
  // let's get the first day into format: 0 is Sun, 1 is Mon, 6 is Sat.
  if(!Y) {
    console.log(makeHeader());
    console.log("Su Mo Tu We Th Fr Sa");
    console.log(makeFirstLine());
    for (var i = 0; i < 5; i++) {
      console.log(makeOtherLine());
    }
  } else {
    this.buckets[0].push(makeHeader());
    this.buckets[1].push("Su Mo Tu We Th Fr Sa ");
    this.buckets[2].push(makeFirstLine());
    for (var i = 3; i < 8; i++) {
      this.buckets[i].push(makeOtherLine());
    }
  }

  function makeHeader() {
    var line = "";
    var spaces = "";
    var monthTitle = month_name[month];
    var content = monthTitle;
    if (!Y) {content = content + " " + year;}
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
