import { csvParse } from 'd3-dsv'
import { group } from 'd3-array'
const fs = require('fs-extra')
const fetch = require('node-fetch')

const DURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaNDBN4NpVISkVvaKK_FPQSwRZorhpIKb0bsaPTm0gKwvVviTHvcpHJsr5erVrjpiPH9YZupinUljz/pub?gid=0&single=true&output=csv'

module.exports = function fetchData () {
  // writeData writes the data to a file given the path
  // Same as in previous solution
  const writeData = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        fs.ensureFileSync(path)
        fs.writeJson(path, data, resolve(`${path} Write Successful`))
      } catch (e) {
        console.error(`${path} Write failed. ${e}`)
        reject(`${path} Write Failed. ${e}`)
      }
    })
  }

  const getData = async (builder) => {
    const csvdata = await fetch(DURL)
      .then(d => d.text())
      .then(d => csvParse(d))
      .then((data) => {
        data = data.filter(e => e.TOPIC !== '')
        return data
      })

    const dataArray = Array.from(group(csvdata, d => d.TOPIC),
      ([key, value]) => ({ key, values: value }))

    const questionsData = dataArray.map(e => ({
      topic: e.key,
      headline: e.values[0] ? e.values[0].Headline : '',
      options: e.values.map(o => ({
        option: o.OPTIONS,
        response: o.RESPONSES
      }))
    }))

    fs.emptyDir('data/')
    console.log(`STARTING JSON BUILD FOR ${URL}...`)
    const fetcher = []

    const basePath = `data/`
    if (!fs.pathExistsSync(basePath)) { fs.emptyDir(basePath) }
    const fileName = `${basePath}/data.json`
    console.log(`PROCESSING ${fileName}...`)

    // Write list to file
    fetcher.push(writeData(fileName, { content: questionsData }))

    return Promise.all(fetcher)
      .then(() => {
        console.log('JSON Build complete!')
      })
      .catch((e) => {
        throw e
      })
  }

  // Run it before the nuxt build stage
  this.nuxt.hook('build:before', getData)
}
