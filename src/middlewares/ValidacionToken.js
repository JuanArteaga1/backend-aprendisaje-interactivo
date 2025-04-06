const jwt = require("jsonwebtoken")
const Token_Secreta = require("../config.js")


exports.AutenticacionRequerida = (req,res,next)=>{
    const {token} = req.cookies
    if (!token) return res.status(400).json({mesage: "error autorizacion denegada"})
    jwt.verify(token,Token_Secreta,(err,Usuario)=> {
        if(err) return res.status(400).json({mesage: "token no valido"})
        req.Usuario = Usuario
        next()


    })
    

}