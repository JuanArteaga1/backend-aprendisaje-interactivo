
const UsuariosServices = require('../services/UsuariosServices');


//creamos un nuevo estudiante
exports.createUsuarios = async (req, res) => {
    try {
        const Usuario = await UsuariosServices.createUsuario(req.body);
        res.status(201).json(Usuario);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
//obtenemos todos los estudiantes
exports.getAllUsuarios = async (req, res) => {
    try {
        const Usuario = await UsuariosServices.getAllUsuarios();
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//obtenemos un estudiante por su id
exports.getAllUsuariosId = async (req, res) => {  // ✅ Ahora coincide con la importación
    try {
        const Usuario = await UsuariosServices.getAllUsuariosId(req.params.id);
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};




//actualizamos un estudiante
exports.updatedUsuarioId = async (req, res) => {
    try {
        const Usuario = await UsuariosServices.updatedUsuarioId(req.params.id, req.body);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//eliminamos un estudiante
exports.deleteUsuarios = async (req, res) => {
    try {
        await UsuariosServices.deleteUsuario(req.params.id);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};