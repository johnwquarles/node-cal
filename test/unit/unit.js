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

describe('writeMonth', function() {
  var makeMonth = require(path.join(process.cwd() + '/lib/writeMonth'));
  it('should correctly determine the number of days in the month, accounting for leap years', function(){
    makeMonth.numDays(12, 2015).should.equal(31);
    makeMonth.numDays(2, 2000).should.equal(29);
  })
  it('should correctly determine if a year is a leap year', function(){
    makeMonth.isLeap(2015).should.equal(false);
    makeMonth.isLeap(2000).should.equal(true);
    makeMonth.isLeap(2100).should.equal(false);
    makeMonth.isLeap(1872).should.equal(true);
  })
  it('should, well, write a month', function(){
    makeMonth.writeMonth(12, 2005).should.equal("worked");
  })
});

describe('makecal', function() {
  var makecal = require(path.join(process.cwd() + '/lib/makecal'));
  it('should print error messages when provided with invalid input', function(){
    makecal.makeCal([1600]).should.equal("err");
    makecal.makeCal([13, 2006]).should.equal("err");
  })
});
