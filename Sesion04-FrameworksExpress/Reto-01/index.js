// Express
require('dotenv').config()
const express = require('express')
const app = express()
const APP_PORT = 3002

// Dependecies y/o modelos
const mongoose = require('mongoose')
// conexion mongoose

mongoose.connect('mongodb://localhost:27017/BeduTravels', { useNewUrlParser: true })
  .then(() => console.log(`Connect to mongodb://27017/BeduTravels`))
  .catch((err) => { throw err })

// listen
app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
