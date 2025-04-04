const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvestigacionSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ArchivoPdf: {
        type: String,
        required: true
    },
    ArchivoImg: {
        type: String,
        required: true
    },
    UrlArticulo: {
        type: String,
        required: true
    },
    UrlDoi: {
        type: String,
        required: true
    },
    autores: {
        type: Array, 
        required: true,
        ref: 'Usuarios' 
    },
    fechaPublicacion: {
        type: Date,
        required: true
    }
});