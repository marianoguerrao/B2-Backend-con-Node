const http = require('http')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  fs.readFile('./views/index.html', null, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('archivo no encontrado')
    } else {
      res.write(data)
    }
  })
})

server.listen(port, hostname, () => {
  console.log(`server is in http://${hostname}:${port}`)
})
