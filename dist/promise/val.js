'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$val = $val;
exports.$addVal = $addVal;

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $val(node) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _promisify2.default.apply(undefined, [node.val, node].concat(args));
}

function $addVal(_ref) {
  var chain = _ref.chain;

  chain.$val = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return $val.apply(undefined, [this].concat(args));
  };
  return chain;
}
//# sourceMappingURL=val.js.map
