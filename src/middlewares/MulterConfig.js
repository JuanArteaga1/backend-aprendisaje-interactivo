const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { never } = require("zod");

// Configuración de Multer con ruta absoluta
const upload = multer({
    dest: path.join(__dirname, '..', 'uploads', 'temp')
});

// Función para guardar imagen
const GuardarImagen = (req, res) => {
    try {
        const { seccion } = req.body;
        const file = req.files?.portada?.[0];
        if (!file) return res.status(400).send("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "img");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);

        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR LA IMAGEN");
    }
};

// Función para guardar documento PDF
const GuardarDocumento = (req, res) => {
    try {
        const { seccion } = req.body;
        const file = req.files?.urlDoc?.[0];
        if (!file) return res.status(400).send("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "Docs");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);

        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR EL DOCUMENTO");
    }
};

// Función para eliminar archivos
const ELiminarArchivos = (RutaImagen) => {
    try {
        const rutaNormalizada = path.normalize(RutaImagen);
        if (!fs.existsSync(rutaNormalizada)) {
            return false;
        }

        fs.unlinkSync(rutaNormalizada);
        return true;
    } catch (err) {
        return false;
    }
};

// Función para actualizar imagen
const ActualizarImagen = async (req, res, RutaAnteriorI) => {
    try {
        const eliminadoI = await ELiminarArchivos(RutaAnteriorI);
        if (!eliminadoI) return;
        const { seccion } = req.body;
        const file = req.files?.portada?.[0];
        if (!file) return null;
        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "img");
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }
        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);
        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL ACTUALIZAR LA IMAGEN");
    }
};

// Función para actualizar documento
const ActualizarDocumento = async (req, res, RutaAnteriorD) => {
    try {
        const eliminadoD = await ELiminarArchivos(RutaAnteriorD);
        if (!eliminadoD) {
            return null
        };
        const { seccion } = req.body;
        const file = req.files?.urlDoc?.[0];
        if (!file) {
            return null;
        }
        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "Docs");
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        if (!fs.existsSync(file.path)) {
            res.status(400).send("Archivo temporal no encontrado para el documento");
            return null;
        }

        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);
        return newFilePath;
    } catch (error) {
        console.error("❌ Error en ActualizarDocumento:", error);
        if (!res.headersSent) {
            res.status(500).send("ERROR AL SUBIR EL DOCUMENTO");
        }
        return null;
    }
};

const ActualizarApk = async (req, res, RutaAnteriorA) => {
    try {
        const eliminadoD = await ELiminarArchivos(RutaAnteriorA);
        if (!eliminadoD) {
            return null
        };
        const { seccion } = req.body;
        const file = req.files?.urlArchivoapk?.[0];
        if (!file) return res.status(400).json("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "APK");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);

        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR EL APK");
    }

}
// Función para guardar archivo APK
const GuardarAPK = (req, res) => {
    try {
        const { seccion } = req.body;
        const file = req.files?.urlArchivoapk?.[0];
        if (!file) return res.status(400).json("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "APK");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);

        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR EL APK");
    }
};

// Exportar
module.exports = {
    upload,
    GuardarImagen,
    GuardarDocumento,
    GuardarAPK,
    ActualizarImagen,
    ActualizarDocumento,
    ActualizarApk,
    ELiminarArchivos
};
