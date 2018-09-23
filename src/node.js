/* just for nodejs, not for browser */
// import { Twizzlify } from 'twizzlify'
// import { Worker } from 'worker_threads'
const Twizzlify = require('./twizzlify')
const { Worker } = require('worker_threads')

// export default (func, partitionFunc, collectFunc) =>
//   Twizzlify(func, partitionFunc, collectFunc, Worker)

module.exports = (func, partitionFunc, collectFunc) =>
  new Twizzlify(func, partitionFunc, collectFunc, Worker).done()
