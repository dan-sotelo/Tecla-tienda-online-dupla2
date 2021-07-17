// Importación de modulos necesarios a utilizar
const fetch = require('node-fetch');

// Exportar los modulos
module.exports = (app) => {

    app.get('/categorias', async(req,res) => {
        async function getApi(url){
            const respuesta = await fetch(url);
            const datos = await respuesta.json();
            return datos;
        }
        async function getSolicitud(){
            let solicitud = await getApi("https://api.mercadolibre.com/sites/MLM/categories")
            //console.log(solicitud);
            return solicitud;
        }
        //console.log(await getSolicitud());
        res.status(200).send(await getSolicitud());
        // res.status(200).json('Hola mundo');
    })
}