import {
  putAt
} from 'chain-gun'

import promisify from './promisify'

export function $put(node, ...args) {
  return promisify(node.put, node, ...args)
}

export function $putAt(node, at, ...args) {
  let pathNode = node.path(at)
  if (pathNode) {
    return promisify(putAt, pathNode, ...args)
  } else {
    throw new Error(`No path ${at}`)
  }
}

export function $addPut({
  chain
}) {
  chain.$put = function (...args) {
    return $put(this, ...args)
  }

  chain.$putAt = function (at, ...args) {
    return $putAt(this, at, ...args)
  }
  return chain
}