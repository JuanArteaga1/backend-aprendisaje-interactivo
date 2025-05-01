
const ProyectosService = require('../services/ProyectosServices');
const { GuardarImagen,GuardarAPK,GuardarDocumento } = require("../middlewares/MulterConfig");
const {MateriaBuscar,categoriaBuscar} = require("../controllers/MateriaCategoriaController")

//CONTROLADOR PARA CREAR PERSONA
exports.createProyectos = async (req, res) => {
    try {
        req.body.materia = await MateriaBuscar(req)
        req.body.categoriaId = await categoriaBuscar(req)
        const RutaImagen = await GuardarImagen(req,res)
        const RutaApk = await GuardarAPK(req,res)
        const RutaDocs = await GuardarDocumento(req,res)
        req.body.urlimg = RutaImagen
        req.body.urlArchivoapk = RutaApk
        req.body.urlDoc = RutaDocs
        

        const Proyectos = await ProyectosService.createProyectos(req.body);
        res.status(201).json(Proyectos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
//CONTROLADOR PARA MOSTARA PERSONAS CON ID
exports.GetProyectosId = async (req, res) => {
    try {
        const Proyectos = await ProyectosService.getProyectosId(req.params.id, req.body);
        res.status(201).json(Proyectos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
//CONTROLADOR PARA MOSTRAR PERSONAS QUE ESTA REGISTRADAS
exports.GetProyectosAll = async (req, res) => {
    try {
        const Proyectos = await ProyectosService.getAllProyectos(req.body);
        res.status(201).json(Proyectos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
//CONTROLADOR PARA ACTUALIZAR PERSONA CON ID
exports.PutProyectosId = async (req, res) => {
    try {
        const Proyectos = await ProyectosService.PutProyectosId(req.params.id, req.body);
        res.status(201).json(Proyectos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
//CONTROLADOR PARA ELIMINAR PERSONA CON ID
exports.DeleteProyectosId = async (req, res) => {
    try {
        const Proyectos = await ProyectosService.DeleteProyectosId(req.params.id,);
        res.status(200).json({ message: "Persona deleted successfully" });

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};