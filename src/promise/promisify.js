export default function promisify(fun, node, ...args) {
  return new Promise(function (resolve, reject) {
    fun(node, resolve, ...args)
  })
}