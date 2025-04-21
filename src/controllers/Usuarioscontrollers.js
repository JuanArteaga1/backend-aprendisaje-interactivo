
const UsuariosServices = require('../services/UsuariosServices');
const PersonaServices = require('../services/PersonaServices');

const Usuario = require("../models/Usuarios")
const Persona = require("../models/Personas")
const Rol = require('../models/Rol');
const bcrypt = require("bcryptjs")
const CreateToken = require("../libs/jwt")

//creamos un nuevo estudiante
exports.createUsuarios = async (req, res) => {

    
    const {Nombre,identificacion,email,contrasena,Codigo,rol,estado,funcion} = req.body


    const identificacionEncontada = await Persona.findOne({ NumeroIdentificacion: identificacion });
    if (identificacionEncontada) {
        return res.status(400).json({ errors: [{ msg: "Número de identificación ya registrado" }] });
    }

    const emailEncontrado = await Usuario.findOne({ email: email });
    if (emailEncontrado) {
        return res.status(400).json({ errors: [{ msg: "Email ya registrado" }] });
    }

    const codigoEncontrado = await Usuario.findOne({ Codigo: Codigo });
    if (codigoEncontrado) {
        return res.status(400).json({ errors: [{ msg: "Código ya registrado" }] });
    }

    const RolEncontrado = await Rol.findOne({ tipo_Rol: rol })
    try {
        const contraseñahash = await bcrypt.hash(contrasena, 8)
        const NewUser = new Usuario({
            email,
            contrasena: contraseñahash,
            Codigo,
            rol: RolEncontrado._id,
            estado,
            //funcion,
        })
        const UsuarioSave = await NewUser.save()
        const NewPersona = new Persona({
            UsuarioId: UsuarioSave._id,
            NombreCompleto: Nombre,
            NumeroIdentificacion: identificacion
        })
        const PersonaSave = await NewPersona.save()

        const token = await CreateToken({ rol: RolEncontrado.tipo_Rol })
        res.cookie("token", token)
        res.status(200).json({
            token: token
        })
    } catch (error) {
        console.log("error entro")
        console.log(error.message)
    }
};
//obtenemos todos los estudiantes
exports.getAllUsuarios = async (req, res) => {
    console.log("entro")
    try {
        const usuarios = await UsuariosServices.getAllUsuarios()
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error)
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