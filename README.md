Sheslime
==============

sheslime merge different jsons.

![image](http://www.suruga-ya.jp/database/pics/game/601037290.jpg)

Usage Commandline
==============

```sh
$ npm install sheslime -g
```

```sh
$ sheslime old/bower.json new/bower.json
```

Usage Programmable
=============

```javascript
var sheslime = require("sheslime");

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

/*
{
  "name": "json5x",
  "dependencies": {
    "socket.io": "~0.2.0",
    "json5": "latest"
  },
  "devDependencies": {
    "jsx": "~0.9.83"
  }
}
*/
var slime = sheslime(packageJson1, packageJson2);


```
