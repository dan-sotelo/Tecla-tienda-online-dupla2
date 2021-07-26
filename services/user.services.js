// Importar los modulos necesarios
const sequelize = require('../db/conection')

// Crear y exportar los modulos
listarUsuarios = async () =>{
    try {
        let consultaUsuarios = await sequelize.query('SELECT * FROM usuarios')
        return consultaUsuarios;
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrio un error en la consulta de usuarios');
    }
};

crearUsuario = async (usuario) => {
    let nuevoUsuario = [
        usuario.contrasena,
        usuario.nombre,
        usuario.apellidos,
        usuario.nickname,
        usuario.correo,
        usuario.telefono,
        usuario.fecha_nacimiento,
        usuario.activo
    ]
    try {
        let nuevoRegistro = await sequelize.query(`INSERT INTO usuarios (contrasena,nombre,apellidos,nickname,correo,telefono,fecha_nacimiento,activo) VALUES (?,?,?,?,?,?,?,?)`,
        {replacements: nuevoUsuario, type: sequelize.QueryTypes.SELECT});
        console.log(nuevoRegistro);
        return nuevoRegistro;
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrio un error al crear el nuevo usuario');
    }
};

eliminarUsuario = async (idUsuario) => {
    try {
        let eliminarRegistro = await sequelize.query(`DELETE FROM usuarios WHERE id_usuarios = ${idUsuario}`)
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrio un error al eliminar el usuario');
    }
}

desactivarUsuario = async (usuario) => {
    try {
        let desactivarRegistro = await sequelize.query(`UPDATE usuarios SET activo = ${usuario.activo} WHERE id_usuarios = ${usuario.id_usuarios}`)
        return desactivarRegistro;
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrio un error al realizar la modificación en el usuario');
    }
}

cambiarContrasena = async (usuario) => {
    try {
        let modificarContrasena = await sequelize.query(`UPDATE usuarios SET contrasena = ${usuario.contrasena} WHERE id_usuarios = ${usuario.id_usuarios}`)
        return modificarContrasena;
    } catch (error) {
        console.log(error);
        throw new Error ('Ocurrio un error al realizar la modificación en el usuario');
    }
}

module.exports = {listarUsuarios, crearUsuario, eliminarUsuario, desactivarUsuario, cambiarContrasena};