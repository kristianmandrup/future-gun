import {
  value
} from 'chain-gun'

import promisify from './promisify'

export function $value(node, ...args) {
  return promisify(value, node, ...args)
}

export function $valueAt(node, at, ...args) {
  let pathNode = node.path(at)
  if (pathNode) {
    return promisify(value, pathNode, ...args)
  } else {
    throw new Error(`No path ${at}`)
  }
}

export function $addValue({
  chain
}) {
  chain.$value = function (...args) {
    return $value(this, ...args)
  }

  chain.$valueAt = function (at, ...args) {
    return $valueAt(this, at, ...args)
  }
  return chain
}