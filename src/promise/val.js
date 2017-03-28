import {
  val
} from 'chaingun'

export function $val(node, opt) {
  return new Promise(function (resolve, reject) {
    val(node, resolve, opt)
  })
}

export function $addVal({
  chain
}) {
  chain.$val = function (opt) {
    return $val(this, opt)
  }
  return chain
}