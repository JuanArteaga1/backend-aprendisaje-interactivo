const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PodtcasSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ArchivoImagen: {
        type: String,
        required: true
    },
    UrlAudio: {
        type: String,
        required: true
    },
    autores: {
        type: Array, // ✅ Usa 'Schema.Types.ObjectId'
        required: true,
        ref: 'Usuarios' // Opcional: referencia a otra colección
    },
    fechaPublicacion: {
        type: Date, // ✅ Si es una fecha, usa 'Date'
        required: true
    }
});


module.exports = mongoose.model("Podtcas",PodtcasSchema)