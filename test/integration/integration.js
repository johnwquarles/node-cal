var should = require('chai').should();
var cp = require('child_process');

describe('CLI', function () {
  it('indicade that input is no good when it is no good', function (done) {
    cp.execFile('./node-cal.js', ["13"],function (err, stdout) {
      stdout.should.equal('Invalid input!\n');
    });
    cp.execFile('./node-cal.js', ["13, 2009"],function (err, stdout) {
      stdout.should.equal('Invalid input!\n');
    });
    cp.execFile('./node-cal.js', ["0"],function (err, stdout) {
      stdout.should.equal('Invalid input!\n');
      done();
    });
  });
  it('shouldn\'t give the error message when the input is ok, either with a year, month and year, or no input (current date)', function (done) {
    cp.execFile('./node-cal.js', ["2000"],function (err, stdout) {
      stdout.should.not.equal('Invalid input!\n');
    });
    cp.execFile('./node-cal.js', ["00009", "2009"],function (err, stdout) {
      stdout.should.not.equal('Invalid input!\n');
      done();
    });
    cp.execFile('./node-cal.js',function (err, stdout) {
      stdout.should.not.equal('Invalid input!\n');
      done();
    });
  });
});
