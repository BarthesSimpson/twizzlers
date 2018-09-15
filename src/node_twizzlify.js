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

export function inferPartitionFunc(...args) {
  const input = args[0]
  if (Array.isArray(input)) {
    const partitionSize = Math.ceil(input.length / cpuCount)
    const partitions = []
    let index = 0
    let lastIndex = input.length
    while (index < lastIndex) {
      partitions.push(
        input.slice(index, Math.min(index + partitionSize, lastIndex)),
      )
      index += partitionSize
    }
    return partitions
  }
}
