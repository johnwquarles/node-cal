var cp = require('child_process');
var should = require('chai').should();

describe('CLI', function() {
  describe('Leap February', function() {
    it('should handle leap years', function () {
      testCal('2 2012');
      //----------------
      // async pattern:
      //----------------
      // (pass in done to it() function call)
      // var goalOutput = cp.execSync('cal 2 2012');
      // var output = cp.execSync('./node-cal 2 2012');
      // output.should.equal(goalOutput);
      //----------------
      // could also do this asynchronously:
      //----------------
      // note that above uses execSync; below uses exec.
      // cp.exec('cal 2 2012', function(err, goalOutput) {
      //   cp.exec('./node-cal 2 2012', function(err, output) {
      //     output.should.equal(goalOutput);
      //     done();
      //   });
      // });
    })
    it('should handle non leap years', function () {
      testCal('2 2014');
    });
  });
  describe('Month Lengths', function () {
    it ('should handle a 4 week month', function () {
      testCal('2 2015');
    });
    it ('should handle a 5 week month', function () {
      testCal('1 2015');
    });
    it ('should handle a 6 week month', function () {
      testCal('2 2015');
    });
  });
  describe('Year', function () {
    it('should handle printing a full year', function () {
      testCal('2015');
    });
  });
  describe('Current Month', function () {
    it('should handle no argument', function () {
      testCal('');
    });
  });
  describe('Usage', function () {
    it('should print help for bad arguments', function (done) {
      testCalError(10000);
      testCalError('13 2015');
      testCalError('asdf', done);
    });
  });
});

function testCal(arg) {
  var sep = arg ? ' ' : '';
  var goal = cp.execSync('cal' + sep + arg).toString();
  var output = cp.execSync('./node-cal.js' + sep + arg).toString();
  output.should.equal(goal);
  // async pattern: (pass in done as argument to it() function call that precedes call to testCal())
  //----------------
  // cp.exec('cal' + sep + arg, function(err, goal) {
  //   cp.exec('./node-cal.js' + sep + arg, function(err, output) {
  //     //console.log(output);
  //     output.should.equal(goal);
  //     done();
  //   });
  // });
}

function testCalError(arg, done) {
  // don't worry about sep since we aren't testing for an empty input here.
  cp.exec('cal' + " " + arg, function(err) {
    var lastErr = err;
    cp.exec('./node-cal.js' + " " + arg, function(err, output) {
      output.should.equal(lastErr.toString().split("\n")[1] + "\n");
      done && done();
    })
  })
}
