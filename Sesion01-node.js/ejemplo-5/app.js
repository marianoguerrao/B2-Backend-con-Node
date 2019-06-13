const http = require('http')
const Controllers = require('./Controllers/index')
const port = 3000

let routerUser = (req, res) => {
  if (req.method === 'GET') {
    Controllers.renderIndex(req, res)
  }
}

let Router = (req, res) => {
  if (req.url === '/') {
    routerUser(req, res)
  }
}

http.createServer((Router)).listen(port, () => console.log(`Estoy en http://localhost:${port}`))
