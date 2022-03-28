import axios from 'axios'
import fs from 'fs-extra'

const { writeJSON } = fs

const INITIAL_ID_XKCD_COMICS = 2500

const MAX_ID_XKCD_COMICS = 2580

for (let id = INITIAL_ID_XKCD_COMICS; id < MAX_ID_XKCD_COMICS; id++) {
  const url = `https://xkcd.com/${id}/info.0.json`
  const { data } = await axios.get(url)

  const { num, transcript, news, ...restOfData } = data

  const jsonToStore = {
    ...restOfData,
    id
  }
  await writeJSON(`./data/${id}.json`, jsonToStore, { spaces: 2 })
}
