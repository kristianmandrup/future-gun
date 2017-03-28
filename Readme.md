# Future gun

![future-gun](https://github.com/kristianmandrup/future-gun/raw/master/futuregun.png)

[Gun.js](http://gun.js.org/) extensions for `Promise` based async flow control.
Promise methods are prefixed with `$` by convention.

## Install

npm: `npm i -S future-gun` (soon)

yarn: `yarn add future-gun` (soon)

from github: `npm i -S kristianmandrup/future-gun`

### Dependencies

- `gun` v. 0.6 or higher
- `chain-gun`

## Use

Assumes [Babel.js](https://babeljs.io) or similar transpiler setup

To add all chain methods

```js
import Gun from 'gun/gun'
import future from 'future-gun'
future(Gun)
```

To control which chain methods to add

```js
import {
  addPromise
} from 'future-gun'
add(Gun, 'fields', 'timed', 'value')
```

Import individual chain modules

```js
import {
  fields,
  addFields
} from 'future-gun/dist/fields'
addFields(Gun.chain)
```

### Require (Node.js)

Using `require`

```js
const Gun = require('gun/gun')
require('future-gun')(Gun)
```

**Promise extensions**

ES6 `Promise` or ES7 `async/await`) are always prefixed with `$`

- `.$fields(opt)` - get fields (ie. property names)
- `.$iterate(opts)` - iterate
- `.$mapReduce(options, putCb, opt)` - map/reduce
- `.$no(opt)` - blocks if no data, see [no](https://github.com/amark/gun/wiki/Snippets-(v0.3.x)#-no)
- `.$val(opt)` - full value (with meta)
- `.$value(opt)` - get value (no meta)
- `.$valueAt(path, opt)` - get value at the `path` (no meta)
- `.$put(opt)` - put value and wait until done (synced)
- `.$putAt(path, opt)` - put value at the `path` and wait until done (synced)
- `.$recurse(filter)` - recursive filter
- `.$timed(opts)` - timed recursion

## mapReduce

See full [mapReduce guide](https://github.com/kristianmandrup/gun-edge/Map-Reduce.md)

## Contributing

Install dependency modules/packages

`npm i`

### Compile/Build

The project includes a `gulpfile` configured to use Babel 6.
All `/src` files are compiled to `/dist` including source maps.

Scripts:

- start: `npm start`
- build: `npm run build` (ie. compile)
- watch and start: `npm run watch`
- watch and build: `npm run watch:b`

### Run Tests

`npm test` or simply `ava test`

## License

MIT Kristian Mandrup