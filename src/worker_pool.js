const os = require('os')
const serialize = require('serialize-javascript')

const cpuCount = os.cpus().length

class WorkerPool {
  constructor(Worker) {
    if (!WorkerPool.instance) {
      this._workers = Array(cpuCount)
        .fill(1)
        .map(_ => new Worker('./src/worker.js'))
      WorkerPool.instance = this
    }
    return WorkerPool.instance
  }

  getWorker() {
    const worker = this._workers.shift()
    this._workers.push(worker)
    return worker
  }

  async exec(func, partitions, collectFunc) {
    const results = await Promise.all(
      partitions.map(partition => {
        const worker = this.getWorker()
        worker.postMessage({ func: func.toString(), partition })
        return new Promise(resolve => {
          worker.on('message', ({ result }) => {
            console.log(result)
            resolve(result)
          })
        })
      }),
    )
    console.log({ results })
    console.log({ collectFunc })
    return collectFunc(results)
  }
}

module.exports = Worker => {
  const instance = new WorkerPool(Worker)
  Object.freeze(instance)
  return instance
}
