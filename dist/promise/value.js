'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.$value = $value;
exports.$valueAt = $valueAt;
exports.$addValue = $addValue;

var _chaingun = require('chaingun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $value(node, opt) {
  return new _promise2.default(function (resolve, reject) {
    (0, _chaingun.value)(node, resolve, opt);
  });
}

function $valueAt(node, at, opt) {
  var path = node.path(at);
  if (path) {
    return path.$value(opt);
  } else {
    throw new Error('No such path ' + at);
  }
}

function $addValue(_ref) {
  var chain = _ref.chain;

  chain.$value = function (opt) {
    return $value(this, opt);
  };

  chain.$valueAt = function (opt) {
    return $valueAt(this, opt);
  };
  return chain;
}
//# sourceMappingURL=value.js.map
