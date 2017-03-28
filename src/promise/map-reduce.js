import {
  mapReduce
} from 'chaingun'

export function $mapReduce(node, options, ...args) {
  return new Promise(function (resolve, reject) {
    mapReduce(node, options, resolve, ...args)
  })
}

export function $addMapReduce({
  chain
}) {
  chain.$mapReduce = async function (options, ...args) {
    return await $mapReduce(this, options, ...args)
  }
  return chain
}