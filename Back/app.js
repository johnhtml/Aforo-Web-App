require("dotenv").config();

//Configuración del servidor Web
const express = require("express");
const cors = require("cors");
const morgan = require('morgan') // logger

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'))

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor express Aforo Web App funcionando en http://localhost:${port}`));

// MogoDB connection
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.DBSERVER}/${process.env.DATABASE}?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connected to MongoDB')
  // Add mongoDB connection in later... first just run app.l
  app.listen(app.get('port'), function () {
    console.log(`API Server Listening on port ${app.get('port')}`)
  })
})