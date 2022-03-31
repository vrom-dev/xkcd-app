const axios = require('axios')
const fs = require('fs-extra')

const { getImageSize } = require('./getImageSize')
const { log } = require('./log')
const { writeJSON } = fs


const INITIAL_ID_XKCD_COMICS = 2500
const MAX_ID_XKCD_COMICS = 2588

const comicArrayToStore = []

async function scrap() {
  for (let id = INITIAL_ID_XKCD_COMICS; id < MAX_ID_XKCD_COMICS; id++) {
    const url = `https://xkcd.com/${id}/info.0.json`
    log(`Fetching ${url}...`)
    try {
      const { data } = await axios.get(url)
      const { num, transcript, img, news, ...restOfData } = data
      log(`Fetched comic with #${num}. Getting image dimensions...`)
      const { height, width } = await getImageSize(img)
      log(`Got image dimensions: ${width}x${height}`)
  
      const jsonToStore = {
        ...restOfData,
        height, 
        width,
        img,
        id
      }
      comicArrayToStore.push(jsonToStore)
      log(`Comic #${id} added to index.`)
      const jsonFile = `./data/${id}.json`
      await writeJSON(jsonFile, jsonToStore, { spaces: 2 })
      log(`Wrote ${jsonFile}! ✅\n`)
    } catch (e) {
      console.log(e)
    }
  }
  await writeJSON('./data/index.json', comicArrayToStore, { spaces: 2 })
  log(`Wrote index.json! ✅\n`)
}

scrap()