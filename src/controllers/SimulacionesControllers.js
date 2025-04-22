// controllers/SimulacionesControllers.js
const SimulacionesService = require('../services/SimulacionesServices');

// CREAR
exports.createSimulaciones = async (req, res) => {
  try {
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
