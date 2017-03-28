import {
  recurse
} from 'chaingun'

export function $recurse(node, filter) {
  return new Promise(function (resolve, reject) {
    recurse(node, resolve, filter)
  })
}

export function $addRecurse({
  chain
}) {
  chain.$recurse = async function (filter) {
    return await $recurse(this, filter)
  }
  return chain
}