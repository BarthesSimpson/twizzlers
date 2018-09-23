import { max, mean, min, sum } from 'operators'

describe('Sum tests', () => {
  it('Correctly sums an array of integers', () => {
    expect(sum([1, 2, 3])).toBe(6)
  })
  it('Correctly sums a sequence of integers', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })
  it('Correctly sums a sequence of integer arrays', () => {
    expect(sum([1, 2, 3], [1, 2, 3])).toBe(12)
  })
})

describe('Mean tests', () => {
  it('Correctly averages an array of integers', () => {
    expect(mean([1, 2, 3])).toBe(2)
  })
  it('Correctly averages a sequence of integers', () => {
    expect(mean(1, 2, 3)).toBe(2)
  })
  it('Correctly averages a sequence of integer arrays', () => {
    expect(mean([1, 2, 3], [1, 2, 3])).toBe(2)
  })
})

describe('Max tests', () => {
  it('Correctly gets the max of an array of integers', () => {
    expect(max([1, 2, 3])).toBe(3)
  })
  it('Correctly gets the max of a sequence of integers', () => {
    expect(max(1, 2, 3)).toBe(3)
  })
  it('Correctly gets the max of a sequence of integer arrays', () => {
    expect(max([1, 2, 3], [5, 2, 3])).toBe(5)
  })
})

describe('Min tests', () => {
  it('Correctly gets the min of an array of integers', () => {
    expect(min([1, 2, 3])).toBe(1)
  })
  it('Correctly gets the min of a sequence of integers', () => {
    expect(min(1, 2, 3)).toBe(1)
  })
  it('Correctly gets the min of a sequence of integer arrays', () => {
    expect(min([1, 2, 3], [5, -1, 3])).toBe(-1)
  })
})
