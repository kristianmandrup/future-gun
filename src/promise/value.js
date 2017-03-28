import {
  value
} from 'chaingun'

export function $value(node, opt) {
  return new Promise(function (resolve, reject) {
    value(node, resolve, opt)
  })
}

export function $valueAt(node, at, opt) {
  let path = node.path(at)
  if (path) {
    return path.$value(opt)
  } else {
    throw new Error(`No such path ${at}`)
  }
}

export function $addValue({
  chain
}) {
  chain.$value = function (opt) {
    return $value(this, opt)
  }

  chain.$valueAt = function (opt) {
    return $valueAt(this, opt)
  }
  return chain
}