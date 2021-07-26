// Importar los modulos necesarios a utilizar
const servicioUsuario = require('../services/user.services');

// Exportar modulos
module.exports = (app) => {

    app.get('/usuarios', async (req, res) => {
        try {
            let consultaUsuarios = await servicioUsuario.listarUsuarios()
            res.status(200).json({message: 'Consulta exitosa', consultaUsuarios})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    });

    app.post('/usuarios', async (req, res) => {
        let usuario = req.body
        try {
            let nuevoUsuario = await servicioUsuario.crearUsuario(usuario)
            res.status(200).json({message: 'Registro de usuario exitoso', nuevoUsuario})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
        }
    });

    app.delete('/usuarios/:idUsuario', async (req,res) => {
        let idUsuario = req.params.idUsuario;
        try {
            const eliminarUsuario = await servicioUsuario.eliminarUsuario(idUsuario);
            res.status(200).json({message: 'El usuario se elimino correctamente'})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
        }
    });

    app.patch('/usuarios/desactivar', async (req,res) => {
        let usuario = req.body;
        try {
            const desactivarUsuario = await servicioUsuario.desactivarUsuario(usuario);
            res.status(200).json({message: 'El usuario se desactivo correctamente'})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.patch('/usuarios/contrasena', async (req,res) => {
        let usuario = req.body;
        try {
            const cambiarContrasena = await servicioUsuario.cambiarContrasena(usuario);
            res.status(200).json({message: 'Cambio de contraseña exitoso'})
        } catch (error) {
            console.log(error.message);
            res.status(500).json({mensage: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
};