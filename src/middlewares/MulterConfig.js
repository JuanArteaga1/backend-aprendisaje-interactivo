const multer = require("multer");
const fs = require("fs");
const path = require("path");



const GuardarImagen = (req, res) => {
    try {
        const { seccion } = req.body
        const file =req.files?.portada?.[0];
        if (!file) return res.status(400).send("No se subió archivo")
        const seccionDir = path.join("src","uploads", seccion, "img")
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true })
        }
        const ext = path.extname(file.originalname)
        const newFilePath = path.join(seccionDir, file.originalname)
        fs.renameSync(file.path, newFilePath)
        console.log(newFilePath)
        

        return newFilePath
    } catch (error) {
        console.log(error)
        res.status(400).send("ERROR AL SUBIR LA IMAGEN")
    }
}

const GuardarDocumento = (req, res) => {
    try {
        const { seccion } = req.body
        const file =req.files?.urlDoc?.[0];
        if (!file) return res.status(400).send("No se subió archivo")
        const seccionDir = path.join("src","uploads", seccion, "Docs")
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true })
        }
        const ext = path.extname(file.originalname)
        const newFilePath = path.join(seccionDir, file.originalname)
        fs.renameSync(file.path, newFilePath)
        return newFilePath
    } catch (error) {
        console.log(error)
        res.status(400).send("ERROR AL SUBIR EL DOCUMENTO")
    }
}
const GuardarAPK = (req, res) => {
    try {
        const { seccion } = req.body
        const file =req.files?.urlArchivoapk?.[0];
        if (!file) return res.status(400).json("No se subió archivo")
        const seccionDir = path.join("src","uploads", seccion, "APK")
        if (!fs.existsSync(seccionDir)) {
            fs.mkdirSync(seccionDir, { recursive: true })
        }
        const ext = path.extname(file.originalname)
        const newFilePath = path.join(seccionDir, file.originalname)
        fs.renameSync(file.path, newFilePath)
        return newFilePath
    } catch (error) {
        console.log(error)
        res.status(400).send("ERROR AL SUBIR EL APK")
    }
}



 const upload = multer({ dest: "uploads/temp/" });

 module.exports = {upload,GuardarImagen,GuardarDocumento,GuardarAPK};