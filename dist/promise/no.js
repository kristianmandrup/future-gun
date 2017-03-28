'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$no = $no;
exports.$addNo = $addNo;

var _chainGun = require('chain-gun');

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $no(node) {
  return (0, _promisify2.default)(_chainGun.no, node);
}

function $addNo(_ref) {
  var chain = _ref.chain;

  chain.$no = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return $no.apply(undefined, [this].concat(args));
  };
  return chain;
}
//# sourceMappingURL=no.js.map
