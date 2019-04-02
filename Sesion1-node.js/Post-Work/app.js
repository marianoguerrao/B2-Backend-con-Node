const http = require('http')
const Controllers = require('./Controllers/index')
const port = 3000

let Router = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    Controllers.renderIndex(req, res)
  } else if (req.url === '/login' && req.method === 'GET') {
    Controllers.renderLogin(req, res)
  } else if (req.url === '/profile' && req.method === 'GET') {
    Controllers.renderProfile(req, res)
  }
}

http.createServer((Router)).listen(port, () => console.log(`Estoy en http://localhost:${port}`))
