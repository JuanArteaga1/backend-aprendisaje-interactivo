
const UsuariosServices = require('../services/UsuariosServices');
const Usuario = require("../models/Usuarios")
const bcrypt = require("bcryptjs")
const CreateToken = require("../libs/jwt")

//creamos un nuevo estudiante
exports.createUsuarios = async (req, res) => {
    const {email,contrasena,codigo,rol,estado,funcion,fechaRegistro} = req.body
    try {

        const contraseñahash = await bcrypt.hash(contrasena, 10)
        const NewUser = new Usuario({
            email,
            contrasena:contraseñahash,
            codigo,
            rol,
            estado,
            funcion,
            fechaRegistro,
        })
        const UsuarioSave = await NewUser.save()
        const token =  await CreateToken({rol:UsuarioSave.rol})
        res.cookie("token",token)
        res.status(200).json({
            id:UsuarioSave._id,
            Email:UsuarioSave.email,
            Rol:UsuarioSave.rol,
            Estado:UsuarioSave.estado,


        })
        
    } catch (error) {
        res.status(400).json({message: error.message})
        
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
        res.status(200).json(Usuario);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//eliminamos un estudiante
exports.deleteUsuarios = async (req, res) => {
    try {
        await UsuariosServices.deleteUsuario(req.params.id);
        res.status(200).json({ message: "usuario deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};