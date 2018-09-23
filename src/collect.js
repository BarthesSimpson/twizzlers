function inferCollectFunc(...args) {
  console.log('cool calm and collected')
  return (...args) => args
}

module.exports = { inferCollectFunc }
// should concatenate arrays by default
