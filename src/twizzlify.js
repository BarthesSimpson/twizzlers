const WorkerPool = require('./worker_pool')
const { inferPartitionFunc } = require('./partition')
const { inferCollectFunc } = require('./collect')
const { max, min, mean, sum } = require('./operators')

class Twizzlify {
  constructor(func, partitionFunc, collectFunc, Worker) {
    this.func = func
    this.partitionFunc = partitionFunc || inferPartitionFunc
    this.collectFunc = collectFunc || inferCollectFunc
    this.workerPool = WorkerPool(Worker)
  }

  partition(func) {
    this.partitionFunc = func
  }

  collect(func) {
    this.collectFunc = func
  }

  partitionSum() {
    this.partitionSum = sum
  }

  collectSum() {
    this.collectFunc = sum
  }

  done() {
    return (...args) => {
      const partitions = this.partitionFunc(...args)
      return this.workerPool.exec(this.func, partitions, this.collectFunc)
    }
  }
  // partition = func => {
  //   this.partitionFunc = func
  // }

  // collect = func => {
  //   this.collectFunc = func
  // }

  // partitionSum = () => {
  //   this.partitionSum = sum
  // }

  // collectSum = () => {
  //   this.collectFunc = sum
  // }

  // done = () => {
  //   return (...args) => {
  //     partitions = this.partitionFunc(...args)
  //     return this.workerPool.exec((this.func, partitions, this.collectFunc))
  //   }
  // }
}

module.exports = Twizzlify
