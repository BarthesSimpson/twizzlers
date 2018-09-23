const os = require('os')
const cpuCount = os.cpus().length

function inferPartitionFunc(...args) {
  const input = args[0]
  if (Array.isArray(input)) {
    return defaultArrayPartitions(input)
  } else {
    throw new Error('for now need arrays')
  }
}

function defaultArrayPartitions(arr) {
  const partitionSize = Math.ceil(arr.length / cpuCount)
  const partitions = []
  let index = 0
  let lastIndex = arr.length
  while (index < lastIndex) {
    partitions.push(
      arr.slice(index, Math.min(index + partitionSize, lastIndex)),
    )
    index += partitionSize
  }
  return partitions
}

module.exports = { inferPartitionFunc }
