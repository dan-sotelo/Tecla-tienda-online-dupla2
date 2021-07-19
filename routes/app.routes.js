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
        try {
            async function getRespuesta(){
                const respuesta = await getApi(process.env.CATEGORIAS);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });

    app.get('/:idCategoria', async(req,res)=>{
        try {
            const idCategoria = req.params.idCategoria;
            async function getRespuesta(){
                let respuesta = await getApi(process.env.SUBCATEGORIAS+idCategoria);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });

    app.get('/subcategorias/:idSubcategoria', async(req,res)=>{
        try {
            const idSubcategoria = req.params.idSubcategoria;
            async function getRespuesta(){
                let respuesta = await getApi(process.env.PRODUCTOS+idSubcategoria);
                return respuesta;
            }
            res.status(200).send(await getRespuesta());            
        } catch (error) {
            console.log('Error en el método GET de la app');
            res.status(400).json(error.message);
        }
    });
}