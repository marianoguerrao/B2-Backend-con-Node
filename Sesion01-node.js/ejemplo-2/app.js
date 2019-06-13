const http = require('http')

const hostname = 'localhost'
const port = 3000

// especificar como interactuan el req y el res

// La actividad consiste que el alumno pueda visualizar que contiene el request
const server = http.createServer((req, res) => {
  console.log(req)
  console.log(req.method)
  console.log(req.url)
})

server.listen(port, hostname, () => {
  console.log(`server is in http://${hostname}:${port}`)
})
