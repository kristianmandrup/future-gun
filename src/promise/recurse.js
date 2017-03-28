import {
  recurse
} from 'chain-gun'

import promisify from './promisify'

export function $recurse(node, ...args) {
  return promisify(recurse, node, ...args)
}

export function $addRecurse({
  chain
}) {
  chain.$recurse = function(...args) {
    return $recurse(this, ...args)
  }
  return chain
}