#!/usr/bin/env node

var args = process.argv.slice(2);
var month = args[0];
var year = args[1];

var makecal = require('./lib/makecal');

makecal.writeMonth(month, year);
