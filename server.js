const app = require('./app')
const server = require('http').createServer(app)
const { PORT } = require('./config')
const port = PORT || 4000

server.listen(port, () => console.log(`server running on http://localhost:${PORT}`))