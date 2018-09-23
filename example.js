const Twizzlify = require('./src/node.js')
const { sum } = require('./src/operators')

const twizzlified = Twizzlify(sum, null, sum)

async function main() {
  console.log(await twizzlified([1, 2, 3, 4, 5, 6, 7, 8]))
  process.exit(0)
}
main()
