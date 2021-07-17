// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const appRutas = require('./routes/app.routes')


// Configuración de nuestro servidor
app.use(express.json());

// Inicializamos nuestro servidor
app.listen(process.env.PORT, () => {
    console.log(`El servidor se ha iniciado correctamente en: ${process.env.HOST}:${process.env.PORT}`)
})

// Inicialización de las rutas
appRutas(app);