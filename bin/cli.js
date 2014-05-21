#!/usr/bin/env node
var fs = require('fs');
var sheslime = require('../index');

function showHelp() {
  console.log("Usage : sheslime package1.json package2.json");
}

if (process.argv.length < 4) {
  showHelp();
}

var file1 = process.argv[2];
var file2 = process.argv[3];

var json1 = fs.readFileSync(file1);
var json2 = fs.readFileSync(file2);


json1 = JSON.parse(""+json1);
json2 = JSON.parse(""+json2);

var result = JSON.stringify(sheslime(json1, json2), null, 4);

console.log(result);
