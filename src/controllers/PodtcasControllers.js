
const PodtcasServices = require('../services/PodtcasServices');

/*
definimos los metodos expuestos en el controlador de estudiantes
*/

//obtenemos todos los estudiantes
exports.getAllPodtcas = async (req, res) => {
    try {
        const Podtcas = await PodtcasServices.getAllPodtcas();
        res.status(200).json(Podtcas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//obtenemos un estudiante por su id
exports.getAllPodtcasId = async (req, res) => {  // ✅ Ahora coincide con la importación
    try {
        const Podtcas = await PodtcasServices.getAllPodtcasId(req.params.id);
        res.status(200).json(Podtcas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


//creamos un nuevo estudiante
exports.createPodtcas = async (req, res) => {
    try {
        const Podtcas = await PodtcasServices.createPodtcas(req.body);
        res.status(201).json(Podtcas);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

//actualizamos un estudiante
exports.updatedPodtcasId = async (req, res) => {
    try {
        const Podtcas = await PodtcasServices.updatedPodtcasId(req.params.id, req.body);
        res.status(200).json(Podtcas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//eliminamos un estudiante
exports.deletePodtcas = async (req, res) => {
    try {
        await PodtcasServices.deletePodtcas(req.params.id);
        res.status(200).json({ message: "podcast deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};