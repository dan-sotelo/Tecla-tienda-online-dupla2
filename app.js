// Importación de modulos necesarios a utilizar
const express = require('express');
const app = express();
require('dotenv').config();
const appRutas = require('./routes/app.routes');
const cors = require('cors');
const midd = require('./midd/midd');
const sequelize = require('./db/conection')

// Configuración de nuestro servidor (Middlewares globales)
app.use(express.json());
app.use(cors());
app.use(midd.limite);

// Inicializar el servidor
async function iniciarServidor(){
    try {
        await sequelize.authenticate();
        console.log('Se establecio una conección exitosa con la base de datos');
        app.listen(process.env.PORT, () => {
            console.log(`El servidor se ha iniciado correctamente en: ${process.env.HOST}:${process.env.PORT}`)
        });
    }catch(error) {
        console.log(`No se conecto con  la base de datos: ${error}`);
    }
}

iniciarServidor();


// Inicialización de las rutas
appRutas(app);