// Express
require('dotenv').config()
const express = require('express')
const app = express()
const APP_PORT = process.env.APP_PORT || 3000

// listen

app.listen(APP_PORT, () => console.log(`Escuchando en el http://localhost:${APP_PORT}`))
