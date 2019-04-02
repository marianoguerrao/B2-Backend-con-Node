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

let renderLogin = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  fs.readFile('./views/login.html', null, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('archivo no encontrado')
    } else {
      res.write(data)
    }
  })
}

let renderProfile = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-type', 'text/html')
  fs.readFile('./views/profile.html', null, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('archivo no encontrado')
    } else {
      res.write(data)
    }
  })
}

module.exports = {
  renderIndex,
  renderLogin,
  renderProfile
}
