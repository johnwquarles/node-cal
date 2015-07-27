# node-cal [![Code Climate](https://codeclimate.com/github/johnwquarles/node-cal/badges/gpa.svg)](https://codeclimate.com/github/johnwquarles/node-cal) [![Test Coverage](https://codeclimate.com/github/johnwquarles/node-cal/badges/coverage.svg)](https://codeclimate.com/github/johnwquarles/node-cal/coverage)

[![Dependency Status](https://david-dm.org/johnwquarles/node-cal.svg)](https://david-dm.org/johnwquarles/node-cal) [![devDependency Status](https://david-dm.org/johnwquarles/node-cal/dev-status.svg)](https://david-dm.org/johnwquarles/node-cal#info=devDependencies)

Node command line calendar application

This application runs integration tests which match its output with the command-line application "cal" on Mac. They match exactly. Travis' server runs Ubuntu which apparently calls a slightly different version of cal (trailing whitespaces differ), hence the integration tests fail when tested through Travis. So no "build passing" badge for now.

Actually, you know what?
![It passes!](https://img.shields.io/travis/joyent/node/v0.6.svg)
