import { inferPartitionFunc } from 'node_twizzlify'

jest.resetModules()
jest.mock('os', () => ({
  cpus: () => Array(4),
}))

describe('inferPartitionFunc tests', () => {
  it('Correctly partitions an array that is a multiple of the number of CPU cores', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(inferPartitionFunc(inputArray)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ])
  })
  it('Correctly partitions an array that is not a multiple of the number of CPU cores', () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7]
    expect(inferPartitionFunc(inputArray)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
  })
})
