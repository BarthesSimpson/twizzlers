const TwizzlifyNode = require('./node')
const TwizzlifyBrowser = require('./browser')

module.exports =
  typeof Worker === 'undefined' ? TwizzlifyNode : TwizzlifyBrowser
