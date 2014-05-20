#!/usr/bin/env node
var fs = require('fs');
var sheslime = require('../index');
var optimist = require('optimist');

var argv = optimist
  .usage("Usage : $0 package1.json package2.json")
  .demand(2)
  .argv;

var json1 = argv._[0];
var json2 = argv._[1];

json1 = fs.readFileSync(json1);
json2 = fs.readFileSync(json2);

json1 = JSON.parse(""+json1);
json2 = JSON.parse(""+json2);

var result = JSON.stringify(sheslime(json1, json2), null, 4);

console.log(result);
