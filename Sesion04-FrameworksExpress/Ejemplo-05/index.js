// Express
const express = require('express')
const app = express()
const APP_PORT = 3000

// Dependecies y/o modelos

const mongoose = require('mongoose')
const UserRoutes = require('./routes/User')
// conexion mongoose

mongoose.connect('mongodb://localhost:27017/Prueba', { useNewUrlParser: true })
  .then(() => console.log(`Connect to ${'mongodb://localhost:27017/Prueba'}`))
  .catch((err) => { throw err })

// use

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/tours', UserRoutes)

app.get('/armando', (req, res, next) => {
  res.send(console.log(req))
})

// listen

app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
