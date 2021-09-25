require("dotenv").config();

//Configuración del servidor Web
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Iniciar el servidor
const port = process.env.PORT;
app.listen(port, () => console.log(`Servidor express Aforo Web App funcionando en http://localhost:${port}`));
