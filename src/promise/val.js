import promisify from './promisify'

export function $val(node, ...args) {
  return promisify(node.val, node, ...args)
}

export function $addVal({
  chain
}) {
  chain.$val = function (...args) {
    return $val(this, ...args)
  }
  return chain
}