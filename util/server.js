const path = require('path')
const express = require('express')
const portfinder = require('portfinder')

module.exports = {
  build: async() => {
    const root = path.join(__dirname, '../', 'form')
    let port

    try {
      port = await portfinder.getPortPromise()
    } catch (err) {
      throw err
    }

    const app = express()
    app.use(express.static(root))
    return app.listen(port)
  }
}
