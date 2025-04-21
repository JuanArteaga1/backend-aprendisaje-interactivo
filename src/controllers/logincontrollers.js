
const Usuario = require("../models/Usuarios")
const bcrypt = require("bcryptjs")
const CreateToken = require("../libs/jwt");
const { token } = require("morgan");
const Rol = require("../models/Rol")




//creamos un nuevo estudiante
exports.login = async (req, res) => {

    const {email,contrasena} = req.body
    try {
        const UsuarioLog = await Usuario.findOne({email})
        if ( !UsuarioLog) return res.status(400).json(["usuario no registrado"])
        const contraselog = await bcrypt.compare(contrasena,UsuarioLog.contrasena)
        if (!contraselog) return res.status(400).json(["Contraseña incorrecta"])
        const token =  await CreateToken({id:UsuarioLog.id})
        const RolEncontrado = await Rol.findOne({_id:UsuarioLog.rol})
        res.cookie("Token",token)
        res.status(200).json({
            Email:UsuarioLog.email,
            Rol:RolEncontrado.tipo_Rol,
            token:token
        })  
    } catch (error) {
        console.log(error)
        res.status(400).json([error.message])
        
    }
};

exports.loginout = async (req, res)=>{
    res.cookie('token',"",{expires: new Date(0)})
    return res.status(200).json({message: "cerrado sesion"});

}


exports.Profile = async(req,res)=>{
    const Usuariolog = await Usuario.findOne(req.Usuario._id) //no sirve el buscar por id
    if (!Usuariolog) return res.status(400).json({message:"Usuario no encontrado"})
    return res.json({
    id:Usuariolog._id,
    correo:Usuariolog.email
    })
}
