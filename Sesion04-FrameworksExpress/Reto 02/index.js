// Express
const express = require('express')
const app = express()
const APP_PORT = 3002

// Dependecies y/o modelos
const mongoose = require('mongoose')

// conexion mongoose
mongoose.connect('mongodb://localhost:27017/BeduTravels', { useNewUrlParser: true })
  .then(() => console.log(`Connect to mongodb://27017/BeduTravels`))
  .catch((err) => { throw err })

// Get

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Bien hecho lo hicimos' })
})

app.get('/tours', (req, res, next) => {
  res.status(200).json({ message: 'Hola desde tours' })
})

app.get('/user', (req, res, next) => {
  res.status(200).json({ message: 'Hola desde tours' })
})

// listen
app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
