const UsuariosModel = require('../models/Usuarios');

/*
definimos los metodos que vamos a utilizar desde el controlador
para manejar los estudiantes
*/

//obtenemos todos los estudiantes
exports.getAllUsuarios = async () => {
    const Usuarios = await UsuariosModel.find();
    return Usuarios;
};

//obtenemos un estudiante por su id
exports.getAllUsuariosId = async (id) => {
    const Usuarios = await UsuariosModel.findById(id);
    return Usuarios;
};

//creamos un nuevo estudiante
exports.createUsuario = async (Usuario) => {
    const newUsuario = new UsuariosModel(Usuario);
    await newUsuario.save();
    return newUsuario;
};

//actualizamos un estudiante
exports.updatedUsuarioId = async (id, Usuario) => {
    const updatedUsuario = await UsuariosModel.findByIdAndUpdate(id, Usuario);
    return updatedUsuario;
};

//eliminamos un estudiante
exports.deleteUsuario = async (id) => {
    await UsuariosModel.findByIdAndDelete(id);
    return true
};