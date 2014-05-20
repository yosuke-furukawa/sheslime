var semver = require('semver');
var xtend = require("xtend");
var getDeps = function(deps1, deps2) {
  var deps = [];
  for (var dep1 in deps1) {
    if (deps.indexOf(dep1) < 0) {
      deps.push(dep1);
    }
  }
  for (var dep2 in deps2) {
    if (deps.indexOf(dep2) < 0) {
      deps.push(dep2);
    }
  }
  return deps;
};

var isLatest = function(word) {
  return word === "*" || word === "latest" || !semver.valid(word);
};

var setupDeps = function(deps1, deps2, target) {
  var deps = getDeps(deps1, deps2);
  deps.forEach(function(dep) {
    if (!deps1[dep]) {
      target[dep] = deps2[dep];
      return;
    } else if (!deps2[dep]) {
      target[dep] = deps1[dep];
      return;
    }
    
    var sem1 = deps1[dep].replace("^", "");
    sem1 = sem1.replace("~", "");
    var sem2 = deps2[dep].replace("^", "");
    sem2 = sem2.replace("~", "");
    
    if (isLatest(sem2)) {
      target[dep] = deps2[dep];
      return;
    } else if (isLatest(sem1)) {
      target[dep] = deps1[dep];
      return;
    }

    sem1 = new semver(sem1);
    sem2 = new semver(sem2);
    if (semver.compare(sem1, sem2) > 0) {
      target[dep] = deps1[dep]; 
      return;
    } else {
      target[dep] = deps2[dep]; 
      return;
    }
  });
};

module.exports = function(json1, json2) {
  var result = xtend(json1, json2);
  if (!json1.hasOwnProperty("dependencies")) json1.dependencies = {};
  if (!json2.hasOwnProperty("dependencies")) json2.dependencies = {};
  if (!json1.hasOwnProperty("devDependencies")) json1.devDependencies = {};
  if (!json2.hasOwnProperty("devDependencies")) json2.devDependencies = {};

  result.dependencies = result.dependencies || {};
  result.devDependencies = result.devDependencies || {};
  var deps = setupDeps(json1.dependencies, json2.dependencies, result.dependencies);
  var devDeps = setupDeps(json1.devDependencies, json2.devDependencies, result.devDependencies);
  return result;
};
