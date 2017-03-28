import {
  no
} from 'chain-gun'

import promisify from './promisify'

export function $no(node) {
  return promisify(no, node)
}

export function $addNo({
  chain
}) {
  chain.$no = function (...args) {
    return $no(this, ...args)
  }
  return chain
}