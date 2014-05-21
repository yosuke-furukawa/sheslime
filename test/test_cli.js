var exec = require("child_process").exec;
var packageJson = require("../package.json");
var assert = require("assert");
var sheslime = exec(process.cwd() + "/bin/cli.js package.json package.json > test.json", 
                    function(err, stdout, stderr){
                      console.log("test");
                      assert.ifError(err);
                      assert.ifError(stderr);
                    });

