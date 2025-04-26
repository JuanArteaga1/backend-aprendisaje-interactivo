const ProyectosModel = require('../models/Proyectos');



exports.createProyectos = async (Proyectos) => {
    console.log(Proyectos)
    const newproyectos = new ProyectosModel(Proyectos)
    await newproyectos.save()
    return newproyectos
}
exports.getAllProyectos = async () => {
    const Proyectos = await ProyectosModel.find();
    return Proyectos;
};
exports.getProyectosId = async (id) => {
    const Proyectos = await ProyectosModel.findById(id);
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