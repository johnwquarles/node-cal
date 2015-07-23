var should = require('chai').should();
var path = require('path');
require(process.cwd() + '/node-cal.js');

describe('Zeller', function(){
  var zeller = require(path.join(process.cwd() + '/lib/zeller'));
  it('should return 13 for January, 14 for February, normal numbers for the rest', function(){
    zeller.convertM(1).should.equal(13);
    zeller.convertM(2).should.equal(14);
    zeller.convertM(3).should.equal(3);
    zeller.convertM(12).should.equal(12);
  });
  it('should return the correct day of the week when calculate is called', function() {
    zeller.calculate(7,23,2015).should.equal(5);
    zeller.calculate(10,10,1984).should.equal(4);
    zeller.calculate(11, 3, 2043).should.equal(3);
    zeller.calculate(5, 18, 1921).should.equal(4);
    zeller.calculate(10, 1, 2015).should.equal(5);
  })
});

describe('makecal', function() {
  var makecal = require(path.join(process.cwd() + '/lib/makecal'));
  it('should correctly determine the number of days in the month, accounting for leap years', function(){
    makecal.numDays(12, 2015).should.equal(31);
    makecal.numDays(2, 2000).should.equal(29);
  })
});
