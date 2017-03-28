import {
  $addFields
} from './fields'
import {
  $addMapReduce
} from './map-reduce'
import {
  $addVal
} from './val'
import {
  $addValue
} from './value'
import {
  $addPut
} from './put'
import {
  $addTimed
} from './timed'
import {
  $addNo
} from './no'
import {
  $addRecurse
} from './recurse'

const chains = {
  $addFields,
  $addMapReduce,
  $addNo,
  $addRecurse,
  $addVal,
  $addValue,
  $addPut,
  $addTimed
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function add(Gun, ...names) {
  names.forEach(name => {
    let nameCap = capitalize(name)
    let fun = '$add' + nameCap
    chains[fun]({
      chain: Gun.chain,
      Gun
    })
  })
}

const allNames = [
  'fields',
  'mapReduce',
  'val',
  'value',
  'put',
  'timed',
  'no',
  'recurse'
]

export function $addPromise({
  Gun
}) {
  add(Gun, ...allNames)
}

export default $addPromise