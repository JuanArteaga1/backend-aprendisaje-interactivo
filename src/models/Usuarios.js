const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    rol: {
        type: Schema.Types.ObjectId, // ✅ Usa 'Schema.Types.ObjectId'
        required: true,
        ref: 'Roles' // Opcional: referencia a la colección 'Roles'
    },
    estado: {
        type: String,
        required: true
    },
    funcion: {
        type: Schema.Types.ObjectId, // ✅ Usa 'Schema.Types.ObjectId'
        required: true,
        ref: 'Funciones' // Opcional: referencia a otra colección
    },
    fechaRegistro: {
        type: Date, // ✅ Si es una fecha, usa 'Date'
        required: true
    }
});


module.exports = mongoose.model("Usuario",UsuariosSchema)