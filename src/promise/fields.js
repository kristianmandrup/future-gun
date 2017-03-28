import {
  value
} from 'chain-gun'

export function $fields(node) {
  return new Promise(function (resolve, reject) {
    value(node, v => resolve(Object.keys(v)))
  });
}

export function $addFields({
  chain,
}) {
  chain.$fields = function (cb, opt) {
    return $fields(this, cb, opt)
  }
  return chain
}