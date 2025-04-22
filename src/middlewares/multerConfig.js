// src/middlewares/multerConfig.js
const multer = require("multer");
const path = require("path");

// Configuración del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Carpeta donde se guardan los archivos
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
        cb(null, uniqueName);
    },
});

// Filtros para validar el tipo de archivo (opcional)
const fileFilter = (req, file, cb) => {
    console.log("entro")
    try {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "audio/mpeg", "audio/mp3"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Tipo de archivo no permitido"), false);
        }

    } catch (error) {
        console.log(error)
    }
};

// Crear el middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
