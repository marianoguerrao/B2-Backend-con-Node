const http = require('http')

const hostname = 'localhost'
const port = 3000

// especificar como interactuan el req y el res

// La actividad consiste que el alumno pueda visualizar que contiene el request
const server = http.createServer((req, res) => {
  res.end()
})

server.listen(port, hostname, () => {
  console.log(`El servidor de Bedutravels esta en http://${hostname}:${port}`)
})
