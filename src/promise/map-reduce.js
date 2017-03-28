import {
  mapReduce
} from 'chain-gun'

import promisify from './promisify'

export function $mapReduce(node, ...args) {
  return promisify(mapReduce, node, ...args)
}

export function $addMapReduce({
  chain
}) {
  chain.$mapReduce = function (...args) {
    return $mapReduce(this, ...args)
  }
  return chain
}