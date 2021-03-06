'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$value = $value;
exports.$valueAt = $valueAt;
exports.$addValue = $addValue;

var _chainGun = require('chain-gun');

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $value(node) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _promisify2.default.apply(undefined, [_chainGun.value, node].concat(args));
}

function $valueAt(node, at) {
  var pathNode = node.path(at);
  if (pathNode) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return _promisify2.default.apply(undefined, [_chainGun.value, pathNode].concat(args));
  } else {
    throw new Error('No path ' + at);
  }
}

function $addValue(_ref) {
  var chain = _ref.chain;

  chain.$value = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return $value.apply(undefined, [this].concat(args));
  };

  chain.$valueAt = function (at) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return $valueAt.apply(undefined, [this, at].concat(args));
  };
  return chain;
}
//# sourceMappingURL=value.js.map
