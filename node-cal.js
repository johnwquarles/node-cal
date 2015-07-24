#!/usr/bin/env node

var args = process.argv.slice(2);
var makecal = require('./lib/makecal');

if (args.length === 2) {
  if (args[0] < 1 || args[0] > 12 || args[1] < 1754) {console.log("Invalid Input!"); return}
  makecal.writeMonth(args[0], args[1]);}
else if (args.length === 1) {
  if (args[0] < 1754) {console.log("Invalid input!"); return}
  makecal.writeYear(args[0]);}
else {
  var d = new Date();
  makecal.writeMonth(d.getMonth() + 1, d.getFullYear());
}
