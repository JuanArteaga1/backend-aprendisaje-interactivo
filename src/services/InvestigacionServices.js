const InvestigacionModel = require('../models/Investigacion');



exports.createInvestigacion = async (Investigacion) => {
    try {
        console.log(Investigacion)
        const newinvestigacion = new InvestigacionModel(Investigacion)
        await newinvestigacion.save()
        return newinvestigacion
    } catch (error) {
        console.log(error)
    }
}
exports.getAllInvestigacion = async () => {
    const Investigacion = await InvestigacionModel.find();
    return Investigacion;
};
exports.getInvestigacionId = async (id) => {
    const Investigacion = await InvestigacionModel.findById(id);
    return Investigacion;
};
exports.PutInvestigacionId = async (id, Investigacion) => {
    const InvestigacionUpdate = await InvestigacionModel.findByIdAndUpdate(id, Investigacion, { new: true });

    return InvestigacionUpdate;
};
exports.DeleteInvestigacionId = async (id, Investigacion) => {
    const InvestigacionDelete = await InvestigacionModel.findByIdAndDelete(id, Investigacion);
    return InvestigacionDelete;
};