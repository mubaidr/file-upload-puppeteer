const serverBuilder = require('./util/server')
const browserBuilder = require('./util/browser')
const pageProcessor = require('./util/page')

async function start () {
  const server = await serverBuilder.build()
  const browser = await browserBuilder.build()
  const url = `http://localhost:${server.address().port}`

  pageProcessor.process(browser, url, () => {
    // server.close()
    // browser.close()
  })
}

module.exports = start

start()
