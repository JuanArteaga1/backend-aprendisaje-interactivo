const multer = require("multer"); // Middleware para manejo de archivos
const fs = require("fs");         // Módulo para trabajar con el sistema de archivos
const path = require("path");     // Módulo para construir rutas de archivos

// Función para guardar una imagen subida
const GuardarImagen = (req, res) => {
    try {
        const { seccion } = req.body; // Extraemos la sección (carpeta de destino)
        const file = req.files?.portada?.[0]; // Obtenemos el archivo 'portada'
        if (!file) return res.status(400).send("No se subió archivo");
        
        const basePath = path.join(__dirname, '..', 'uploads'); // Ruta base de la carpeta 'uploads'
        const seccionDir = path.join(basePath, seccion, "img"); // Carpeta específica según sección

        // Crear el directorio si no existe
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const ext = path.extname(file.originalname); // Extraer la extensión del archivo
        const newFilePath = path.join(seccionDir, file.originalname); // Nueva ruta final del archivo

        fs.renameSync(file.path, newFilePath); // Mover el archivo desde temp al destino final
        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR LA IMAGEN");
    }
};

// Función para guardar un documento subido
const GuardarDocumento = (req, res) => {
    try {
        const { seccion } = req.body;
        const file = req.files?.urlDoc?.[0]; // Obtenemos el archivo 'urlDoc'
        if (!file) return res.status(400).send("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "img");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const ext = path.extname(file.originalname);
        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);
        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR EL DOCUMENTO");
    }
};

// Función para guardar un archivo APK subido
const GuardarAPK = (req, res) => {
    try {
        const { seccion } = req.body;
        const file = req.files?.urlArchivoapk?.[0]; // Obtenemos el archivo 'urlArchivoapk'
        if (!file) return res.status(400).json("No se subió archivo");

        const basePath = path.join(__dirname, '..', 'uploads');
        const seccionDir = path.join(basePath, seccion, "img");

        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true });
        }

        const ext = path.extname(file.originalname);
        const newFilePath = path.join(seccionDir, file.originalname);
        fs.renameSync(file.path, newFilePath);
        return newFilePath;
    } catch (error) {
        console.log(error);
        res.status(400).send("ERROR AL SUBIR EL APK");
    }
}

// Configuración de Multer para subir archivos a la carpeta temporal
const upload = multer({ dest: "uploads/temp/" });

// Exportamos las funciones para usarlas en otros módulos
module.exports = { upload, GuardarImagen, GuardarDocumento, GuardarAPK };
