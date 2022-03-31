const LOG_PREFIX = '[🧐 xkcd-scraper] '

function log (...args) {
  return console.log(LOG_PREFIX, ...args)
}

module.exports = { log }