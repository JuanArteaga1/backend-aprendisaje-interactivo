const InvestigacionService = require('../services/InvestigacionServices');
const { MateriaBuscar, categoriaBuscar } = require("../controllers/MateriaCategoriaController")
const { GuardarImagen, GuardarAPK, GuardarDocumento } = require("../middlewares/MulterConfig");


// CONTROLADOR PARA CREAR INVESTIGACIÓN
exports.createInvestigacion = async (req, res) => {
    try {
        console.log("entro 1")
        req.body.materia = await MateriaBuscar(req)
        console.log("entro 2")
        const RutaImagen = await GuardarImagen(req, res)
        console.log("entro 3")
        const RutaDocs = await GuardarDocumento(req, res)
        console.log("entro 4")
        req.body.urlimg = RutaImagen
        req.body.urlDoc = RutaDocs
        const investigacion = await InvestigacionService.createInvestigacion(req.body);
        res.status(201).json(investigacion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// CONTROLADOR PARA MOSTRAR INVESTIGACIÓN POR ID
exports.GetInvestigacionId = async (req, res) => {
    try {
        const investigacion = await InvestigacionService.getInvestigacionId(req.params.id);
        res.status(200).json(investigacion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// CONTROLADOR PARA MOSTRAR TODAS LAS INVESTIGACIONES
exports.GetInvestigacionAll = async (req, res) => {
    try {
        const investigaciones = await InvestigacionService.getAllInvestigacion();
        res.status(200).json(investigaciones);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// CONTROLADOR PARA ACTUALIZAR INVESTIGACIÓN POR ID
exports.PutInvestigacionId = async (req, res) => {
    try {
        const investigacion = await InvestigacionService.PutInvestigacionId(req.params.id, req.body);
        res.status(200).json(investigacion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

// CONTROLADOR PARA ELIMINAR INVESTIGACIÓN POR ID
exports.DeleteInvestigacionId = async (req, res) => {
    try {
        await InvestigacionService.DeleteInvestigacionId(req.params.id);
        res.status(200).json({ message: "Investigación eliminada exitosamente" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
