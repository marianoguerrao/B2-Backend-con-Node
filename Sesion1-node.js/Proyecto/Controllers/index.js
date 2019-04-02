const fs = require('fs')

let renderIndex = (req, res) => {
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
}

module.exports = {
  renderIndex
}
