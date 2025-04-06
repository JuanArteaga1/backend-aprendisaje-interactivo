
const UsuariosServices = require('../services/UsuariosServices');
const Usuario = require("../models/Usuarios")
const Persona = require("../models/Personas")
const Rol = require('../models/Rol');
const bcrypt = require("bcryptjs")
const CreateToken = require("../libs/jwt")

//creamos un nuevo estudiante
exports.createUsuarios = async (req, res) => {
    const {Nombre,identificacion,email,contrasena,Codigo,rol,estado,funcion} = req.body
    const RolEncontrado = await Rol.findOne({tipo_Rol:rol})
    try {
        const contraseñahash = await bcrypt.hash(contrasena, 8)
        const NewUser = new Usuario({
            email,
            contrasena:contraseñahash,
            Codigo,
            rol:RolEncontrado._id,
            estado,
            //funcion,
        })
        const UsuarioSave = await NewUser.save()
        const NewPersona = new Persona({
            UsuarioId:UsuarioSave._id,
            NombreCompleto:Nombre,
            NumeroIdentificacion:identificacion
        })
        const PersonaSave = await NewPersona.save()
        //const token =  await CreateToken({rol:UsuarioSave.rol})
        //res.cookie("token",token)
        res.status(200).json({
            nombre:PersonaSave.nombre,
            id:UsuarioSave._id,
            Email:UsuarioSave.email,
            Rol:UsuarioSave.rol,
            Estado:UsuarioSave.estado,
        })
        
    } catch (error) {
        console.log(error.message)  
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