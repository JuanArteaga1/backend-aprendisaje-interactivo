const ProyectosModel = require('../models/Proyectos');
const Usuarios = require('../models/Usuarios');



exports.createProyectos = async (Proyectos) => {
    try {
    const newproyectos = new ProyectosModel(Proyectos)
    await newproyectos.save()
    return newproyectos
    } catch (error) {
        console.log(error)
        
    }
}
exports.getAllProyectos = async () => {
    const Proyectos = await ProyectosModel.find();
    return Proyectos;
};
exports.getProyectosId = async (id) => {
    const Proyectos = await ProyectosModel.find({Usuario:id});
    return Proyectos;
};
exports.PutProyectosId = async (id, Proyectos) => {
    const ProyectosUpdate = await ProyectosModel.findByIdAndUpdate(id, Proyectos);
    return ProyectosUpdate;
};
exports.DeleteProyectosId = async (id, Proyectos) => {
    const ProyectosDelete = await ProyectosModel.findByIdAndDelete(id, Proyectos);
    return ProyectosDelete;
};