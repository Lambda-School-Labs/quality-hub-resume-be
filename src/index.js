
require('dotenv').config()

const server = require('./server')
const options = { port: (process.env.APOLLO_PORT || process.env.PORT) || 4000 }

server.start(options, ({ port }) => {
    console.log(`QualityHub -- ResumeQ is running on ${port}`)
})
