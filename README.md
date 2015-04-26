jstrace-or-noop
---------------

[![NPM version][npm-image]][npm-url]
[![node version][node-image]][node-url]
[![Gittip][gittip-image]][gittip-url]

[npm-image]: https://img.shields.io/npm/v/jstrace-or-noop.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jstrace-or-noop
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[gittip-image]: https://img.shields.io/gittip/dead-horse.svg?style=flat-square
[gittip-url]: https://www.gittip.com/dead-horse/

Dependent jstrace but not require it.

[jstrace](http://github.com/jstrace/jstrace) is only need one instrance in an app. 
So all the dependence modules that support jstrace should not add jstrace as a dependency directly.

## Installation

```bash
$ npm install jstrace-or-noop
```

## Usage

```js
var trace = require('jstrace-or-noop');

trace('deps:wat', {msg: msg});
```

### License

MIT
