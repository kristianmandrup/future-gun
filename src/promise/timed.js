import {
  timed
} from 'chain-gun'

import promisify from './promisify'

export function $timed(node, ...args) {
  return promisify(timed, node, ...args)
}

export function $addTimed({
  chain
}) {
  chain.$timed = function (...args) {
    return $timed(this, ...args)
  }
  return chain
}