const { parentPort } = require('worker_threads')

parentPort.on('message', ({ func, partition }) => {
  console.log({ func, partition })
  const result = new Function(`return ${func}`)().apply(partition)
  parentPort.postMessage({ result })
})
