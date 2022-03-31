const https = require('https')
const sizeOf = require('image-size')

function getImageSize(url) {
  return new Promise((resolve) => {
    https.get(url, (response) => {
      const chunks = []
      response
      .on('data', (chunk) => {
        chunks.push(chunk)
      })
      .on('end', () => {
        const buffer = Buffer.concat(chunks)
        const { height, width } = sizeOf(buffer)
        resolve({ height, width })
      })
    })
  })

}

module.exports = { getImageSize }
