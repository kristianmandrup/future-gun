import addPromise from './promise'

const chains = {
  addPromise
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function add(Gun, ...names) {
  names.forEach(name => {
    let nameCap = capitalize(name)
    let fun = 'add' + nameCap
    chains[fun]({
      chain: Gun.chain,
      Gun
    })
  })
  return Gun
}

const allNames = [
  'promise'
]

export {
  addPromise
}

export default function (Gun) {
  return add(Gun, ...allNames)
}