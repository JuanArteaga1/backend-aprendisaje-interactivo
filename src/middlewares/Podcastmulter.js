const multer = require("multer");
const fs = require("fs");
const path = require("path");



const GuardarImagen = (req, res) => {
    try {
        const { seccion } = req.body
        const file = req.file;
        if (!file) return res.status(400).send("No se subió archivo")
        const seccionDir = path.join("uploads", seccion, "img")
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true })
        }
        const ext = path.extname(file.originalname)
        const newFilePath = path.join(seccionDir, file.originalname)
        fs.renameSync(file.path, newFilePath)
        return newFilePath
    } catch (error) {
        console.log(error)
        res.status(400).send("error al subir podcast")
    }
}

 const upload = multer({ dest: "uploads/temp/" });

 module.exports = {upload,GuardarImagen};