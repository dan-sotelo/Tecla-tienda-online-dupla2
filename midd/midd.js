// Importar los modulos necesarios a utilizar
const rateLimit = require('express-rate-limit')

// Construir y exportar los modulos
const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max:15,
    message: 'Se excedio la cantidad máxima de intentos para acceder al servidor'
})

module.exports = {limite}