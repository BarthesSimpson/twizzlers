function max(...args) {
  if (Array.isArray(args[0])) {
    return args.length === 1 ? maxArray(args[0]) : maxArrays(...args)
  }
  if (typeof args[0] === 'number') {
    return Math.max(...args)
  }
}

function mean(...args) {
  if (Array.isArray(args[0])) {
    return args.length === 1 ? meanArray(args[0]) : meanArrays(...args)
  }
  if (typeof args[0] === 'number') {
    return meanArray(Array(...args))
  }
}

function min(...args) {
  if (Array.isArray(args[0])) {
    return args.length === 1 ? minArray(args[0]) : minArrays(...args)
  }
  if (typeof args[0] === 'number') {
    return Math.min(...args)
  }
}

function sum(...args) {
  if (Array.isArray(args[0])) {
    return args.length === 1 ? sumArray(args[0]) : sumArrays(...args)
  }
  if (typeof args[0] === 'number') {
    return sumArray(Array(...args))
  }
}

function maxArray(arr) {
  return Math.max(...arr)
}
function maxArrays(...arrs) {
  return maxArray(arrs.map(a => maxArray(a)))
}

function meanArray(arr) {
  return sumArray(arr) / arr.length
}
function meanArrays(...arrs) {
  return sumArrays(...arrs) / arrs.reduce((l, r) => l + r.length, 0)
}

function minArray(arr) {
  return Math.min(...arr)
}
function minArrays(...arrs) {
  return minArray(arrs.map(a => minArray(a)))
}

function sumArray(arr) {
  return arr.reduce((l, r) => l + r, 0)
}
function sumArrays(...arrs) {
  return arrs.reduce((l, r) => l + sumArray(r), 0)
}

module.exports = {
  max,
  mean,
  min,
  sum,
}
