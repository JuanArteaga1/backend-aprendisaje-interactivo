const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonaSchema = new Schema({
    UsuarioId: {
        type: Schema.Types.ObjectId, 
        required: true
    },
    NombreCompleto: {
        type: String,
        required: true
    },
    Descripcion: {
        type: Schema.Types.ObjectId,
        required: true
    },
    FechaNacimineto: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("Persona",PersonaSchema)