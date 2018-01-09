const puppeteer = require('puppeteer')

module.exports = {
  build: async() => {
    try {
      return await puppeteer.launch({ headless: false })
    } catch (err) {
      throw err
    }
  }
}
