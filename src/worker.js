const { parentPort } = require('worker_threads')
const { max, mean, min, sum } = require('./operators')
parentPort.on('message', ({ func, partition }) => {
  f = new Function(`return ${func}`)()
  const result = f.apply(null, partition)
  console.log(result)
  parentPort.postMessage({ result })
})
