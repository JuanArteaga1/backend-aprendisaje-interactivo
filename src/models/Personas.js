const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    rol: {
        type: id,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required:false
    },
    funcion: {
        type: id,
        required: true
    },
    fechaRegistro: {
        type: id,
        required: true
    }
    
});

module.exports = mongoose.model("Usuario",UsuariosSchema)