const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ruta de la carpeta de destino
const uploadDir = path.join(__dirname, "..", "..", "uploads");

// Asegúrate de que la carpeta exista
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true }); // Crea la carpeta si no existe
}

// Configuración del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Usa la carpeta que aseguramos que existe
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;
        cb(null, uniqueName);
    },
});

// Filtro de archivos
const fileFilter = (req, file, cb) => {

    try {
        const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "audio/mpeg", "audio/mp3"];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Tipo de archivo no permitido"), false);
        }
    } catch (error) {
        console.log(error);
    }
};

// Middleware
const upload = multer({ storage, fileFilter });

module.exports = upload;
