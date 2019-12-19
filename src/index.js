
require('dotenv').config()

const server = require('./server')
const options = { PORT: process.env.PORT || 4000 }

server.start(options, ({ PORT }) => {
    console.log(`No Errors On ${PORT}`)
})