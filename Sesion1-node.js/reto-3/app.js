const http = require('http')

const hostname = 'localhost'
const port = 3002

// especificar como interactuan el req y el res

// La actividad consiste que el alumno pueda visualizar que contiene el request
const server = http.createServer((req, res) => {
  if (req.url === '/tours') {
    res.writeHead(200)
    res.write('Hola desde Bedu-Travels')
    res.end()
  }
})

server.listen(port, hostname, () => {
  console.log(`El servidor de Bedutravels
esta en http://${hostname}:${port}`)
})
