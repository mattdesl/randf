# randf

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Returns random float between a range. If no range is specified, 0 (inclusive) to 1 (exclusive) is used. You can also pass a single number to specify a range between 0 and N.

```js
var random = require('randf')

console.log( random() )       // => 0 ... 1
console.log( random(25) )     // => 0 ... 25
console.log( random(-1, 1) )  // => -1 ... 1
```

## Usage

[![NPM](https://nodei.co/npm/randf.png)](https://nodei.co/npm/randf/)

#### `random([min, max])`

Returns a new random number within the given range. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/randf/blob/master/LICENSE.md) for details.
