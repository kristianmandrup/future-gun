'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$put = $put;
exports.$putAt = $putAt;
exports.$addPut = $addPut;

var _chainGun = require('chain-gun');

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $put(node) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _promisify2.default.apply(undefined, [node.put, node].concat(args));
}

function $putAt(node, at) {
  var pathNode = node.path(at);
  if (pathNode) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    return _promisify2.default.apply(undefined, [_chainGun.putAt, pathNode].concat(args));
  } else {
    throw new Error('No path ' + at);
  }
}

function $addPut(_ref) {
  var chain = _ref.chain;

  chain.$put = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return $put.apply(undefined, [this].concat(args));
  };

  chain.$putAt = function (at) {
    for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    return $putAt.apply(undefined, [this, at].concat(args));
  };
  return chain;
}
//# sourceMappingURL=put.js.map
