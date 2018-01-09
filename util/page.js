// const FS = require('fs')
// const Path = require('path')

async function blockResources (page) {
  await page.setRequestInterception(true)
  page.on('request', req => {
    if (
      req.resourceType === 'stylesheet' ||
      req.resourceType === 'font' ||
      req.resourceType === 'image'
    ) {
      req.abort()
    } else {
      req.continue()
    }
  })
}

module.exports = {
  process: async(browser, url, callback) => {
    try {
      const page = await browser.newPage()
      await blockResources(page)
      await page.goto(url, {
        waitUntil: 'networkidle0'
      })

      const elementHandle = await page.$('#file_upload')
      await elementHandle.uploadFile('../README.md')

      callback()
    } catch (err) {
      throw err
    }
  }
}
