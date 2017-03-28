'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.$fields = $fields;
exports.$addFields = $addFields;

var _chainGun = require('chain-gun');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function $fields(node) {
  return new _promise2.default(function (resolve, reject) {
    (0, _chainGun.value)(node, function (v) {
      return resolve((0, _keys2.default)(v));
    });
  });
}

function $addFields(_ref) {
  var chain = _ref.chain;

  chain.$fields = function (cb, opt) {
    return $fields(this, cb, opt);
  };
  return chain;
}
//# sourceMappingURL=fields.js.map
