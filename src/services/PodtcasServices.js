const PodtcasModel = require('../models/Podtcas');

/*
definimos los metodos que vamos a utilizar desde el controlador
para manejar los estudiantes
*/

//obtenemos todos los estudiantes
exports.getAllPodtcas = async () => {
    const Podtcas = await PodtcasModel.find();
    return Podtcas;
};

//obtenemos un estudiante por su id
exports.getAllPodtcasId = async (id) => {
    const Podtcas = await PodtcasModel.findById(id);
    return Podtcas;
};

//creamos un nuevo estudiante
exports.createPodtcas = async (Podtcas) => {
    try {
    const newPodtcas = new PodtcasModel(Podtcas);
    await newPodtcas.save();
    return newPodtcas;
        
    } catch (error) {
        console.log(error)
        
    }
};

//actualizamos un estudiante
exports.updatedPodtcasId = async (id, Podtcas) => {
    const updatedPodtcas = await PodtcasModel.findByIdAndUpdate(id, Podtcas);
    return updatedPodtcas;
};

//eliminamos un estudiante
exports.deletePodtcas = async (id) => {
    await PodtcasModel.findByIdAndDelete(id);
    return true
};