require("dotenv").config();

//Configuración del servidor Web
const express = require("express");
const cors = require("cors");
const morgan = require('morgan') // logger

const app = express();
const api = require('./api');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'))

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor express Aforo Web App funcionando en http://localhost:${port}`));

app.use('/api', api)
app.use(express.static('public'))

// Solicitudes erroneas
app.use(function (req, res) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

// Conexión a Mongo DB
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.DBSERVER}/${process.env.DATABASE}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connected to MongoDB')
})