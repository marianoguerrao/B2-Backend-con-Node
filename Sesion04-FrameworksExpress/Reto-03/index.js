// Express
const express = require('express')
const app = express()
const APP_PORT = 3000

// Dependecies y/o modelos
const mongoose = require('mongoose')
const TourModel = require('./models/Tour')
// conexion mongoose

mongoose.connect('mongodb://localhost:27017/BeduTravels', { useNewUrlParser: true })
  .then(() => console.log(`Connect to ${'mongodb://localhost:27017/BeduTravels'}`))
  .catch((err) => { throw err })

// use

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Bien hecho lo hicimos' })
})

app.post('/tours', (req, res, next) => {
  let newTour = new TourModel(req.body)
  newTour.save((err, user) => {
    if (err) {
      res.status(400).json({ status: 'error', message: 'Manda los datos requeridos' })
    }
    res.status(200).json({ status: 'success', message: 'El usuario ha sido registrado', data: user })
  })
})

app.get('/tours', (req, res, next) => {
  TourModel.find({}, (err, tours) => {
    if (err) {
      res.status(404).json({ status: 'error', message: err.message })
    }
    res.status(200).json({ status: 'susccess', message: 'usuraios encontrados', data: tours })
  })
})

// listen

app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
