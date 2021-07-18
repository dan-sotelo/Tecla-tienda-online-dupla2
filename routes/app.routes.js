// Importación de modulos necesarios a utilizar
const fetch = require('node-fetch');

// Funciones a emplear
async function getApi(url){
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
}

// Exportar los modulos
module.exports = (app) => {

    app.get('/', async(req,res) => {
        async function getRespuesta(){
            const respuesta = await getApi(process.env.CATEGORIAS);
            return respuesta;
        }
        res.status(200).send(await getRespuesta());
    });

    app.get('/:idSubcategoria', async(req,res)=>{
        const idSubcategoria = req.params.idSubcategoria;
        async function getRespuesta(){
            let respuesta = await getApi(process.env.SUBCATEGORIAS+idSubcategoria);
            return respuesta;
        }
        res.status(200).send(await getRespuesta());
    });

    app.get('/subcategoria/:idProductos', async(req,res)=>{
        const idProductos = req.params.idProductos;
        async function getRespuesta(){
            let respuesta = await getApi(process.env.PRODUCTOS+idProductos);
            return respuesta;
        }
        res.status(200).send(await getRespuesta());
    });
}