// controllers/SimulacionesControllers.js
const SimulacionesService = require('../services/SimulacionesServices');
const { MateriaBuscar, categoriaBuscar } = require("../controllers/MateriaCategoriaController")
const { GuardarImagen, GuardarAPK, GuardarDocumento,ActualizarApk,ActualizarDocumento,ActualizarImagen } = require("../middlewares/MulterConfig");
const SimulacionesModel = require('../models/Simulaciones');



// CREAR
exports.createSimulaciones = async (req, res) => {
  try {
    req.body.materia = await MateriaBuscar(req)
    req.body.categoriaId = await categoriaBuscar(req)
    const RutaImagen = await GuardarImagen(req, res)
    const RutaApk = await GuardarAPK(req, res)
    const RutaDocs = await GuardarDocumento(req, res)
    req.body.urlimg = RutaImagen
    req.body.urlArchivoapk = RutaApk
    req.body.urlDoc = RutaDocs

    const simulacion = await SimulacionesService.createSimulaciones(req.body);
    res.status(201).json(simulacion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// OBTENER TODOS
exports.GetSimulacionesAll = async (req, res) => {
  try {
    const simulaciones = await SimulacionesService.getAllSimulaciones();
    res.status(200).json(simulaciones);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// OBTENER POR ID
exports.getSimulacionesId = async (req, res) => {
  try {
    const simulacion = await SimulacionesService.getSimulacionesId(req.params.id);
    res.status(200).json(simulacion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// ACTUALIZAR
exports.PutSimulacionesId = async (req, res) => {
  try {
    const Ruta = await SimulacionesModel.findById(req.params.id)
    req.body.materia = await MateriaBuscar(req)
    req.body.urlimg = await ActualizarImagen(req, res, Ruta.urlimg)
    req.body.urlDoc = await ActualizarDocumento(req, res, Ruta.urlDoc)
    req.body.urlArchivoapk = await ActualizarApk(req, res, Ruta.urlArchivoapk)
    req.body.categoriaId = await categoriaBuscar(req)
    const simulacion = await SimulacionesService.PutSimulacionesId(req.params.id, req.body);
    res.status(200).json(simulacion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// ELIMINAR
exports.DeleteSimulacionesId = async (req, res) => {
  try {
    await SimulacionesService.DeleteSimulacionesId(req.params.id);
    res.status(200).json({ message: "Simulación eliminada exitosamente" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
