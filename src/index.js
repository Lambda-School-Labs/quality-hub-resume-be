
require('dotenv').config()

const server = require('./server')
const options = { port: process.env.PORT || 4000 }

server.start(options, ({ port }) => {
    console.log(`No Errors On ${port}`)
})
