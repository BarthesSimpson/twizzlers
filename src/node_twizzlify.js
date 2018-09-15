/* just for nodejs, not for browser */
const os = require('os')
const cpuCount = os.cpus().length

export function twizzlify(
  func,
  partitionFunc = inferPartitionFunc,
  collectFunc = inferCollectFunc,
) {
  return (...args) => {}
}

export function inferParitionFunc(...args) {
  const input = args[0]
  if (typeof input == Array) {
    const partitionSize = Math.floor(input.length / cpuCount)
    const partitions = []
    let index = 0
    let lastIndex = input.length - 1
    while (index < lastIndex) {
      partitions.push(
        input.slice(index, Math.min(index + partitionSize, lastIndex))
      )
      index += partitionSize
    }
  }
}
