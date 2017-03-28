import {
  no
} from 'chaingun'

export function $no(node) {
  return new Promise(function (resolve, reject) {
    no(resolve)
  })
}

export function $addNo({
  chain
}) {
  chain.$no = async function () {
    return await $no(this)
  }
  return chain
}