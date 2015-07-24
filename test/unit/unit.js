var should = require('chai').should();
var path = require('path');
require(process.cwd() + '/node-cal.js');

describe('Zeller', function(){
  var zeller = require(path.join(process.cwd() + '/lib/zeller'));
  it('should return the correct day of the week when calculate is called', function() {
    zeller.calculate(7,23,2015).should.equal(5);
    zeller.calculate(10,10,1984).should.equal(4);
    zeller.calculate(11, 3, 2043).should.equal(3);
    zeller.calculate(5, 18, 1921).should.equal(4);
    zeller.calculate(10, 1, 2015).should.equal(5);
    zeller.calculate(1, 1, 1872).should.equal(2);
    zeller.calculate(1, 1, 1983).should.equal(0);
    zeller.calculate(1, 1, 2000).should.equal(0);
  })
});

describe('makecal', function() {
  var makecal = require(path.join(process.cwd() + '/lib/makecal'));
  it('should correctly determine the number of days in the month, accounting for leap years', function(){
    makecal.numDays(12, 2015).should.equal(31);
    makecal.numDays(2, 2000).should.equal(29);
  })
});

describe('isLeap', function() {
  var makecal = require(path.join(process.cwd() + '/lib/makecal'));
  it('should correctly determine if a year is a leap year', function(){
    makecal.isLeap(2015).should.equal(false);
    makecal.isLeap(2000).should.equal(true);
    makecal.isLeap(2100).should.equal(false);
    makecal.isLeap(1872).should.equal(true);
  })
});
