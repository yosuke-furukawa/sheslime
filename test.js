var assert = require("assert");
var sheslime = require("./index");

var packageJson1 = {
  "name": "json5x",
  "dependencies": {
    "socket.io": "~0.2.0",
    "json5": "~0.2.0"
  },
  "devDependencies": {
    "jsx": "~0.9.83"
  }
};
var packageJson2 = {
  "name": "json5x",
  "dependencies": {
    "json5": "latest"
  },
  "devDependencies": {
    "jsx": "~0.9.71"
  }
};

var expectedJson = {
  "name": "json5x",
  "dependencies": {
    "socket.io": "~0.2.0",
    "json5": "latest"
  },
  "devDependencies": {
    "jsx": "~0.9.83"
  }
};

var actual = sheslime(packageJson1, packageJson2);
assert.deepEqual(actual, expectedJson);

var packageJson1 = {
  "name": "json5x",
  "dependencies": {
    "socket.io": "1.2.0",
    "json5": "~0.2.0"
  },
  "devDependencies": {
    "jsx": "~0.9.83"
  }
};
var packageJson2 = {
  "name": "json5x",
  "dependencies": {
    "socket.io": "abcdefg",
    "json5": "^1.2.0"
  },
  "devDependencies": {
    "jsx": "~0.9.71"
  }
};

var expectedJson = {
  "name": "json5x",
  "dependencies": {
    "socket.io": "abcdefg",
    "json5": "^1.2.0"
  },
  "devDependencies": {
    "jsx": "~0.9.83"
  }
};

var actual = sheslime(packageJson1, packageJson2);
assert.deepEqual(actual, expectedJson);
