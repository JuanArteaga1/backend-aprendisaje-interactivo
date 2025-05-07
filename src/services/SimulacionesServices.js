const SimulacionesModel = require('../models/Simulaciones');



exports.createSimulaciones = async (Simulaciones) => {
    try {
        const newsimulaciones = new SimulacionesModel(Simulaciones)
        await newsimulaciones.save()
        return newsimulaciones
    } catch (error) {
        console.log(error)
    }
}
exports.getAllSimulaciones = async () => {
    const Simulaciones = await SimulacionesModel.find();
    return Simulaciones;
};
exports.getSimulacionesId = async (id) => {
    const Simulaciones = await SimulacionesModel.find({Usuario:id});
    return Simulaciones;
};
exports.PutSimulacionesId = async (id, Simulaciones) => {
    const SimulacionesUpdate = await SimulacionesModel.findByIdAndUpdate(id, Simulaciones);
    return SimulacionesUpdate;
};
exports.DeleteSimulacionesId = async (id, Simulaciones) => {
    const SimulacionesDelete = await SimulacionesModel.findByIdAndDelete(id, Simulaciones);
    return SimulacionesDelete;
};