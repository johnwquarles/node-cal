#!/usr/bin/env node

var args = process.argv.slice(2);
var makecal = require('./lib/makecal');

if (args.length === 2) {makecal.writeMonth(args[0], args[1]);} else {makecal.writeYear(args[0]);}
