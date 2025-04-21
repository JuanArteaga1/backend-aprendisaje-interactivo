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
    Materia: {
        type: Array, 
        required: true,
        ref: 'Materias' 
    },
    autores: {
        type: Array, // ✅ Usa 'Schema.Types.ObjectId'
        required: true,
        ref: 'Usuarios' // Opcional: referencia a otra colección
    },
    fechaPublicacion: {
        type: Date, // ✅ Si es una fecha, usa 'Date'
        required: true
    },
    materia: {
        type: mongoose.Schema.Types.ObjectId, //ObjectId es un tipo especial de Mongoose utilizado para hacer referencia a otro documento.Permite establecer relaciones entre diferentes colecciones de MongoDB.
        ref: 'Materia',
        required: true
    }
});


module.exports = mongoose.model("Podtcas",PodtcasSchema)