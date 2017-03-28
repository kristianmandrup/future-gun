'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$recurse = $recurse;
exports.$addRecurse = $addRecurse;

var _chainGun = require('chain-gun');

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $recurse(node) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _promisify2.default.apply(undefined, [_chainGun.recurse, node].concat(args));
}

function $addRecurse(_ref) {
  var chain = _ref.chain;

  chain.$recurse = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return $recurse.apply(undefined, [this].concat(args));
  };
  return chain;
}
//# sourceMappingURL=recurse.js.map
